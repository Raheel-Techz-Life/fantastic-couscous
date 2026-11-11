"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";

const greetings = [
  "नमस्ते",       // Hindi (Namaste)
  "ನಮಸ್ಕಾರ",    // Kannada (Namaskara - North Karnataka rep)
  "வணக்கம்",      // Tamil (Vanakkam)
  "Hello",        // English
  "నమస్తే",
  "നമസ്കാരം",
  "નમસ્તે",
  "ਸਤ ਸ੍ਰੀ ਅਕਾਲ",
  "ନମସ୍କାର",
  "নমস্কার",
  "নমস্কাৰ",
  "السلام علیکم",
  "VishwaDev.Tech",
  "HAAZRI",   // Final Brand Name
];

export function VernacularPreloader({ show, onComplete }: { show: boolean, onComplete: () => void }) {
  const [index, setIndex] = useState(0);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!show) return;
    // If we haven't reached the final word
    if (index < greetings.length - 1) {
      const waitTime = index === 0 ? 450 : 110; // hold the first one a tiny bit longer, then rapid
      const timeout = setTimeout(() => {
        setIndex((prev) => prev + 1);
      }, waitTime);
      return () => clearTimeout(timeout);
    } else {
      // Hold the final word before signaling completion
      const timeout = setTimeout(() => {
        onComplete();
      }, 650);
      return () => clearTimeout(timeout);
    }
  }, [index, onComplete, show]);

  if (!isMounted) return null;

  return createPortal(
    <AnimatePresence>
      {show && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, filter: "blur(10px)", scale: 1.05 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[100000] flex flex-col items-center justify-center bg-background overflow-hidden"
        >
          {/* subtle background glow adapted to your brand colors */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,color-mix(in_srgb,var(--primary)_15%,transparent)_0%,transparent_50%)] pointer-events-none" />

          <AnimatePresence mode="wait">
            <motion.h1
              key={index}
              initial={{ opacity: 0, filter: "blur(10px)", scale: 0.95 }}
              animate={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
              exit={{ opacity: 0, filter: index === greetings.length - 1 ? "blur(20px)" : "blur(0px)", scale: index === greetings.length - 1 ? 1.2 : 1 }}
              transition={{ duration: index === greetings.length - 1 ? 0.8 : 0.15, ease: "easeInOut" }}
              className={`text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight z-10 ${index === greetings.length - 1 ? "text-primary font-black drop-shadow-[0_0_40px_var(--primary)]" : "text-foreground/80"
                }`}
            >
              {greetings[index]}
            </motion.h1>
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
}
