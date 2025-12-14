#!/usr/bin/env bash
set -euo pipefail

# 배포 스크립트 (서브도메인 방식 권장)
# 사용법:
# export SERVER_IP=34.47.68.101
# export SSH_USER=metal
# export SSH_KEY=~/path/to/energy-orchestrator-platform.pem
# export REMOTE_DIR=/home/metal/med-tourism
# export DOMAIN=med.gngtour.com
# cd deploy
# bash deploy_to_server.sh

: ${SERVER_IP:?Need to set SERVER_IP}
: ${SSH_USER:?Need to set SSH_USER}
: ${SSH_KEY:?Need to set SSH_KEY}
: ${REMOTE_DIR:?Need to set REMOTE_DIR}
: ${DOMAIN:?Need to set DOMAIN}

RSYNC_OPTS=(--archive --compress --delete --exclude node_modules --exclude .git)
LOCAL_ROOT="$(git rev-parse --show-toplevel 2>/dev/null || pwd)"

echo "==> Using server: ${SSH_USER}@${SERVER_IP}"

# 1) Create remote dir
ssh -i "$SSH_KEY" "${SSH_USER}@${SERVER_IP}" "mkdir -p ${REMOTE_DIR} && chown -R ${SSH_USER}:${SSH_USER} ${REMOTE_DIR} || true"

# 2) Sync project (rsync)
echo "==> Syncing files to remote..."
rsync "${RSYNC_OPTS[@]}" -e "ssh -i ${SSH_KEY}" "$LOCAL_ROOT/" "${SSH_USER}@${SERVER_IP}:${REMOTE_DIR}/"

# 3) Remote: install Node (if missing), install deps, build, start with pm2
#    Assumes Ubuntu/Debian on remote. If different, edit commands accordingly.
ssh -i "$SSH_KEY" "${SSH_USER}@${SERVER_IP}" bash -s <<'REMOTE'
set -euo pipefail
REMOTE_DIR='${REMOTE_DIR}'
# Detect node
if ! command -v node >/dev/null 2>&1; then
  echo 'Node not found. Installing Node 20 (NodeSource)...'
  curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
  sudo apt-get update
  sudo apt-get install -y nodejs build-essential
fi

# Ensure pm2
if ! command -v pm2 >/dev/null 2>&1; then
  echo 'pm2 not found. Installing pm2 globally...'
  sudo npm install -g pm2
fi

# Move into project
cd "${REMOTE_DIR}"
# Ensure correct ownership (may require sudo depending on setup)
# Install deps and build
npm ci --unsafe-perm
npm run build

# Start app with pm2
# Assumes package.json has "start" script that runs `next start -p 3000` or similar
pm2 start npm --name med-tourism -- start
pm2 save
# Setup pm2 startup to resurrect on reboot
pm2 startup systemd -u ${SSH_USER} --hp /home/${SSH_USER} || true
REMOTE

echo "==> Deployment finished. Application should be running via pm2 on port 3000 (or configured port)."

echo "Notes:"
echo "- If you prefer systemd unit instead of pm2, see deploy/med.service and use 'sudo systemctl enable --now med.service' on the server (adjust paths)."
echo "- For path-based proxy (gngtour.com/med), configure the main domain server's Nginx to proxy /med to http://${SERVER_IP}:3000/ (see nginx_med_proxy.conf)."

exit 0
