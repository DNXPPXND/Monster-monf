"use client";

import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
import { useState, useEffect } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [show, setShow] = useState(true);
  const [lastScroll, setLastScroll] = useState(0);

  // ✅ 1. เรียก Hooks ทั้งหมดไว้ด้านบนสุด
  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      if (currentScroll > lastScroll && currentScroll > 80) {
        setShow(false);
        setOpen(false); 
      } else {
        setShow(true);
      }
      setLastScroll(currentScroll);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScroll]);

  // ✅ 2. เช็คเงื่อนไขซ่อน Navbar สำหรับหน้า Login
  if (pathname === "/auth") return null;

  return (
    <header
      className={`
        fixed top-0 left-0 w-full z-50
        transition-all duration-500
        ${show ? "translate-y-0 opacity-100" : "-translate-y-24 opacity-0"}
      `}
    >
      <div
        className="
          mx-auto max-w-7xl
          mt-6
          px-6 py-3
          flex justify-between items-center
          rounded-2xl
          bg-black/40
          backdrop-blur-xl
          border border-white/10
          shadow-xl
        "
      >
        {/* Logo */}
        <Link
          href="/"
          className="text-xl font-black tracking-tighter text-white hover:opacity-80 transition italic"
        >
          MONF.
        </Link>

        {/* Navigation Links */}
        <div className="flex items-center gap-6 md:gap-8">
          {/* เหลือแค่ Gallery */}
          <Link
            href="/gallery"
            className={`hidden md:block text-[10px] uppercase tracking-[0.2em] transition ${
              pathname === "/gallery" ? "text-white font-bold" : "text-white/60 hover:text-white"
            }`}
          >
            Gallery
          </Link>

          {/* ปุ่ม Sign In */}
          <Link
            href="/auth"
            className="hidden md:block px-5 py-2 bg-white text-black text-[10px] font-black uppercase tracking-widest rounded-full hover:scale-105 transition-all active:scale-95 shadow-[0_0_20px_rgba(255,255,255,0.1)]"
          >
            Sign In
          </Link>

          {/* Mobile Button */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-white text-xl p-2"
          >
            {open ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden mt-3 mx-6 rounded-3xl bg-black/95 backdrop-blur-2xl border border-white/10 p-8 flex flex-col gap-6 uppercase text-sm tracking-[0.2em] shadow-2xl animate-[fadeIn_0.3s_ease]">
          <Link 
            href="/gallery" 
            onClick={() => setOpen(false)} 
            className={`pb-4 border-b border-white/10 ${pathname === "/gallery" ? "text-white" : "text-white/40"}`}
          >
            Full Gallery
          </Link>
          <Link 
            href="/auth" 
            onClick={() => setOpen(false)} 
            className="w-full py-4 bg-white text-black text-center text-xs font-black rounded-2xl"
          >
            Sign In / Register
          </Link>
        </div>
      )}
    </header>
  );
}