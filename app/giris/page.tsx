import Link from "next/link";

export default function GirisPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-white px-6 py-12">
      <div className="w-full max-w-md border rounded-2xl shadow p-6">
        <h1 className="text-2xl font-extrabold text-black mb-1">Giriş Yap</h1>
        <p className="text-sm text-black/70 mb-6">Hesabınla devam et.</p>

        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-black mb-1">E-posta</label>
            <input className="w-full border rounded px-3 py-2" type="email" placeholder="ornek@mail.com" />
          </div>
          <div>
            <label className="block text-sm font-medium text-black mb-1">Şifre</label>
            <input className="w-full border rounded px-3 py-2" type="password" placeholder="••••••••" />
          </div>
          <button type="submit" className="w-full bg-black text-white font-semibold py-2 rounded-full">Giriş Yap</button>
        </form>

        <p className="mt-6 text-sm text-center text-black/80">
          Henüz hesabın yok mu? {" "}
          <Link href="/kayit-ol" className="font-semibold text-[#ff7a00] hover:underline">Kayıt Ol</Link>
        </p>
      </div>
    </main>
  );
}
