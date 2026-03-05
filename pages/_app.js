// pages/_app.js
import Head from 'next/head';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Produit Academy | Magic in Progress ✨</title>
        <meta name="description" content="Produit Academy is building the future of education." />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;