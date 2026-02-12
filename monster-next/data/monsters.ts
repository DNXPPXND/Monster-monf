// 🔹 Type ของ lifeStage
export interface LifeStage {
  child: string;
  adult: string;
}

// 🔹 Type หลักของ Monster
export interface Monster {
  id: string;
  name: string;
  archetype: string;
  tagline: string;
  personality: string;
  mood: string;
  strengths: string;
  weaknesses: string;
  hobbies: string[];
  element: string;
  bestMatch: string;
  fear: string;
  quote: string;
  selfDescription: string;
  innerVoice: string;
  whenIGrow: string;
  shadowSide: string;
  healingPath: string;
  lifeStage: LifeStage;
  compatibility: string[];
  theme: string;
  img: string;
}

export const monsters: Record<string, Omit<Monster, "id">> = {
  bloop: {
    name: "BLOOP",
    archetype: "The Seeker",
    tagline: "Dive into questions to find the hidden meaning.",
    personality: "Curious and analytical explorer of ideas.",
    mood: "Curious & Dreamy",
    strengths: "Deep thinking, analytical insight, abstract ideas.",
    weaknesses: "Overthinking, slow decision-making.",
    hobbies: ["Stargazing", "Reading mystery books", "Journaling"],
    element: "Water",
    bestMatch: "Lifelong learners and deep thinkers.",
    fear: "Questions without answers.",
    quote: "What if there’s more beyond this?",
    selfDescription:
      "I rarely stop questioning the world. Even the smallest detail feels like a doorway to something deeper.",
    innerVoice: "If I stop searching… will I lose who I am?",
    whenIGrow:
      "I become someone who trusts intuition as much as logic, exploring without fear of uncertainty.",
    shadowSide:
      "Detached from reality when lost in thoughts. Can feel isolated in intellectual depth.",
    healingPath:
      "Grounding through nature, mindful breathing, and sharing thoughts with trusted people.",
    lifeStage: {
      child: "Endlessly curious, always asking 'why?'",
      adult: "A reflective philosopher who values meaning over speed.",
    },
    compatibility: ["lumin", "vibez"],
    theme: "from-cyan-400 to-blue-700",
    img: "/m_blue.png",
  },

  zest: {
    name: "ZEST",
    archetype: "The Spark",
    tagline: "Ignite your inner spark and go full speed ahead!",
    personality: "Bold, expressive, and full of vibrant energy.",
    mood: "Energetic & Warm",
    strengths: "Motivates others, brings excitement to any space.",
    weaknesses: "Impatient, easily bored.",
    hobbies: ["Dancing", "Baking", "Working out"],
    element: "Fire",
    bestMatch: "People who need courage and momentum.",
    fear: "Being ignored or overlooked.",
    quote: "Let’s do it now!",
    selfDescription:
      "Life is too short to hesitate. I love loud laughter and bold moves.",
    innerVoice: "If I stop shining… will anyone notice me?",
    whenIGrow:
      "I become a steady flame—still passionate, but balanced and intentional.",
    shadowSide: "Burns out quickly, acts before thinking.",
    healingPath: "Rest, slowing down, and practicing patience.",
    lifeStage: {
      child: "Fearless and playful, always the first to try.",
      adult: "An inspiring leader who channels passion with purpose.",
    },
    compatibility: ["echo", "ory"],
    theme: "from-rose-500 to-red-700",
    img: "/m_red.png",
  },

  lumin: {
    name: "LUMIN",
    archetype: "The Guide",
    tagline: "Maintain your stillness to lead your life with wisdom.",
    personality: "Calm, wise, and strategically thoughtful.",
    mood: "Calm & Wise",
    strengths: "Clarity, emotional intelligence, strong perspective.",
    weaknesses: "Suppresses personal emotions.",
    hobbies: [
      "Collecting antiques",
      "Life planning",
      "Reading self-growth essays",
    ],
    element: "Light",
    bestMatch: "Those seeking direction and clarity.",
    fear: "Preventable mistakes.",
    quote: "Every moment teaches something.",
    selfDescription: "I believe every experience holds a lesson.",
    innerVoice: "What if I allowed myself to be imperfect?",
    whenIGrow: "I balance wisdom with vulnerability.",
    shadowSide: "Over-responsible, struggles to ask for help.",
    healingPath: "Opening up emotionally and accepting imperfection.",
    lifeStage: {
      child: "Naturally mature beyond years.",
      adult: "A mentor who empowers without controlling.",
    },
    compatibility: ["bloop", "echo"],
    theme: "from-yellow-400 to-orange-600",
    img: "/m_yellow.png",
  },

  vibez: {
    name: "VIBEZ",
    archetype: "The Dreamer",
    tagline: "Let your heart lead and create through feeling.",
    personality: "Emotionally intuitive and artistically deep.",
    mood: "Deep & Emotional",
    strengths: "Empathy, creativity, emotional awareness.",
    weaknesses: "Overly sensitive, easily overwhelmed.",
    hobbies: ["Late-night music", "Poetry writing", "Photography"],
    element: "Sound",
    bestMatch: "Quiet souls who value emotional depth.",
    fear: "Meaningless silence.",
    quote: "Feel it before you speak it.",
    selfDescription: "I feel everything intensely.",
    innerVoice: "Why do I carry so much feeling inside?",
    whenIGrow: "I transform sensitivity into creative strength.",
    shadowSide: "Withdraws emotionally when overwhelmed.",
    healingPath: "Creative expression and setting healthy boundaries.",
    lifeStage: {
      child: "Imaginative and emotionally aware.",
      adult: "An artist who heals through expression.",
    },
    compatibility: ["bloop", "ory"],
    theme: "from-purple-500 to-indigo-700",
    img: "/m_purple.png",
  },

  echo: {
    name: "ECHO",
    archetype: "The Connector",
    tagline: "Connect every emotion through sincere conversation.",
    personality: "Friendly, expressive, and socially curious.",
    mood: "Friendly & Curious",
    strengths: "Communication, relationship-building, openness.",
    weaknesses: "Talks more than listens sometimes.",
    hobbies: ["Podcasting", "Café hopping", "Meeting new people"],
    element: "Air",
    bestMatch: "Open-minded communicators.",
    fear: "Being unheard.",
    quote: "Tell me more.",
    selfDescription: "I believe conversations build bridges.",
    innerVoice: "Am I really listening deeply enough?",
    whenIGrow: "I become a powerful listener.",
    shadowSide: "Avoids silence and deeper confrontation.",
    healingPath: "Practicing active listening and mindful pauses.",
    lifeStage: {
      child: "Talkative and curious about everyone.",
      adult: "A connector who values depth over noise.",
    },
    compatibility: ["zest", "lumin"],
    theme: "from-green-400 to-emerald-700",
    img: "/m_green.png",
  },

  ory: {
    name: "ORY",
    archetype: "The Creator",
    tagline: "Turn inspiration into a reality you can touch.",
    personality: "Visionary, imaginative, and expressive.",
    mood: "Inspired & Imaginative",
    strengths: "Turning ideas into tangible creations.",
    weaknesses: "Starts many things, struggles to finish.",
    hobbies: ["Painting", "DIY projects", "Designing concepts"],
    element: "Earth",
    bestMatch: "Dreamers ready to act.",
    fear: "Creative burnout.",
    quote: "Let’s create something magical.",
    selfDescription: "My mind is full of colors and visions.",
    innerVoice: "What if my inspiration disappears?",
    whenIGrow: "I become a disciplined creator.",
    shadowSide: "Feels lost without creative momentum.",
    healingPath: "Structured routines and finishing small projects.",
    lifeStage: {
      child: "Inventive and hands-on with imagination.",
      adult: "A grounded creator who blends vision with discipline.",
    },
    compatibility: ["zest", "vibez"],
    theme: "from-orange-400 to-red-600",
    img: "/m_orange.png",
  },
};
