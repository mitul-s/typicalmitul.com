import "../styles/fonts.css";
import "../styles/globals.css";

import React, { useEffect } from "react";
import splitbee from "@splitbee/web";

const MyApp = ({ Component, pageProps }) => {
  useEffect(() => {
    splitbee.init();
  }, []);

  const getLayout = Component.getLayout || ((page) => page);
  return getLayout(<Component {...pageProps} />);
};

export default MyApp;
