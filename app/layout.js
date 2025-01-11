import localFont from "next/font/local";
import "./globals.css";

import { Ubuntu } from 'next/font/google'
import { JetBrains_Mono } from 'next/font/google'

import { Navbar } from "@/components/navbar";
import Footer from "@/components/footer";

const Ubuntu_init = Ubuntu({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-ubuntu",
});

const JetBrains_Mono_init = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-jetBrains-mono",
});

export const metadata = {
  title: {
    template: "%s | Venkatesh",
    default: "Venkatesh"
  },
  description: "Portfolio Website",
  content: "VensahDev or Venkatesh's portfolio website. Search Terms: Vensah Dev Vensah-Dev Venkatesh Devendran Attentia Smart Sheet Plantanator 8000",
  icons: {
    icon: "/icons/favicon.ico",
  },
  openGraph: {
    title: "Venkatesh",
    description: "Portfolio Website",
    images: [
      {
        type: "/icons/favicon.ico",
        width: 500,
        height: 500,
        url: `/opengraph/`
      }
    ]
  },
  openGraph: {

    title: "Venkatesh",

    description: "Portfolio Website",

    url: "https://vensah-dev.github.io/",

    images: ["https://opengraph.b-cdn.net/production/images/256b3925-99fa-40dc-907b-6206f985b3ed.png?token=1UtfjeCC8ES9HyzjPLjfq0kSBzgjDx7r0YeCHToIi14&height=1200&width=1200&expires=33272581653"], // Image from public folder

  },
};

export default function RootLayout({ children }) {

  return (
    <html lang="en" className={`${Ubuntu_init.variable} ${JetBrains_Mono_init.variable} antialiased scroll-smooth scrollbar-thumb-black overflow-x-hidden`} >

      {/* <head>
        <link rel='icon' href='icons/favicon.png' />
        <link rel="apple-touch-icon" sizes="180x180" href="icons/apple-touch-icon.png"></link>
      </head> */}

      {/* <link rel="icon" href="/icons/favicon.ico" sizes="any" />
      <link rel="apple-touch-icon" href="/icons/apple-touch-icon.png" sizes="any" /> */}

      <meta name="description" content="Portfolio Website" />
      {/* 
      <meta property="og:url" content="https://vensah-dev.github.io" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Venkatesh" />
      <meta property="og:description" content="Portfolio Website" />
      <meta property="og:image" content="https://vensah-dev.github.io/icons/faviconAlt.png" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta property="twitter:domain" content="vensah-dev.github.io" />
      <meta property="twitter:url" content="https://vensah-dev.github.io" />
      <meta name="twitter:title" content="Venkatesh" />
      <meta name="twitter:description" content="Portfolio Website" />
      <meta name="twitter:image" content="https://vensah-dev.github.io/icons/faviconAlt.png" /> */}

      <body className="bg-primary text-white100 font-ubuntu scroll-smooth">
        <Navbar />

        <main>
          {children}
        </main>

        <Footer />
      </body>

    </html>
  );
}
