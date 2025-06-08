"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Heart } from "lucide-react";

const photos = Array.from({ length: 65 }, (_, i) => `/images/delynn-${i + 1}.jpg`);

export default function GalleryGrid() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [favorites, setFavorites] = useState<string[]>([]);
  const [filterMode, setFilterMode] = useState<"all" | "favorites">("all");
  const [isMounted, setIsMounted] = useState(false);
  const [imageLoaded, setImageLoaded] = useState<string[]>([]);
  const [shuffledPhotos, setShuffledPhotos] = useState<string[]>([]);

  useEffect(() => {
  setIsMounted(true);
  setShuffledPhotos(photos);
  const stored = localStorage.getItem("favorites");
  if (stored) setFavorites(JSON.parse(stored));
}, []);

  useEffect(() => {
    if (isMounted) localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites, isMounted]);

  const toggleFavorite = (src: string) => {
    setFavorites((prev) =>
      prev.includes(src) ? prev.filter((s) => s !== src) : [...prev, src]
    );
  };

  const filteredPhotos =
  filterMode === "favorites"
    ? shuffledPhotos.filter((src) => favorites.includes(src))
    : shuffledPhotos;

  if (!isMounted) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="flex justify-end mb-6 gap-2">
        {["all", "favorites"].map((mode) => (
          <button
            key={mode}
            onClick={() => setFilterMode(mode as "all" | "favorites")}
            className={`px-3 py-1 rounded-full text-sm font-medium transition ${
              filterMode === mode ? "bg-pink-500 text-white" : "bg-gray-200 dark:bg-zinc-700"
            }`}
          >
            {mode === "all" ? "All" : "Favorites ❤️"}
          </button>
        ))}
        <button
          onClick={() =>
            setShuffledPhotos((prev) => [...prev].sort(() => Math.random() - 0.5))
          }
          className="px-3 py-1 rounded-full text-sm font-medium transition bg-purple-200 dark:bg-purple-700 text-purple-800 dark:text-white"
        >
          Shuffle 🔀
        </button>
      </div>

      <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
        {filteredPhotos.map((src, idx) => (
          <div
            key={idx}
            className="relative break-inside-avoid overflow-hidden rounded-lg shadow-lg bg-white dark:bg-zinc-800 transition-transform hover:scale-[1.02] cursor-pointer"
          >
            {!imageLoaded.includes(src) && (
              <div className="absolute inset-0 flex items-center justify-center bg-white dark:bg-zinc-800 z-10">
                <span className="animate-pulse text-pink-400">Loading...</span>
              </div>
            )}
            <Image
              src={src}
              alt={`Gallery Image ${idx + 1}`}
              width={768}
              height={1024}
              className={`w-full h-auto object-cover transition-opacity duration-700 ${
                imageLoaded.includes(src) ? "opacity-100" : "opacity-0"
              }`}
              onLoad={() => setImageLoaded((prev) => [...prev, src])}
              onClick={() => setSelectedImage(src)}
            />
            <button
              onClick={() => toggleFavorite(src)}
              className="absolute top-2 right-2 p-1 bg-white/80 dark:bg-zinc-900/70 rounded-full z-20"
            >
              <Heart
                className={`w-5 h-5 ${
                  favorites.includes(src)
                    ? "fill-pink-500 text-pink-500"
                    : "text-gray-600 dark:text-gray-300"
                }`}
                fill={favorites.includes(src) ? "currentColor" : "none"}
              />
            </button>
          </div>
        ))}
      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            key="modal"
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.img
              src={selectedImage}
              alt="Preview"
              className="max-w-full max-h-full rounded-2xl"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
