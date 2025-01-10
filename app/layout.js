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
  // icons: {
  //   icon: "/icons/apple-touch-icon.png",
  // },
};

export default function RootLayout({ children }) {

  return (
    <html lang="en" className={`${Ubuntu_init.variable} ${JetBrains_Mono_init.variable} antialiased scroll-smooth scrollbar-thumb-black overflow-x-hidden`} >

      {/* <head>
        <link rel='icon' href='icons/favicon.png' />
        <link rel="apple-touch-icon" sizes="180x180" href="icons/apple-touch-icon.png"></link>
      </head> */}

      <link rel="icon" href="/icons/apple-touch-icon.png" sizes="any" />
      <link rel="apple-touch-icon" sizes="any" href="/icons/apple-touch-icon.png" /> {/* Recommended size */}


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
