import "normalize.css";

import { AppProps } from "next/app";
import Head from "next/head";
import { useRouter } from "next/router";
import * as React from "react";

import { LayoutPage } from "../src/components/layout/layout-page";
import { config } from "../src/config";

const App = ({ Component, pageProps }: AppProps) => {
  const router = useRouter();

  return (
    <>
      <style jsx global>{`
        body {
          margin: 0;
        }
      `}</style>

      <Head>
        <title>{config.site.domain}</title>

        {/* Icons */}
        <link rel="icon" type="image/svg" href="/favicon.svg" />

        {/* Mobile viewport */}
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      </Head>

      <LayoutPage>
        <Component {...pageProps} />
      </LayoutPage>
    </>
  );
};

export default App;
