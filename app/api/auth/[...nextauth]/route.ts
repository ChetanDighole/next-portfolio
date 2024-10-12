import { NextRequest, NextResponse } from "next/server";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const authHandler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        password: { label: "password", type: "password" },
      },
      authorize: async (credentials) => {
        try {
          const userPassword = process.env.NEXTAUTH_SECRET;

          if (credentials.password === userPassword) {
            return { id: 1, name: "admin", success: true } as any;
          } else {
            return null;
          }
        } catch (error) {
          if (error) {
            return null;
          }
        }
      },
    }),
  ],
  pages: {
    signIn: "/signin",
    signOut: "/",
  },
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token, user }) {
      // Store user info in the token if authenticated
      if (user) {
        token.id = user.id;
        token.user = user.name;
      }
      return token;
    },
    async session({ session, token }) {
      // Pass the token information to the session
      session.user.name = token.name;
      return session;
    },
  },
});

export { authHandler as POST, authHandler as GET };
