import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="bg-indigo-600 text-white shadow-lg p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2">
          <Image src="/BotMus.webp" alt="Logo MusBot" width={40} height={40} />
          <span className="text-2xl font-bold">MusBot</span>
        </Link>
        <div className="space-x-6">
          <Link href="/">🏠 Accueil</Link>
          <Link href="/commands">📜 Commandes</Link>
          <Link href="/about">ℹ️ À propos</Link>
          <Link href="/contact">📬 Contact</Link>
        </div>
      </div>
    </nav>
  );
}
