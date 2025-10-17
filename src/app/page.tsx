"use client";

import React, { useEffect, useState } from "react";
import CarouselGallery from "@/components/CarouselGallery";
import { motion } from "framer-motion";
import Link from "next/link";

const quotes = [
  "Senyumnya itu… seperti jeda dari semua lelah yang ada.",
  "Kadang cukup lihat dia bahagia, semua terasa baik-baik saja.",
  "Delynn itu bukan hanya nama. Dia rasa, dia hangat, dia rumah.",
  "Kalau dunia terlalu ribut, lihat Delynn sebentar saja.",
  "Ada manis yang tak bisa dijelaskan—lihat saja caranya tertawa."
];

// Floating particles component
const FloatingParticle = ({ delay = 0 }) => (
  <motion.div
    className="absolute w-2 h-2 bg-pink-300 dark:bg-pink-500 rounded-full opacity-30"
    animate={{
      y: [-20, -100],
      x: [0, Math.random() * 50 - 25],
      opacity: [0.3, 0, 0.3, 0]
    }}
    transition={{
      duration: 4,
      repeat: Infinity,
      delay: delay,
      ease: "easeInOut"
    }}
    style={{
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`
    }}
  />
);

export default function Home() {
  const [randomQuote, setRandomQuote] = useState("");
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const quote = quotes[Math.floor(Math.random() * quotes.length)];
    setRandomQuote(quote);

    // Mouse position tracking for parallax effect
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: (e.clientY / window.innerHeight) * 2 - 1
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <main className="pt-24 px-6 min-h-screen relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-rose-50 via-pink-100 to-white dark:from-zinc-900 dark:via-purple-900 dark:to-zinc-900 transition-colors duration-500" />
      
      {/* Floating background shapes */}
      <motion.div 
        className="absolute top-20 left-10 w-32 h-32 bg-pink-200 dark:bg-pink-800 rounded-full opacity-20 blur-xl"
        animate={{
          x: mousePosition.x * 20,
          y: mousePosition.y * 15,
          scale: [1, 1.1, 1]
        }}
        transition={{ duration: 2, repeat: Infinity }}
      />
      <motion.div 
        className="absolute bottom-32 right-16 w-48 h-48 bg-purple-200 dark:bg-purple-800 rounded-full opacity-15 blur-2xl"
        animate={{
          x: mousePosition.x * -15,
          y: mousePosition.y * -10,
          scale: [1, 0.9, 1]
        }}
        transition={{ duration: 3, repeat: Infinity }}
      />
      
      {/* Floating particles */}
      {[...Array(12)].map((_, i) => (
        <FloatingParticle key={i} delay={i * 0.5} />
      ))}

      <div className="relative z-10 text-gray-800 dark:text-gray-100 transition-colors duration-500 items-center justify-center">
        <div className="flex flex-row items-center justify-center gap-12 flex-wrap">
          {/* Enhanced Gallery Container */}
          <motion.div 
            className="relative w-[300px] sm:w-[360px] md:w-[420px] aspect-[3/4] group"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
            style={{
              x: mousePosition.x * 10,
              y: mousePosition.y * 8
            }}
          >
            {/* Glow effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-pink-400 via-purple-400 to-pink-400 rounded-3xl blur opacity-0 group-hover:opacity-30 transition duration-500" />
            
            {/* Main container */}
            <div className="relative rounded-3xl shadow-2xl overflow-hidden border-4 border-pink-200 dark:border-pink-400 backdrop-blur-sm bg-white/10 dark:bg-black/10">
              <CarouselGallery />
              
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-pink-500/10 via-transparent to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            
            {/* Floating hearts around gallery */}
            <motion.div
              className="absolute -top-4 -right-4 text-pink-400 text-2xl"
              animate={{ 
                rotate: [0, 10, -10, 0],
                scale: [1, 1.1, 1]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              💖
            </motion.div>
            <motion.div
              className="absolute -bottom-4 -left-4 text-pink-500 text-xl"
              animate={{ 
                rotate: [0, -15, 15, 0],
                scale: [0.8, 1, 0.8]
              }}
              transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
            >
              ✨
            </motion.div>
          </motion.div>

          {/* Enhanced Content Section */}
          <div className="flex flex-col items-center justify-center max-w-xl text-center relative">
            {/* Title with enhanced animation */}
            <motion.div className="relative">
              <motion.h1
                className="text-5xl font-pacifico text-pink-600 dark:text-pink-300 mb-4 relative z-10"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                whileHover={{ scale: 1.05 }}
              >
                Welcome to Delynn World
              </motion.h1>
              
              {/* Title glow effect */}
              <motion.div
                className="absolute inset-0 text-5xl font-pacifico text-pink-400 blur-sm opacity-50"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.3 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                Welcome to Delynn World
              </motion.div>
            </motion.div>

            {/* Enhanced description */}
            <motion.div
              className="relative p-6 rounded-2xl bg-white/20 dark:bg-black/20 backdrop-blur-sm border border-pink-200/30 dark:border-pink-400/30 shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
              whileHover={{ scale: 1.02, backgroundColor: "rgba(255, 255, 255, 0.25)" }}
            >
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                Selamat datang di ruang kecil ini — tempat di mana pesona dan kehangatan seorang {''} 
                <span className="text-pink-500 font-semibold bg-pink-100 dark:bg-pink-900/30 px-2 py-1 rounded-lg">Delynn</span> dituangkan dalam potret-potret yang tak lekang oleh waktu.  
                Setiap senyumnya menyimpan cerita, setiap tatapannya seperti bisikan lembut yang menyentuh hati.  

                Ini bukan sekadar galeri, tapi kumpulan momen yang diam-diam membuat kita jatuh cinta… perlahan, tapi pasti.  
                Semoga di sini, kamu merasakan hangatnya dunia yang ia bawa — dengan caranya yang sederhana tapi selalu membekas.
              </p>
            </motion.div>

            {/* Enhanced quote */}
            <motion.div
              className="mt-6 p-4 bg-gradient-to-r from-pink-100 to-purple-100 dark:from-pink-900/30 dark:to-purple-900/30 rounded-2xl border-l-4 border-pink-400 shadow-md backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 1 }}
              whileHover={{ scale: 1.05, x: 5 }}
            >
              <blockquote className="italic text-pink-600 dark:text-pink-400 text-base font-medium">
                &quot;{randomQuote}&quot;
              </blockquote>
            </motion.div>

            {/* Enhanced button */}
            <motion.div
              className="mt-8 relative"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5, duration: 0.6 }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative group"
              >
                {/* Button glow */}
                <div className="absolute -inset-2 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full blur opacity-0 group-hover:opacity-40 transition duration-300" />
                
                <Link
                  href="/gallery"
                  className="relative px-8 py-3 bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white font-semibold rounded-full transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-2 backdrop-blur-sm"
                >
                  <span>Pap Imut Bu Boss</span>
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    →
                  </motion.span>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Footer - Enhanced */}
        <motion.footer
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="px-6 py-16"
        >
          <div className="max-w-4xl mx-auto text-center">
            {/* Decorative divider */}
            <motion.div
              className="flex items-center justify-center space-x-4 mb-8"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <div className="h-px bg-gradient-to-r from-transparent via-pink-300 to-transparent w-24"></div>
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-pink-400 text-xl"
              >💕</motion.span>
              <div className="h-px bg-gradient-to-r from-transparent via-purple-300 to-transparent w-24"></div>
            </motion.div>
            
            <div className="space-y-3 text-sm text-gray-500 dark:text-gray-400">
              <div className="flex items-center justify-center space-x-2">
                <span>Made with</span>
                <motion.span
                  animate={{ scale: [1, 1.3, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                  className="text-red-500"
                >❤️</motion.span>
                <span>for</span>
                <span className="font-semibold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
                  Delynn
                </span>
                <span>— 2025</span>
              </div>
              <div className="flex items-center justify-center space-x-1 flex-wrap">
                <span>&copy;</span>
                <span className="font-medium text-gray-700 dark:text-gray-200">delynn.world</span>
                <span>— Created by</span>
                <a
                  href="https://x.com/NaufalGaskara"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-2 hover:text-pink-600 dark:hover:text-pink-400 transition-colors duration-300 font-medium"
                >
                  Naufal Bagaskara
                </a>
              </div>
            </div>
          </div>
        </motion.footer>
      </div>
    </main>
  );
}