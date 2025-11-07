# TechForTechie - Course Platform with Razorpay Integration

A modern course platform built with Next.js 16, featuring Razorpay payment integration for course enrollments.

## 🚀 Features

- 📚 Course catalog with search functionality
- 💳 Secure payment integration with Razorpay
- 🎨 Beautiful UI with Tailwind CSS and shadcn/ui components
- 🌓 Dark mode support
- 📱 Fully responsive design
- ⚡ Built with Next.js 16 App Router

## Getting Started

### 1. Install Dependencies

```bash
npm install
```

### 2. Set Up Razorpay (Required for Payment)

**Important:** This project uses Razorpay in **LIVE MODE** for production payments.

1. Create a `.env.local` file from the example:
   ```bash
   cp .env.local.example .env.local
   ```

2. Add your Razorpay **LIVE** API keys to `.env.local`:
   ```env
   NEXT_PUBLIC_RAZORPAY_KEY_ID=rzp_live_your_key_id
   RAZORPAY_KEY_SECRET=your_live_key_secret
   ```

   Get your **Live Mode** API keys from [Razorpay Dashboard](https://dashboard.razorpay.com/) (Settings → API Keys)

3. See [RAZORPAY_SETUP.md](./RAZORPAY_SETUP.md) for detailed production setup instructions

⚠️ **Security Warning:** Keep your `RAZORPAY_KEY_SECRET` private. Never commit it to version control!

### 3. Run the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 💳 Live Payments (Production Ready)

This project uses Razorpay in **Live Mode** for real payment processing.

1. Navigate to any course page (e.g., `/courses/1`)
2. Click "Enroll Now"
3. Complete payment using:
   - Credit/Debit Cards
   - UPI (Google Pay, PhonePe, Paytm, etc.)
   - Net Banking
   - Digital Wallets

**Note:** Real money will be processed. Ensure your Razorpay account is properly configured.

## 🎯 Available Routes

- `/` - Home page with featured courses
- `/courses` - All courses with search
- `/courses/[id]` - Individual course details with enrollment
- `/quizzes` - Coming soon
- `/blogs` - Coming soon

## 📦 Tech Stack

- **Framework:** Next.js 16
- **Styling:** Tailwind CSS v4
- **UI Components:** shadcn/ui (40+ components)
- **Payment Gateway:** Razorpay
- **Icons:** Lucide React
- **TypeScript:** Full type safety

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
- [Razorpay Documentation](https://razorpay.com/docs/) - payment integration guide

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

**Important:** Don't forget to add your environment variables in Vercel:
- `NEXT_PUBLIC_RAZORPAY_KEY_ID`
- `RAZORPAY_KEY_SECRET`

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
