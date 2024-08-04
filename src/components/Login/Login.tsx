import Button from "@mui/material/Button";
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
          console.log("Login clicked");
          signIn();
        }}
      >
        Login
      </Button>
    </>
  );
};

export default Login;
