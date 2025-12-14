# syntax=docker/dockerfile:1

# Build the static Next.js export
FROM node:20-alpine AS build
WORKDIR /app
ENV NEXT_TELEMETRY_DISABLED=1

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

# Serve the static assets with nginx
FROM nginx:1.27-alpine AS runner
WORKDIR /usr/share/nginx/html

RUN apk add --no-cache curl

COPY --from=build /app/out ./

EXPOSE 80
HEALTHCHECK --interval=30s --timeout=3s CMD curl -f http://localhost || exit 1
