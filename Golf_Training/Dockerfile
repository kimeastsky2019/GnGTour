# Build the Vite app
FROM node:20-slim AS builder
WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .
ENV NODE_ENV=production
RUN npm run build

# Serve the static build with Nginx
FROM nginx:1.27-alpine AS runner
WORKDIR /usr/share/nginx/html

# Replace the default server config with our SPA-friendly version
RUN rm /etc/nginx/conf.d/default.conf
COPY docker/nginx.conf /etc/nginx/conf.d/default.conf

# Place the golf app under /golf to match Vite's production base path
COPY --from=builder /app/dist /usr/share/nginx/html/golf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
