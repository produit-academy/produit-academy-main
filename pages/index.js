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
          content="Produit Academy is a Kerala-based education ecosystem offering GATE exam preparation, live interactive classes, and career opportunities in education and media. Start your journey today."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Produit Academy - Unlock Your Potential" />
        <meta
          property="og:description"
          content="One academy, three platforms - GATE prep, live classes, and careers. Built for learners and educators."
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