import { monsters } from "@/data/monsters";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#050505] text-white overflow-x-hidden">

      {/* Background Glows - ปรับลดขนาดในมือถือเพื่อไม่ให้กินทรัพยากรเครื่อง */}
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

        {/* ปรับขนาดฟอนต์ให้ยืดหยุ่นตามหน้าจอจริง */}
        <h1 className="text-[55px] sm:text-[80px] md:text-[120px] lg:text-[160px] font-black tracking-tighter leading-[0.85] mb-8 uppercase">
          <span className="bg-gradient-to-b from-white to-white/40 bg-clip-text text-transparent italic">
            Monster <br className="block sm:hidden" /> World
          </span>
        </h1>

        <p className="text-gray-400 max-w-xl leading-relaxed mb-12 text-base md:text-xl font-light">
          A universe where imagination meets identity. <br className="hidden md:block" />
          Discover your hidden strengths today.
        </p>

        {/* ปุ่ม Full-width ในมือถือ */}
        <div className="w-full sm:w-auto flex flex-col sm:flex-row gap-4">
          <a
            href="#monsters"
            className="w-full sm:w-auto px-12 py-5 rounded-full bg-white text-black font-black text-center transition-transform active:scale-95"
          >
            EXPLORE
          </a>
        </div>
      </section>

      {/* ================= MONSTER GRID ================= */}
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
        
        {/* 1. Border Glow Layer (ปรากฏเมื่อ Hover) */}
        <div className={`
          absolute -inset-[1px] rounded-[2rem] md:rounded-[3rem] 
          bg-gradient-to-br ${monster.theme}
          opacity-0 group-hover:opacity-100 
          blur-[2px] transition-opacity duration-500
        `} />

        {/* 2. Main Content Card */}
        <div className="
          relative h-full p-8 md:p-10 rounded-[2rem] md:rounded-[3rem] 
          bg-[#0a0a0a] border border-white/10
          backdrop-blur-xl transition-all duration-500
          active:scale-95 md:group-hover:-translate-y-2
        ">
          {/* แสงฟุ้งกระจายด้านหลังรูปเมื่อ Hover */}
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
              <p className="text-gray-400 text-sm leading-relaxed line-clamp-2 md:line-clamp-none">
                {monster.tagline}
              </p>
            </div>
          </div>
        </div>
      </Link>
    ))}
  </div>
</section>

      {/* ================= PHILOSOPHY (Responsive Stack) ================= */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 py-20 md:py-40 border-t border-white/5">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-10 text-center md:text-left">
              Beyond the <br className="hidden md:block" /> Visuals.
            </h2>
            <div className="grid gap-6">
              <MobileFeature title="Identity" desc="Reflecting your core personality traits through fantasy." />
              <MobileFeature title="Growth" desc="Turn your perceived weaknesses into unique power-ups." />
            </div>
          </div>
          <div className="order-1 lg:order-2 aspect-square rounded-[3rem] bg-gradient-to-br from-purple-900/40 to-blue-900/40 border border-white/10 flex items-center justify-center relative overflow-hidden group">

            {/* ส่วนของ Logo */}
            <div className="relative z-10 w-1/2 h-1/2 transition-transform duration-1000 group-hover:scale-110 group-hover:rotate-12">
              <Image
                src="/favicon.ico" // ตรวจสอบว่าไฟล์อยู่ในโฟลเดอร์ public
                alt="Monster World Logo"
                fill
                className="object-contain opacity-40 group-hover:opacity-80 transition-opacity"
              />
            </div>

            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />
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

// Sub-component สำหรับความสวยงามในมือถือ
function MobileFeature({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-white/20 transition-all">
      <h3 className="text-lg font-black uppercase tracking-tighter mb-2 text-purple-400">{title}</h3>
      <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
    </div>
  );
}