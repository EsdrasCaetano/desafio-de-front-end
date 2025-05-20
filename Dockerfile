# Etapa 1: build da aplicação
FROM node:20 AS builder

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

# Etapa 2: imagem de produção
FROM node:20-alpine

WORKDIR /app

COPY --from=builder /app/package*.json ./
RUN npm install --omit=dev

COPY --from=builder /app/.next .next
COPY --from=builder /app/public public
# REMOVIDO: COPY --from=builder /app/next.config.js ./

ENV NODE_ENV=production
EXPOSE 3000

CMD ["npm", "start"]
