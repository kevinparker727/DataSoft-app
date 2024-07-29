import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Layout from "@/components/Layout";
import darkTheme from "@/theme/darkTheme";
import lightTheme from "@/theme/lightTheme";
import type { AppProps } from "next/app";
import { Session } from "next-auth";
import { ErrorBoundary } from "react-error-boundary";

import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";

import { SessionProvider } from "next-auth/react";
import React from "react";

interface ErrorFallbackProps {
  error: Error;
}

const ErrorFallback: React.FC<ErrorFallbackProps> = ({ error }) => {
  console.error("Error:", error);
  return <div>An error occurred: {error.message}</div>;
};

const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

interface CustomAppProps extends AppProps {
  pageProps: {
    session?: Session;
    [key: string]: any;
  };
}

const App = ({
  Component,
  pageProps: { session, ...pageProps },
}: CustomAppProps) => {
  const [mode, setMode] = React.useState<"light" | "dark">("dark");
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  <ErrorBoundary FallbackComponent={ErrorFallback}>
    <Component {...pageProps} />
  </ErrorBoundary>;

  const darkThemeChosen = React.useMemo(
    () =>
      createTheme({
        ...darkTheme,
      }),
    [mode]
  );
  const lightThemeChosen = React.useMemo(
    () =>
      createTheme({
        ...lightTheme,
      }),
    [mode]
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider
        theme={mode === "dark" ? darkThemeChosen : lightThemeChosen}
      >
        <SessionProvider session={session}>
          <CssBaseline />
          <Header ColorModeContext={ColorModeContext} />
          <Layout>
            <Component {...pageProps} />
          </Layout>
          <Footer />
        </SessionProvider>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default App;
