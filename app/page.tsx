'use client'

import Image from "next/image";
import heroPage from "@/public/images/IMG_4158.png"
import heroPageFG from "@/public/images/IMG_4158 Background Removed.png"

export default function Home() {
  return (
    <div className="w-full h-screen items-center justify-center text-foreground">
      {/* <Image
      fill
      src={heroPage}
      alt = "hero page"
      className="aspect-4/3 h-dvh self-end z-0 object-cover"
      /> */}

      <h1 className="text-[47rem] font-display text-white font-bold z-10 pb-20 overflow-x-visible text-center absolute -left-10">brrrrrrrr</h1>
      <h2 className="text-base font-sans text-white font-bold z-10 pb-20">brrrrrrrr</h2>

      {/* <Image
      fill
      src={heroPageFG}
      alt = "hero page fg"
      className="aspect-4/3 h-dvh self-end z-10 object-cover"
      /> */}
    </div>
  );
}
