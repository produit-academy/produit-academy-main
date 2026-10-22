// pages/_app.js
import Head from 'next/head';
import Script from 'next/script';
import { useRouter } from 'next/router';
import '../styles/globals.css';
import '../styles/homepage.css';
import '../styles/admin.css';
import { AdminAuthProvider } from '../lib/auth';
import CookieConsent from '../components/CookieConsent';

const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_ID;

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const isAdminRoute = router.pathname.startsWith('/admin');

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <link rel="icon" href="/favicon.ico" />
        <title>Produit Academy - 1:1 Live Tuition & Mentorship Platform | Kerala</title>
        <meta
          name="description"
          content="Produit Academy offers premium 1:1 online tuition, dedicated academic mentorship, GATE engineering prep, and educator career opportunities based in Kollam, Kerala."
        />
      </Head>

      {/* Google Analytics (loads only when NEXT_PUBLIC_GA_ID is provided) */}
      {GA_MEASUREMENT_ID && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
            strategy="afterInteractive"
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_MEASUREMENT_ID}', {
                page_path: window.location.pathname,
              });
            `}
          </Script>
        </>
      )}

      {isAdminRoute ? (
        <AdminAuthProvider>
          <Component {...pageProps} />
        </AdminAuthProvider>
      ) : (
        <Component {...pageProps} />
      )}

      {/* Global Cookie Consent Banner */}
      {!isAdminRoute && <CookieConsent />}
    </>
  );
}

export default MyApp;