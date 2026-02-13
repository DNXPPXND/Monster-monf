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
    <section
      className={`
        relative min-h-screen
        flex items-center justify-center
        px-6 py-16 md:px-12 md:py-24 overflow-hidden
        bg-gradient-to-br ${monster.theme}
        text-white
      `}
    >
      {/* 1. Background Elements (ปรับให้จางลงในมือถือ) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <span className="absolute -left-10 md:-left-20 top-1/2 -translate-y-1/2 text-[30vw] md:text-[25vw] font-black opacity-[0.02] md:opacity-[0.03] select-none whitespace-nowrap">
          {monster.name.toUpperCase()}
        </span>
        <div className="absolute w-[400px] md:w-[800px] h-[400px] md:h-[800px] bg-white/10 blur-[80px] md:blur-[180px] -top-1/4 -right-1/4 rounded-full animate-pulse" />
      </div>

      <div className="relative z-10 max-w-7xl w-full flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-20">
        
        {/* 2. Visual Spotlight (Top on Mobile, Left on Desktop) */}
        <div className="relative group w-full flex-1 flex justify-center lg:justify-end order-1 lg:order-1">
          <div className="absolute inset-0 bg-white/20 blur-[60px] md:blur-[100px] rounded-full scale-75 opacity-50" />
          
          <div className="relative transition-all duration-1000 group-hover:scale-105 animate-[float_6s_ease-in-out_infinite]">
            <Image
              src={monster.img}
              alt={monster.name}
              width={550}
              height={550}
              priority
              className="w-[280px] sm:w-[400px] md:w-[500px] lg:w-[600px] h-auto drop-shadow-2xl object-contain"
            />
          </div>
        </div>

        {/* 3. Narrative Content (Bottom on Mobile, Right on Desktop) */}
        <div className="flex-1 text-center lg:text-left order-2 lg:order-2">
          
          {/* Badge Section (ปรับให้กึ่งกลางในมือถือ) */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-2 mb-6">
            {[monster.archetype, monster.mood, monster.element].map((tag) => (
              <span key={tag} className="px-4 py-1.5 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-[9px] md:text-[10px] font-bold tracking-widest uppercase">
                {tag}
              </span>
            ))}
          </div>

          {/* ชื่อมอนสเตอร์ (ปรับขนาดให้ยืดหยุ่นขึ้น) */}
          <h1 className="text-[clamp(40px,12vw,110px)] font-black tracking-tighter mb-4 leading-[0.9] drop-shadow-2xl">
            {monster.name}
          </h1>

          <div className="mb-10 space-y-6">
            <p className="text-lg md:text-2xl font-light text-white/90 leading-snug max-w-lg mx-auto lg:mx-0">
              {monster.tagline}
            </p>
            
            <div className="w-16 h-1 bg-white/30 mx-auto lg:mx-0 rounded-full" />

            <p className="italic text-base md:text-lg text-white/70 font-light max-w-md mx-auto lg:mx-0 border-l-0 lg:border-l-2 border-white/20 lg:pl-6">
              “{monster.quote}”
            </p>
          </div>

          {/* Action Buttons (Full width ในมือถือ) */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center">
            <Link
              href={`/monster/${id}/about`}
              className="w-full sm:w-auto text-center px-10 py-4 bg-white text-black font-bold rounded-full hover:bg-opacity-90 transition-all active:scale-95"
            >
              EXPLORE STORY
            </Link>

            <Link
              href="/"
              className="w-full sm:w-auto text-center px-10 py-4 border border-white/30 rounded-full font-medium hover:bg-white/10 backdrop-blur-sm transition-all active:scale-95"
            >
              Back to World
            </Link>
          </div>
        </div>
      </div>

      {/* 4. Scroll Indicator (ซ่อนในมือถือที่จอเตี้ยมากๆ เพื่อไม่ให้ทับเนื้อหา) */}
      <div className="hidden sm:block absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce opacity-30">
        <div className="w-[1px] h-10 bg-white" />
      </div>
    </section>
  );
}