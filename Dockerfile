# ─────────────────────────────────────────
# Étape 1 — Dépendances
# ─────────────────────────────────────────
FROM node:20-alpine AS deps
WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

# ─────────────────────────────────────────
# Étape 2 — Build
# ─────────────────────────────────────────
FROM node:20-alpine AS builder
WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Variables d'env nécessaires au build
ARG NEXT_PUBLIC_LEMONSQUEEZY_CHECKOUT_URL
ENV NEXT_PUBLIC_LEMONSQUEEZY_CHECKOUT_URL=$NEXT_PUBLIC_LEMONSQUEEZY_CHECKOUT_URL

RUN npm run build

# ─────────────────────────────────────────
# Étape 3 — Image finale (légère)
# ─────────────────────────────────────────
FROM node:20-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV PORT=3000

# Utilisateur non-root pour la sécurité
RUN addgroup --system --gid 1001 nodejs && \
    adduser  --system --uid 1001 nextjs

# Copie uniquement le nécessaire (standalone)
COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

CMD ["node", "server.js"]
