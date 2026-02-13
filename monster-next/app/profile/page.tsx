"use client";

import Image from "next/image";
import Link from "next/link";
import { monsters } from "@/data/monsters";

export default function ProfilePage() {
  const user = {
    name: "Hunterx",
    role: "Digital Archetype Collector", // เปลี่ยนจาก Rank เป็น Role
    location: "Bangkok, Thailand",
    avatar: "/favicon.ico", 
    joinedDate: "Feb 2026",
    favorites: ["dark-specter", "neon-beast"] 
  };

  return (
    <main className="relative min-h-screen bg-[#090909] text-white pt-24 md:pt-32 pb-20 px-6">
      
      {/* Background: ลดความฟุ้งลง ให้เหลือแค่ Ambient จางๆ */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-gradient-to-b from-purple-500/5 to-transparent blur-3xl" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto">
        
        {/* HEADER: ปรับให้ดูเหมือน Social Profile สะอาดๆ */}
        <section className="flex flex-col md:flex-row items-center md:items-end gap-8 mb-16">
          <div className="relative w-32 h-32 shrink-0">
            <div className="w-full h-full rounded-2xl border border-white/10 overflow-hidden bg-white/5">
              <Image src={user.avatar} alt="Avatar" fill className="object-contain p-4" />
            </div>
          </div>

          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl font-bold tracking-tight mb-2">{user.name}</h1>
            <p className="text-gray-400 text-sm mb-4 font-medium">
              {user.role} • {user.location}
            </p>
            
            <div className="flex flex-wrap justify-center md:justify-start gap-8">
              <div className="flex flex-col">
                <span className="text-[10px] text-gray-500 uppercase tracking-widest font-bold mb-1">Items</span>
                <span className="text-xl font-medium">24</span>
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] text-gray-500 uppercase tracking-widest font-bold mb-1">Followers</span>
                <span className="text-xl font-medium">1.2k</span>
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] text-gray-500 uppercase tracking-widest font-bold mb-1">Views</span>
                <span className="text-xl font-medium">8.4k</span>
              </div>
            </div>
          </div>

          <div className="shrink-0 w-full md:w-auto">
            <button className="w-full md:w-auto px-8 py-3 bg-white text-black text-sm font-bold rounded-xl hover:bg-gray-200 transition-colors">
              Edit Profile
            </button>
          </div>
        </section>

        {/* COLLECTION SECTION: ปรับให้เหมือน Gallery ศิลปะ */}
        <section>
          <div className="flex items-center gap-4 mb-8">
            <h2 className="text-lg font-bold">Saved Archetypes</h2>
            <div className="h-[1px] flex-1 bg-white/10" />
            <Link href="/gallery" className="text-xs text-gray-500 hover:text-white transition-colors">
              Explore All
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {user.favorites.map((id) => {
              const monster = monsters[id];
              if (!monster) return null; 

              return (
                <Link key={id} href={`/monster/${id}`} className="group block">
                   <div className="relative aspect-square rounded-3xl overflow-hidden bg-white/[0.02] border border-white/5 transition-all duration-500 group-hover:border-white/20">
                      <Image 
                        src={monster.img} 
                        alt={monster.name} 
                        fill 
                        className="object-contain p-12 opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500" 
                      />
                   </div>
                   <div className="mt-4 px-2">
                      <h4 className="text-sm font-bold text-white group-hover:text-purple-400 transition-colors">{monster.name}</h4>
                      <p className="text-[11px] text-gray-500 uppercase tracking-widest mt-1">{monster.archetype}</p>
                   </div>
                </Link>
              );
            })}
            
            {/* Add New: ปรับให้ดูเหมือนปุ่ม Upload งาน */}
            <button className="aspect-square rounded-3xl border-2 border-dashed border-white/5 flex flex-col items-center justify-center gap-3 text-gray-500 hover:text-white hover:border-white/10 hover:bg-white/[0.01] transition-all">
               <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="M12 5v14"/></svg>
               <span className="text-xs font-bold uppercase tracking-widest">Add Item</span>
            </button>
          </div>
        </section>

      </div>
    </main>
  );
}