"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <main className="pt-24 px-6 min-h-screen bg-gradient-to-br from-rose-50 via-pink-100 to-white dark:from-zinc-900 dark:via-purple-900 dark:to-zinc-900 text-gray-800 dark:text-gray-100 transition-colors duration-500">
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="flex flex-col md:flex-row items-center justify-center gap-10 px-6 py-16 rounded-3xl shadow-lg max-w-6xl mx-auto"
      >
        <div className="relative w-[240px] sm:w-[300px] md:w-[360px] aspect-[3/4] rounded-3xl overflow-hidden border-4 border-pink-200 dark:border-pink-400 shadow-md">
          <Image
            src="/images/delynn-about.jpg"
            alt="Delynn candid"
            fill
            className="object-cover"
          />
        </div>

        <div className="flex-1 text-center md:text-left">
          <h1 className="text-5xl font-pacifico text-pink-600 dark:text-pink-300 mb-1">
            About Delynn
          </h1>
          <p className="text-pink-500 dark:text-pink-300 font-semibold mb-6 text-lg">
            👑 Queen of Gimmick
          </p>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            Delynn adalah pribadi yang sulit didefinisikan — ada tawa dalam geraknya, ketulusan di balik candanya.
            Ia bukan hanya menghibur, tapi hadir seperti jeda yang menenangkan dalam riuh dunia.
            Rasanya seperti melihat versi kecil dari kebahagiaan yang jarang ditemukan.
          </p>
          <p className="text-base text-gray-600 dark:text-gray-400">
            Di balik senyumnya yang jahil, terdapat hati yang tulus — seseorang yang memancarkan kebahagiaan
            hanya dengan menjadi dirinya sendiri.
          </p>
        </div>
      </motion.section>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
        className="flex justify-center mt-12"
      >
        <video
          src="/video/delynn-intro.mp4"
          autoPlay
          muted
          loop
          className="w-full max-w-md rounded-xl shadow-lg"
        />
      </motion.div>

      <motion.div className="max-w-xl mx-auto mt-12 p-6 bg-pink-50 dark:bg-zinc-800/50 rounded-2xl shadow-inner text-center">
        <blockquote className="italic text-pink-800 dark:text-pink-300">
          Cintaku padanya tidak butuh tempat di sisinya — cukup di ruang-ruang kecil seperti ini, 
          tempat aku bisa menatapnya dari jauh dan diam-diam bersyukur bahwa dia pernah ada di hidupku.
        </blockquote>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        viewport={{ once: true }}
        className="flex justify-center gap-4 mt-10"
      >
        <a
          href="/gallery"
          className="px-4 py-2 bg-pink-500 text-white rounded-full hover:bg-pink-600 transition"
        >
          📸 Galeri
        </a>
      </motion.div>
      

      <hr className="border-t border-pink-300 dark:border-pink-600 mt-16 mx-auto w-1/3 opacity-30" />
      <footer className="mt-16 py-8 text-center text-sm text-gray-500 dark:text-gray-400">
        Made with ❤️ for Delynn — 2025
      </footer>
    </main>
  );
}
