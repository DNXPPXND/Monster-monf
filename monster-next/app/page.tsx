import { monsters } from "@/data/monsters";
import Image from "next/image";
import Link from "next/link";

type Props = {
  params: {
    id: string;
  };
};

export default function MonsterPage({ params }: Props) {
  const { id } = params;

  const monster = monsters[id as keyof typeof monsters];

  if (!monster) return <div>Monster not found</div>;

  return (
    <section
  className={`
    min-h-screen w-full
    flex items-center
    ${monster.theme}
    text-white
  `}
>
  <div className="w-full flex flex-col lg:flex-row items-center">

    {/* IMAGE SIDE */}
    <div className="flex-1 flex justify-center">
      <Image
        src={monster.img}
        alt={monster.name}
        width={1400}
        height={1400}
        priority
        className="
          w-[90vw]
          lg:w-[60vw]
          max-w-[1000px]
          h-auto
          drop-shadow-[0_0_100px_rgba(255,255,255,0.5)]
        "
      />
    </div>

    {/* TEXT SIDE */}
    <div className="flex-1 px-10">
      <h1 className="text-[clamp(50px,8vw,120px)] font-bold mb-6">
        {monster.name}
      </h1>

      <p className="bg-white/20 backdrop-blur-md px-6 py-4 rounded-2xl mb-8 max-w-md">
        {monster.tagline}
      </p>

      <Link
        href={`/monster/${id}/about`}
        className="inline-block px-8 py-4 rounded-full border border-white/30 bg-white/10 hover:bg-white hover:text-black transition"
      >
        About {monster.name}
      </Link>
    </div>

  </div>
</section>

  );
}
