import "../styles/tailwind.scss";
import "../styles/globals.css";
import "../styles/sport-table.scss";

import ReState from "@useState/ReState";
import Menu from "../app/project/Menu";
import Footer from "../app/project/Footer/Footer";
import { Router } from "next/router";
import { useState, useEffect } from "react";
import HomeSchema from "../app/project/HomeSchema";
import Script from "next/script";
import { UserProvider } from "../app/context/userContext";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { store } from "redux/store";
import { Provider } from "react-redux";

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      setLoadPage(false);
    }, 1000);

    return function cleanup() {
      clearTimeout(timer);
    };
  }, []);

  const [loadPage, setLoadPage] = useState(false);
  Router.events.on("routeChangeStart", (url) => {
    setLoadPage(true);
  });

  Router.events.on("routeChangeComplete", () => {
    setLoadPage(false);
  });

  Router.events.on("routeChangeError", () => {
    setLoadPage(true);
  });

  return (
    <Provider store={store}>
      <GoogleOAuthProvider clientId="755836479126-hoj6afu2om8iovnhcc4u4hp4pu0qlvom.apps.googleusercontent.com">
        <UserProvider>
          <ReState>
            <Script
              strategy="afterInteractive"
              src={`https://www.googletagmanager.com/gtag/js?id=G-S3Q9TQR3GJ`}
            />
            <Script
              id="gtag-init"
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{
                __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
              
                gtag('config', 'G-S3Q9TQR3GJ');
              `,
              }}
            />
            <HomeSchema />
            <div className="app">
              <Menu />
              <Component {...pageProps} />
            </div>
            <div id="__modal"></div>
            <Footer />
          </ReState>
        </UserProvider>
      </GoogleOAuthProvider>
    </Provider>
  );
}

export default MyApp;
