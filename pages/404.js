import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { Home, MessageSquare, ArrowLeft } from 'lucide-react';
import Navbar from '../components/Navbar';
import FooterNew from '../components/FooterNew';

export default function Custom404() {
  return (
    <div className="secondary-page-wrapper">
      <Head>
        <title>404 - Page Not Found | Produit Academy</title>
        <meta name="description" content="The page you are looking for does not exist on Produit Academy." />
      </Head>

      <Navbar />

      <main className="secondary-main" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div className="secondary-container">
          <div className="error-page-card">
            <div className="error-badge-404">404</div>
            <h1 className="error-title">Page Not Found.</h1>
            <p className="error-desc">
              The page you are looking for might have been moved, renamed, or is temporarily unavailable. Let&apos;s get you back on track.
            </p>
            <div className="error-actions">
              <Link href="/" className="btn-hero-primary" style={{ textDecoration: 'none' }}>
                <Home size={18} />
                <span>Return to Homepage</span>
              </Link>
              <Link href="/#contact" className="btn-hero-secondary" style={{ textDecoration: 'none' }}>
                <MessageSquare size={18} />
                <span>Contact Academic Team</span>
              </Link>
            </div>
          </div>
        </div>
      </main>

      <FooterNew />
    </div>
  );
}
