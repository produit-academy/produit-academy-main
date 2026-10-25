import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Classes', href: 'https://classes.produitacademy.com', external: true },
  { label: 'GATE', href: 'https://gate.produitacademy.com', external: true },
  { label: 'Careers', href: 'https://careers.produitacademy.com', external: true },
  { label: 'About Us', href: '#about', external: false },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const handleLogoClick = (e) => {
    e.preventDefault();
    setMobileOpen(false);
    if (router.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      router.push('/');
    }
  };

  const handleNavClick = (e, link) => {
    setMobileOpen(false);
    if (link.external) {
      // Direct navigation to original platform site
      return;
    }
    e.preventDefault();
    if (router.pathname === '/') {
      const target = document.querySelector(link.href);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      router.push(`/${link.href}`);
    }
  };

  return (
    <>
      <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
        <div className="navbar__inner">
          {/* Logo Button: Always redirects to homepage cleanly */}
          <Link href="/" className="navbar__brand" onClick={handleLogoClick}>
            <img src="/logo.png" alt="Produit Academy Logo" className="navbar__logo" />
            <span className="navbar__wordmark">Produit Academy</span>
          </Link>

          {/* Desktop Nav Links */}
          <div className="navbar__links">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.external ? '_blank' : undefined}
                rel={link.external ? 'noopener noreferrer' : undefined}
                className="navbar__link"
                onClick={(e) => handleNavClick(e, link)}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Header CTA Button: Direct to platform on home, or redirect from secondary pages */}
          <a
            href="https://classes.produitacademy.com"
            target="_blank"
            rel="noopener noreferrer"
            className="navbar__cta"
            onClick={() => setMobileOpen(false)}
          >
            Get Started
          </a>

          {/* Mobile Hamburger Toggle: Sleek decreased 36px circular button */}
          <button
            className="navbar__hamburger"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle navigation menu"
          >
            {mobileOpen ? <X size={17} /> : <Menu size={17} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <motion.div
              className="mobile-menu__panel"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.24, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="mobile-menu__header">
                <Link href="/" className="navbar__brand" onClick={handleLogoClick}>
                  <img src="/logo.png" alt="Produit Academy Logo" className="navbar__logo" />
                  <span className="navbar__wordmark">Produit Academy</span>
                </Link>
                <button
                  className="mobile-menu__close-btn"
                  onClick={() => setMobileOpen(false)}
                  aria-label="Close menu"
                >
                  <X size={17} />
                </button>
              </div>

              <div className="mobile-menu__body">
                <div className="mobile-menu__links">
                  {navLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target={link.external ? '_blank' : undefined}
                      rel={link.external ? 'noopener noreferrer' : undefined}
                      className="mobile-menu__link"
                      onClick={(e) => handleNavClick(e, link)}
                    >
                      <span className="mobile-menu__link-text">{link.label}</span>
                      <span className="mobile-menu__link-arrow">→</span>
                    </a>
                  ))}
                </div>

                <a
                  href="https://classes.produitacademy.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mobile-menu__cta"
                  onClick={() => setMobileOpen(false)}
                >
                  Get Started
                </a>
              </div>

              {/* Bottom Contact Drawer Info */}
              <div className="mobile-menu__footer">
                <a href="mailto:produitacademy@gmail.com" className="mobile-menu__contact-item">
                  produitacademy@gmail.com
                </a>
                <a href="tel:+918139805996" className="mobile-menu__contact-item mobile-menu__contact-item--phone">
                  +91 8139 805 996
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
