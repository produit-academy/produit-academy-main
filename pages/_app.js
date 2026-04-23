// pages/_app.js
import Head from 'next/head';
import { useRouter } from 'next/router';
import '../styles/globals.css';
import '../styles/admin.css';
import { AdminAuthProvider } from '../lib/auth';

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const isAdminRoute = router.pathname.startsWith('/admin');

  return (
    <>
      <Head>
        <title>Produit Academy - Learning, Mentorship & Skill Development Platform</title>
        <meta name="description" content="Produit Academy is a modern platform for mentorship, learning, and student development. Coming soon."></meta>
      </Head>
      {isAdminRoute ? (
        <AdminAuthProvider>
          <Component {...pageProps} />
        </AdminAuthProvider>
      ) : (
        <Component {...pageProps} />
      )}
    </>
  );
}

export default MyApp;