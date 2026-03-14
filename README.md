# Comment parler à Allah pendant les épreuves

Landing page de vente pour l'ebook de **Nana Fatouma Koutam**.

## Installation

```bash
npm install
cp .env.local.example .env.local
# Remplir les variables dans .env.local
```

## Placer le PDF

Copier le fichier PDF de l'ebook dans :
```
private/ebook.pdf
```

## Lancer en développement

```bash
npm run dev
```

Ouvrir [http://localhost:3000](http://localhost:3000)

## Variables d'environnement

| Variable | Description |
|----------|-------------|
| `NEXT_PUBLIC_BASE_URL` | URL du site (ex: `https://monsite.com`) |
| `RESEND_API_KEY` | Clé API Resend pour les emails |
| `EMAIL_FROM` | Email expéditeur (domaine vérifié Resend) |
| `CINETPAY_API_KEY` | Clé API CinetPay |
| `CINETPAY_SITE_ID` | Site ID CinetPay |
| `NEXT_PUBLIC_LEMONSQUEEZY_CHECKOUT_URL` | URL checkout Lemon Squeezy |
| `LEMONSQUEEZY_WEBHOOK_SECRET` | Secret webhook Lemon Squeezy |

## Webhook Lemon Squeezy

Dans votre tableau de bord Lemon Squeezy, configurer :
- **URL** : `https://votre-domaine.com/api/lemonsqueezy/webhook`
- **Événements** : `order_created`

## Flux de paiement

1. **CinetPay** : Client saisit email → redirigé vers CinetPay → après paiement, `/api/cinetpay/notify` → email automatique
2. **Lemon Squeezy** : Checkout Lemon Squeezy → webhook → email automatique
3. **Virement WhatsApp** : Client vire manuellement → envoie reçu WhatsApp → vous déclenchez l'email

## Déploiement (Vercel)

```bash
npx vercel
```
