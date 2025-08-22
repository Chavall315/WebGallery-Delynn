"use client";
import GalleryGrid from "@/components/GalleryGrid";
import { motion } from "framer-motion";

export default function GalleryPage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 bg-gradient-to-br from-rose-50 via-pink-100 to-purple-50 dark:from-zinc-900 dark:via-purple-900 dark:to-zinc-800 transition-colors duration-1000">
        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute -top-4 -right-4 w-72 h-72 bg-pink-300/20 rounded-full blur-3xl"
            animate={{ 
              x: [0, 100, 0],
              y: [0, -50, 0],
              scale: [1, 1.2, 1]
            }}
            transition={{ 
              duration: 20, 
              repeat: Infinity,
              ease: "linear"
            }}
          />
          <motion.div
            className="absolute -bottom-8 -left-8 w-96 h-96 bg-purple-300/15 rounded-full blur-3xl"
            animate={{ 
              x: [0, -80, 0],
              y: [0, 60, 0],
              scale: [1, 0.8, 1]
            }}
            transition={{ 
              duration: 25, 
              repeat: Infinity,
              ease: "linear",
              delay: 5
            }}
          />
          <motion.div
            className="absolute top-1/2 left-1/2 w-64 h-64 bg-rose-400/10 rounded-full blur-3xl"
            animate={{ 
              x: [-50, 50, -50],
              y: [-30, 30, -30],
              scale: [1, 1.3, 1]
            }}
            transition={{ 
              duration: 18, 
              repeat: Infinity,
              ease: "linear",
              delay: 10
            }}
          />
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 pt-20 px-4 sm:px-6 lg:px-8">
        {/* Enhanced Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.h1 
            className="text-5xl sm:text-6xl lg:text-7xl font-pacifico mb-4 mt-2 bg-gradient-to-r from-pink-600 via-rose-500 to-purple-600 py-8 bg-clip-text text-transparent leading-[1.2] overflow-visible"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            Delynn World
          </motion.h1>
          
          <motion.div
            className="flex items-center justify-center gap-2 text-lg text-gray-600 dark:text-gray-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <span>✨</span>
            <span className="font-medium">A collection of beautiful moments</span>
            <span>✨</span>
          </motion.div>

          {/* Decorative Line */}
          <motion.div
            className="mt-6 mx-auto w-32 h-1 bg-gradient-to-r from-transparent via-pink-400 to-transparent rounded-full"
            initial={{ width: 0 }}
            animate={{ width: 128 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          />
        </motion.div>

        {/* Gallery Component */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <GalleryGrid />
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
      </div>
    </main>
  );
}