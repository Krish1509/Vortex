import NextAuth from "next-auth"
import GitHub from "next-auth/providers/github"
import Google from "next-auth/providers/google"

// Initializing NextAuth with authentication providers
export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [
    GitHub, // Enables GitHub authentication
    Google  // Enables Google authentication
  ],
})

