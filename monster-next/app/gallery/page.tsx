"use client";
import { monsters } from "@/data/monsters";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function GalleryPage() {
  const [filter, setFilter] = useState("ALL");

  // ดึงธาตุทั้งหมดที่มีออกมาทำปุ่ม Filter
  const elements = ["ALL", ...Array.from(new Set(Object.values(monsters).map(m => m.element)))];

  const filteredMonsters = filter === "ALL" 
    ? Object.entries(monsters)
    : Object.entries(monsters).filter(([_, m]) => m.element === filter);

  return (
    <main className="min-h-screen bg-[#050505] text-white px-6 py-24">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <header className="mb-20 text-center">
          <h1 className="text-6xl md:text-8xl font-black italic tracking-tighter mb-6">CODEX</h1>
          <p className="text-gray-500 tracking-[0.2em] uppercase text-sm">Registry of the Ancient Archetypes</p>
        </header>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {elements.map((el) => (
            <button
              key={el}
              onClick={() => setFilter(el)}
              className={`px-8 py-2 rounded-full border transition-all text-xs font-bold tracking-widest uppercase
                ${filter === el 
                  ? "bg-white text-black border-white" 
                  : "bg-transparent text-white border-white/10 hover:border-white/40"
                }`}
            >
              {el}
            </button>
          ))}
        </div>

        {/* Grid Display */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {filteredMonsters.map(([id, monster]) => (
            <Link key={id} href={`/monster/${id}`} className="group relative aspect-[3/4] overflow-hidden rounded-3xl border border-white/5 bg-white/[0.02]">
              {/* แสงพื้นหลังตาม Theme ของมอนสเตอร์ตัวนั้น */}
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 bg-gradient-to-b ${monster.theme}`} />
              
              <div className="absolute inset-0 p-8 flex flex-col items-center justify-between z-10">
                <span className="text-[10px] tracking-[0.3em] font-bold opacity-40 uppercase group-hover:opacity-100 transition-opacity">
                  {monster.element}
                </span>

                <div className="relative w-full h-1/2 transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-3">
                  <Image
                    src={monster.img}
                    alt={monster.name}
                    fill
                    className="object-contain drop-shadow-2xl"
                  />
                </div>

                <div className="text-center">
                  <h3 className="text-xl font-black italic mb-1 uppercase tracking-tighter">{monster.name}</h3>
                  <p className="text-[10px] text-gray-500 uppercase font-bold">{monster.archetype}</p>
                </div>
              </div>

              {/* Decorative Border on Hover */}
              <div className="absolute inset-0 border-2 border-white/0 group-hover:border-white/20 transition-all duration-500 rounded-3xl" />
            </Link>
          ))}
        </div>

      </div>
    </main>
  );
}