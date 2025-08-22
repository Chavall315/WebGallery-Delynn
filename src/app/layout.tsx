import "../styles/globals.css";
import { ReactNode } from "react";
import Navbar from "@/components/Navbar";
import { Pacifico } from 'next/font/google'

export const metadata = {
  title: "Delynn.World",
  description: "Official fan gallery of Delynn JKT48",
  authors: [{ name: "Naufal Bagaskara Budihutama", url: "https://delynn.world" }],
  creator: "Naufal Bagaskara Budihutama",
  publisher: "NaufalGaskara",
  keywords: ["Delynn", "JKT48", "Gallery", "Photography", "Fanmade", "Love"],
  robots: "index, follow",
  openGraph: {
    title: "My Love Gallery",
    description: "Official fan gallery of Delynn JKT48",
    url: "https://delynn.world",
    siteName: "Delynn.World",
    type: "website",
    locale: "en_US",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

const pacifico = Pacifico({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-pacifico',
  display: 'swap',
})


export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`dark ${pacifico.variable}`}>
      <body className="bg-white text-gray-800">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
