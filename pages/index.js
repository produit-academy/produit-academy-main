import Head from 'next/head';
import { motion } from 'framer-motion';
import { Sparkles, Rocket, Sigma, Lightbulb, Pi, PartyPopper } from 'lucide-react';

export default function CleanComingSoon() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <div className="container">
      <Head>
        <title>Produit Academy | Coming Soon</title>
        <meta name="description" content="Discover your potential with Produit Academy." />
      </Head>

      {/* Smooth Background Blobs */}
      <div className="bg-blob blob-1" />
      <div className="bg-blob blob-2" />

      {/* Floating Canvas for Icons */}
      <div className="floating-canvas">
        <motion.div
          className="float-icon-wrapper float-1"
          animate={{ y: [0, -15, 0], rotate: [-10, -5, -10] }}
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
        >
          <Sparkles size={28} />
        </motion.div>
        <motion.div
          className="float-icon-wrapper float-2"
          animate={{ y: [0, 20, 0], rotate: [15, 25, 15] }}
          transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
        >
          <Rocket size={24} />
        </motion.div>
        <motion.div
          className="float-icon-wrapper float-3"
          animate={{ x: [0, -15, 0], rotate: [-5, 5, -5] }}
          transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
        >
          <Sigma size={28} />
        </motion.div>
        <motion.div
          className="float-icon-wrapper float-4"
          animate={{ y: [0, -25, 0], rotate: [10, 0, 10] }}
          transition={{ repeat: Infinity, duration: 5.5, ease: "easeInOut" }}
        >
          <Lightbulb size={26} />
        </motion.div>
        <motion.div
          className="float-icon-wrapper float-5"
          animate={{ x: [0, 20, 0], y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 7, ease: "easeInOut" }}
        >
          <Pi size={28} />
        </motion.div>
        <motion.div
          className="float-icon-wrapper float-6"
          animate={{ scale: [1, 1.1, 1], rotate: [25, 15, 25] }}
          transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut" }}
        >
          <PartyPopper size={26} />
        </motion.div>
      </div>

      <main className="main-content">
        <motion.div
          className="hero-wrapper"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} style={{ marginBottom: '2rem' }}>
            <img
              src="/logo.png"
              alt="Produit Academy Logo"
              width={90}
              style={{ borderRadius: '16px', boxShadow: '0 8px 24px rgba(0,0,0,0.06)' }}
            />
          </motion.div>

          <motion.h1 className="title" variants={itemVariants}>
            Coming <span className="highlight">Soon</span>
          </motion.h1>

          <motion.p className="subtitle" variants={itemVariants}>
            We are redefining excellence. Stay tuned as we apply the final polish to a seamless and extraordinary journey.
          </motion.p>
        </motion.div>
      </main>
    </div>
  );
}