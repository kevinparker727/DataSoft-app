import Button from "@mui/material/Button";
import { useSession } from "next-auth/react";
import { signOut } from "next-auth/react";
import { signIn } from "next-auth/react";

const Login = () => {
  const { data: session } = useSession();

  if (session) {
    return (
      <>
        <div>
          <Button variant="contained" color={"error"} onClick={() => signOut()}>
            Sign out
          </Button>
        </div>
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
