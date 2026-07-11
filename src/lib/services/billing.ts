/**
 * Billing Service Interface Placeholder
 * Designed to easily drop in Stripe or LemonSqueezy.
 */

export const BillingService = {
  /**
   * Generates a checkout URL for a premium feature (e.g. Featured Listing).
   */
  async createCheckoutSession(userId: string, productId: string): Promise<string> {
    // TODO: Implement Stripe Checkout
    throw new Error("BillingService not yet implemented.");
  },

  /**
   * Checks if a user has an active premium subscription.
   */
  async hasActiveSubscription(userId: string): Promise<boolean> {
    return false;
  }
};
