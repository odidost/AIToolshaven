/**
 * Authentication Service Interface Placeholder
 * Designed to easily drop in NextAuth, Supabase Auth, or Clerk.
 */

export interface User {
  id: string;
  email: string;
  name: string;
  role: "USER" | "ADMIN" | "EDITOR";
}

export const AuthService = {
  /**
   * Returns the current authenticated user session, if any.
   */
  async getCurrentUser(): Promise<User | null> {
    // TODO: Implement Supabase / NextAuth integration here
    return null;
  },

  /**
   * Signs the user out.
   */
  async signOut(): Promise<void> {
    // ...
  }
};
