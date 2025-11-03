import Image from "next/image";
import Link from "next/link";

export default function KayitOlPage() {
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

          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-white mb-1">Ad Soyad</label>
              <input className="input-field" type="text" placeholder="Ad Soyad" />
            </div>
            <div>
              <label className="block text-sm font-medium text-white mb-1">E-posta</label>
              <input className="input-field" type="email" placeholder="ornek@mail.com" />
            </div>
            <div>
              <label className="block text-sm font-medium text-white mb-1">Şifre</label>
              <input className="input-field" type="password" placeholder="••••••••" />
            </div>
            <button type="submit" className="primary-btn">Kayıt Ol</button>
          </form>

          <p className="mt-6 text-sm text-center text-white/90">
            Zaten hesabın var mı?{" "}
            <Link href="/giris" className="font-semibold underline-offset-4 hover:underline">Giriş Yap</Link>
          </p>
        </div>
      </div>
    </main>
  );
}
