import Button from "@mui/material/Button";
import { useSession, signIn, signOut } from "next-auth/react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import NextLink from "next/link";
import scss from "./Login.module.scss";

const menuRouteList = ["", "data", "profile", "settings"];
const menuListTranslations = ["Home", "Data", "Profile", "Settings"];

const Login = () => {
  const { data: session } = useSession();

  const handleListItemButtonClick = (text: string) => {
    text === "Sign Out" ? signOut() : null;
  };
  if (session) {
    return (
      <>
        <div>
          <List>
            {menuListTranslations.map((text, index) => (
              <ListItem key={text} disablePadding sx={{ display: "block" }}>
                <NextLink
                  className={scss.link}
                  href={`/dashboard/${menuRouteList[index]}`}
                  passHref
                >
                  <ListItemButton
                    onClick={() => handleListItemButtonClick(text)}
                    title={text}
                    aria-label={text}
                    sx={{
                      minHeight: 48,
                      px: 2.5,
                    }}
                  >
                    <ListItemText primary={text} />
                  </ListItemButton>
                </NextLink>
              </ListItem>
            ))}
          </List>
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
