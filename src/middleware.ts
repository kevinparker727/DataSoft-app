import { withAuth } from "next-auth/middleware";

export default withAuth({
  pages: {
    signIn: "/auth/signin/SignIn.tsx",
    signOut: "/auth/signout/SignOut.tsx",
    error: "/auth/error", // Error code passed in query string as ?error=
    verifyRequest: "/auth/verify-request/VerifyRequest.tsx", // (used for check email message)
  },
});
