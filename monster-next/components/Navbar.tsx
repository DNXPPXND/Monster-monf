"use client";

import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
import { useState } from "react";
import { monsters } from "@/data/monsters";

export default function Navbar() {
  const pathname = usePathname();
  const params = useParams();
  const currentId = params?.id as string;

  const [open, setOpen] = useState(false);

  return (
    <header className="w-full fixed top-0 left-0 z-50">
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
          shadow-lg
        "
      >
        {/* Logo */}
        <Link
          href="/monster/bloop"
          className="text-xl tracking-widest hover:opacity-80 transition"
        >
          Monf.
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-6 text-xs uppercase tracking-wider">
          {Object.keys(monsters).map((key) => {
            const active = currentId === key;

            return (
              <Link
                key={key}
                href={`/monster/${key}`}
                className={`
                  relative transition duration-300
                  ${active ? "text-white" : "text-white/60 hover:text-white"}
                `}
              >
                {key}

                {active && (
                  <span className="absolute -bottom-2 left-0 w-full h-[2px] bg-white rounded-full" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Mobile Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white text-xl"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden mt-3 mx-6 rounded-2xl bg-black/80 backdrop-blur-xl border border-white/10 p-6 flex flex-col gap-4 uppercase text-sm">
          {Object.keys(monsters).map((key) => (
            <Link
              key={key}
              href={`/monster/${key}`}
              onClick={() => setOpen(false)}
              className={`${
                currentId === key
                  ? "text-white"
                  : "text-white/60 hover:text-white"
              }`}
            >
              {key}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
