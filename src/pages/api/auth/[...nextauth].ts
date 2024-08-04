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

  //   callbacks: {
  //     async signIn({ user, account, profile }) {
  //       return true;
  //     },
  //     async redirect({ url, baseUrl }) {
  //       return baseUrl;
  //     },
  //     async session({ session, user }) {
  //       return session;
  //     },
  //     async jwt({ token, user, account, profile, isNewUser }) {
  //       return token;
  //     },
  //   },
  pages: {
    signIn: "/auth/signin",
    signOut: "/auth/signout",
    error: "/auth/error", // Error code passed in query string as ?error=
    verifyRequest: "/auth/verify-request", // (used for check email message)
  },
  debug: true,
};

export default NextAuth(authOptions);
