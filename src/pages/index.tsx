/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import Navbar from "@/landing/Navbar";
import FirstSection from "@/landing/section/FirstSection";
import {
  Poppins,
  JetBrains_Mono,
  Manrope,
  Space_Grotesk,
  DM_Sans,
  Plus_Jakarta_Sans
} from "next/font/google";
import { motion, useScroll, useSpring } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import WhyChoose from "@/landing/section/WhyChoose";
import AboutTutorSection from "@/landing/section/AboutTutorSection";
import WhyChooseMe from "@/landing/section/WhyChooseMe";
import MathTimelineSection from "@/landing/section/MathsTimeLineSection";
import PricingSection from "@/landing/section/PricingSection";

// Fonts
const poppins = Poppins({ subsets: ['latin'], weight: ['400', '600'], variable: '--font-poppins' });
const jetbrainsMono = JetBrains_Mono({ subsets: ['latin'], weight: ['400', '500'], variable: '--font-mono' });
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], weight: ['400', '600'], variable: '--font-space' });
const manrope = Manrope({ subsets: ['latin'], weight: ['400', '600'], variable: '--font-manrope' });
const plusJakarta = Plus_Jakarta_Sans({ subsets: ['latin'], weight: ['400', '600'], variable: '--font-jakarta' });
const dmSans = DM_Sans({ subsets: ['latin'], weight: ['400', '600'], variable: '--font-dm' });

export default function Home() {
  const containerRef = useRef(null);
  const [activeColor, setActiveColor] = useState("var(--a1)");
  const [currentSection, setCurrentSection] = useState('A');

  // Section colors - subtle and modern
  const sectionThemes: any = {
    A: {
      bg: "var(--a1)",
      accent: "var(--a1)",
      text: "var(--a2)",
      secondary: "#1e293b"
    },
    B: {
      bg: "var(--b1)",
      accent: "var(--b1)",
      text: "var(--b2)",
      secondary: "#0f172a"
    },
    C: {
      bg: "var(--c1)",
      accent: "var(--c1)",
      text: "#10b981",
      secondary: "#1e3a8a"
    },
    D: {
      bg: "var(--d1)",
      accent: "var(--d1)",
      text: "var(--d2)",
      secondary: "#374151"
    },
    E: {
      bg: "var(--e1)",
      accent: "var(--e1)",
      text: "var(--e2)",
      secondary: "#374151"
    },
    F: {
      bg: "var(--f1)",
      accent: "var(--f1)",
      text: "var(--f2)",
      secondary: "#374151"
    }
  };

  // Global background transition
  const backgroundTransition = useSpring(
    sectionThemes[currentSection]?.bg || sectionThemes.E.bg,
    { stiffness: 60, damping: 20 }
  );
  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          console.log("entry", entry)

          if (entry.isIntersecting && entry.intersectionRatio > 0.3) {
            const sectionId = entry.target.id;

            console.log("sectionId", sectionId)
            setCurrentSection(sectionId);
            setActiveColor(sectionThemes?.[sectionId || "" as any]?.text || "#6366f1");
          }
        });
      },
      { threshold: [0.3, 0.6, 0.9], rootMargin: "-10% 0px -10% 0px" }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  // Text animation variants

  const scaleUp = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 }
  };

  return (
    <motion.div
      ref={containerRef}
      className={`${plusJakarta.className} ${manrope.className} ${poppins.className} ${spaceGrotesk.className} ${dmSans.className} ${jetbrainsMono.variable} font-sans  flex flex-col gap-12 relative transition-colors duration-1000 ease-out`}
      style={{
        backgroundColor: backgroundTransition
      }}
    >
      {/* Subtle animated overlay */}
      <motion.div
        className="fixed inset-0 pointer-events-none z-0"
        animate={{
          background: `${sectionThemes[currentSection]?.accent}`
        }}
        transition={{
          duration: 1.2,
          ease: [0.25, 0.46, 0.45, 0.94]
        }}
      />

      {/* NAVBAR */}
      <motion.nav
        className="fixed top-6 left-0 w-full z-50 flex"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <Navbar activeColor={activeColor} />
      </motion.nav>

      {/* SECTION A */}
      <motion.section
        id="A"
        className="h-dvh flex items-center justify-center px-12 relative z-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.4 }}
      >
        <motion.div
          variants={scaleUp}
          transition={{
            duration: 1,
            ease: [0.25, 0.46, 0.45, 0.94],
            delay: 0.2
          }}
          className="w-full"
        >
          <FirstSection />
        </motion.div>

        {/* Floating particles */}
        <motion.div
          className="absolute top-1/4 right-1/4 w-2 h-2 rounded-full opacity-40"
          style={{ backgroundColor: sectionThemes.A.accent }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.4, 0.8, 0.4]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-1/3 left-1/5 w-1 h-1 rounded-full opacity-30"
          style={{ backgroundColor: sectionThemes.A.accent }}
          animate={{
            y: [0, -40, 0],
            x: [0, 20, 0]
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
      </motion.section>

      <WhyChoose activeColor={activeColor} />

      {/* SECTION C */}
      <motion.section
        id="C"
        className="min-h-dvh flex flex-col items-center justify-center relative z-10 gap-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.4 }}
      >

        <AboutTutorSection activeColor={activeColor} />
      </motion.section>

      {/* SECTION D */}
      <WhyChooseMe activeColor={activeColor} />

      <MathTimelineSection activeColor={activeColor} />

      <PricingSection activeColor={activeColor} />
    </motion.div>
  );
}