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

export default function Home() {
  const [randomQuote, setRandomQuote] = useState("");

  useEffect(() => {
    const quote = quotes[Math.floor(Math.random() * quotes.length)];
    setRandomQuote(quote);
  }, []);

  return (
    <main className="pt-24 px-6 min-h-screen bg-gradient-to-br from-rose-50 via-pink-100 to-white dark:from-zinc-900 dark:via-purple-900 dark:to-zinc-900 text-gray-800 dark:text-gray-100 transition-colors duration-500 items-center justify-center">
      <div className="flex flex-row items-center justify-center gap-12 flex-wrap">
        {/* Kartu Carousel */}
        <div className="w-[300px] sm:w-[360px] md:w-[420px] aspect-[3/4] rounded-3xl shadow-xl overflow-hidden border-4 border-pink-200 dark:border-pink-400">
          <CarouselGallery />
        </div>

        {/* Deskripsi */}
        <div className="flex flex-col items-center justify-center max-w-xl text-center">
          <motion.h1
            className="text-5xl font-pacifico text-pink-600 dark:text-pink-300 mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Welcome to Delynn World
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed"
          >
            Selamat datang di ruang kecil ini — tempat di mana pesona dan kehangatan seorang {''} 
            <span className="text-pink-500 font-semibold">Delynn</span> dituangkan dalam potret-potret yang tak lekang oleh waktu.  
            Setiap senyumnya menyimpan cerita, setiap tatapannya seperti bisikan lembut yang menyentuh hati.  

            Ini bukan sekadar galeri, tapi kumpulan momen yang diam-diam membuat kita jatuh cinta… perlahan, tapi pasti.  
            Semoga di sini, kamu merasakan hangatnya dunia yang ia bawa — dengan caranya yang sederhana tapi selalu membekas.
          </motion.p>

          {/* Random Quote */}
          <motion.blockquote
            className="mt-6 italic text-pink-500 text-base font-medium"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 1 }}
          >
            “{randomQuote}”
          </motion.blockquote>

          {/* Explore Button */}
          <motion.div
            className="mt-8"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.6 }}
          >
            <Link
              href="/gallery"
              className="px-6 py-2 bg-pink-500 hover:bg-pink-600 text-white font-semibold rounded-full transition shadow-md"
            >
              Pap Imut Bu Boss →
            </Link>
          </motion.div>
        </div>
      </div>

      <hr className="border-t border-pink-300 dark:border-pink-600 mt-16 mx-auto w-1/3 opacity-30" />
      <footer className="text-sm text-center text-gray-500 dark:text-gray-400 py-6">
        Made with <span className="text-red-500">❤️</span> for Delynn — 2025
      </footer>
    </main>
  );
}
