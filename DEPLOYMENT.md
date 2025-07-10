# Vercel Deployment Guide

## 🚀 Deploy to Vercel

### Option 1: Deploy via GitHub (Recommended)

1. **Push your code to GitHub:**
   ```bash
   git add .
   git commit -m "Add contact form functionality"
   git push origin main
   ```

2. **Connect to Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Sign in with your GitHub account
   - Click "New Project"
   - Import your repository
   - Vercel will automatically detect it's a Next.js project

3. **Set Environment Variables in Vercel Dashboard:**
   - In your project dashboard, go to "Settings" → "Environment Variables"
   - Add the following variables:

   ```
   SMTP_HOST=smtp.gmail.com
   SMTP_PORT=587
   SMTP_USER=your-email@gmail.com
   SMTP_PASS=your-app-password
   CONTACT_EMAIL=jaeung.jang@gmail.com
   ```

### Option 2: Deploy via CLI

1. **Login to Vercel:**
   ```bash
   vercel login
   ```

2. **Deploy:**
   ```bash
   vercel
   ```

3. **Set environment variables:**
   ```bash
   vercel env add SMTP_HOST
   vercel env add SMTP_PORT
   vercel env add SMTP_USER
   vercel env add SMTP_PASS
   vercel env add CONTACT_EMAIL
   ```

## 📧 Email Setup (Gmail)

1. **Enable 2-Factor Authentication** on your Gmail account

2. **Generate App Password:**
   - Go to Google Account settings
   - Security → 2-Step Verification → App passwords
   - Generate a new app password
   - Use this password in `SMTP_PASS`

3. **Alternative Email Providers:**
   - **Outlook/Hotmail:** `smtp-mail.outlook.com`, port 587
   - **Yahoo:** `smtp.mail.yahoo.com`, port 587
   - **Custom SMTP:** Use your hosting provider's SMTP settings

## 🔧 Environment Variables

Create a `.env.local` file for local development:

```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
CONTACT_EMAIL=jaeung.jang@gmail.com
```

## ✅ Testing

1. **Local Testing:**
   ```bash
   npm run dev
   ```
   - Fill out the contact form
   - Check console logs if email isn't configured
   - Check your email if SMTP is configured

2. **Production Testing:**
   - After deployment, test the live contact form
   - Monitor Vercel function logs for any issues

## 🚨 Troubleshooting

- **"535 Authentication failed":** Check your app password
- **"ENOTFOUND smtp.gmail.com":** Check SMTP_HOST setting
- **Function timeout:** Contact form takes too long (increase maxDuration in vercel.json)
- **CORS errors:** Shouldn't happen with same-origin requests

## 📊 Monitoring

- View function logs in Vercel dashboard
- Monitor email delivery
- Check form submission analytics in Vercel

Your contact form will be live at: `https://your-project.vercel.app`
