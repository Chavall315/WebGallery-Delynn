import GalleryGrid from "@/components/GalleryGrid";

export default function GalleryPage() {
  return (
    <main className="pt-20 px-8 min-h-screen bg-gradient-to-br from-rose-50 via-pink-100 to-white dark:from-zinc-900 dark:via-purple-900 dark:to-zinc-900 text-gray-800 dark:text-gray-100 transition-colors duration-500">
      <h1 className="text-4xl font-pacifico mb-8">Delynn World</h1>
      <GalleryGrid />
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
    </main>
  );
}
