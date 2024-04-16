import PropTypes from "prop-types";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "../src/Theme";
import { useEffect, useState } from "react";
import PageProvider from "Theme/PageProvider";
import { ToastContainer } from "react-toastify";

// My styles
import "react-toastify/dist/ReactToastify.css";
import "styles/global.css";

import { Router } from "next/router";
import { Backdrop, CircularProgress } from "@mui/material";
import Head from "next/head";
import { Provider } from "react-redux";
import store from "../src/Redux/store";
import Context from "Context";

export default function MyApp(props) {
  const { Component, pageProps } = props;
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const startLoading = () => setIsLoading(true);
    const endLoading = () => setIsLoading(false);

    Router.events.on("routeChangeStart", startLoading);
    Router.events.on("routeChangeComplete", endLoading);
    Router.events.on("routeChangeError", endLoading);

    return () => {
      Router.events.off("routeChangeStart", startLoading);
      Router.events.off("routeChangeComplete", endLoading);
      Router.events.off("routeChangeError", endLoading);
    };
  }, []);

  return (
    <PageProvider>
      <>
        <Head>
          <meta name="viewport" content="initial-scale=1, width=device-width" />

          <title>پروژه ی تست</title>
        </Head>

        {/* <RTL> */}
        <ThemeProvider theme={theme}>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
          <ToastContainer
            rtl
            style={{
              fontFamily: "payda",
              fontWeight: 500,
              direction: "rtl",
            }}
          />
          <Backdrop
            sx={{
              color: "#fff",
              zIndex: (theme) => theme.zIndex.drawer + 10000,
              backdropFilter: "blur(15px)",
            }}
            open={isLoading}
          >
            <CircularProgress color="primary" />
          </Backdrop>
          <Context>
            <Provider store={store}>
              <Component {...pageProps} />
            </Provider>
          </Context>
        </ThemeProvider>
        {/* </RTL> */}
      </>
    </PageProvider>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  emotionCache: PropTypes.object,
  pageProps: PropTypes.object.isRequired,
};
