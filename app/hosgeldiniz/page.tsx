"use client";

import Image from "next/image";

export default function HosgeldinizPage() {
  return (
    <main className="min-h-dvh w-full bg-[#ff7a00] flex items-center justify-center">
      <div className="flex flex-col items-center gap-4 fade-up">
        <Image
          src="/images/headerlogo.png"
          alt="Motto Kurye Logo"
          width={420}
          height={120}
          priority
          className="drop-shadow-xl"
        />
      </div>
    </main>
  );
}
