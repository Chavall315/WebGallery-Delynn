"use client";

import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/gallery", label: "Gallery" },
    { href: "/about", label: "About" },
    { href: "/letter", label: "Letter" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-white/80 via-white/85 to-white/80 dark:from-zinc-900/80 dark:via-zinc-900/90 dark:to-zinc-900/80 backdrop-blur-xl shadow-lg border-b border-gradient-to-r from-pink-100/50 via-zinc-200/50 to-pink-100/50 dark:from-pink-900/20 dark:via-zinc-800/50 dark:to-pink-900/20 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-8 py-4 flex justify-between items-center">
        {/* Enhanced Logo */}
        <div className="group">
          <h1 className="text-2xl font-black bg-gradient-to-r from-pink-600 via-pink-500 to-rose-500 py-1 bg-clip-text text-transparent tracking-wide transform transition-all duration-300 group-hover:scale-105">
            Delynn
            <span className="bg-gradient-to-r from-zinc-800 to-zinc-900 dark:from-white dark:to-zinc-200 px-2 bg-clip-text text-transparent font-bold">
              .World
            </span>
          </h1>
          <div className="h-0.5 bg-gradient-to-r from-pink-500 to-rose-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
        </div>

        {/* Enhanced Desktop Menu */}
        <div className="hidden md:flex items-center space-x-1">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`relative px-4 py-2 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                pathname === item.href
                  ? "text-white bg-gradient-to-r from-pink-500 to-rose-500 shadow-lg shadow-pink-500/25"
                  : "text-zinc-700 dark:text-zinc-300 hover:text-pink-500 hover:bg-pink-50 dark:hover:bg-pink-900/20"
              }`}
            >
              {item.label}
              {pathname === item.href && (
                <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-white rounded-full"></div>
              )}
              {pathname !== item.href && (
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-pink-500/10 to-rose-500/10 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
              )}
            </Link>
          ))}
          
          <div className="ml-4 pl-4 border-l border-zinc-300 dark:border-zinc-600">
            <ThemeToggle />
          </div>
        </div>

        {/* Enhanced Mobile Menu Button */}
        <div className="md:hidden flex items-center space-x-3">
          <ThemeToggle />
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={`p-2 rounded-full transition-all duration-300 transform hover:scale-110 ${
              menuOpen 
                ? "bg-gradient-to-r from-pink-500 to-rose-500 text-white shadow-lg" 
                : "text-zinc-800 dark:text-white hover:bg-pink-50 dark:hover:bg-pink-900/20"
            }`}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Enhanced Mobile Dropdown Menu */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ease-out ${
        menuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
      }`}>
        <div className="px-6 pb-6 space-y-1 bg-gradient-to-b from-transparent to-white/50 dark:to-zinc-900/50">
          {navItems.map((item, index) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className={`block text-base font-semibold px-4 py-3 rounded-xl transition-all duration-300 transform hover:scale-[1.02] ${
                pathname === item.href
                  ? "text-white bg-gradient-to-r from-pink-500 to-rose-500 shadow-lg shadow-pink-500/25"
                  : "text-zinc-800 dark:text-zinc-100 hover:text-pink-500 hover:bg-pink-50 dark:hover:bg-pink-900/20"
              }`}
              style={{
                animationDelay: `${index * 50}ms`,
                animation: menuOpen ? 'slideInFromRight 0.3s ease-out forwards' : 'none'
              }}
            >
              <div className="flex items-center justify-between">
                {item.label}
                {pathname === item.href && (
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                )}
              </div>
            </Link>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes slideInFromRight {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </nav>
  );
}