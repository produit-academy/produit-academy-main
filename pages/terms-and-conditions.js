import React from 'react';
import Head from 'next/head';
import Navbar from '../components/Navbar';
import FooterNew from '../components/FooterNew';

export default function TermsAndConditions() {
  return (
    <div className="secondary-page-wrapper">
      <Head>
        <title>Terms & Conditions | Produit Academy</title>
        <meta
          name="description"
          content="Terms and Conditions of Produit Academy - Guidelines, student agreements, and service policies for our learning platforms."
        />
        <link rel="canonical" href="https://produitacademy.com/terms-and-conditions" />
        <meta property="og:title" content="Terms & Conditions - Produit Academy" />
        <meta
          property="og:description"
          content="Terms and Conditions of Produit Academy - Guidelines, student agreements, and service policies for our learning platforms."
        />
      </Head>

      <Navbar />

      <main className="secondary-main">
        <div className="secondary-container">
          <div className="secondary-card">
            <div className="secondary-header">
              <span className="secondary-badge">✦ LEGAL & COMPLIANCE</span>
              <h1 className="secondary-title">Terms & Conditions</h1>
              <p className="secondary-meta">
                Last updated: October 2026 | Applicable across all Produit Academy platforms
              </p>
            </div>

            <hr className="secondary-divider" />

            <section className="legal-section">
              <h2 className="legal-section-title">1. Acceptance of Terms</h2>
              <p className="legal-text">
                By accessing, browsing, or enrolling in any service provided by Produit Academy (including Produit Classes, Produit GATE, and Produit Careers), you agree to comply with and be bound by these Terms and Conditions. If you do not agree with any part of these terms, you must refrain from accessing our platforms.
              </p>
            </section>

            <section className="legal-section">
              <h2 className="legal-section-title">2. Educational Platforms & Services</h2>
              <p className="legal-text">
                Produit Academy provides live 1:1 online tutoring, GATE coaching mock test suites, personalized academic mentoring, and career recruitment opportunities. We continuously enhance our learning systems and reserve the right to modify, suspend, or update curriculum materials or platform features with reasonable notice.
              </p>
            </section>

            <section className="legal-section">
              <h2 className="legal-section-title">3. User Accounts & Security</h2>
              <p className="legal-text">
                When creating an account on any Produit Academy portal (Student, Teacher, Staff, or Super Admin), you must provide accurate, current, and complete registration details. You are solely responsible for maintaining the confidentiality of your login credentials and for all activities conducted under your authenticated session.
              </p>
            </section>

            <section className="legal-section">
              <h2 className="legal-section-title">4. Code of Conduct & Academic Integrity</h2>
              <p className="legal-text">
                Students, educators, and staff are expected to maintain the highest standards of mutual respect, punctuality, and academic integrity during all live classroom sessions and discussions:
              </p>
              <ul className="legal-list">
                <li>No recording, re-broadcasting, or unauthorized redistribution of live 1:1 sessions without written consent.</li>
                <li>Respectful communication with mentors, coordinators, and fellow students at all times.</li>
                <li>Strict prohibition of harassment, discrimination, or abusive conduct on our portals.</li>
              </ul>
            </section>

            <section className="legal-section">
              <h2 className="legal-section-title">5. Intellectual Property Rights</h2>
              <p className="legal-text">
                All proprietary content - including course curricula, study notes, practice problem sets, test analytics, logos, trademarks, and user interfaces - is the exclusive intellectual property of Produit Academy. No materials may be copied, reproduced, or commercially distributed without explicit authorization.
              </p>
            </section>

            <section className="legal-section">
              <h2 className="legal-section-title">6. Payment Terms & Refund Policy</h2>
              <p className="legal-text">
                Tuition fees and subscription packages for courses and test series are billed according to published rates. Refund requests for live tuition packages are processed in accordance with our transparent refund policy, prorated based on unconsumed class sessions following formal withdrawal.
              </p>
            </section>

            <section className="legal-section">
              <h2 className="legal-section-title">7. Limitation of Liability</h2>
              <p className="legal-text">
                While Produit Academy employs rigorous pedagogical standards and vetted mentors, we cannot guarantee specific exam ranks or admissions outcomes. In no event shall Produit Academy be liable for indirect, incidental, or consequential damages resulting from technical interruptions or third-party service downtime.
              </p>
            </section>

            <section className="legal-section">
              <h2 className="legal-section-title">8. Governing Law & Jurisdiction</h2>
              <p className="legal-text">
                These Terms and Conditions shall be governed by and construed in accordance with the laws of India. Any disputes arising out of or in connection with these terms shall be subject to the exclusive jurisdiction of the competent courts in Kollam, Kerala.
              </p>
            </section>

            <section className="legal-section" style={{ marginBottom: 0 }}>
              <h2 className="legal-section-title">9. Contact & Inquiries</h2>
              <p className="legal-text">
                For questions regarding our terms, agreements, or platform guidelines, please reach out directly:
              </p>
              <ul className="legal-list">
                <li><strong>Email:</strong> produitacademy@gmail.com</li>
                <li><strong>Phone:</strong> +91 8139 805 996</li>
                <li><strong>Headquarters:</strong> Kollam, Kerala, India</li>
              </ul>
            </section>
          </div>
        </div>
      </main>

      <FooterNew />
    </div>
  );
}
