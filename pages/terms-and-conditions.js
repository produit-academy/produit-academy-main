import React from 'react';
import Head from 'next/head';
import Navbar from '../components/Navbar';
import FooterNew from '../components/FooterNew';

export default function TermsAndConditions() {
  return (
    <>
      <Head>
        <title>Terms & Conditions - Produit Academy</title>
        <meta
          name="description"
          content="Terms and Conditions of Produit Academy - Guidelines, student agreements, and service policies for our learning platforms."
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
              Terms & Conditions
            </h1>
            <p style={{ color: '#64748b', fontSize: '0.95rem', marginBottom: '32px' }}>
              Last updated: October 2026 | Effective for all Produit Academy services
            </p>

            <hr style={{ border: 'none', borderTop: '1px solid #f1f5f9', marginBottom: '32px' }} />

            <section style={{ marginBottom: '28px' }}>
              <h2 style={{ fontSize: '1.3rem', fontWeight: 600, color: '#1e293b', marginBottom: '10px' }}>
                1. Acceptance of Terms
              </h2>
              <p style={{ color: '#475569', lineHeight: 1.7, marginBottom: '14px' }}>
                By accessing, browsing, or enrolling in any service provided by Produit Academy (including Produit Classes, Produit GATE, and Produit Careers), you agree to comply with and be bound by these Terms and Conditions. If you do not agree to these terms, you must refrain from using our platforms.
              </p>
            </section>

            <section style={{ marginBottom: '28px' }}>
              <h2 style={{ fontSize: '1.3rem', fontWeight: 600, color: '#1e293b', marginBottom: '10px' }}>
                2. Educational Services & 1:1 Live Classes
              </h2>
              <ul style={{ paddingLeft: '24px', color: '#475569', lineHeight: 1.7, marginBottom: '14px' }}>
                <li>Live sessions are scheduled collaboratively between students, parents, and designated tutors.</li>
                <li>Students must maintain mutual respect, professional decorum, and punctual attendance during all live calls.</li>
                <li>Session rescheduling must be requested at least 12 hours prior to the scheduled start time to allow faculty adjustment.</li>
              </ul>
            </section>

            <section style={{ marginBottom: '28px' }}>
              <h2 style={{ fontSize: '1.3rem', fontWeight: 600, color: '#1e293b', marginBottom: '10px' }}>
                3. Intellectual Property
              </h2>
              <p style={{ color: '#475569', lineHeight: 1.7, marginBottom: '14px' }}>
                All course curriculums, GATE mock test questions, proprietary notes, digital recordings, trademarks, and visual designs are the exclusive intellectual property of Produit Academy. You may not record, re-distribute, resell, or publicly display instructional materials without prior written consent.
              </p>
            </section>

            <section style={{ marginBottom: '28px' }}>
              <h2 style={{ fontSize: '1.3rem', fontWeight: 600, color: '#1e293b', marginBottom: '10px' }}>
                4. Fees, Payments & Refunds
              </h2>
              <p style={{ color: '#475569', lineHeight: 1.7, marginBottom: '14px' }}>
                Tuition fees and assessment subscriptions are clearly displayed before purchase. Payments are processed securely via encrypted payment gateways. Refund requests for live classes are governed strictly under our official Refund Policy published on our Classes portal.
              </p>
            </section>

            <section style={{ marginBottom: '28px' }}>
              <h2 style={{ fontSize: '1.3rem', fontWeight: 600, color: '#1e293b', marginBottom: '10px' }}>
                5. Limitation of Liability
              </h2>
              <p style={{ color: '#475569', lineHeight: 1.7, marginBottom: '14px' }}>
                Produit Academy provides tutoring, mentorship, and exam preparation with the highest academic standards. However, ultimate exam scores, rank qualifications, and university admissions remain dependent on individual student diligence and examination boards.
              </p>
            </section>

            <section>
              <h2 style={{ fontSize: '1.3rem', fontWeight: 600, color: '#1e293b', marginBottom: '10px' }}>
                6. Governing Law & Dispute Resolution
              </h2>
              <p style={{ color: '#475569', lineHeight: 1.7, marginBottom: '14px' }}>
                These Terms shall be governed by and construed in accordance with the laws of India. Any disputes arising in connection with these Terms shall be subject to the exclusive jurisdiction of the courts located in Kollam, Kerala.
              </p>
            </section>
          </div>
        </div>
      </main>

      <FooterNew />
    </>
  );
}
