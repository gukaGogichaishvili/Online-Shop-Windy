import stripe from "stripe";

export async function createIntent() {
  return await stripe(
    "sk_test_51OVKpFA1Eg00czE29OLYeKTEf5IjLfvJFR0u6C0QFvXIRBnkLflJO0Bud9UX2mUCNELvGZF1H8v5dSi7kuxQpilV00eyEsVCwR",
  ).paymentIntents.create({
    amount: 2000,
    currency: "usd",
    automatic_payment_methods: {
      enabled: true,
    },
  });
}
