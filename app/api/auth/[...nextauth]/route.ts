// Import authentication handlers from the auth.ts file
import { handlers } from "@/auth"

// Import NextAuth for authentication
import NextAuth from "next-auth"

// Import authentication providers (GitHub and Google)
import GithubProvider from "next-auth/providers/github"                
import GoogleProvider from "next-auth/providers/google"

// Exporting the GET and POST handlers for authentication routes
export const { GET, POST } = handlers

// Configuring NextAuth with authentication providers
export default NextAuth({
  providers: [
    GithubProvider({
      clientId: process.env.AUTH_GITHUB_ID, // GitHub OAuth Client ID
      clientSecret: process.env.AUTH_GITHUB_SECRET, // GitHub OAuth Client Secret
    }),
    GoogleProvider({
      clientId: process.env.AUTH_GOOGLE_ID, // Google OAuth Client ID
      clientSecret: process.env.AUTH_GOOGLE_SECRET, // Google OAuth Client Secret
    }),
  ],
  // Additional configuration options can be added here (e.g., callbacks, session management)
})
