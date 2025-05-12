"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { href: "/", label: "🏠 Accueil" },
    { href: "/commands", label: "📜 Commandes" },
    { href: "/about", label: "ℹ️ À propos" },
    { href: "/contact", label: "📬 Contact" },
  ];

  const baseLink =
    "relative inline-block transition duration-200 hover:scale-110 hover:text-yellow-300";
  const underline =
    "after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[2px] after:bg-yellow-300 after:transition-all after:duration-300 hover:after:w-full";
  const activeLink = "text-yellow-300 after:w-full font-semibold";

  return (
    <nav className="bg-indigo-600 text-white shadow-lg">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/BotMus.webp"
            alt="Logo MusBot"
            width={40}
            height={40}
            className="rounded-full border-2 border-white"
          />
          <span className="text-2xl font-bold">MusBot</span>
        </Link>

        {/* Burger Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="sm:hidden focus:outline-none"
          aria-label="Menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Desktop Nav */}
        <div className="hidden sm:flex space-x-6 text-base">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`${baseLink} ${underline} ${
                pathname === href ? activeLink : ""
              }`}
            >
              {label}
            </Link>
          ))}
        </div>
      </div>

      {/* Slide-in mobile menu */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-indigo-700 text-white z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } sm:hidden`}
      >
        <div className="flex justify-end p-4">
          <button onClick={() => setIsOpen(false)} aria-label="Close menu">
            <X size={28} />
          </button>
        </div>
        <div className="flex flex-col items-start px-6 space-y-4">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setIsOpen(false)}
              className={`text-lg w-full transition ${
                pathname === href ? "text-yellow-300 font-semibold underline" : ""
              }`}
            >
              {label}
            </Link>
          ))}
        </div>
      </div>

      {/* Overlay backdrop (optional) */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black bg-opacity-40 z-40 sm:hidden"
        ></div>
      )}
    </nav>
  );
}
