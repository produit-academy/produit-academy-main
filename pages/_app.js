// pages/_app.js
import Head from 'next/head';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Produit Academy - Learning, Mentorship & Skill Development Platform</title>
        <meta name="description" content="Produit Academy is a modern platform for mentorship, learning, and student development. Coming soon."></meta>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;