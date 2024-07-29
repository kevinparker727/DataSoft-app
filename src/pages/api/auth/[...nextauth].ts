import NextAuth, { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import dotenv from "dotenv";

dotenv.config();

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
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async session({ session, token, user }) {
      console.log("Session callback:", { session, token, user });
      // Add user id to the session
      if (session.user) {
        session.user.name = user.id;
      }
      return session;
    },
    async jwt({ token, user, account, profile }) {
      console.log("JWT callback:", { token, user, account, profile });
      // Add user id to the token
      if (user) {
        token.uid = user.id;
      }
      return token;
    },
  },
  // Enable debug messages in the console if having problems
  debug: process.env.NODE_ENV === "development",
};

export default NextAuth(authOptions);
