"use client";

import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { monsters } from "@/data/monsters";

export default function Navbar() {
  const params = useParams();
  const pathname = usePathname(); // ใช้ตรวจสอบว่าอยู่ที่หน้า /gallery หรือไม่
  const currentId = params?.id as string;

  const [open, setOpen] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const [show, setShow] = useState(true);
  const [lastScroll, setLastScroll] = useState(0);

  // 🔥 Scroll Hide / Show logic
  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      if (currentScroll > lastScroll && currentScroll > 80) {
        setShow(false);
        setDropdown(false); // ปิด dropdown เมื่อ scroll ลง
      } else {
        setShow(true);
      }
      setLastScroll(currentScroll);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScroll]);

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
          px-6 py-4
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
        <div className="flex items-center gap-8">
          {/* Gallery Link (Desktop) */}
          <Link
            href="/gallery"
            className={`hidden md:block text-xs uppercase tracking-[0.2em] transition ${
              pathname === "/gallery" ? "text-white font-bold" : "text-white/60 hover:text-white"
            }`}
          >
            Gallery
          </Link>

          {/* Desktop Dropdown */}
          <div className="relative hidden md:block">
            <button
              onMouseEnter={() => setDropdown(true)}
              onClick={() => setDropdown(!dropdown)}
              className="text-xs uppercase tracking-[0.2em] text-white/80 hover:text-white transition"
            >
              Monsters ▾
            </button>

            {dropdown && (
              <div 
                onMouseLeave={() => setDropdown(false)}
                className="absolute right-0 mt-4 w-48 rounded-2xl bg-black/90 backdrop-blur-xl border border-white/10 p-4 flex flex-col gap-3 shadow-2xl animate-[fadeIn_0.2s_ease]"
              >
                {Object.keys(monsters).map((key) => (
                  <Link
                    key={key}
                    href={`/monster/${key}`}
                    onClick={() => setDropdown(false)}
                    className={`uppercase text-[10px] tracking-widest transition ${
                      currentId === key
                        ? "text-white font-bold"
                        : "text-white/40 hover:text-white"
                    }`}
                  >
                    {key}
                  </Link>
                ))}
              </div>
            )}
          </div>

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
          {/* Gallery Link (Mobile) */}
          <Link
            href="/gallery"
            onClick={() => setOpen(false)}
            className={`pb-4 border-b border-white/10 ${pathname === "/gallery" ? "text-white" : "text-white/40"}`}
          >
            Full Gallery
          </Link>
          
          <span className="text-[10px] opacity-30 tracking-[0.3em]">Select Monster</span>
          
          <div className="grid grid-cols-2 gap-4">
            {Object.keys(monsters).map((key) => (
              <Link
                key={key}
                href={`/monster/${key}`}
                onClick={() => setOpen(false)}
                className={`text-xs ${
                  currentId === key ? "text-white" : "text-white/40"
                }`}
              >
                {key}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}