"use client";

import Image from "next/image";
import Link from "next/link";
import { monsters } from "@/data/monsters";

export default function ProfilePage() {
  const user = {
    name: "Hunterx",
    role: "Digital Archetype Collector",
    location: "Bangkok, Thailand",
    avatar: "/favicon.ico", 
    joinedDate: "Feb 2026",
    favorites: ["dark-specter", "neon-beast"] 
  };

  return (
    <main className="min-h-screen bg-[#050505] text-white selection:bg-purple-500/30">
      
      {/* 1. CINEMATIC BACKGROUND */}
      <div className="fixed inset-0 z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-purple-900/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-900/10 blur-[120px] rounded-full" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.02] bg-center" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-32 pb-24">
        
        {/* 2. HERO PROFILE SECTION */}
        <section className="relative mb-24 flex flex-col items-center text-center md:text-left md:items-start md:flex-row gap-10 p-8 md:p-12 rounded-[2.5rem] bg-white/[0.02] border border-white/5 backdrop-blur-3xl overflow-hidden">
          {/* Accent Glow inside card */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/5 blur-[80px] -mr-32 -mt-32" />

          {/* Avatar Area */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-tr from-purple-500 to-blue-500 rounded-3xl blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-500" />
            <div className="relative w-40 h-40 rounded-3xl overflow-hidden bg-[#0a0a0a] border border-white/10 p-6 flex items-center justify-center">
              <Image 
                src={user.avatar} 
                alt="Avatar" 
                fill 
                className="object-contain p-8 transform group-hover:scale-110 transition-transform duration-500" 
              />
            </div>
            <div className="absolute -bottom-2 -right-2 px-4 py-1.5 bg-white text-black text-[10px] font-black uppercase tracking-tighter rounded-lg shadow-xl">
              Pro Member
            </div>
          </div>

          {/* User Info & Stats */}
          <div className="flex-1 space-y-8">
            <div>
              <div className="flex flex-col md:flex-row md:items-center gap-4 mb-2">
                <h1 className="text-5xl font-black tracking-tighter uppercase italic italic">
                  {user.name}
                </h1>
                <button className="w-fit px-6 py-2 bg-white/5 border border-white/10 rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all">
                  Edit Profile
                </button>
              </div>
              <p className="text-gray-400 font-medium tracking-wide">
                {user.role} <span className="mx-2 opacity-20">|</span> {user.location}
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-3 gap-4 md:gap-12 max-w-md">
              {[
                { label: "Items", value: "24" },
                { label: "Followers", value: "1.2k" },
                { label: "Views", value: "8.4k" }
              ].map((stat) => (
                <div key={stat.label} className="group cursor-default">
                  <p className="text-[10px] text-gray-500 uppercase tracking-[0.2em] font-bold mb-1 group-hover:text-purple-400 transition-colors">
                    {stat.label}
                  </p>
                  <p className="text-2xl font-light tracking-tight">{stat.value}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 3. COLLECTION GALLERY */}
        <section className="space-y-10">
          <div className="flex items-end justify-between px-2">
            <div className="space-y-1">
              <h2 className="text-3xl font-black uppercase tracking-tighter italic">Personal Collection</h2>
              <p className="text-gray-500 text-xs font-medium uppercase tracking-widest">Selected digital archetypes</p>
            </div>
            <Link href="/gallery" className="group flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-gray-400 hover:text-white transition-colors">
              View All Works
              <div className="w-8 h-[1px] bg-gray-700 group-hover:w-12 group-hover:bg-white transition-all" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {user.favorites.map((id) => {
              const monster = monsters[id as keyof typeof monsters];
              if (!monster) return null; 

              return (
                <Link key={id} href={`/monster/${id}`} className="group relative">
                  <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden bg-white/[0.02] border border-white/5 transition-all duration-700 group-hover:border-white/20 group-hover:-translate-y-2">
                    {/* Hover Overlay Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                    
                    <Image 
                      src={monster.img} 
                      alt={monster.name} 
                      fill 
                      className="object-contain p-12 opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700 ease-out" 
                    />

                    {/* Content on Hover */}
                    <div className="absolute bottom-8 left-8 right-8 z-20 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                      <p className="text-[10px] font-black uppercase tracking-[0.3em] text-purple-400 mb-2">{monster.archetype}</p>
                      <h4 className="text-2xl font-bold uppercase italic tracking-tighter leading-none">{monster.name}</h4>
                    </div>
                  </div>
                  
                  {/* Subtle Label (Outside card for clean look) */}
                  <div className="mt-4 flex justify-between items-center px-4 group-hover:opacity-0 transition-opacity">
                    <span className="text-xs font-bold uppercase tracking-widest opacity-40">{monster.name}</span>
                    <span className="text-[10px] font-medium text-gray-600">#{id.slice(0,4)}</span>
                  </div>
                </Link>
              );
            })}
            
            {/* Add New Item Button */}
            <button className="aspect-[4/5] rounded-[2rem] border border-dashed border-white/10 flex flex-col items-center justify-center gap-4 text-gray-600 hover:text-white hover:border-white/30 hover:bg-white/[0.01] transition-all duration-500 group">
               <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center group-hover:scale-110 group-hover:bg-white group-hover:text-black transition-all">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="M12 5v14"/></svg>
               </div>
               <span className="text-[10px] font-black uppercase tracking-[0.2em]">Add to Collection</span>
            </button>
          </div>
        </section>

      </div>
    </main>
  );
}