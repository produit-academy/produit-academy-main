import React from 'react';
import Head from 'next/head';
import Navbar from '../components/Navbar';
import FooterNew from '../components/FooterNew';

export default function PrivacyPolicy() {
  return (
    <>
      <Head>
        <title>Privacy Policy - Produit Academy</title>
        <meta
          name="description"
          content="Privacy Policy of Produit Academy - Learn how we collect, protect, and use your personal data across our educational platforms."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main style={{ minHeight: '80vh', backgroundColor: 'var(--background-light)', paddingTop: '100px', paddingBottom: '60px' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', padding: '0 20px' }}>
          <div
            style={{
              backgroundColor: '#ffffff',
              borderRadius: '16px',
              padding: '40px',
              border: '1px solid #e2e8f0',
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.04)',
            }}
          >
            <span
              style={{
                display: 'inline-block',
                fontSize: '0.82rem',
                fontWeight: 600,
                textTransform: 'uppercase',
                color: 'var(--accent-green)',
                letterSpacing: '1px',
                marginBottom: '8px',
              }}
            >
              Legal & Compliance
            </span>
            <h1 style={{ fontSize: '2.4rem', fontWeight: 700, color: '#0f172a', marginBottom: '16px', lineHeight: 1.2 }}>
              Privacy Policy
            </h1>
            <p style={{ color: '#64748b', fontSize: '0.95rem', marginBottom: '32px' }}>
              Last updated: October 2026 | Effective for all Produit Academy platforms
            </p>

            <hr style={{ border: 'none', borderTop: '1px solid #f1f5f9', marginBottom: '32px' }} />

            <section style={{ marginBottom: '28px' }}>
              <h2 style={{ fontSize: '1.3rem', fontWeight: 600, color: '#1e293b', marginBottom: '10px' }}>
                1. Introduction
              </h2>
              <p style={{ color: '#475569', lineHeight: 1.7, marginBottom: '14px' }}>
                Produit Academy (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;), based in Kollam, Kerala, is committed to safeguarding the privacy and personal data of our students, parents, tutors, and visitors. This Privacy Policy outlines how we collect, store, process, and protect your information when you visit or interact with our platforms (Main Website, Classes Portal, GATE Portal, and Careers Portal).
              </p>
            </section>

            <section style={{ marginBottom: '28px' }}>
              <h2 style={{ fontSize: '1.3rem', fontWeight: 600, color: '#1e293b', marginBottom: '10px' }}>
                2. Information We Collect
              </h2>
              <p style={{ color: '#475569', lineHeight: 1.7, marginBottom: '10px' }}>
                We collect personal information that you voluntarily provide to us when you:
              </p>
              <ul style={{ paddingLeft: '24px', color: '#475569', lineHeight: 1.7, marginBottom: '14px' }}>
                <li>Register for 1:1 online classes or competitive exam assessments.</li>
                <li>Submit an inquiry via our contact form or live support channels.</li>
                <li>Apply for career and faculty positions.</li>
                <li>Process course fee payments through our PCI-DSS compliant payment gateways (e.g., Razorpay).</li>
              </ul>
              <p style={{ color: '#475569', lineHeight: 1.7 }}>
                <strong>Technical Information:</strong> We may automatically log device IP addresses, browser types, session durations, and anonymized analytics to maintain platform stability and detect fraudulent activity.
              </p>
            </section>

            <section style={{ marginBottom: '28px' }}>
              <h2 style={{ fontSize: '1.3rem', fontWeight: 600, color: '#1e293b', marginBottom: '10px' }}>
                3. How We Use Your Data
              </h2>
              <ul style={{ paddingLeft: '24px', color: '#475569', lineHeight: 1.7, marginBottom: '14px' }}>
                <li>To coordinate 1:1 live tuition schedules and academic mentorship.</li>
                <li>To communicate session reminders, academic reports, and transaction receipts.</li>
                <li>To evaluate student learning curves, test performances, and syllabus coverage.</li>
                <li>To review employment applications and onboard educators.</li>
                <li>To comply with statutory tax and regulatory legal requirements in India.</li>
              </ul>
            </section>

            <section style={{ marginBottom: '28px' }}>
              <h2 style={{ fontSize: '1.3rem', fontWeight: 600, color: '#1e293b', marginBottom: '10px' }}>
                4. Data Security & Storage
              </h2>
              <p style={{ color: '#475569', lineHeight: 1.7, marginBottom: '14px' }}>
                We implement strict security measures, including HTTPS encryption in transit, encrypted storage for authentication tokens, and strict role-based access control (RBAC). We never sell or lease your personal information to third-party advertisers.
              </p>
            </section>

            <section style={{ marginBottom: '28px' }}>
              <h2 style={{ fontSize: '1.3rem', fontWeight: 600, color: '#1e293b', marginBottom: '10px' }}>
                5. Your Privacy Rights
              </h2>
              <p style={{ color: '#475569', lineHeight: 1.7, marginBottom: '14px' }}>
                You have the right to request access to the personal data we hold about you, request corrections to inaccurate records, or request account deactivation. To exercise these rights, please email us directly.
              </p>
            </section>

            <section>
              <h2 style={{ fontSize: '1.3rem', fontWeight: 600, color: '#1e293b', marginBottom: '10px' }}>
                6. Contact Our Privacy Team
              </h2>
              <p style={{ color: '#475569', lineHeight: 1.7, marginBottom: '8px' }}>
                If you have questions or concerns regarding our privacy practices:
              </p>
              <p style={{ color: '#475569', lineHeight: 1.7 }}>
                <strong>Produit Academy</strong><br />
                Kollam, Kerala, India<br />
                Email: <a href="mailto:produitacademy@gmail.com" style={{ color: 'var(--accent-green)', textDecoration: 'underline' }}>produitacademy@gmail.com</a><br />
                Phone: <a href="tel:+918139805996" style={{ color: 'var(--accent-green)', textDecoration: 'underline' }}>+91 8139 805 996</a>
              </p>
            </section>
          </div>
        </div>
      </main>

      <FooterNew />
    </>
  );
}
