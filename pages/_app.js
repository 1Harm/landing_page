import Head from "next/head";

import "../styles/globals.css";
import "../styles/style.css";
import "../styles/additional-styles/utility-patterns.css";
import "../styles/additional-styles/range-slider.css";
import "../styles/additional-styles/toggle-switch.css";
import "../styles/additional-styles/theme.css";

const MyApp = ({ Component, pageProps }) => (
  <>
    <Head>
      <title>Company Name</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
      <link rel="preconnect" href="https://stijndv.com" />
      <link
        rel="stylesheet"
        href="https://stijndv.com/fonts/Eudoxus-Sans.css"
      />
    </Head>
    <Component {...pageProps} />
  </>
);

export default MyApp;
