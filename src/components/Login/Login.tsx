import Button from "@mui/material/Button";
import { log } from "console";
import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";

const Login = () => {
  const { data: session } = useSession();

  if (session) {
    return (
      <>
        <Button variant="contained" color={"error"} onClick={() => signOut()}>
          Sign out
        </Button>
      </>
    );
  }
  return (
    <>
      <Button variant="contained" color={"success"} onClick={() => signIn()}>
        Sign in
      </Button>
    </>
  );
};

export default Login;
