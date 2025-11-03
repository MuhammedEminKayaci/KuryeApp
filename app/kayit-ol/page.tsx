"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { supabase } from "../../lib/supabase";

export default function KayitOlPage() {
  const baseUrl = "https://kurye-app-dusky.vercel.app";
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  const handleEmailSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage(null);
    try {
      setLoading(true);
      const redirectTo = `${baseUrl}/hosgeldiniz`;
      const { error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: { full_name: fullName },
          emailRedirectTo: redirectTo,
        },
      });
      if (error) throw error;
      setMessage("Kayıt başarılı! E-posta doğrulaması gerekiyorsa lütfen gelen kutunuzu kontrol edin.");
    } catch (err: any) {
      setMessage(err?.message ?? "Bir hata oluştu. Lütfen tekrar deneyin.");
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignup = async () => {
    setMessage(null);
    try {
      const redirectTo = `${baseUrl}/hosgeldiniz`;
      const { data, error } = await supabase.auth.signInWithOAuth({
        provider: "google",
        options: { redirectTo },
      });
      if (error) throw error;
      // Some environments require manual navigation to the returned URL
      if (data?.url) {
        window.location.href = data.url;
      }
    } catch (err: any) {
      setMessage(
        err?.message?.includes("provider is not enabled")
          ? "Google sağlayıcısı Supabase üzerinde etkin değil. Lütfen Dashboard > Authentication > Providers > Google kısmından etkinleştirin."
          : err?.message ?? "Bir hata oluştu."
      );
    }
  };
  return (
    <main className="relative min-h-dvh w-full overflow-hidden bg-[#ff7a00]">
      {/* Animated decorative shapes */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-16 -left-16 w-72 h-72 rounded-full bg-white/15 blur-2xl animate-float-slow" />
        <div className="absolute bottom-12 -right-8 w-56 h-56 rounded-full bg-white/10 blur-xl animate-pulse-soft" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-white/5 blur-3xl animate-float-slow" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex min-h-dvh items-center justify-center px-6 py-12">
        <div className="w-full max-w-md glass-card rounded-3xl p-8 shadow-2xl fade-up">
          <div className="flex flex-col items-center gap-2 mb-6">
            <Image
              src="/images/headerlogo.png"
              alt="Motto Kurye Logo"
              width={200}
              height={60}
              priority
              className="drop-shadow-lg"
            />
            <h1 className="text-2xl font-extrabold text-white">Kayıt Ol</h1>
            <p className="text-sm text-white/85 text-center">Hemen hesabını oluştur ve başlayalım.</p>
          </div>

          <form className="space-y-4" onSubmit={handleEmailSignup}>
            <div>
              <label className="block text-sm font-medium text-white mb-1">Ad Soyad</label>
              <input className="input-field" value={fullName} onChange={e=>setFullName(e.target.value)} type="text" placeholder="Ad Soyad" required />
            </div>
            <div>
              <label className="block text-sm font-medium text-white mb-1">E-posta</label>
              <input className="input-field" value={email} onChange={e=>setEmail(e.target.value)} type="email" placeholder="ornek@mail.com" required />
            </div>
            <div>
              <label className="block text-sm font-medium text-white mb-1">Şifre</label>
              <input className="input-field" value={password} onChange={e=>setPassword(e.target.value)} type="password" placeholder="••••••••" required minLength={6} />
            </div>
            <button type="submit" className="primary-btn" disabled={loading}>{loading ? "Kaydediliyor..." : "Kayıt Ol"}</button>
          </form>

          <div className="mt-4 text-center text-white/80">veya</div>
          <button onClick={handleGoogleSignup} className="mt-3 w-full rounded-full bg-white text-black font-semibold py-2 shadow-lg hover:translate-y-[1px] transition-transform">
            Google ile Kayıt Ol
          </button>

          {message && (
            <p className="mt-4 text-sm text-center text-white/95">{message}</p>
          )}

          <p className="mt-6 text-sm text-center text-white/90">
            Zaten hesabın var mı?{" "}
            <Link href="/giris" className="font-semibold underline-offset-4 hover:underline">Giriş Yap</Link>
          </p>
        </div>
      </div>
    </main>
  );
}
