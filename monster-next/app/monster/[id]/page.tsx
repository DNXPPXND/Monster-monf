import { monsters } from "@/data/monsters";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

export default async function MonsterPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const monster = monsters[id as keyof typeof monsters];

  if (!monster) return notFound();

  return (
    <main className={`min-h-screen bg-slate-950 text-white selection:bg-white selection:text-black`}>
      {/* Background Layer - ใช้ Gradient ตาม Theme ของ Monster */}
      <div className={`fixed inset-0 opacity-40 bg-gradient-to-tr ${monster.theme} pointer-events-none`} />
      <div className="fixed inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] pointer-events-none" />

      {/* 1. HERO SECTION - Cinematic Focus */}
      <section className="relative min-h-screen flex flex-col items-center justify-center pt-20 px-6 overflow-hidden">
        {/* Large Background Text */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none select-none">
          <h2 className="text-[20vw] font-black leading-none opacity-5 blur-sm tracking-tighter uppercase">
            {monster.archetype}
          </h2>
        </div>

        <div className="relative z-10 max-w-7xl w-full grid lg:grid-cols-2 gap-12 items-center">
          {/* Monster Visual */}
          <div className="relative order-1 lg:order-2 flex justify-center">
             {/* Glow Effect */}
            <div className={`absolute w-[80%] h-[80%] rounded-full blur-[120px] opacity-30 animate-pulse bg-gradient-to-r ${monster.theme}`} />
            
            <div className="relative group transition-transform duration-700 hover:scale-105">
              <Image
                src={monster.img}
                alt={monster.name}
                width={700}
                height={700}
                priority
                className="w-full max-w-[500px] lg:max-w-none drop-shadow-[0_35px_35px_rgba(0,0,0,0.5)] transition-all duration-500 drop-shadow-white/10"
              />
            </div>
          </div>

          {/* Core Info */}
          <div className="order-2 lg:order-1 space-y-8">
            <div className="space-y-4">
              <div className="flex gap-3">
                <span className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[10px] font-bold tracking-[0.2em] uppercase">
                  {monster.element}
                </span>
                <span className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[10px] font-bold tracking-[0.2em] uppercase">
                  {monster.mood}
                </span>
              </div>
              <h1 className="text-7xl md:text-9xl font-black tracking-tighter leading-none italic uppercase">
                {monster.name}
              </h1>
              <p className="text-xl md:text-3xl font-light text-white/80 max-w-xl leading-tight">
                {monster.tagline}
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Link
                href={`/monster/${id}/about`}
                className="group relative px-8 py-4 bg-white text-black font-bold rounded-full overflow-hidden transition-all active:scale-95"
              >
                <span className="relative z-10 uppercase">Explore Story</span>
                <div className="absolute inset-0 bg-slate-200 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </Link>
              <Link
                href="/"
                className="px-8 py-4 border border-white/20 backdrop-blur-md rounded-full font-bold hover:bg-white/10 transition-all uppercase text-sm flex items-center"
              >
                Return to World
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. DATA GRID SECTION - Bento Style */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 py-32 space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          
          {/* Origin & Lore - Large Tile */}
          <div className="md:col-span-8 p-10 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl space-y-6">
            <h3 className="text-4xl font-black italic uppercase tracking-tighter">Origin</h3>
            <p className="text-xl text-white/70 leading-relaxed font-light italic">
              &ldquo;{monster.quote}&rdquo;
            </p>
            <p className="text-lg text-white/80 leading-relaxed">
              {monster.lore}
            </p>
          </div>

          {/* Stats - Side Tile */}
          <div className="md:col-span-4 p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl space-y-8">
            <h3 className="text-2xl font-bold uppercase tracking-widest">Core Stats</h3>
            <div className="space-y-6">
              {Object.entries(monster.stats).map(([key, value]) => (
                <div key={key} className="space-y-2">
                  <div className="flex justify-between text-xs font-bold uppercase tracking-tighter opacity-60">
                    <span>{key}</span>
                    <span>{value}%</span>
                  </div>
                  <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-white to-white/40 rounded-full transition-all duration-1000 ease-out shadow-[0_0_10px_rgba(255,255,255,0.5)]" 
                      style={{ width: `${value}%` }} 
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Personality & Inner World - Split Tiles */}
          <div className="md:col-span-6 p-8 rounded-3xl bg-gradient-to-br from-white/10 to-transparent border border-white/10 space-y-4">
             <h3 className="text-2xl font-bold">Psychology</h3>
             <p className="text-white/70">{monster.personality}</p>
             <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/10 text-sm">
                <div>
                  <span className="block opacity-40 uppercase text-[10px] font-bold">Strengths</span>
                  <p>{monster.strengths}</p>
                </div>
                <div>
                  <span className="block opacity-40 uppercase text-[10px] font-bold">Weaknesses</span>
                  <p>{monster.weaknesses}</p>
                </div>
             </div>
          </div>

          <div className="md:col-span-6 p-8 rounded-3xl bg-white/5 border border-white/10 space-y-4">
             <h3 className="text-2xl font-bold italic opacity-60">Inner Voice</h3>
             <p className="text-2xl font-light italic leading-tight text-white/90">
               &ldquo;{monster.innerVoice}&rdquo;
             </p>
             <p className="text-white/60 text-sm">{monster.selfDescription}</p>
          </div>

          {/* Signature Items - 3 Column Grid */}
          <div className="md:col-span-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            {monster.signatureItems.map((item) => (
              <div key={item.name} className="group p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-white/20 transition-all duration-300">
                <div className="w-10 h-10 mb-4 rounded-lg bg-white/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <div className="w-2 h-2 bg-white rounded-full" />
                </div>
                <h4 className="font-bold text-lg mb-1">{item.name}</h4>
                <p className="text-sm text-white/50 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Life Stages & Compatibility */}
          <div className="md:col-span-12 p-10 rounded-[3rem] bg-white text-black flex flex-col md:flex-row justify-between items-center gap-12">
            <div className="flex gap-12">
              <div>
                <span className="block text-[10px] font-black uppercase opacity-40 mb-2">Childhood</span>
                <p className="text-xl font-bold">{monster.lifeStage.child}</p>
              </div>
              <div className="w-px h-12 bg-black/10 hidden md:block" />
              <div>
                <span className="block text-[10px] font-black uppercase opacity-40 mb-2">Adulthood</span>
                <p className="text-xl font-bold">{monster.lifeStage.adult}</p>
              </div>
            </div>

            <div className="flex flex-col items-end gap-3 text-right">
               <span className="text-[10px] font-black uppercase opacity-40">Best Compatibility</span>
               <div className="flex gap-2">
                {monster.compatibility.map((compatId) => (
                  <Link
                    key={compatId}
                    href={`/monster/${compatId}`}
                    className="px-4 py-2 bg-black text-white rounded-full text-xs font-bold hover:scale-105 transition active:scale-95 uppercase"
                  >
                    {compatId}
                  </Link>
                ))}
               </div>
            </div>
          </div>

        </div>
      </section>

      {/* Bottom Padding */}
      <div className="h-32" />
    </main>
  );
}