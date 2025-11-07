# Razorpay Payment Integration (LIVE MODE - Production)

This project uses Razorpay payment gateway in **Live Mode** for real course enrollment payments.

## Setup Instructions

### 1. Get Razorpay Live API Keys

1. Log in to [Razorpay Dashboard](https://dashboard.razorpay.com/)
2. **Switch to Live Mode** (toggle in the top-left corner)
3. Navigate to Settings → API Keys
4. Generate **Live Mode API Keys** (you'll get a Key ID and Key Secret)
5. Keep these keys secure - they process real payments!

### 2. Configure Environment Variables

1. Create a `.env.local` file in the root directory:
   ```bash
   cp .env.local.example .env.local
   ```

2. Add your Razorpay **LIVE** credentials to `.env.local`:
   ```env
   NEXT_PUBLIC_RAZORPAY_KEY_ID=rzp_live_xxxxxxxxxxxxxxxx
   RAZORPAY_KEY_SECRET=xxxxxxxxxxxxxxxxxxxxxxxx
   ```

   **Critical Security Notes:**
   - `NEXT_PUBLIC_RAZORPAY_KEY_ID` - Public key (starts with `rzp_live_`)
   - `RAZORPAY_KEY_SECRET` - Secret key (NEVER share or commit to git!)
   - These process **REAL payments** - keep them secure

### 3. Production Payment Flow

1. Start the development server:
   ```bash
   npm run dev
   ```

2. Navigate to any course detail page (e.g., `/courses/1`)

3. Click the "Enroll Now" button

4. Complete payment with **real payment methods**:
   - Credit/Debit Cards
   - UPI
   - Net Banking
   - Wallets (Paytm, PhonePe, etc.)

### 4. Payment Flow (Production)

1. User clicks "Enroll Now" button
2. Backend creates a Razorpay order via `/api/razorpay/create-order`
3. Razorpay checkout modal opens with live payment options
4. User completes payment using their preferred method
5. Payment is verified via `/api/razorpay/verify-payment`
6. Success/failure message is shown to the user
7. **Real money is processed!**

## API Routes

- **POST /api/razorpay/create-order** - Creates a new payment order
- **POST /api/razorpay/verify-payment** - Verifies payment signature

## Features

- ✅ Secure payment processing with Razorpay
- ✅ Payment verification using cryptographic signatures
- ✅ Loading states and error handling
- ✅ Toast notifications for payment status
- ✅ Test mode support for development

## Security Notes (CRITICAL FOR PRODUCTION)

- ❌ **NEVER** commit `.env.local` to version control
- ❌ **NEVER** share your `RAZORPAY_KEY_SECRET` publicly
- ✅ Always verify payments on the server-side
- ✅ Use HTTPS in production (required by Razorpay)
- ✅ Keep your secret key secure at all times
- ✅ Monitor transactions in Razorpay Dashboard
- ✅ Set up webhooks for payment confirmations
- ✅ Add your production domain to Razorpay's authorized domains

## Production Checklist

Before going live, ensure:

- [ ] Live Mode API Keys are configured in `.env.local`
- [ ] Production domain is added to Razorpay Dashboard
- [ ] HTTPS is enabled on your domain
- [ ] `.env.local` is in `.gitignore`
- [ ] Payment webhooks are configured (optional but recommended)
- [ ] Settlement account is verified in Razorpay
- [ ] KYC is completed on your Razorpay account
- [ ] Email notifications are set up
- [ ] Refund policies are documented

## Going Live

Since you're using **Live Mode** from the start:

1. ✅ Your Razorpay account should be fully verified (KYC complete)
2. ✅ Add your production domain to authorized domains in Razorpay Dashboard
3. ✅ Update `.env.local` with **Live API Keys** (starts with `rzp_live_`)
4. ✅ Deploy to production with HTTPS enabled
5. ✅ Test with a small real transaction first
6. ✅ Monitor your Razorpay Dashboard for transactions

## Webhook Setup (Recommended)

Set up webhooks for better payment tracking:

1. Go to Razorpay Dashboard → Settings → Webhooks
2. Add webhook URL: `https://yourdomain.com/api/razorpay/webhook`
3. Select events: `payment.captured`, `payment.failed`, `order.paid`
4. Save the webhook secret
5. Implement webhook handler in your API (optional)

## Troubleshooting

**Payment modal not opening?**
- Verify Live API keys are correct (starts with `rzp_live_`)
- Check browser console for errors
- Ensure Razorpay script is loaded

**Payment fails immediately?**
- Check if domain is authorized in Razorpay Dashboard
- Verify HTTPS is enabled
- Ensure API keys are Live mode keys

**"Invalid key_id" error?**
- Double-check `NEXT_PUBLIC_RAZORPAY_KEY_ID` is correct
- Ensure you're using Live mode key (not test mode)
- Restart dev server after changing .env.local

**Payment succeeds but verification fails?**
- Ensure `RAZORPAY_KEY_SECRET` is correct
- Check server logs for errors
- Verify webhook signature format

## Support

For Razorpay-specific issues, refer to:
- [Razorpay Documentation](https://razorpay.com/docs/)
- [Razorpay Support](https://razorpay.com/support/)
