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
        <title>Produit Academy - One to one, Live Classes & Careers | Kollam, Kerala</title>
        <meta
          name="description"
          content="Produit Academy is a Kerala-based online tuition platform offering personal 1:1 live classes, academic support, GATE exam preparation, and career opportunities in education. Start your journey today."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Produit Academy - 1:1 Live Classes & Academic Support" />
        <meta
          property="og:description"
          content="Personal 1:1 live classes, dedicated mentors, GATE prep, and careers - all under one academy. Seek knowledge actively."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://produitacademy.com" />
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