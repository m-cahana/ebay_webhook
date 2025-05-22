# Vercel eBay Webhook Endpoint

This project provides a simple serverless HTTPS endpoint on Vercel to handle eBay Marketplace Account Deletion notifications.

### Deploy Steps:
1. Push this repo to GitHub
2. Import to [Vercel](https://vercel.com)
3. Your endpoint will be:
   `https://<your-vercel-domain>/ebay/account-deletion`

Test it with:
```bash
curl -X POST https://<your-vercel-domain>/ebay/account-deletion \
  -H "Content-Type: application/json" \
  -d '{"event":"MARKETPLACE_ACCOUNT_DELETION","userId":"123"}'
```
