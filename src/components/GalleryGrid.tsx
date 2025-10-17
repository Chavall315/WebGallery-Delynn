"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, Filter, Shuffle, X, ZoomIn, Upload } from "lucide-react";

const initialLocalPhotos = Array.from({ length: 65 }, (_, i) => `/images/delynn-${i + 1}.jpg`);

export default function GalleryGrid() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [favorites, setFavorites] = useState<string[]>([]);
  const [filterMode, setFilterMode] = useState<"all" | "favorites">("all");
  const [isMounted, setIsMounted] = useState(false);
  const [imageLoaded, setImageLoaded] = useState<string[]>([]);
  const [shuffledPhotos, setShuffledPhotos] = useState<string[]>([]);
  const [isShuffling, setIsShuffling] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [photos, setPhotos] = useState<string[]>(initialLocalPhotos);
  

  useEffect(() => {
    setIsMounted(true);

    // 🔹 Fetch dari database Cloudinary
    const fetchPhotos = async () => {
      try {
        const res = await fetch("/api/photos");
        if (!res.ok) throw new Error("Gagal ambil foto dari server");

        const data = await res.json();

        // data di sini bentuknya [{ id, imageUrl, title, createdAt }, ...]
        const cloudPhotos = data.map((item: { id: string; imageUrl: string; title: string; createdAt: string }) => item.imageUrl);

        setPhotos([...cloudPhotos, ...initialLocalPhotos]);
        setShuffledPhotos([...cloudPhotos, ...initialLocalPhotos]);
      } catch (err) {
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPhotos();
  }, []);

  // Commented out localStorage for artifact compatibility
  // useEffect(() => {
  //   if (isMounted) localStorage.setItem("favorites", JSON.stringify(favorites));
  // }, [favorites, isMounted]);

  const toggleFavorite = (src: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setFavorites((prev) =>
      prev.includes(src) ? prev.filter((s) => s !== src) : [...prev, src]
    );
  };

  const handleShuffle = () => {
    setIsShuffling(true);
    setTimeout(() => {
      setShuffledPhotos((prev) => [...prev].sort(() => Math.random() - 0.5));
      setIsShuffling(false);
    }, 300);
  };

  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setIsUploading(true);

    try {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("title", file.name);

      const res = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      if (!res.ok) throw new Error("Upload gagal");

      const data = await res.json();

      // tambahkan foto baru ke grid
      setShuffledPhotos((prev) => [data.imageUrl, ...prev]);
      setPhotos((prev) => [data.imageUrl, ...prev]);
      alert("✅ Upload berhasil!");
    } catch (err) {
      console.error(err);
      alert("❌ Upload gagal, cek console untuk detail.");
    } finally {
      setIsUploading(false);
      e.target.value = ""; // reset input
    }
  };

  const filteredPhotos =
    filterMode === "favorites"
      ? shuffledPhotos.filter((src) => favorites.includes(src))
      : shuffledPhotos;

  if (!isMounted) return null;

  if (isLoading) {
  return (
    <div className="flex flex-col items-center justify-center py-32 text-gray-600 dark:text-gray-300">
      <motion.div
        className="w-12 h-12 border-4 border-pink-400 border-t-transparent rounded-full mb-4"
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
      />
      <p className="text-lg font-medium">Loading gallery...</p>
    </div>
  );
}

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative"
    >
      {/* Enhanced Control Bar */}
      <motion.div 
        className="flex flex-wrap justify-between items-center mb-8 p-4 bg-white/60 dark:bg-zinc-800/60 backdrop-blur-xl rounded-2xl border border-pink-200/30 dark:border-pink-700/30 shadow-lg"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <div className="flex items-center gap-2">
          <Filter className="w-4 h-4 text-pink-500" />
          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Filter:</span>
        </div>
        
        <div className="flex gap-3">
          {["all", "favorites"].map((mode, index) => (
            <motion.button
              key={mode}
              onClick={() => setFilterMode(mode as "all" | "favorites")}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                filterMode === mode 
                  ? "bg-gradient-to-r from-pink-500 to-rose-500 text-white shadow-lg transform scale-105" 
                  : "bg-white/80 dark:bg-zinc-700/80 text-gray-700 dark:text-gray-300 hover:bg-pink-50 dark:hover:bg-zinc-600 hover:scale-105"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 + index * 0.1 }}
            >
              {mode === "all" ? (
                <span className="flex items-center gap-1">
                  All Photos
                  <span className="text-xs opacity-70">({photos.length})</span>
                </span>
              ) : (
                <span className="flex items-center gap-1">
                  <Heart className="w-3 h-3" fill="currentColor" />
                  Favorites
                  <span className="text-xs opacity-70">({favorites.length})</span>
                </span>
              )}
            </motion.button>
          ))}
          
          <motion.button
            onClick={handleShuffle}
            disabled={isShuffling}
            className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
              isShuffling 
                ? "bg-purple-200 dark:bg-purple-800 cursor-not-allowed" 
                : "bg-gradient-to-r from-purple-500 to-indigo-500 text-white hover:from-purple-600 hover:to-indigo-600 shadow-lg"
            }`}
            whileHover={!isShuffling ? { scale: 1.05 } : {}}
            whileTap={!isShuffling ? { scale: 0.95 } : {}}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
          >
            <span className="flex items-center gap-2">
              <Shuffle className={`w-4 h-4 ${isShuffling ? 'animate-spin' : ''}`} />
              {isShuffling ? 'Shuffling...' : 'Shuffle'}
            </span>
          </motion.button>

          {/* Upload button */}
          <label className="relative cursor-pointer">
            <input
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleUpload}
              disabled={isUploading}
            />
            <motion.div
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                isUploading
                  ? "bg-gray-300 dark:bg-gray-700 cursor-not-allowed"
                  : "bg-gradient-to-r from-green-500 to-emerald-500 text-white hover:from-green-600 hover:to-emerald-600 shadow-lg"
              }`}
              whileHover={!isUploading ? { scale: 1.05 } : {}}
              whileTap={!isUploading ? { scale: 0.95 } : {}}
            >
              <Upload className="w-4 h-4" />
              {isUploading ? "Uploading..." : "Upload"}
            </motion.div>
          </label>
        </div>
      </motion.div>

      {/* Enhanced Gallery Grid */}
      <motion.div 
        className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 xl:columns-5 gap-6 space-y-6"
        layout
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, staggerChildren: 0.05 }}
      >
        <AnimatePresence mode="popLayout">
          {filteredPhotos.map((src, idx) => (
            <motion.div
              key={src}
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ 
                duration: 0.5,
                delay: Math.min(idx * 0.02, 1),
                layout: { duration: 0.3 }
              }}
              className="group relative break-inside-avoid overflow-hidden rounded-2xl shadow-xl bg-white dark:bg-zinc-800 transition-all duration-500 hover:shadow-2xl cursor-pointer"
              style={{
                background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255,255,255,0.2)'
              }}
              whileHover={{ 
                y: -8,
                transition: { duration: 0.3 }
              }}
            >
              {/* Loading State with enhanced animation */}
              {!imageLoaded.includes(src) && (
                <motion.div 
                  className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-pink-50 to-rose-100 dark:from-zinc-800 dark:to-zinc-900 z-10"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  <motion.div
                    className="w-8 h-8 border-3 border-pink-400 border-t-transparent rounded-full"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  />
                  <motion.span 
                    className="mt-2 text-sm text-pink-500 font-medium"
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    Loading...
                  </motion.span>
                </motion.div>
              )}

              {/* Main Image with enhanced hover effects */}
              <div className="relative overflow-hidden">
                <Image
                  src={src}
                  alt={`Delynn Gallery Image ${idx + 1}`}
                  width={768}
                  height={1024}
                  className={`w-full h-auto object-cover transition-all duration-700 group-hover:scale-110 ${
                    imageLoaded.includes(src) ? "opacity-100" : "opacity-0"
                  }`}
                  onLoad={() => setImageLoaded((prev) => [...prev, src])}
                  onClick={() => setSelectedImage(src)}
                />
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
                    <span className="text-white text-sm font-medium">
                      Photo #{idx + 1}
                    </span>
                    <ZoomIn className="w-5 h-5 text-white" />
                  </div>
                </div>
              </div>

              {/* Enhanced Favorite Button */}
              <motion.button
                onClick={(e) => toggleFavorite(src, e)}
                className="absolute top-3 right-3 p-2 bg-white/90 dark:bg-zinc-900/90 rounded-full z-20 shadow-lg backdrop-blur-sm border border-white/20"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.02 + 0.5, duration: 0.3 }}
              >
                <Heart
                  className={`w-5 h-5 transition-colors duration-300 ${
                    favorites.includes(src)
                      ? "fill-pink-500 text-pink-500"
                      : "text-gray-600 dark:text-gray-300 hover:text-pink-400"
                  }`}
                  fill={favorites.includes(src) ? "currentColor" : "none"}
                />
              </motion.button>

              {/* Favorite Badge */}
              {favorites.includes(src) && (
                <motion.div
                  className="absolute top-3 left-3 px-2 py-1 bg-pink-500/90 text-white text-xs font-medium rounded-full backdrop-blur-sm"
                  initial={{ opacity: 0, scale: 0, x: -20 }}
                  animate={{ opacity: 1, scale: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  ❤️ Loved
                </motion.div>
              )}
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Enhanced Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            key="modal"
            className="fixed inset-0 bg-black/70 backdrop-blur-md z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              className="relative max-w-5xl max-h-full"
              initial={{ scale: 0.5, opacity: 0, rotateY: -15 }}
              animate={{ scale: 1, opacity: 1, rotateY: 0 }}
              exit={{ scale: 0.8, opacity: 0, rotateY: 15 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <motion.button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 p-2 bg-white/20 hover:bg-white/30 rounded-full backdrop-blur-sm z-10"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <X className="w-6 h-6 text-white" />
              </motion.button>

              <Image
                src={selectedImage}
                alt="Full Size Preview"
                className="max-w-full max-h-full rounded-2xl shadow-2xl"
              />

              {/* Image Info */}
              <motion.div
                className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent rounded-b-2xl"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <div className="flex justify-between items-center text-white">
                  <span className="text-sm">
                    {photos.indexOf(selectedImage) + 1} of {photos.length}
                  </span>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleFavorite(selectedImage, e);
                    }}
                    className="flex items-center gap-2 px-3 py-1 bg-white/20 rounded-full hover:bg-white/30 transition-colors"
                  >
                    <Heart
                      className={`w-4 h-4 ${
                        favorites.includes(selectedImage)
                          ? "fill-pink-400 text-pink-400"
                          : "text-white"
                      }`}
                      fill={favorites.includes(selectedImage) ? "currentColor" : "none"}
                    />
                    <span className="text-sm">
                      {favorites.includes(selectedImage) ? "Remove from" : "Add to"} Favorites
                    </span>
                  </button>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Empty State for Favorites */}
      {filterMode === "favorites" && favorites.length === 0 && (
        <motion.div
          className="flex flex-col items-center justify-center py-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <div className="text-6xl mb-4">💕</div>
          <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-300 mb-2">
            No favorites yet
          </h3>
          <p className="text-gray-500 dark:text-gray-400 text-center max-w-md">
            Start adding photos to your favorites by clicking the heart icon on any image.
            Your favorites will appear here!
          </p>
          <motion.button
            onClick={() => setFilterMode("all")}
            className="mt-4 px-6 py-2 bg-gradient-to-r from-pink-500 to-rose-500 text-white rounded-full font-medium hover:shadow-lg transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Browse All Photos
          </motion.button>
        </motion.div>
      )}
    </motion.div>
  );
}