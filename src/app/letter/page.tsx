"use client";

import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";

export default function LetterPage() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <main className="relative pt-24 pb-20 px-6 min-h-screen bg-gradient-to-br from-rose-50/90 via-pink-100/80 to-purple-50/70 dark:from-zinc-950 dark:via-purple-950 dark:to-indigo-950 text-gray-800 dark:text-gray-100 transition-all duration-700 flex flex-col items-center overflow-hidden">
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating particles */}
        <div className="absolute top-20 left-10 w-2 h-2 bg-pink-400/30 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-1 h-1 bg-rose-300/40 rounded-full animate-bounce" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-40 left-20 w-1.5 h-1.5 bg-purple-400/25 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-60 right-10 w-1 h-1 bg-pink-300/35 rounded-full animate-bounce" style={{ animationDelay: '0.5s' }}></div>
        
        {/* Gradient orbs */}
        <motion.div 
          className="absolute w-96 h-96 bg-gradient-to-r from-pink-300/10 to-purple-300/10 rounded-full blur-3xl"
          style={{
            x: mousePosition.x * 0.02,
            y: mousePosition.y * 0.02,
          }}
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute top-1/2 right-0 w-80 h-80 bg-gradient-to-l from-rose-300/8 to-pink-300/8 rounded-full blur-3xl"
          animate={{
            x: [0, -80, 0],
            y: [0, 60, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 5
          }}
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative w-full flex flex-col items-center z-10"
      >
        {/* Enhanced Header */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center mb-8"
        >
          <h1 className="text-5xl md:text-6xl font-pacifico bg-gradient-to-r py-6 from-pink-600 via-rose-500 to-purple-600 dark:from-pink-400 dark:via-rose-400 dark:to-purple-400 bg-clip-text text-transparent mb-4 drop-shadow-sm">
            A Letter to Delynn
          </h1>
          <div className="flex justify-center items-center space-x-2 text-4xl">
            <motion.span
              animate={{ rotate: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >💌</motion.span>
            <motion.span
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 1.5, repeat: Infinity, delay: 0.5 }}
            >🌸</motion.span>
          </div>
        </motion.div>

        {/* Enhanced Letter Container */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative max-w-3xl w-full"
        >
          {/* Decorative elements */}
          <div className="absolute -top-4 -left-4 w-8 h-8 border-l-2 border-t-2 border-pink-300/50 dark:border-pink-500/30"></div>
          <div className="absolute -top-4 -right-4 w-8 h-8 border-r-2 border-t-2 border-pink-300/50 dark:border-pink-500/30"></div>
          <div className="absolute -bottom-4 -left-4 w-8 h-8 border-l-2 border-b-2 border-pink-300/50 dark:border-pink-500/30"></div>
          <div className="absolute -bottom-4 -right-4 w-8 h-8 border-r-2 border-b-2 border-pink-300/50 dark:border-pink-500/30"></div>

          <div className="backdrop-blur-xl bg-white/90 dark:bg-zinc-800/80 p-10 md:p-12 rounded-3xl shadow-2xl border border-white/50 dark:border-zinc-600/30 space-y-7 leading-relaxed text-lg relative overflow-hidden">
            
            {/* Paper texture overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-transparent via-pink-50/20 to-purple-50/10 dark:from-transparent dark:via-purple-900/10 dark:to-indigo-900/5 pointer-events-none"></div>
            
            <div className="relative z-10">
              <motion.p 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="font-pacifico text-xl text-pink-600 dark:text-pink-400"
              >
                Dear Delynn,
              </motion.p>

              {[
                "Aku nggak tahu apakah kamu akan pernah baca halaman ini. Tapi aku tetap ingin menulis.. untuk seseorang yang tanpa sadar membawa banyak senyum kecil ke dalam hariku.",
                "Entah lewat ekspresi wajahmu yang lucu, cara bicaramu yang spontan, atau tingkahmu yang penuh kejutan, kamu seperti selalu bisa menciptakan momen yang nggak biasa... dan itu nyangkut di hati.",
                "Halaman-halaman ini bukan sekadar galeri, tapi jejak rasa — rasa kagum, rasa hangat, dan rasa yang sulit dijelaskan tapi tetap ingin disimpan. Rasanya seperti melihat dunia lewat versimu, dan aku suka dunia itu.",
                "Terima kasih, Delynn. Karena sudah jadi kamu. Dan terima kasih karena tanpa sadar, kamu pernah jadi alasan seseorang tersenyum tanpa sebab."
              ].map((text, index) => (
                <motion.p
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + (index * 0.3), duration: 0.8 }}
                  className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 transition-colors duration-300"
                >
                  {text}
                </motion.p>
              ))}

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 2.0, duration: 0.8 }}
                className="text-right mt-8 space-y-2"
              >
                <p className="italic text-gray-600 dark:text-gray-400">
                  Untuk kamu yang selalu bisa bikin hari-hariku lebih cerah,
                </p>
                <p className="font-semibold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent text-xl">
                  Naufal Bagaskara Budihutama
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Enhanced Quote */}
        <motion.blockquote
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="relative italic text-center max-w-2xl mt-16 mb-12 text-lg text-pink-700 dark:text-pink-300 bg-gradient-to-r from-transparent via-pink-50/50 to-transparent dark:via-purple-900/30 p-6 rounded-2xl border-l-4 border-pink-400 dark:border-pink-500 shadow-lg backdrop-blur-sm"
        >
          <div className="absolute top-2 left-6 text-pink-400/50 text-4xl font-serif">&quot;</div>
          <span className="relative z-10">Beberapa rasa nggak perlu dikatakan — cukup dituliskan, dan diabadikan.</span>
          <div className="absolute bottom-2 right-6 text-pink-400/50 text-4xl font-serif rotate-180">&quot;</div>
        </motion.blockquote>

        {/* Enhanced Button */}
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 1.4, duration: 0.6 }}
  className="mt-12 flex justify-center"
>
  <motion.a
    href="/"
    className="group relative inline-flex items-center space-x-3 px-10 py-5 bg-gradient-to-r from-pink-500 via-rose-500 to-purple-600 hover:from-pink-600 hover:via-rose-600 hover:to-purple-700 text-white rounded-full font-semibold text-lg transition-all duration-500 shadow-xl hover:shadow-2xl transform overflow-hidden"
    whileHover={{ 
      scale: 1.08,
      boxShadow: "0 25px 50px -12px rgba(236, 72, 153, 0.4)",
      y: -2
    }}
    whileTap={{ 
      scale: 0.95,
      y: 0
    }}
    transition={{ type: "spring", stiffness: 400, damping: 25 }}
  >
    {/* Background glow effect */}
    <div className="absolute inset-0 bg-gradient-to-r from-white/20 via-white/10 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full"></div>
    
    {/* Animated background particles */}
    <div className="absolute inset-0 overflow-hidden rounded-full">
      <motion.div
        className="absolute -top-2 -left-2 w-4 h-4 bg-white/30 rounded-full"
        animate={{
          x: [0, 20, 0],
          y: [0, -10, 0],
          opacity: [0, 1, 0]
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute -bottom-2 -right-2 w-3 h-3 bg-white/40 rounded-full"
        animate={{
          x: [0, -15, 0],
          y: [0, 8, 0],
          opacity: [0, 1, 0]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />
    </div>
    
    {/* Button content */}
      <motion.span
        className="relative z-10 text-xl"
        animate={{ 
          x: [0, -3, 0],
          rotate: [0, -5, 0]
        }}
        transition={{ 
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >⬅️</motion.span>
      
      <span className="relative z-10 font-bold tracking-wide">
        Kembali ke Beranda
      </span>
      
      <motion.span
        className="relative z-10 text-lg opacity-70 group-hover:opacity-100 transition-opacity duration-300"
        animate={{ 
          scale: [1, 1.2, 1],
          rotate: [0, 10, 0]
        }}
        transition={{ 
          duration: 2.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5
        }}
      >🏠</motion.span>
      
      {/* Ripple effect on hover */}
      <motion.div
        className="absolute inset-0 bg-white/20 rounded-full scale-0 group-hover:scale-110 transition-transform duration-500"
        style={{ transformOrigin: "center" }}
      />
      
      {/* Border glow */}
      <div className="absolute inset-0 rounded-full border-2 border-white/20 group-hover:border-white/40 transition-colors duration-500"></div>
      
      {/* Shine effect */}
      <motion.div
        className="absolute inset-0 rounded-full"
        style={{
          background: "linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.1) 50%, transparent 70%)",
          transform: "translateX(-100%)"
        }}
        animate={{
          transform: ["translateX(-100%)", "translateX(100%)"]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatDelay: 3,
          ease: "easeInOut"
        }}
      />
    </motion.a>
  </motion.div>

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
                href="https://x.com/_Chavall"
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
      </motion.div>
    </main>
  );
}