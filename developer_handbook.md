# 📘 AERU DEVELOPER HANDBOOK & HANDOFF PROTOCOL

This document contains the **Technical Deep Dive** (exactly how to build the backend connection) and the **Client Handoff Strategy** (how to get paid and deliver the project).

---

# PART 1: TECHNICAL DEEP DIVE (THE CODE)

## 1. The Data Schema (Sanity.io)
You don't need a database diagram. You need a Schema. Here is the exact Typescript definition for an AERU Product to drop into your Sanity Studio.

**File:** `sanity/schemaTypes/product.ts`
```typescript
export default {
  name: 'product',
  title: 'Flavor Drop',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Flavor Name',
      type: 'string', // e.g., "CITRUS VEIL"
      validation: Rule => Rule.required().uppercase()
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'name' }
    },
    {
      name: 'tagline',
      title: 'Tagline',
      type: 'string' // e.g., "INTENSE / CHAOS"
    },
    {
      name: 'price',
      title: 'Price (USD)',
      type: 'number'
    },
    {
      name: 'image',
      title: 'Can Image',
      type: 'image',
      options: { hotspot: true }
    },
    {
      name: 'backgroundColor',
      title: 'Theme Color (Hex)',
      type: 'string' // e.g., "#FF4D00"
    }
  ]
}
```

## 2. The Commerce Connection (Stripe)
We don't hold credit card info. We create a "Checkout Session" and redirect the user.

**File:** `src/app/api/checkout/route.ts`
```typescript
import Stripe from 'stripe';
import { NextResponse } from 'next/server';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export async function POST(req: Request) {
  const { cartItems } = await req.json();

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: cartItems.map((item) => ({
      price_data: {
        currency: 'usd',
        product_data: {
          name: item.name,
          images: [item.imageUrl],
        },
        unit_amount: item.price * 100, // Stripe uses cents
      },
      quantity: item.quantity,
    })),
    mode: 'payment',
    success_url: `${process.env.NEXT_PUBLIC_URL}/success`,
    cancel_url: `${process.env.NEXT_PUBLIC_URL}/cart`,
  });

  return NextResponse.json({ id: session.id });
}
```

## 3. Environment Variables (.env.local)
These are the keys you need to generate and give to the client (or keep for yourself).

```bash
# Sanity (Content)
NEXT_PUBLIC_SANITY_PROJECT_ID="xm39s..."
NEXT_PUBLIC_SANITY_DATASET="production"

# Stripe (Money)
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY="pk_test_..."
STRIPE_SECRET_KEY="sk_test_..."

# Site URL
NEXT_PUBLIC_URL="https://aeru.vercel.app"
```

---

# PART 2: THE HANDOFF PROTOCOL (THE DELIVERY)

When you are finished coding, do not just send a generic zip file. Deliver a **product**.

## 🚀 Step 0: The Deployment (Going Live)
Because we built the Studio **embedded** in the site, you only need to deploy **ONCE**.

1.  **Push to GitHub:**
    ```bash
    git add .
    git commit -m "feat: complete aeru build"
    git push origin main
    ```
2.  **Connect to Vercel:**
    *   Go to dashboard.vercel.com -> "Add New..." -> "Project".
    *   Import your `aeru` repository.
3.  **IMPORTANT: Add Environment Variables:**
    *   Before you hit "Deploy", copy these from your `.env.local` and paste them into Vercel:
        *   `NEXT_PUBLIC_SANITY_PROJECT_ID`
        *   `NEXT_PUBLIC_SANITY_DATASET`
        *   `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`
        *   `STRIPE_SECRET_KEY`

**Result:**
*   `https://your-site.vercel.app` -> **The Store**
*   `https://your-site.vercel.app/studio` -> **The Admin Dashboard**

---

## 📦 Step 1: Account Setup (The Keys)
1.  **Vercel:** Deploy the site to your Vercel account first (Staging). Then, transfer the project to the Client's Vercel Team for billing.
2.  **Sanity:** Add the client as an "Administrator" to the Sanity Project. This lets them edit content.
3.  **Stripe:** Ask the client to create a Stripe account and invite you as a "Developer". **NEVER** create the Stripe account for them (Liability reasons).

## 🎓 Step 2: The Training Session (30 Min Zoom)
Record a video or do a live call showing them:
1.  **"How to change a price":** Login to Sanity -> Click Product -> Edit Price -> Publish.
2.  **"How to launch a new flavor":** Show them how adding a new entry in Sanity *automatically* creates the page on the site.
3.  **"How to check orders":** Login to Stripe Dashboard.

## 📄 Step 3: The Documentation
Deliver a PDF or Notion doc containing:
*   A link to the CMS (Sanity Studio).
*   Hex Codes for their Brand Colors (from our viral post).
*   Login credentials for any shared services.

## 💰 Step 4: Maintenance (The Upsell)
Websites break. APIs change. Offer a **Retainer Plan**.

**"The Peace of Mind Package" ($500/mo)**
*   Uptime monitoring.
*   Monthly dependency updates (Next.js versions).
*   Small text/image swaps that they are too lazy to do themselves.
*   Priority support if Stripe disconnects.

---

# 🏁 FINAL CHECKLIST BEFORE LAUNCH
- [ ] **SEO Check:** Do all pages have `<title>` and `<meta description>`?
- [ ] **Mobile Check:** Does the checkout work on an iPhone in Safari?
- [ ] **404 Page:** Did we style the "Page Not Found" screen? (Brutalist style).
- [ ] **Analytics:** Is Vercel Analytics or Google Analytics turned on?
