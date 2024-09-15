import Router from "next/router";
import Headd from "next/head";
import nProgress from "nprogress";
import { ChakraProvider } from "@chakra-ui/react";

import Layout from "../components/Layout";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Helvetica:400,700"
        />
      </Head>
      <ChakraProvider>
        <Layout>
          <Component {...pageProps} />;
        </Layout>
      </ChakraProvider>
    </>
  );
}

export default MyApp;
