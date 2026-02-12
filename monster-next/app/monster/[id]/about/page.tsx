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
        min-h-screen
        px-8 py-20
        bg-gradient-to-br
        ${monster.theme}
        text-white
      `}
    >
      <div className="max-w-5xl mx-auto ">

        <h1 className="text-[clamp(35px,5vw,70px)] mb-10 mt-15
         font-bold">
          {monster.name}
        </h1>

        <div className="mb-12 p-8 bg-white/10 rounded-3xl border-l-4 border-white/50 italic text-lg backdrop-blur-md">
          &ldquo;{monster.quote}&rdquo;
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <InfoCard title="ARCHETYPE" value={monster.archetype} />
          <InfoCard title="MOOD" value={monster.mood} />
          <InfoCard title="STRENGTHS" value={monster.strengths} />
          <InfoCard title="WEAKNESSES" value={monster.weaknesses} />
          <InfoCard full title="SELF DESCRIPTION" value={monster.selfDescription} />
          <InfoCard full title="INNER VOICE" value={monster.innerVoice} />
          <InfoCard full title="WHEN I GROW" value={monster.whenIGrow} />
        </div>

        {/* Hobbies */}
        <div className="mb-16">
          <h3 className="mb-6 opacity-80 tracking-widest text-sm">
            HOBBIES
          </h3>

          <div className="flex flex-wrap gap-4">
            {monster.hobbies.map((hobby) => (
              <span
                key={hobby}
                className="px-6 py-3 bg-white/15 border border-white/30 rounded-full text-sm hover:bg-white/25 transition"
              >
                {hobby}
              </span>
            ))}
          </div>
        </div>

        {/* Compatibility */}
        <div className="mb-16">
          <h3 className="mb-6 opacity-80 tracking-widest text-sm">
            BEST MATCHES
          </h3>

          <div className="flex flex-wrap gap-4">
            {monster.compatibility.map((match) => (
              <Link
                key={match}
                href={`/monster/${match}/about`}
                className="px-6 py-3 bg-white/15 border border-white/30 rounded-full hover:bg-white/25 transition"
              >
                {monsters[match].name}
              </Link>
            ))}
          </div>
        </div>

        <Link
          href={`/monster/${id}`}
          className="inline-block px-6 py-3 border border-white rounded-full hover:bg-white/20 transition"
        >
          ← Back
        </Link>
      </div>
    </section>
  );
}

function InfoCard({
  title,
  value,
  full,
}: {
  title: string;
  value: string;
  full?: boolean;
}) {
  return (
    <div
      className={`
        p-8 rounded-3xl
        bg-white/10 border border-white/20
        backdrop-blur-md
        ${full ? "md:col-span-2" : ""}
      `}
    >
      <h3 className="text-xs tracking-widest opacity-70 mb-3">
        {title}
      </h3>
      <p className="text-base leading-relaxed opacity-90">
        {value}
      </p>
    </div>
  );
}
