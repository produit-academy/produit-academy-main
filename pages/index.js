import Head from 'next/head';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import PlatformsSection from '../components/PlatformsSection';
import AboutSection from '../components/AboutSection';
import WhyChooseSection from '../components/WhyChooseSection';
import CTABanner from '../components/CTABanner';
import ContactForm from '../components/ContactForm';
import FooterNew from '../components/FooterNew';

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Produit Academy - 1:1 Live Tuition, GATE Prep & Careers</title>
        <meta
          name="description"
          content="Personalized 1-to-1 learning for school students and GATE aspirants. Get expert guidance, learn at your own pace, and move closer to your goals."
        />
        <link rel="canonical" href="https://produitacademy.com" />
        <meta property="og:title" content="Produit Academy - Your Personal Path to Academic Excellence" />
        <meta
          property="og:description"
          content="Personalized 1-to-1 learning for school students and GATE aspirants. Get expert guidance, learn at your own pace, and move closer to your goals."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://produitacademy.com" />
        <meta property="og:image" content="https://produitacademy.com/logo.png" />
        <meta property="og:site_name" content="Produit Academy" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Produit Academy - Your Personal Path to Academic Excellence" />
        <meta
          name="twitter:description"
          content="Personalized 1-to-1 learning for school students and GATE aspirants."
        />
        <meta name="twitter:image" content="https://produitacademy.com/logo.png" />
      </Head>

      <Navbar />
      <main>
        <Hero />
        <PlatformsSection />
        <AboutSection />
        <WhyChooseSection />
        <CTABanner />
        <ContactForm />
      </main>
      <FooterNew />
    </>
  );
}