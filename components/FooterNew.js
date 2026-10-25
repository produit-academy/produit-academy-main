import React from 'react';
import Link from 'next/link';
import { Instagram, Facebook, Linkedin } from 'lucide-react';

export default function FooterNew() {
  return (
    <footer className="footer-dark">
      <div className="section-container">
        {/* Top Main Footer Grid */}
        <div className="footer-grid">
          {/* Brand Column */}
          <div className="footer-brand-col">
            <Link href="#home" className="footer-brand-logo">
              <img src="/logo.png" alt="Produit Academy" className="footer-logo-img" />
              <div className="footer-brand-text">
                <span className="footer-wordmark">Produit Academy</span>
                <span className="footer-motto">SEEK KNOWLEDGE ACTIVELY.</span>
              </div>
            </Link>

            {/* Social Circle Buttons */}
            <div className="footer-social-row">
              <a
                href="https://www.instagram.com/produit.academy/"
                target="_blank"
                rel="noreferrer"
                className="footer-social-circle"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://facebook.com/produitacademy"
                target="_blank"
                rel="noreferrer"
                className="footer-social-circle"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a
                href="https://linkedin.com/company/produit-academy"
                target="_blank"
                rel="noreferrer"
                className="footer-social-circle"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Links Columns */}
          <div className="footer-links-group">
            {/* Column 1: Our Programs */}
            <div className="footer-col">
              <h4 className="footer-col-title">OUR PROGRAMS</h4>
              <ul className="footer-col-list">
                <li>
                  <a href="https://classes.produitacademy.com" target="_blank" rel="noreferrer">
                    Classes 6-12
                  </a>
                </li>
                <li>
                  <a href="https://gate.produitacademy.com" target="_blank" rel="noreferrer">
                    GATE Preparation
                  </a>
                </li>
                <li>
                  <a href="https://careers.produitacademy.com" target="_blank" rel="noreferrer">
                    Career Opportunities
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 2: Company */}
            <div className="footer-col">
              <h4 className="footer-col-title">COMPANY</h4>
              <ul className="footer-col-list">
                <li>
                  <a href="#about">About Us</a>
                </li>
                <li>
                  <a href="#why-choose">Why Produit Academy</a>
                </li>
                <li>
                  <a href="https://careers.produitacademy.com" target="_blank" rel="noreferrer">
                    Join Our Team
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 3: Get In Touch */}
            <div className="footer-col">
              <h4 className="footer-col-title">GET IN TOUCH</h4>
              <ul className="footer-col-list">
                <li>
                  <a href="mailto:produitacademy@gmail.com">produitacademy@gmail.com</a>
                </li>
                <li>
                  <a href="tel:+918139805996">+91 8139 805 996</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar: Full-width container sticking to the bottom with NO GAP */}
      <div className="footer-bottom-bar">
        <div className="section-container footer-bottom-inner">
          <p className="footer-copyright">
            Copyright © 2026 Produit Academy. All rights reserved.
          </p>
          <div className="footer-legal-links">
            <Link href="/privacy-policy" className="footer-legal-link">
              Privacy Policy
            </Link>
            <Link href="/terms-and-conditions" className="footer-legal-link">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
