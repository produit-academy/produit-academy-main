import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { CheckCircle2, ShieldCheck, ArrowRight, Lock, Mail, KeyRound } from 'lucide-react';
import Navbar from '../components/Navbar';
import FooterNew from '../components/FooterNew';

const API_BASE = process.env.NEXT_PUBLIC_API_URL;

export default function Agreement() {
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [agreed, setAgreed] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!agreed) {
      setError('You must read and agree to the terms before signing the agreement.');
      return;
    }
    setLoading(true);
    setError('');

    try {
      const res = await fetch(`${API_BASE}/api/verify-agreement/`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, otp }),
      });
      const data = await res.json();
      if (res.ok) {
        setSuccess(true);
      } else {
        setError(data.error || 'Verification failed. Please check your OTP and try again.');
      }
    } catch (err) {
      setError('A network error occurred. Please check your connection and try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="secondary-page-wrapper">
      <Head>
        <title>Staff Agreement Verification | Produit Academy</title>
        <meta name="description" content="Sign and digitally verify your staff agreement with Produit Academy." />
        <link rel="canonical" href="https://produitacademy.com/agreement" />
      </Head>

      <Navbar />

      <main className="secondary-main">
        <div className="secondary-container agreement-card-wrapper">
          <div className="agreement-card">
            {success ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                className="agreement-success-box"
              >
                <div className="agreement-success-icon">
                  <CheckCircle2 size={38} />
                </div>
                <h2 className="secondary-title" style={{ fontSize: '2rem' }}>
                  Contract <span style={{ color: 'var(--accent-green, #10d07d)' }}>Signed</span>
                </h2>
                <p className="legal-text" style={{ textAlign: 'center', marginBottom: '2rem' }}>
                  Your digital employment agreement has been verified and registered. Our HR onboarding team will review your account, and you will receive an onboarding confirmation email shortly.
                </p>
                <Link href="/" className="btn-agreement-submit" style={{ display: 'inline-block', textDecoration: 'none' }}>
                  Return to Homepage
                </Link>
              </motion.div>
            ) : (
              <>
                <span className="secondary-badge">✦ STAFF ONBOARDING</span>
                <h1 className="secondary-title" style={{ fontSize: '2rem' }}>
                  Staff <span style={{ color: 'var(--accent-green, #10d07d)' }}>Agreement</span>
                </h1>
                <p className="secondary-meta" style={{ marginBottom: '2rem' }}>
                  Enter the verification OTP sent to your registered email to digitally sign your contract.
                </p>

                {error && (
                  <div className="contact-error-banner" style={{ marginBottom: '1.5rem', textAlign: 'left' }}>
                    {error}
                  </div>
                )}

                <form onSubmit={handleSubmit} className="agreement-form">
                  <div className="agreement-input-group">
                    <label htmlFor="email" className="agreement-label">
                      Registered Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="teacher@produitacademy.com"
                      className="agreement-input"
                    />
                  </div>

                  <div className="agreement-input-group">
                    <label htmlFor="otp" className="agreement-label">
                      One-Time Password (OTP)
                    </label>
                    <input
                      type="text"
                      id="otp"
                      required
                      value={otp}
                      onChange={(e) => setOtp(e.target.value)}
                      placeholder="Enter 6-digit OTP"
                      className="agreement-input"
                      maxLength={8}
                    />
                  </div>

                  <label className="agreement-check-wrapper">
                    <input
                      type="checkbox"
                      checked={agreed}
                      onChange={(e) => setAgreed(e.target.checked)}
                      className="agreement-checkbox"
                    />
                    <span>
                      I acknowledge that I have reviewed the{' '}
                      <Link href="/terms-and-conditions" target="_blank" style={{ color: 'var(--accent-green, #10d07d)', fontWeight: 600 }}>
                        terms of employment
                      </Link>{' '}
                      and confidentiality policies of Produit Academy.
                    </span>
                  </label>

                  <button type="submit" disabled={loading} className="btn-agreement-submit">
                    {loading ? 'Verifying Credentials...' : 'Sign & Submit Agreement'}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </main>

      <FooterNew />
    </div>
  );
}
