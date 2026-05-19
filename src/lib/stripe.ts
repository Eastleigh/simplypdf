import Stripe from "stripe";

let _stripe: Stripe | null = null;

export function getStripe(): Stripe {
  if (!_stripe) {
    const key = process.env.STRIPE_SECRET_KEY;
    if (!key) {
      throw new Error(
        "STRIPE_SECRET_KEY is not set. Add it to your .env.local file. " +
          "Get your key at https://dashboard.stripe.com/apikeys"
      );
    }
    _stripe = new Stripe(key, { typescript: true });
  }
  return _stripe;
}

export const PLANS = {
  starter: {
    name: "Starter",
    price: 2900, // $29.00 in cents
    mode: "payment" as const,
    description: "One-time access — perfect for curious beginners",
  },
  pro: {
    name: "Pro",
    price: 4900, // $49.00 in cents
    mode: "subscription" as const,
    interval: "month" as const,
    description: "Unlimited daily trends + AI builder — for serious builders",
  },
  enterprise: {
    name: "Enterprise",
    price: 29900, // $299.00 in cents
    mode: "subscription" as const,
    interval: "month" as const,
    description: "Done-for-you AI business generation for agencies",
  },
} as const;

export type PlanKey = keyof typeof PLANS;
