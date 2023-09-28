import "normalize.css";

import { AppProps } from "next/app";
import Head from "next/head";
import { useRouter } from "next/router";
import * as React from "react";

const App = ({ Component, pageProps }: AppProps) => {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Fierve</title>

        {/* Icons */}
        <link rel="icon" type="image/png" href="/favicon.png" />

        {/* Mobile viewport */}
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />

        {/* Contact */}
        <meta name="author" content="petr.hurtak@gmail.com" />
      </Head>

      <Component {...pageProps} />
    </>
  );
};

export default App;
