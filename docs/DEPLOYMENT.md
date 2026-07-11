# AIToolsHaven Deployment Guide

This guide covers everything you need to deploy AIToolsHaven to production.

## 1. Prerequisites
- A Vercel Account
- A GitHub repository containing this codebase
- Access to your domain registrar (e.g., Namecheap, Cloudflare, Route53) to configure DNS.

## 2. Environment Variables
The application requires the following environment variable to be set **before** building, as it drives SEO, Canonical URLs, and Sitemaps:

```
NEXT_PUBLIC_BASE_URL=https://aitoolshaven.com
```

> **Warning**: Do NOT include a trailing slash in the URL.

Optional Analytics Variables:
- `NEXT_PUBLIC_GA_ID` (Google Analytics 4 Measurement ID)
- `NEXT_PUBLIC_CLARITY_ID` (Microsoft Clarity Project ID)

## 3. Vercel Deployment Workflow

1. Go to your [Vercel Dashboard](https://vercel.com/dashboard).
2. Click **Add New...** -> **Project**.
3. Import your GitHub repository.
4. Expand the **Environment Variables** section and add:
   - Name: `NEXT_PUBLIC_BASE_URL`
   - Value: `https://aitoolshaven.com` (Replace with your actual domain)
5. Click **Deploy**.

## 4. Domain Configuration

Once the initial deployment completes:
1. In the Vercel Dashboard, go to your project's **Settings** > **Domains**.
2. Enter your custom domain (e.g., `aitoolshaven.com`).
3. Vercel will provide DNS records (usually an A Record and a CNAME).
4. Update your DNS settings at your registrar.
5. Vercel will automatically provision an SSL certificate.

## 5. Pre-Launch Verification

Use the internal Launch Dashboard to verify the site is ready:
1. Navigate to `/admin/launch`
2. Check the **Content Completeness** metrics.
3. Check the **SEO Completeness** metrics.

Once all critical issues are resolved, the site is ready for the public.

## 6. Rollback Procedure

If a production deployment causes a critical error:
1. Open the Vercel Dashboard for the project.
2. Go to the **Deployments** tab.
3. Find the previous stable deployment.
4. Click the three dots menu on the right and select **Promote to Production**.
5. The site will revert instantly.
