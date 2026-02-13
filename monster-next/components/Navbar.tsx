"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [show, setShow] = useState(true);
  const [lastScroll, setLastScroll] = useState(0);
  
  // 🟢 เพิ่ม State เช็คสถานะ Login (ในอนาคตใช้ดึงจาก Context หรือ Auth Library)
  const [isLoggedIn, setIsLoggedIn] = useState(false);

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
        <div className="flex items-center gap-4 md:gap-8">
          <Link
            href="/gallery"
            className={`hidden md:block text-[10px] uppercase tracking-[0.2em] transition ${
              pathname === "/gallery" ? "text-white font-bold" : "text-white/60 hover:text-white"
            }`}
          >
            Gallery
          </Link>

          {/* 🟢 ส่วนที่ปรับเปลี่ยนตามสถานะ Login */}
          {isLoggedIn ? (
            <Link
              href="/profile"
              className="group flex items-center gap-3 pl-4 border-l border-white/10"
            >
              <div className="text-right hidden sm:block">
                <p className="text-[9px] font-black text-white leading-none uppercase tracking-widest">ShadowHunter</p>
                <p className="text-[8px] text-purple-400 font-bold leading-none uppercase mt-1">Lv. 42</p>
              </div>
              <div className="relative w-8 h-8 rounded-full border border-white/20 overflow-hidden bg-gradient-to-tr from-purple-500 to-blue-500 p-[1px] group-hover:scale-110 transition-transform">
                <div className="w-full h-full rounded-full bg-black flex items-center justify-center text-[10px] font-black italic text-white">
                  SH
                </div>
              </div>
            </Link>
          ) : (
            <Link
              href="/auth"
              className="hidden md:block px-5 py-2 bg-white text-black text-[10px] font-black uppercase tracking-widest rounded-full hover:scale-105 transition-all active:scale-95 shadow-[0_0_20px_rgba(255,255,255,0.1)]"
            >
              Sign In
            </Link>
          )}

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
          
          {/* 🟢 Mobile Login Logic */}
          {isLoggedIn ? (
             <Link 
              href="/profile" 
              onClick={() => setOpen(false)} 
              className="flex items-center justify-between w-full py-4 px-6 bg-white/5 border border-white/10 rounded-2xl"
            >
              <span className="text-xs font-black">My Profile</span>
              <span className="text-[10px] text-purple-400 font-bold">LV. 42</span>
            </Link>
          ) : (
            <Link 
              href="/auth" 
              onClick={() => setOpen(false)} 
              className="w-full py-4 bg-white text-black text-center text-xs font-black rounded-2xl"
            >
              Sign In / Register
            </Link>
          )}
        </div>
      )}
    </header>
  );
}