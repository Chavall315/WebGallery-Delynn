import GalleryGrid from "@/components/GalleryGrid";

export default function GalleryPage() {
  return (
    <main className="pt-20 px-8 min-h-screen bg-gradient-to-br from-rose-50 via-pink-100 to-white dark:from-zinc-900 dark:via-purple-900 dark:to-zinc-900 text-gray-800 dark:text-gray-100 transition-colors duration-500">
      <h1 className="text-4xl font-pacifico mb-8">Delynn World</h1>
      <GalleryGrid />
      <hr className="border-t border-pink-300 dark:border-pink-600 mt-16 mx-auto w-1/3 opacity-30" />
      <footer className="text-sm text-center text-gray-500 dark:text-gray-400 py-6">
        Made with <span className="text-red-500">❤️</span> for Delynn — 2025
      </footer>
    </main>
  );
}
