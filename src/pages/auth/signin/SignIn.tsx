import Login from "@/components/Login";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { useSession } from "next-auth/react";
import NextLink from "next/link";
import React from "react";
import scss from "./SignIn.module.scss";
import { signOut } from "next-auth/react";

const menuRouteList = ["", "data", "profile", "settings"];
const menuListTranslations = ["Home", "Data", "Profile", "Settings"];

const SignIn = () => {
  const { data: session } = useSession();

  const handleListItemButtonClick = (text: string) => {
    text === "Sign Out"
      ? signOut()
      : console.log("Thanks for checking out my app!");
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "66vh",
      }}
    >
      <h2>
        {session ? (
          <div>
            <div>Thank you logging in.</div>
            <div>
              <List>
                {menuListTranslations.map((text, index) => (
                  <ListItem key={text} disablePadding sx={{ display: "block" }}>
                    <NextLink
                      className={scss.link}
                      href={`/dashboard/${menuRouteList[index]}`}
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
            </div>
          </div>
        ) : (
          "Please log in."
        )}
      </h2>
      <Login />
    </Box>
  );
};

export default SignIn;
