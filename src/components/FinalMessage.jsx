import React from 'react';
import { motion } from 'framer-motion';
import Confetti from 'react-confetti';
import { TypeAnimation } from 'react-type-animation';
import useWindowSize from 'react-use/lib/useWindowSize';

// ============================================================================
// FINAL MESSAGE COMPONENT
// ============================================================================
// Beautiful ending section with confetti, stars, and emotional message
// Customizable handwritten-style text animation
// ============================================================================

const FinalMessage = () => {
  const { width, height } = useWindowSize();

  const floatingStarVariants = {
    initial: { opacity: 0, y: 100 },
    animate: (i) => ({
      opacity: [0, 1, 0],
      y: [100, -100, -150],
      x: Math.sin(i) * 50,
      transition: {
        duration: 3 + i * 0.3,
        delay: i * 0.2,
        repeat: Infinity,
      },
    }),
  };

  const textVariants = {
    initial: { opacity: 0, scale: 0.8 },
    animate: {
      opacity: 1,
      scale: 1,
      transition: { duration: 1 },
    },
  };

  const pulseVariants = {
    animate: {
      scale: [1, 1.05, 1],
      opacity: [0.8, 1, 0.8],
      transition: {
        duration: 2,
        repeat: Infinity,
      },
    },
  };

  return (
    <motion.section
      className="relative min-h-screen flex flex-col items-center justify-center py-20 px-4 overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      {/* Confetti */}
      {width && height && <Confetti width={width} height={height} recycle={true} />}

      {/* Floating Stars Background */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-3xl"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${height}px`,
            }}
            custom={i}
            variants={floatingStarVariants}
            initial="initial"
            animate="animate"
          >
            ⭐
          </motion.div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-3xl">
        {/* Opening message - handwritten style */}
        <motion.div
          className="mb-12"
          variants={textVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <p className="text-xl md:text-2xl text-lavender italic font-serif mb-8">
            <TypeAnimation
              sequence={[
                'Thank you for being my safe place...',
                1000,
                'Thank you for being my laughter...',
                1000,
                'Thank you for being my constant...',
                1000,
                'Thank you for being YOU...',
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={1}
            />
          </p>
        </motion.div>

        {/* Main message */}
        <motion.h2
          className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cream via-lavender to-glow-pink mb-8"
          variants={textVariants}
          initial="initial"
          whileInView="animate"
          transition={{ delay: 4 }}
          viewport={{ once: true }}
        >
          Happy Birthday,
          <br />
          Sunshine ☀️
        </motion.h2>

        {/* Glowing orb */}
        <motion.div
          className="w-32 h-32 mx-auto mb-12 relative"
          variants={pulseVariants}
          animate="animate"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-glow-purple to-glow-pink rounded-full blur-2xl opacity-60" />
          <div className="absolute inset-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-6xl">
            💜
          </div>
        </motion.div>

        {/* Emotional closing */}
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 4.5 }}
          viewport={{ once: true }}
        >
          <p className="text-xl text-cream leading-relaxed">
            You make the world brighter just by being in it.
          </p>

          <p className="text-xl text-lavender leading-relaxed">
            Your existence is a gift to everyone around you.
          </p>

          <p className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-glow-purple to-glow-pink">
            I'm so grateful you were born.
          </p>
        </motion.div>

        {/* Signature */}
        <motion.p
          className="text-lavender text-lg mt-12 italic font-serif"
          animate={{ opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          — Your Person, Forever 💜
        </motion.p>

        {/* Final heart */}
        <motion.p
          className="text-7xl mt-12"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 10, -10, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
        >
          💜
        </motion.p>
      </div>

      {/* Floating particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={`particle-${i}`}
          className="absolute w-2 h-2 bg-glow-pink rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            opacity: [0, 1, 0],
            y: [0, -50],
            x: (Math.random() - 0.5) * 50,
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            delay: i * 0.1,
            repeat: Infinity,
          }}
        />
      ))}
    </motion.section>
  );
};

export default FinalMessage;
