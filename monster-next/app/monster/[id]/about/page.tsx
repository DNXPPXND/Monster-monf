import { monsters } from "@/data/monsters";
import Link from "next/link";
import { notFound } from "next/navigation";

export default async function MonsterAbout({
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
        min-h-screen relative overflow-hidden
        px-6 py-24 md:px-12
        bg-gradient-to-br ${monster.theme}
        text-white/90 selection:bg-white/30
      `}
    >
      {/* Decorative Background Elements */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-white/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-black/20 blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        
        {/* Header Section */}
        <header className="mb-16">
          <Link
            href={`/monster/${id}`}
            className="group inline-flex items-center gap-2 mb-8 text-sm font-medium opacity-70 hover:opacity-100 transition-all"
          >
            <span className="group-hover:-translate-x-1 transition-transform">←</span> BACK TO PROFILE
          </Link>
          
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-6 drop-shadow-2xl">
            {monster.name}
          </h1>

          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-white/20 to-transparent rounded-3xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
            <div className="relative p-8 md:p-10 bg-white/10 backdrop-blur-xl rounded-[2rem] border border-white/20 shadow-2xl">
              <span className="text-4xl absolute -top-4 -left-2 opacity-50">“</span>
              <p className="text-xl md:text-2xl font-light leading-relaxed italic">
                {monster.quote}
              </p>
              <span className="text-4xl absolute -bottom-10 -right-2 opacity-50">”</span>
            </div>
          </div>
        </header>

        {/* Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
          <InfoCard title="ARCHETYPE" value={monster.archetype} emoji="🔮" />
          <InfoCard title="MOOD" value={monster.mood} emoji="✨" />
          <InfoCard title="STRENGTHS" value={monster.strengths} emoji="💪" />
          <InfoCard title="WEAKNESSES" value={monster.weaknesses} emoji="🩹" />
          <InfoCard full title="SELF DESCRIPTION" value={monster.selfDescription} emoji="👤" />
          <InfoCard full title="INNER VOICE" value={monster.innerVoice} emoji="💭" />
          <InfoCard full title="WHEN I GROW" value={monster.whenIGrow} emoji="🌱" />
        </div>

        {/* Hobbies & Compatibility Side by Side */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <section>
            <h3 className="flex items-center gap-2 mb-6 text-xs tracking-[0.2em] font-bold opacity-60 uppercase">
              <span>●</span> Hobbies
            </h3>
            <div className="flex flex-wrap gap-3">
              {monster.hobbies.map((hobby) => (
                <span
                  key={hobby}
                  className="px-5 py-2.5 bg-white/10 border border-white/10 rounded-2xl text-sm font-medium hover:bg-white/20 hover:scale-105 transition-all cursor-default"
                >
                  {hobby}
                </span>
              ))}
            </div>
          </section>

          <section>
            <h3 className="flex items-center gap-2 mb-6 text-xs tracking-[0.2em] font-bold opacity-60 uppercase">
              <span>●</span> Best Matches
            </h3>
            <div className="flex flex-wrap gap-3">
              {monster.compatibility.map((match) => (
                <Link
                  key={match}
                  href={`/monster/${match}/about`}
                  className="px-5 py-2.5 bg-white/20 border border-white/30 rounded-2xl text-sm font-bold shadow-lg hover:bg-white hover:text-black hover:-translate-y-1 transition-all"
                >
                  {monsters[match].name}
                </Link>
              ))}
            </div>
          </section>
        </div>

        <footer className="pt-10 border-t border-white/10 text-center">
           <p className="text-sm opacity-40">Created for the Monster Universe © 2026</p>
        </footer>
      </div>
    </section>
  );
}

function InfoCard({
  title,
  value,
  full,
  emoji,
}: {
  title: string;
  value: string;
  full?: boolean;
  emoji?: string;
}) {
  return (
    <div
      className={`
        group p-8 rounded-[2rem]
        bg-white/5 border border-white/10
        backdrop-blur-md hover:bg-white/10
        hover:border-white/30 transition-all duration-500
        ${full ? "md:col-span-2" : ""}
      `}
    >
      <div className="flex items-center gap-2 mb-4">
        <span className="text-lg opacity-80 group-hover:scale-125 transition-transform">{emoji}</span>
        <h3 className="text-xs tracking-widest font-black opacity-50 group-hover:opacity-100 transition-opacity">
          {title}
        </h3>
      </div>
      <p className="text-lg leading-relaxed font-medium">
        {value}
      </p>
    </div>
  );
}