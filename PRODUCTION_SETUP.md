# 🚀 PRODUCTION SETUP GUIDE - RAZORPAY LIVE MODE

## ⚠️ IMPORTANT: This is configured for LIVE MODE (Real Payments)

This project is set up to process **REAL payments** using Razorpay Live Mode.

---

## 📋 Pre-Deployment Checklist

### 1. Razorpay Account Setup
- [ ] Razorpay account is fully verified (KYC complete)
- [ ] Business details are accurate
- [ ] Bank account is verified for settlements
- [ ] Live Mode is activated in your Razorpay Dashboard

### 2. Get Your Live API Keys

1. Log in to [Razorpay Dashboard](https://dashboard.razorpay.com/)
2. **Switch to LIVE MODE** (toggle in top-left corner - should show "Live")
3. Go to **Settings → API Keys**
4. Click **Generate Live Keys**
5. Copy both:
   - **Key ID** (starts with `rzp_live_`)
   - **Key Secret** (keep this EXTREMELY secure!)

### 3. Configure Environment Variables

**For Local Development:**
```bash
# Edit .env.local file in project root
NEXT_PUBLIC_RAZORPAY_KEY_ID=rzp_live_xxxxxxxxxxxxxxxx
RAZORPAY_KEY_SECRET=xxxxxxxxxxxxxxxxxxxxxxxx
```

**For Production (Vercel/Netlify/etc.):**
Add the same environment variables in your hosting platform's environment variables section.

---

## 🔒 Security Configuration

### Required Steps:

1. **Add Authorized Domains** (CRITICAL!)
   - Go to Razorpay Dashboard → Settings → Website & App Settings
   - Add your production domain (e.g., `yourdomain.com`, `www.yourdomain.com`)
   - Add localhost for development: `http://localhost:3000`

2. **Enable HTTPS**
   - Razorpay requires HTTPS in production
   - Most hosting platforms (Vercel, Netlify) provide this automatically

3. **Webhook Setup** (Recommended)
   - Go to Settings → Webhooks
   - Add webhook URL: `https://yourdomain.com/api/razorpay/webhook`
   - Select events: `payment.captured`, `payment.failed`, `order.paid`
   - Save the webhook secret (for future implementation)

---

## 💰 Payment Testing in Production

### Test with Small Amount First:

1. Deploy your application
2. Navigate to a course page
3. Click "Enroll Now"
4. Complete payment with **real payment method**
5. Verify:
   - Payment appears in Razorpay Dashboard
   - User receives confirmation
   - Money is received in your account (after settlement period)

### Supported Payment Methods:
- ✅ Credit Cards (Visa, Mastercard, Amex, RuPay)
- ✅ Debit Cards
- ✅ UPI (Google Pay, PhonePe, Paytm, BHIM)
- ✅ Net Banking (all major banks)
- ✅ Wallets (Paytm, PhonePe, etc.)
- ✅ EMI options
- ✅ International cards (if enabled)

---

## 📊 Monitoring & Analytics

### Razorpay Dashboard Features:

1. **Transactions** - View all payments in real-time
2. **Settlements** - Track when money hits your bank
3. **Analytics** - Payment success rates, trends
4. **Customers** - Customer payment history
5. **Refunds** - Process refunds when needed

### Recommended Monitoring:

- Set up email alerts for failed payments
- Enable SMS notifications for successful payments
- Monitor daily transaction reports
- Track settlement schedules

---

## 💸 Pricing & Fees (Razorpay)

Standard Razorpay fees (check current rates):
- **Domestic Cards:** ~2% per transaction
- **UPI/Net Banking:** ~2% per transaction
- **International Cards:** ~3% per transaction
- **No setup fees** or annual maintenance charges

Settlement time:
- **T+3 days** (3 working days after transaction)
- Instant settlement available (additional charges may apply)

---

## 🛡️ Security Best Practices

### DO:
✅ Keep `RAZORPAY_KEY_SECRET` private and secure
✅ Use environment variables (never hardcode keys)
✅ Verify payments on server-side
✅ Use HTTPS in production
✅ Add only necessary domains to authorized list
✅ Monitor transactions regularly
✅ Set up two-factor authentication on Razorpay account

### DON'T:
❌ Never commit `.env.local` to git
❌ Never share your secret key publicly
❌ Never disable payment verification
❌ Never use test keys in production
❌ Never trust client-side payment status alone

---

## 🐛 Troubleshooting Production Issues

### "Payment Failed" or "Invalid Key"
**Solution:** Verify you're using Live mode keys (starts with `rzp_live_`)

### Payment Modal Not Opening
**Solution:** 
1. Check if domain is in authorized domains list
2. Verify API keys are correct
3. Check browser console for errors

### Payment Succeeds but Shows as Failed
**Solution:**
1. Check server logs for verification errors
2. Verify `RAZORPAY_KEY_SECRET` is correct
3. Ensure no network issues between server and Razorpay

### "Domain not authorized" Error
**Solution:** Add your domain in Razorpay Dashboard → Settings → Website & App Settings

---

## 📞 Support & Resources

- **Razorpay Support:** https://razorpay.com/support/
- **Integration Docs:** https://razorpay.com/docs/
- **API Reference:** https://razorpay.com/docs/api/
- **Payment Gateway Guide:** https://razorpay.com/payment-gateway/

For urgent issues:
- Email: support@razorpay.com
- Phone: Check Razorpay dashboard for support number

---

## 🎯 Post-Launch Checklist

After going live:
- [ ] Test payment with small amount
- [ ] Verify payment appears in Razorpay Dashboard
- [ ] Confirm settlement in bank account (T+3)
- [ ] Set up daily/weekly transaction reports
- [ ] Document refund process
- [ ] Train team on handling payment issues
- [ ] Set up customer support for payment queries

---

## 🔄 Regular Maintenance

Weekly:
- Review transaction success rates
- Check for failed payments patterns
- Monitor settlement reports

Monthly:
- Analyze payment method preferences
- Review fee reports
- Update payment documentation if needed

---

**Remember:** You're processing real money! Always test thoroughly and monitor closely. 💰
