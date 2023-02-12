import '../css/globals.css';
import Head from 'next/head';
import Layout from './../components/layout/Layout';


const MyApp = ({ Component, pageProps }) => {
  return (
      <>
        <Head>
          <meta
              name="viewport"
              content="width=device-width initial-scale=1, maximum-scale=1"
          />
          <link
              rel="icon"
              type="image/png"
              sizes="32x32"
              href="/favicon-32x32.png"
          />
          <link
              rel="icon"
              type="image/png"
              sizes="16x16"
              href="/favicon-16x16.png"
          />
          <link
              rel="apple-touch-icon"
              sizes="180x180"
              href="/apple-touch-icon.png"
          />
          <link rel="manifest" href="/site.webmanifest" />
          <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
          <meta name="msapplication-TileColor" content="#b91d47" />
          <meta name="theme-color" content="#ffffff" />

          <meta property="og:title" content="Budějčanda, holka z jihu." />
          <meta
              property="og:description"
              content="Poznejte jižní Čechy očima místní holky. Budějčanda vám ukáže Jihočeský kraj tak, jak ho znají jenom místňáci."
          />
          <meta property="og:type" content="website" />
          <meta
              property="og:image"
              content="https://budejcanda.cz/budejcanda.jpg"
          />
          <meta property="og:url" content="https://budejcanda.cz/" />
          <meta property="og:locale" content="cs_CZ" />
        </Head>

          <Layout>
            <Component {...pageProps} />
          </Layout>

      </>
  );
};

export default MyApp;