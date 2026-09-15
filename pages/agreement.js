import React, { useState } from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import Footer from '../components/Footer';

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
            setError('You must agree to the terms before signing.');
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
            setError('A network error occurred. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
    };

    return (
        <div className="container" style={{ justifyContent: 'flex-start' }}>
            <Head>
                <title>Staff Agreement | Produit Academy</title>
                <meta name="description" content="Sign your employment agreement with Produit Academy." />
            </Head>

            <main style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                width: '100%',
                minHeight: '85vh',
                padding: '2rem 1rem',
                zIndex: 10,
            }}>
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    style={{ width: '100%', maxWidth: '460px' }}
                >
                    {/* Logo */}
                    <motion.div variants={itemVariants} style={{ textAlign: 'center', marginBottom: '2rem' }}>
                        <img
                            src="/logo.png"
                            alt="Produit Academy Logo"
                            width={54}
                            height={54}
                            style={{ borderRadius: '2px' }}
                        />
                    </motion.div>

                    {/* Card */}
                    <motion.div
                        variants={itemVariants}
                        style={{
                            background: '#ffffff',
                            border: '1px solid var(--card-border)',
                            borderRadius: '2px',
                            padding: '36px 32px',
                        }}
                    >
                        {success ? (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                style={{ textAlign: 'center' }}
                            >
                                <div style={{
                                    margin: '0 auto 24px',
                                    width: '64px', height: '64px',
                                    borderRadius: '2px',
                                    background: 'var(--accent-green-light)',
                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                }}>
                                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--accent-green)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                        <polyline points="20 6 9 17 4 12"/>
                                    </svg>
                                </div>
                                <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.8rem', fontWeight: 700, marginBottom: '12px' }}>
                                    Contract <span className="highlight">Signed</span>
                                </h2>
                                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.7 }}>
                                    Your agreement has been submitted successfully. Our HR team will review and approve your account. You'll receive an email confirmation once approved.
                                </p>
                            </motion.div>
                        ) : (
                            <>
                                <div style={{ textAlign: 'center', marginBottom: '28px' }}>
                                    <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.8rem', fontWeight: 700, marginBottom: '8px' }}>
                                        Staff <span className="highlight">Agreement</span>
                                    </h2>
                                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                                        Enter the OTP sent to your email to verify your identity and sign the contract.
                                    </p>
                                </div>

                                {error && (
                                    <motion.div
                                        initial={{ opacity: 0, y: -8 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        style={{
                                            padding: '12px 16px', borderRadius: '2px', marginBottom: '20px',
                                            background: '#fef2f2', color: '#b91c1c',
                                            border: '1px solid #fecaca', fontSize: '0.88rem',
                                            fontWeight: 500,
                                        }}
                                    >
                                        {error}
                                    </motion.div>
                                )}

                                <form onSubmit={handleSubmit}>
                                    <div style={{ marginBottom: '18px' }}>
                                        <label style={{ display: 'block', fontWeight: 600, marginBottom: '8px', fontSize: '0.88rem', color: 'var(--text-primary)' }}>
                                            Email Address
                                        </label>
                                        <input
                                            type="email" required value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            placeholder="your-email@example.com"
                                            style={{
                                                width: '100%', padding: '12px 14px', borderRadius: '2px',
                                                border: '1px solid var(--card-border)', fontSize: '0.95rem',
                                                outline: 'none', boxSizing: 'border-box',
                                                background: '#ffffff',
                                                fontFamily: 'var(--font-sans)',
                                                transition: 'border-color 0.2s',
                                            }}
                                            onFocus={(e) => { e.target.style.borderColor = 'var(--accent-green)'; }}
                                            onBlur={(e) => { e.target.style.borderColor = 'var(--card-border)'; }}
                                        />
                                    </div>

                                    <div style={{ marginBottom: '18px' }}>
                                        <label style={{ display: 'block', fontWeight: 600, marginBottom: '8px', fontSize: '0.88rem', color: 'var(--text-primary)' }}>
                                            Verification Code (OTP)
                                        </label>
                                        <input
                                            type="text" required maxLength="6" value={otp}
                                            onChange={(e) => setOtp(e.target.value.replace(/\D/g, ''))}
                                            placeholder="• • • • • •"
                                            style={{
                                                width: '100%', padding: '12px 14px', borderRadius: '2px',
                                                border: '1px solid var(--card-border)', fontSize: '1.3rem',
                                                outline: 'none', textAlign: 'center', letterSpacing: '10px',
                                                boxSizing: 'border-box', background: '#ffffff',
                                                fontFamily: 'var(--font-sans)', fontWeight: 600,
                                                transition: 'border-color 0.2s',
                                            }}
                                            onFocus={(e) => { e.target.style.borderColor = 'var(--accent-green)'; }}
                                            onBlur={(e) => { e.target.style.borderColor = 'var(--card-border)'; }}
                                        />
                                    </div>

                                    <div style={{
                                        display: 'flex', alignItems: 'flex-start', gap: '12px',
                                        marginBottom: '24px', padding: '14px', borderRadius: '2px',
                                        background: 'var(--background-light)', border: '1px solid var(--card-border)',
                                    }}>
                                        <input
                                            type="checkbox" checked={agreed}
                                            onChange={(e) => setAgreed(e.target.checked)}
                                            style={{ marginTop: '3px', accentColor: 'var(--accent-green)', width: '16px', height: '16px', cursor: 'pointer', flexShrink: 0 }}
                                        />
                                        <label style={{ fontSize: '0.84rem', color: 'var(--text-secondary)', lineHeight: 1.6, cursor: 'pointer' }}
                                            onClick={() => setAgreed(!agreed)}>
                                            I have read and agree to the <a href="https://classes.produitacademy.com/terms-and-conditions" target="_blank" rel="noreferrer" style={{ fontWeight: 600 }}>Terms of Service</a> and <a href="https://classes.produitacademy.com/privacy-policy" target="_blank" rel="noreferrer" style={{ fontWeight: 600 }}>Privacy Policy</a>. By signing, I enter into a legal agreement with Produit Academy.
                                        </label>
                                    </div>

                                    <button
                                        type="submit" disabled={loading}
                                        className="btn-primary"
                                        style={{
                                            width: '100%', padding: '13px', borderRadius: '2px',
                                            color: 'white', fontSize: '1rem',
                                            opacity: loading ? 0.7 : 1,
                                        }}
                                    >
                                        {loading ? 'Verifying...' : 'Sign Agreement'}
                                    </button>
                                </form>
                            </>
                        )}
                    </motion.div>
                </motion.div>
            </main>

            <Footer />
        </div>
    );
}
