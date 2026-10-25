import React from 'react';
import Head from 'next/head';
import Navbar from '../components/Navbar';
import FooterNew from '../components/FooterNew';

export default function PrivacyPolicy() {
  return (
    <div className="secondary-page-wrapper">
      <Head>
        <title>Privacy Policy | Produit Academy</title>
        <meta
          name="description"
          content="Privacy Policy of Produit Academy - Learn how we collect, protect, and use your personal data across our educational platforms."
        />
        <link rel="canonical" href="https://produitacademy.com/privacy-policy" />
        <meta property="og:title" content="Privacy Policy - Produit Academy" />
        <meta
          property="og:description"
          content="Privacy Policy of Produit Academy - Learn how we collect, protect, and use your personal data across our educational platforms."
        />
      </Head>

      <Navbar />

      <main className="secondary-main">
        <div className="secondary-container">
          <div className="secondary-card">
            <div className="secondary-header">
              <span className="secondary-badge">✦ LEGAL & COMPLIANCE</span>
              <h1 className="secondary-title">Privacy Policy</h1>
              <p className="secondary-meta">
                Last updated: October 2026 | Effective for all Produit Academy platforms
              </p>
            </div>

            <hr className="secondary-divider" />

            <section className="legal-section">
              <h2 className="legal-section-title">1. Introduction & Scope</h2>
              <p className="legal-text">
                Produit Academy (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;), headquartered in Kollam, Kerala, is firmly committed to protecting the privacy and personal data of our students, parents, tutors, and visitors. This Privacy Policy outlines our transparent practices regarding the collection, handling, and security of information across our platforms (Main Website, Classes Portal, GATE Portal, and Careers Portal).
              </p>
            </section>

            <section className="legal-section">
              <h2 className="legal-section-title">2. Information We Collect</h2>
              <p className="legal-text">
                We collect personal information necessary to deliver high-quality, customized educational services:
              </p>
              <ul className="legal-list">
                <li><strong>Identity & Contact Information:</strong> Name, parent/guardian contact, email address, mobile number, and grade level.</li>
                <li><strong>Academic Information:</strong> School curriculum (CBSE/ICSE/State), academic performance targets, and diagnostic test responses.</li>
                <li><strong>Billing & Transaction Details:</strong> Payment confirmation identifiers processed through secure, RBI-compliant payment gateways. We never store credit/debit card numbers directly.</li>
                <li><strong>Technical Usage Data:</strong> IP address, device telemetry, browser type, and interaction timestamps to optimize platform stability and speed.</li>
              </ul>
            </section>

            <section className="legal-section">
              <h2 className="legal-section-title">3. How We Use Your Information</h2>
              <p className="legal-text">
                We use collected information solely for legitimate academic and administrative purposes:
              </p>
              <ul className="legal-list">
                <li>Scheduling, coordinating, and conducting 1:1 live interactive tutoring sessions.</li>
                <li>Generating individualized student performance analytics and parent reports.</li>
                <li>Facilitating secure authentication and personalized dashboard access.</li>
                <li>Delivering timely notifications regarding upcoming classes, test schedules, and academic milestones.</li>
              </ul>
            </section>

            <section className="legal-section">
              <h2 className="legal-section-title">4. Data Security & Storage</h2>
              <p className="legal-text">
                We employ industry-standard encryption protocols (TLS/SSL in transit and AES encryption at rest) to protect your sensitive data against unauthorized access, alteration, or disclosure. Access to student profiles is strictly limited to authorized coordinators and assigned educators.
              </p>
            </section>

            <section className="legal-section">
              <h2 className="legal-section-title">5. Data Sharing & Third Parties</h2>
              <p className="legal-text">
                Produit Academy does <strong>not sell, rent, or trade</strong> your personal information to third-party advertisers. We disclose data only to trusted service providers who assist us under strict non-disclosure obligations (e.g., cloud hosting infrastructure, SMS verification providers, and payment processors).
              </p>
            </section>

            <section className="legal-section">
              <h2 className="legal-section-title">6. Student & Parental Rights</h2>
              <p className="legal-text">
                Parents and students have full control over their personal information. You have the right to inspect, correct, or request deletion of personal records from our databases at any time by contacting our compliance officer.
              </p>
            </section>

            <section className="legal-section" style={{ marginBottom: 0 }}>
              <h2 className="legal-section-title">7. Contact the Privacy Team</h2>
              <p className="legal-text">
                If you have questions, feedback, or data privacy requests, our coordinators are here to assist:
              </p>
              <ul className="legal-list">
                <li><strong>Email:</strong> produitacademy@gmail.com</li>
                <li><strong>Phone:</strong> +91 8139 805 996</li>
                <li><strong>Location:</strong> Kollam, Kerala, India</li>
              </ul>
            </section>
          </div>
        </div>
      </main>

      <FooterNew />
    </div>
  );
}
