import Button from "@mui/material/Button";
import { log } from "console";
import { useSession, signIn, signOut } from "next-auth/react";

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
      <Button
        variant="contained"
        color={"success"}
        onClick={() => {
          console.log("sign in function called");
          setTimeout(signIn, 3000);
        }}
      >
        Sign in
      </Button>
    </>
  );
};

export default Login;
