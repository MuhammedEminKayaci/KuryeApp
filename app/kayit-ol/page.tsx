import Link from "next/link";

export default function KayitOlPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-white px-6 py-12">
      <div className="w-full max-w-md border rounded-2xl shadow p-6">
        <h1 className="text-2xl font-extrabold text-black mb-1">Kayıt Ol</h1>
        <p className="text-sm text-black/70 mb-6">Hemen hesabını oluştur ve başlayalım.</p>

        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-black mb-1">Ad Soyad</label>
            <input className="w-full border rounded px-3 py-2" type="text" placeholder="Ad Soyad" />
          </div>
          <div>
            <label className="block text-sm font-medium text-black mb-1">E-posta</label>
            <input className="w-full border rounded px-3 py-2" type="email" placeholder="ornek@mail.com" />
          </div>
          <div>
            <label className="block text-sm font-medium text-black mb-1">Şifre</label>
            <input className="w-full border rounded px-3 py-2" type="password" placeholder="••••••••" />
          </div>
          <button type="submit" className="w-full bg-[#ff7a00] text-white font-semibold py-2 rounded-full">Kayıt Ol</button>
        </form>

        <p className="mt-6 text-sm text-center text-black/80">
          Zaten hesabın var mı? {" "}
          <Link href="/giris" className="font-semibold text-[#ff7a00] hover:underline">Giriş Yap</Link>
        </p>
      </div>
    </main>
  );
}
