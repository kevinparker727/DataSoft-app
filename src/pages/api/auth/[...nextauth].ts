import NextAuth, { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID as string,
      clientSecret: process.env.GOOGLE_SECRET as string,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
    }),
  ],
  pages: {
    signIn: "/auth/signin",
    signOut: "/auth/signout",
    error: "/auth/error",
    verifyRequest: "/auth/verify-request",
  },
  // debug: process.env.NODE_ENV === "development",
  // callbacks: {
  //   async signIn({ user, account, profile, email, credentials }) {
  //     console.log("Sign-in attempt:", {
  //       user,
  //       account,
  //       profile,
  //       email,
  //       credentials,
  //     });
  //     return true;
  //   },
  //   async session({ session, token, user }) {
  //     console.log("Session callback:", { session, token, user });
  //     return session;
  //   },
  //   async jwt({ token, user, account, profile }) {
  //     console.log("JWT callback:", { token, user, account, profile });
  //     return token;
  //   },
  // },
};

export default NextAuth(authOptions);
