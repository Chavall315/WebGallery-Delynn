"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function AboutPage() {
  const [scrollY, setScrollY] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <main className="relative pt-16 min-h-screen bg-gradient-to-br from-rose-50/90 via-pink-100/80 to-purple-50/70 dark:from-zinc-950 dark:via-purple-950/90 dark:to-indigo-950 text-gray-800 dark:text-gray-100 transition-all duration-700 overflow-hidden">
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating hearts and sparkles */}
        <motion.div
          className="absolute top-32 left-16 text-pink-400/30 text-2xl"
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, 15, 0]
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >💕</motion.div>
        <motion.div
          className="absolute top-48 right-24 text-purple-400/25 text-xl"
          animate={{ 
            y: [0, -15, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        >✨</motion.div>
        <motion.div
          className="absolute bottom-48 left-32 text-rose-400/30 text-lg"
          animate={{ 
            y: [0, -10, 0],
            x: [0, 10, 0]
          }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        >🌸</motion.div>
        <motion.div
          className="absolute bottom-64 right-16 text-pink-300/35 text-xl"
          animate={{ 
            scale: [1, 1.3, 1],
            rotate: [0, 20, 0]
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        >💫</motion.div>
        
        {/* Gradient orbs with parallax */}
        <motion.div 
          className="absolute w-96 h-96 bg-gradient-to-r from-pink-300/8 to-purple-300/8 rounded-full blur-3xl"
          style={{
            y: scrollY * -0.1,
            x: scrollY * 0.05,
          }}
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute top-1/3 right-0 w-80 h-80 bg-gradient-to-l from-rose-300/6 to-pink-300/6 rounded-full blur-3xl"
          style={{
            y: scrollY * -0.05,
            x: scrollY * -0.03,
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3
          }}
        />
      </div>

      {/* Hero Section - Enhanced Layout */}
      <section className="relative px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-7xl mx-auto"
        >
          {/* Main Content Container */}
          <div className="relative backdrop-blur-xl bg-white/80 dark:bg-zinc-900/70 rounded-3xl shadow-2xl border border-white/50 dark:border-zinc-700/30 overflow-hidden">
            
            {/* Decorative header wave */}
            <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-pink-400 via-rose-400 to-purple-500"></div>
            
            <div className="flex flex-col lg:flex-row items-center gap-12 p-8 lg:p-16">
              
              {/* Image Section */}
              <motion.div 
                className="relative lg:w-1/2 flex justify-center"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <div className="relative group">
                  {/* Decorative rings */}
                  <div className="absolute -inset-8 rounded-full border-2 border-pink-200/30 dark:border-pink-600/20 animate-pulse"></div>
                  <div className="absolute -inset-12 rounded-full border border-purple-200/20 dark:border-purple-600/15 animate-pulse" style={{ animationDelay: '1s' }}></div>
                  
                  {/* Main image container */}
                  <motion.div
                    className="relative w-[320px] sm:w-[360px] aspect-[3/4] group-hover:scale-105 transition-transform duration-700"
                    whileHover={{ rotateY: 5, rotateX: 5 }}
                    style={{ transformStyle: "preserve-3d" }}
                  >
                    {/* Gradient backdrop */}
                    <div className="absolute -inset-6 bg-gradient-to-br from-pink-300/20 via-rose-300/15 to-purple-400/20 rounded-3xl blur-xl"></div>
                    
                    {/* Image frame */}
                    <div className="relative rounded-3xl overflow-hidden border-4 border-white dark:border-zinc-700 shadow-2xl">
                      <Image
                        src="/images/delynn-about.jpg"
                        alt="Delynn candid"
                        width={360}
                        height={480}
                        sizes="(max-width: 768px) 320px, (max-width: 1024px) 360px, 400px"
                        priority
                        className="w-full h-full object-cover transition-all duration-700 group-hover:brightness-110"
                        onError={(e) => {
                          const img = e.currentTarget as HTMLImageElement;
                          console.log("Image failed to load:", img.src);

                          const altPaths = [
                            "/delynn-about.jpg",
                            "./images/delynn-about.jpg",
                            "/images/delynn-about.jpeg",
                            "/images/delynn-about.png",
                          ];

                          const currentIndex = parseInt(img.dataset.attemptIndex || "0");
                          if (currentIndex < altPaths.length) {
                            img.src = altPaths[currentIndex];
                            img.dataset.attemptIndex = (currentIndex + 1).toString();
                          } else {
                            img.style.display = "none";
                            if (img.nextElementSibling) {
                              img.nextElementSibling.setAttribute("style", "display:flex");
                            }
                          }
                        }}
                      />
                      
                      {/* Fallback placeholder */}
                      <div className="absolute inset-0 bg-gradient-to-br from-pink-200 to-purple-200 dark:from-pink-800 to-purple-800 flex items-center justify-center text-6xl" style={{display: 'none'}}>
                        👑
                      </div>
                      
                      {/* Subtle overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/5 via-transparent to-white/5"></div>
                    </div>
                    
                    {/* Floating crown */}
                    <motion.div
                      className="absolute -top-8 -right-8 text-5xl filter drop-shadow-lg"
                      animate={{ 
                        rotate: [0, 10, -5, 0],
                        y: [0, -8, 0]
                      }}
                      transition={{ 
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >👑</motion.div>
                    
                    {/* Floating sparkles */}
                    <motion.div
                      className="absolute -bottom-6 -left-6 text-3xl"
                      animate={{ 
                        scale: [1, 1.3, 1],
                        rotate: [0, 180, 360]
                      }}
                      transition={{ 
                        duration: 6,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 1
                      }}
                    >✨</motion.div>
                  </motion.div>
                </div>
              </motion.div>

              {/* Content Section */}
              <motion.div 
                className="lg:w-1/2 text-center lg:text-left space-y-6"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                {/* Title with enhanced styling */}
                <div className="space-y-4">
                  <motion.h1 
                    className="text-6xl lg:text-7xl font-pacifico bg-gradient-to-r from-pink-600 via-rose-500 to-purple-600 dark:from-pink-400 dark:via-rose-400 dark:to-purple-400 bg-clip-text text-transparent drop-shadow-sm"
                    initial={{ scale: 0.8 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.7 }}
                  >
                    About Delynn
                  </motion.h1>
                  
                  {/* Enhanced subtitle */}
                  <motion.div
                    className="flex items-center justify-center lg:justify-start space-x-3"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9, duration: 0.6 }}
                  >
                    <div className="h-px bg-gradient-to-r from-transparent to-pink-400 w-12"></div>
                    <motion.span
                      animate={{ rotate: [0, 10, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="text-2xl"
                    >👑</motion.span>
                    <p className="text-xl font-bold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
                      Queen of Gimmick
                    </p>
                    <motion.span
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 1.5, repeat: Infinity, delay: 0.5 }}
                      className="text-2xl"
                    >✨</motion.span>
                    <div className="h-px bg-gradient-to-l from-transparent to-purple-400 w-12"></div>
                  </motion.div>
                </div>
                
                {/* Enhanced description */}
                <motion.div
                  className="space-y-6 max-w-2xl"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.1, duration: 0.8 }}
                >
                  <div className="relative p-6 bg-gradient-to-br from-pink-50/50 to-purple-50/30 dark:from-pink-900/10 dark:to-purple-900/5 rounded-2xl border border-pink-200/30 dark:border-pink-800/20">
                    <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
                      Delynn adalah pribadi yang sulit didefinisikan — ada tawa dalam geraknya, ketulusan di balik candanya.
                      Ia bukan hanya menghibur, tapi hadir seperti jeda yang menenangkan dalam riuh dunia.
                      Rasanya seperti melihat versi kecil dari kebahagiaan yang jarang ditemukan.
                    </p>
                  </div>
                  
                  <div className="relative p-6 bg-gradient-to-br from-rose-50/50 to-pink-50/30 dark:from-rose-900/10 dark:to-pink-900/5 rounded-2xl border border-rose-200/30 dark:border-rose-800/20">
                    <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                      Di balik senyumnya yang jahil, terdapat hati yang tulus — seseorang yang memancarkan kebahagiaan
                      hanya dengan menjadi dirinya sendiri.
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Video Section - Enhanced */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="px-6 py-16"
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            className="relative group inline-block"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            {/* Decorative frame */}
            <div className="absolute -inset-8 bg-gradient-to-r from-pink-300/20 via-purple-300/15 to-rose-300/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div className="relative backdrop-blur-sm bg-white/60 dark:bg-zinc-800/40 p-6 rounded-3xl shadow-xl border border-white/50 dark:border-zinc-600/30">
              <video
                src="/video/delynn-intro.mp4"
                autoPlay
                muted
                loop
                className="w-full max-w-lg rounded-2xl shadow-lg"
              />
              
              {/* Video caption */}
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="mt-4 text-sm text-gray-600 dark:text-gray-400 italic"
              >
                A glimpse into her world 🎬✨
              </motion.p>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Quote Section - Redesigned */}
      <motion.section
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="px-6 py-16"
      >
        <div className="max-w-4xl mx-auto">
          <div className="relative group">
            {/* Decorative background */}
            <div className="absolute inset-0 bg-gradient-to-br from-pink-100/80 via-rose-100/60 to-purple-100/40 dark:from-zinc-800/80 dark:via-purple-900/60 dark:to-indigo-900/40 rounded-3xl backdrop-blur-sm"></div>
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent rounded-3xl"></div>
            
            {/* Content */}
            <div className="relative p-8 lg:p-12 text-center">
              {/* Large decorative quotes */}
              <div className="absolute -top-4 -left-4 text-pink-400/40 text-8xl font-serif leading-none">&quot;</div>
              <div className="absolute -bottom-8 -right-4 text-pink-400/40 text-8xl font-serif leading-none rotate-180">&quot;</div>
              
              <blockquote className="relative text-xl lg:text-2xl italic text-pink-800 dark:text-pink-300 leading-relaxed max-w-3xl mx-auto">
                Cintaku padanya tidak butuh tempat di sisinya — cukup di ruang-ruang kecil seperti ini, 
                tempat aku bisa menatapnya dari jauh dan diam-diam bersyukur bahwa dia pernah ada di hidupku.
              </blockquote>
              
              {/* Decorative hearts */}
              <div className="flex justify-center items-center space-x-4 mt-8">
                <motion.span
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="text-2xl text-pink-400"
                >💕</motion.span>
                <div className="h-px bg-gradient-to-r from-transparent via-pink-300 to-transparent w-16"></div>
                <motion.span
                  animate={{ rotate: [0, 10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                  className="text-2xl text-rose-400"
                >🌸</motion.span>
                <div className="h-px bg-gradient-to-r from-transparent via-rose-300 to-transparent w-16"></div>
                <motion.span
                  animate={{ scale: [1, 1.3, 1] }}
                  transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
                  className="text-2xl text-purple-400"
                >✨</motion.span>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* CTA Section - Enhanced */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="px-6 py-16 text-center"
      >
        <motion.a
          href="/gallery"
          className="group relative inline-flex items-center space-x-4 px-8 py-4 bg-gradient-to-r from-pink-500 via-rose-500 to-purple-600 hover:from-pink-600 hover:via-rose-600 hover:to-purple-700 text-white rounded-full font-semibold text-lg transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105"
          whileHover={{ 
            boxShadow: "0 25px 50px -12px rgba(236, 72, 153, 0.4)"
          }}
          whileTap={{ scale: 0.98 }}
        >
          <motion.span
            animate={{ rotate: [0, 15, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-2xl"
          >📸</motion.span>
          <span>Lihat Galeri</span>
          <motion.span
            animate={{ x: [0, 4, 0] }}
            transition={{ duration: 2, repeat: Infinity, delay: 1 }}
          >→</motion.span>
          
          {/* Button glow effect */}
          <div className="absolute inset-0 rounded-full bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </motion.a>
      </motion.section>

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
    </main>
  );
}