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
        min-h-screen
        flex items-center justify-center
        px-10 py-20
        bg-gradient-to-br
        ${monster.theme}
        text-white
        relative overflow-hidden
      `}
    >
      {/* Glow Background */}
      <div className="absolute w-[600px] h-[600px] bg-white/10 blur-[140px] top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2" />

      <div className="relative z-10 flex flex-col lg:flex-row items-center gap-16 max-w-6xl w-full">

        {/* Image */}
        <div className="animate-[float_6s_ease-in-out_infinite]">
          <Image
            src={monster.img}
            alt={monster.name}
            width={500}
            height={500}
            className="drop-shadow-[0_0_50px_rgba(255,255,255,0.4)]"
          />
        </div>

        {/* Text */}
        <div className="max-w-xl">
          <h1 className="text-[clamp(50px,7vw,100px)] tracking-[4px] font-bold mb-6">
            {monster.name}
          </h1>

          <div className="inline-block px-6 py-4 bg-white/15 backdrop-blur-md rounded-2xl mb-8 text-base">
            {monster.tagline}
          </div>

          <Link
            href={`/monster/${id}/about`}
            className="inline-block px-8 py-4 bg-white/20 border border-white/30 rounded-full hover:bg-white/30 transition"
          >
            About {monster.name}
          </Link>
        </div>
      </div>
    </section>
  );
}
