import Head from 'next/head';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import AboutSection from '../components/AboutSection';
import PlatformsSection from '../components/PlatformsSection';
import FeatureGrid from '../components/FeatureGrid';
import StatsStrip from '../components/StatsStrip';
import CTABanner from '../components/CTABanner';
import ContactForm from '../components/ContactForm';
import FooterNew from '../components/FooterNew';

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Produit Academy - 1:1 Live Tuition, GATE Prep & Careers | Kollam, Kerala</title>
        <meta
          name="description"
          content="Produit Academy is a Kerala-based online tuition platform offering personal 1:1 live classes, academic support, GATE exam preparation, and career opportunities in education. Start your journey today."
        />
        <link rel="canonical" href="https://produitacademy.com" />
        <meta property="og:title" content="Produit Academy - 1:1 Live Classes & Academic Support" />
        <meta
          property="og:description"
          content="Personal 1:1 live classes, dedicated mentors, GATE prep, and careers - all under one academy. Based in Kollam, Kerala."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://produitacademy.com" />
        <meta property="og:image" content="https://produitacademy.com/logo.png" />
        <meta property="og:site_name" content="Produit Academy" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Produit Academy - 1:1 Live Tuition & Academic Excellence" />
        <meta
          name="twitter:description"
          content="Personal 1:1 live classes, dedicated mentors, GATE prep, and careers - all under one academy."
        />
        <meta name="twitter:image" content="https://produitacademy.com/logo.png" />
      </Head>

      <Navbar />
      <main>
        <Hero />
        <AboutSection />
        <PlatformsSection />
        <FeatureGrid />
        <StatsStrip />
        <CTABanner />
        <ContactForm />
      </main>
      <FooterNew />
    </>
  );
}