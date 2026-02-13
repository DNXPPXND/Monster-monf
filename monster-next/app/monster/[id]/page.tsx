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
        flex flex-col
        px-6 py-16 md:px-12 md:py-24 overflow-hidden
        bg-gradient-to-br ${monster.theme}
        text-white
      `}
    >
      {/* ================= HERO SECTION ================= */}
      <div className="relative flex-1 flex items-center justify-center">
        {/* Background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <span className="absolute -left-10 md:-left-20 top-1/2 -translate-y-1/2 text-[30vw] md:text-[25vw] font-black opacity-[0.02] md:opacity-[0.03] select-none whitespace-nowrap">
            {monster.name.toUpperCase()}
          </span>
          <div className="absolute w-[400px] md:w-[800px] h-[400px] md:h-[800px] bg-white/10 blur-[100px] -top-1/4 -right-1/4 rounded-full animate-pulse" />
        </div>

        <div className="relative z-10 max-w-7xl w-full flex flex-col lg:flex-row items-center justify-between gap-16">
          
          {/* IMAGE */}
          <div className="relative group flex-1 flex justify-center lg:justify-end">
            <div className="absolute inset-0 bg-white/20 blur-[80px] rounded-full scale-75 opacity-50" />
            <div className="relative transition-all duration-1000 group-hover:scale-105 animate-[float_6s_ease-in-out_infinite]">
              <Image
                src={monster.img}
                alt={monster.name}
                width={600}
                height={600}
                priority
                className="w-[280px] sm:w-[420px] md:w-[520px] lg:w-[600px] h-auto drop-shadow-2xl object-contain"
              />
            </div>
          </div>

          {/* TEXT */}
          <div className="flex-1 text-center lg:text-left">
            
            {/* Tags */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-2 mb-6">
              {[monster.archetype, monster.mood, monster.element].map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-1.5 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-[10px] font-bold tracking-widest uppercase"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Name */}
            <h1 className="text-[clamp(40px,12vw,110px)] font-black tracking-tighter mb-4 leading-[0.9] drop-shadow-2xl">
              {monster.name}
            </h1>

            {/* Tagline */}
            <p className="text-lg md:text-2xl font-light text-white/90 leading-snug max-w-lg mx-auto lg:mx-0 mb-6">
              {monster.tagline}
            </p>

            <div className="w-16 h-1 bg-white/30 mx-auto lg:mx-0 rounded-full mb-6" />

            {/* Quote */}
            <p className="italic text-base md:text-lg text-white/70 font-light max-w-md mx-auto lg:mx-0 border-l-0 lg:border-l-2 border-white/20 lg:pl-6">
              “{monster.quote}”
            </p>

            {/* Buttons */}
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center">
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
      </div>

      {/* ================= EXTENDED SECTION ================= */}
      <div className="relative z-10 max-w-6xl mx-auto mt-32 space-y-24">

        {/* LORE */}
        <div className="text-center space-y-6">
          <h2 className="text-3xl md:text-5xl font-black tracking-tight">
            ORIGIN
          </h2>
          <p className="max-w-3xl mx-auto text-white/80 leading-relaxed text-lg">
            {monster.lore}
          </p>
        </div>

        {/* PERSONALITY */}
        <div className="grid md:grid-cols-2 gap-16">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Personality</h3>
            <p className="text-white/80">{monster.personality}</p>
            <p className="text-white/60"><strong>Strengths:</strong> {monster.strengths}</p>
            <p className="text-white/60"><strong>Weaknesses:</strong> {monster.weaknesses}</p>
            <p className="text-white/60"><strong>Fear:</strong> {monster.fear}</p>
          </div>

          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Inner World</h3>
            <p className="text-white/80 italic"> &ldquo;{monster.innerVoice}&rdquo;</p>
            <p className="text-white/60">{monster.selfDescription}</p>
            <p className="text-white/60"><strong>Shadow:</strong> {monster.shadowSide}</p>
            <p className="text-white/60"><strong>Healing:</strong> {monster.healingPath}</p>
          </div>
        </div>

        {/* LIFE STAGE */}
        <div className="text-center space-y-8">
          <h3 className="text-2xl font-bold">Life Evolution</h3>
          <div className="flex flex-col md:flex-row justify-center gap-12">
            <div>
              <p className="text-white/50 uppercase text-xs tracking-widest">Child</p>
              <p className="text-lg">{monster.lifeStage.child}</p>
            </div>
            <div>
              <p className="text-white/50 uppercase text-xs tracking-widest">Adult</p>
              <p className="text-lg">{monster.lifeStage.adult}</p>
            </div>
          </div>
        </div>

        {/* STATS */}
        <div className="space-y-8">
          <h3 className="text-2xl font-bold text-center">Core Stats</h3>
          {Object.entries(monster.stats).map(([key, value]) => (
            <div key={key}>
              <div className="flex justify-between text-sm mb-1">
                <span className="uppercase tracking-widest">{key}</span>
                <span>{value}%</span>
              </div>
              <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                <div
                  className="h-full bg-white transition-all duration-1000"
                  style={{ width: `${value}%` }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* SIGNATURE ITEMS */}
        <div className="space-y-10">
          <h3 className="text-2xl font-bold text-center">Signature Items</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {monster.signatureItems.map((item) => (
              <div
                key={item.name}
                className="p-6 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl hover:bg-white/10 transition"
              >
                <h4 className="font-bold mb-2">{item.name}</h4>
                <p className="text-white/70 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* COMPATIBILITY */}
        <div className="text-center space-y-6 pb-20">
          <h3 className="text-2xl font-bold">Best Compatibility</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {monster.compatibility.map((compatId) => (
              <Link
                key={compatId}
                href={`/monster/${compatId}`}
                className="px-5 py-2 bg-white/10 rounded-full text-sm hover:bg-white/20 transition"
              >
                {compatId.toUpperCase()}
              </Link>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
