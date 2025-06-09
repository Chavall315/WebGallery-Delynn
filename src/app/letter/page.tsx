"use client";

import { motion } from "framer-motion";
import React from "react";

export default function LetterPage() {
  return (
    <main className="pt-24 pb-20 px-6 min-h-screen bg-gradient-to-br from-rose-50 via-pink-100 to-white dark:from-zinc-900 dark:via-purple-900 dark:to-zinc-900 text-gray-800 dark:text-gray-100 transition-colors duration-500 flex flex-col items-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full flex flex-col items-center"
      >
        <h1 className="text-4xl font-pacifico text-pink-600 dark:text-pink-300 mb-6 text-center">
          A Letter to Delynn <span className="text-3xl">💌🌸</span>
        </h1>

        <div className="max-w-2xl w-full backdrop-blur-md bg-white/80 dark:bg-zinc-800/60 p-8 rounded-2xl shadow-[0_10px_25px_rgba(0,0,0,0.1)] dark:shadow-xl space-y-6 leading-relaxed text-lg border border-white/30 dark:border-zinc-700">
          <p>Dear Delynn,</p>

          <p>
            Aku nggak tahu apakah kamu akan pernah baca halaman ini. Tapi aku tetap ingin menulis —
            untuk seseorang yang tanpa sadar membawa banyak senyum kecil ke dalam hariku.
          </p>

          <p>
            Entah lewat ekspresi wajahmu yang lucu, cara bicaramu yang spontan, atau tingkahmu yang penuh kejutan,
            kamu seperti selalu bisa menciptakan momen yang nggak biasa... dan itu nyangkut di hati.
          </p>

          <p>
            Halaman-halaman ini bukan sekadar galeri, tapi jejak rasa — rasa kagum, rasa hangat, dan rasa
            yang sulit dijelaskan tapi tetap ingin disimpan. Rasanya seperti melihat dunia lewat versimu,
            dan aku suka dunia itu.
          </p>

          <p>
            Terima kasih, Delynn. Karena sudah jadi kamu. Dan terima kasih karena tanpa sadar,
            kamu pernah jadi alasan seseorang tersenyum tanpa sebab.
          </p>

          <p className="text-right italic mt-6">
            Dengan diam-diam, <br />
            <span className="font-semibold text-pink-500">Seseorang yang mengagumimu dari jauh.</span>
          </p>
        </div>

        <blockquote className="italic text-center max-w-xl mt-12 mb-8 text-pink-700 dark:text-pink-300 border-l-4 border-pink-300 dark:border-pink-500 pl-4">
          “Beberapa rasa nggak perlu dikatakan — cukup dituliskan, dan diabadikan.”
        </blockquote>

        <a
          className="mt-4 inline-block px-6 py-3 bg-pink-500 text-white rounded-full hover:bg-pink-600 transition shadow-md"
          href="/"
        >
          ⬅️ Kembali ke Awal Cerita
        </a>

        <hr className="border-t border-pink-300 dark:border-pink-600 mt-16 mx-auto w-1/3 opacity-30" />
        <footer className="text-sm text-center text-gray-500 dark:text-gray-400 py-6 space-y-1">
          <div>
            Made with <span className="text-red-500">❤️</span> for <span className="text-pink-600 dark:text-pink-400 font-semibold">Delynn</span> — 2025
          </div>
          <div>
            &copy; <span className="font-medium text-gray-700 dark:text-gray-200">delynn.world</span> — Created by{" "}
            <a
              href="https://x.com/_Chavall"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2 hover:text-pink-600 dark:hover:text-pink-400 transition"
            >
              Naufal Bagaskara
            </a>
          </div>
        </footer>
      </motion.div>
    </main>
  );
}
