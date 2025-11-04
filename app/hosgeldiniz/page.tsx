"use client";

import Image from "next/image";

export default function HosgeldinizPage() {
  return (
    <main className="min-h-dvh w-full bg-[#ff7a00] flex items-center justify-center px-6">
      <div className="flex flex-col items-center gap-6 fade-up text-center">
        <Image
          src="/images/headerlogo.png"
          alt="Motto Kurye Logo"
          width={360}
          height={110}
          priority
          className="drop-shadow-xl"
        />
        <div className="neon-text text-2xl md:text-3xl font-extrabold">Ana sayfa düzenleniyor</div>
        <div className="spinner" aria-label="Yükleniyor" />
      </div>
    </main>
  );
}
