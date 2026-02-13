import { monsters } from "@/data/monsters";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#050505] text-white overflow-x-hidden">

      {/* 1. Background Glows */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute w-[150vw] md:w-[100vw] h-[150vw] md:h-[100vw] -top-[50vw] -left-[20vw] bg-purple-600/10 blur-[80px] md:blur-[150px] animate-pulse" />
      </div>

      {/* ================= HERO SECTION ================= */}
      <section className="relative z-10 flex flex-col items-center justify-center text-center min-h-[90vh] px-6 pt-20">
        <div className="inline-block px-4 py-1.5 mb-6 rounded-full border border-white/10 bg-white/5 backdrop-blur-md">
          <span className="text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase opacity-70">
            Welcome to the Realm
          </span>
        </div>

        <h1 className="text-[55px] sm:text-[80px] md:text-[120px] lg:text-[160px] font-black tracking-tighter leading-[0.85] mb-8 uppercase">
          <span className="bg-gradient-to-b from-white to-white/40 bg-clip-text text-transparent italic">
            Monster <br className="block sm:hidden" /> World
          </span>
        </h1>

        <p className="text-gray-400 max-w-xl leading-relaxed mb-12 text-base md:text-xl font-light px-4">
          A universe where imagination meets identity. <br className="hidden md:block" />
          Discover your hidden strengths today.
        </p>

        <div className="w-full sm:w-auto px-6">
          <a
            href="#monsters"
            className="block sm:inline-block px-12 py-5 rounded-full bg-white text-black font-black text-center transition-transform active:scale-95 shadow-[0_0_30px_rgba(255,255,255,0.2)]"
          >
            EXPLORE
          </a>
        </div>
      </section>

      {/* ================= MONSTER GRID ================= */}
      <section id="monsters" className="relative z-10 max-w-7xl mx-auto px-6 py-20 md:py-40">
        <div className="mb-16 md:mb-24 text-center md:text-left">
          <h2 className="text-4xl md:text-7xl font-bold tracking-tighter mb-4 italic">
            The <span className="text-purple-500 not-italic">Archetypes</span>
          </h2>
          <div className="h-1 w-20 bg-purple-500 mx-auto md:mx-0" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
          {Object.entries(monsters).map(([id, monster]) => (
            <Link key={id} href={`/monster/${id}`} className="group relative">

              {/* Border Glow Layer */}
              <div className={`
                absolute -inset-[1px] rounded-[2rem] md:rounded-[3rem] 
                bg-gradient-to-br ${monster.theme}
                opacity-0 group-hover:opacity-100 
                blur-[2px] transition-opacity duration-500
              `} />

              {/* Main Content Card */}
              <div className="
                relative h-full p-8 md:p-10 rounded-[2rem] md:rounded-[3rem] 
                bg-[#0a0a0a] border border-white/10
                backdrop-blur-xl transition-all duration-500
                active:scale-95 md:group-hover:-translate-y-2 overflow-hidden
              ">
                <div className={`
                  absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                  w-3/4 h-3/4 bg-gradient-to-br ${monster.theme} 
                  opacity-0 group-hover:opacity-20 blur-[50px] transition-opacity duration-500
                `} />

                <div className="relative z-10">
                  <div className="flex justify-center mb-8">
                    <Image
                      src={monster.img}
                      alt={monster.name}
                      width={300}
                      height={300}
                      className="h-48 md:h-64 w-auto object-contain drop-shadow-[0_10px_30px_rgba(255,255,255,0.1)] group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>

                  <div className="text-center md:text-left">
                    <h3 className="text-2xl md:text-3xl font-black italic mb-2">{monster.name}</h3>
                    <p className={`text-transparent bg-clip-text bg-gradient-to-r ${monster.theme} text-xs md:text-sm font-bold tracking-wide uppercase mb-4`}>
                      {monster.archetype}
                    </p>
                    <p className="text-gray-400 text-sm leading-relaxed line-clamp-2">
                      {monster.tagline}
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ================= PHILOSOPHY (Advanced Layout) ================= */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 py-32 md:py-48 border-t border-white/5">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">

          {/* ด้านซ้าย: ข้อความแบบ Editorial */}
          <div className="lg:col-span-5 order-2 lg:order-1 space-y-12">
            <div>
              <h2 className="text-5xl md:text-8xl font-black tracking-tighter mb-6 italic leading-[0.8] bg-gradient-to-r from-white via-white to-white/20 bg-clip-text text-transparent">
                BEYOND <br /> VISUALS
              </h2>
              <div className="h-1 w-32 bg-gradient-to-r from-purple-500 to-transparent mb-12" />
            </div>

            <div className="space-y-4">
              <EnhancedFeature
                num="01"
                title="Identity Archetypes"
                desc="Each monster is more than just an image—it's a reflection of your core persona through symbolic psychology."
              />
              <EnhancedFeature
                num="02"
                title="Evolution Path"
                desc="Transform perceived weaknesses into unique power-ups by embracing both your light and shadow traits."
              />
              <EnhancedFeature
                num="03"
                title="Narrative Design"
                desc="Every element and ability is meticulously crafted to build a universe where imagination knows no bounds."
              />
            </div>
          </div>

          {/* ด้านขวา: Visual Power Core */}
          <div className="lg:col-span-7 order-1 lg:order-2 lg:sticky lg:top-24">
            <div className="relative aspect-square w-full flex items-center justify-center">

              <div className="absolute w-3/4 h-3/4 bg-purple-600/20 blur-[120px] rounded-full animate-pulse" />

              <div className="relative w-64 h-64 md:w-80 md:h-80 group">
                <div className="absolute inset-0 bg-white/5 border border-white/20 backdrop-blur-3xl rounded-[3rem] rotate-6 group-hover:rotate-12 transition-transform duration-1000 shadow-2xl" />
                <div className="absolute inset-0 bg-white/5 border border-white/10 backdrop-blur-2xl rounded-[3rem] -rotate-3 group-hover:-rotate-6 transition-transform duration-1000 shadow-2xl" />

                <div className="relative h-full w-full flex items-center justify-center p-12">
                  <div className="relative w-full h-full transition-all duration-700 group-hover:scale-110 group-hover:drop-shadow-[0_0_30px_rgba(168,85,247,0.5)]">
                    <Image
                      src="/favicon.ico"
                      alt="Monster Core"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>

                <div className="absolute -top-6 -right-6 px-4 py-2 bg-white text-black text-[10px] font-black tracking-widest uppercase rounded-full shadow-xl">
                  Core Engine
                </div>

                <div className="absolute -bottom-8 -left-8 p-6 bg-black/40 backdrop-blur-xl border border-white/10 rounded-2xl hidden md:block">
                  <div className="flex gap-2">
                    {[1, 2, 3, 4].map(i => (
                      <div key={i} className="w-1 h-4 bg-purple-500/50 rounded-full animate-bounce" style={{ animationDelay: `${i * 0.2}s` }} />
                    ))}
                  </div>
                </div>
              </div>

              <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay pointer-events-none" />
            </div>
          </div>

        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="relative z-10 border-t border-white/5 bg-black/80 backdrop-blur-xl px-6 py-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-black italic">MONSTER WORLD</h3>
            <p className="text-gray-500 text-[10px] tracking-[0.2em] uppercase">© 2026 Universe</p>
          </div>

          <div className="flex gap-6">
            {['IG', 'TW', 'DS'].map(social => (
              <span key={social} className="text-xs font-bold opacity-40 hover:opacity-100 cursor-pointer transition-opacity">{social}</span>
            ))}
          </div>
        </div>
      </footer>
    </main>
  );
}

// --- SUB COMPONENTS ---

function EnhancedFeature({ num, title, desc }: { num: string; title: string; desc: string }) {
  return (
    <div className="group p-6 md:p-8 rounded-[2rem] hover:bg-white/[0.03] border border-transparent hover:border-white/10 transition-all duration-500">
      <div className="flex items-start gap-4 md:gap-6">
        <span className="text-purple-500 font-mono text-xs md:text-sm tracking-tighter opacity-50 group-hover:opacity-100 transition-opacity pt-1">
          [{num}]
        </span>
        <div>
          <h3 className="text-lg md:text-xl font-bold text-white mb-2 md:mb-3 tracking-tight group-hover:translate-x-2 transition-transform duration-500 uppercase">
            {title}
          </h3>
          <p className="text-gray-500 text-xs md:text-sm leading-relaxed group-hover:text-gray-300 transition-colors">
            {desc}
          </p>
        </div>
      </div>
    </div>
  );
}