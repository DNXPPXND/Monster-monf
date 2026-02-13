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

  // 🔵 BLOOP — Seeker
  bloop: {
    name: "BLOOP",
    archetype: "The Seeker",
    tagline: "Dive into questions to find the hidden meaning.",
    personality: "Curious and analytical explorer of ideas.",
    mood: "Curious & Dreamy",
    strengths: "Deep thinking, analytical insight.",
    weaknesses: "Overthinking.",
    hobbies: ["Stargazing", "Mystery books", "Journaling"],
    element: "Water",
    bestMatch: "Deep thinkers.",
    fear: "Questions without answers.",
    quote: "What if there’s more beyond this?",
    selfDescription: "Every detail hides a secret.",
    innerVoice: "If I stop searching… who am I?",
    whenIGrow: "Trusts intuition as much as logic.",
    shadowSide: "Detached from reality.",
    healingPath: "Grounding and reflection.",
    lifeStage: {
      child: "Always asking why.",
      adult: "A philosopher of meaning.",
    },
    compatibility: ["lumin", "vibez"],
    theme: "from-slate-500 to-blue-900",
    img: "/blue_1.png",
  },

  // 🔴 ZEST — Spark
  zest: {
    name: "ZEST",
    archetype: "The Spark",
    tagline: "Ignite your inner fire.",
    personality: "Bold and energetic.",
    mood: "Energetic",
    strengths: "Motivates everyone.",
    weaknesses: "Impatient.",
    hobbies: ["Dancing", "Sports", "Cooking"],
    element: "Fire",
    bestMatch: "Action takers.",
    fear: "Being ignored.",
    quote: "Let’s go now!",
    selfDescription: "Energy never sleeps.",
    innerVoice: "Am I shining enough?",
    whenIGrow: "Becomes controlled fire.",
    shadowSide: "Burns out.",
    healingPath: "Rest and pacing.",
    lifeStage: {
      child: "Fearless.",
      adult: "Inspiring leader.",
    },
    compatibility: ["echo", "ory"],
    theme: "from-slate-500 to-red-700 ",
    img: "/red_1.png",
  },

  // 🟡 LUMIN — Guide
  lumin: {
    name: "LUMIN",
    archetype: "The Guide",
    tagline: "Wisdom lights the way.",
    personality: "Calm and wise.",
    mood: "Peaceful",
    strengths: "Clarity and balance.",
    weaknesses: "Emotionally reserved.",
    hobbies: ["Reading", "Planning"],
    element: "Light",
    bestMatch: "Lost souls seeking direction.",
    fear: "Mistakes.",
    quote: "Every moment teaches.",
    selfDescription: "Lessons shape us.",
    innerVoice: "What if imperfection is okay?",
    whenIGrow: "Balances heart and mind.",
    shadowSide: "Over-responsible.",
    healingPath: "Vulnerability.",
    lifeStage: {
      child: "Mature beyond years.",
      adult: "Trusted mentor.",
    },
    compatibility: ["bloop", "echo"],
   // theme: "from-yellow-400 to-orange-600",
   theme: "from-slate-500 to-yellow-700",
    img: "/yellow_2.png",
  },

  // 🟣 VIBEZ — Dreamer
  vibez: {
    name: "VIBEZ",
    archetype: "The Dreamer",
    tagline: "Create through feeling.",
    personality: "Emotionally intuitive.",
    mood: "Deep",
    strengths: "Creativity.",
    weaknesses: "Sensitive.",
    hobbies: ["Music", "Poetry"],
    element: "Sound",
    bestMatch: "Artists.",
    fear: "Silence.",
    quote: "Feel it first.",
    selfDescription: "Emotion is power.",
    innerVoice: "Why so intense?",
    whenIGrow: "Turns feeling into art.",
    shadowSide: "Withdraws.",
    healingPath: "Creative flow.",
    lifeStage: {
      child: "Imaginative.",
      adult: "Healing artist.",
    },
    compatibility: ["bloop", "ory"],
    //theme: "from-purple-500 to-indigo-700",
    theme: "from-slate-500 to-indigo-700",
    img: "/purple.png",
  },

  // 🟢 ECHO — Connector
  echo: {
    name: "ECHO",
    archetype: "The Connector",
    tagline: "Conversations build bridges.",
    personality: "Friendly and expressive.",
    mood: "Social",
    strengths: "Communication.",
    weaknesses: "Talkative.",
    hobbies: ["Podcasting", "Cafés"],
    element: "Air",
    bestMatch: "Open minds.",
    fear: "Being unheard.",
    quote: "Tell me more.",
    selfDescription: "Voices matter.",
    innerVoice: "Am I listening?",
    whenIGrow: "Becomes mindful communicator.",
    shadowSide: "Avoids silence.",
    healingPath: "Listening deeply.",
    lifeStage: {
      child: "Talkative.",
      adult: "Depth connector.",
    },
    compatibility: ["zest", "lumin"],
    //theme: "from-green-400 to-emerald-700",
    theme: "from-slate-500 to-emerald-700",
    img: "/green_1.png",
  },

  // 🟠 ORY — Creator
  ory: {
    name: "ORY",
    archetype: "The Creator",
    tagline: "Turn vision into reality.",
    personality: "Visionary.",
    mood: "Inspired",
    strengths: "Builds ideas.",
    weaknesses: "Doesn’t finish.",
    hobbies: ["Design", "DIY"],
    element: "Earth",
    bestMatch: "Dreamers.",
    fear: "Creative block.",
    quote: "Let’s create magic.",
    selfDescription: "Ideas never stop.",
    innerVoice: "What if inspiration fades?",
    whenIGrow: "Disciplined creator.",
    shadowSide: "Loses focus.",
    healingPath: "Structure.",
    lifeStage: {
      child: "Inventive.",
      adult: "Grounded visionary.",
    },
    compatibility: ["zest", "vibez"],
    //theme: "from-orange-400 to-red-600",
    theme: "from-slate-500 to-orange-700",
    img: "/orange.png",
  },

  // ⚙️ NOVA — Engineer
  nova: {
    name: "NOVA",
    archetype: "The Engineer",
    tagline: "Everything can be fixed.",
    personality: "Precise and composed.",
    mood: "Focused",
    strengths: "Repair mastery.",
    weaknesses: "Perfectionist.",
    hobbies: ["Repairing", "Metal crafting"],
    element: "Metal",
    bestMatch: "Strategists.",
    fear: "Irreparable damage.",
    quote: "If it's broken, rebuild it.",
    selfDescription: "I fix worlds.",
    innerVoice: "Is it perfect yet?",
    whenIGrow: "Master builder.",
    shadowSide: "Emotionally closed.",
    healingPath: "Acceptance.",
    lifeStage: {
      child: "Takes things apart.",
      adult: "Legendary engineer.",
    },
    compatibility: ["umbra", "royce"],
    theme: "from-slate-700 to-gray-400",
    img: "/silver.png",
  },

  // ⚔️ UMBRA — Warrior
  umbra: {
    name: "UMBRA",
    archetype: "The Warrior",
    tagline: "Strength grows in battle.",
    personality: "Disciplined fighter.",
    mood: "Dark",
    strengths: "Combat mastery.",
    weaknesses: "Isolation.",
    hobbies: ["Training", "Strategy"],
    element: "Void",
    bestMatch: "Fearless allies.",
    fear: "Losing control.",
    quote: "I command the dark.",
    selfDescription: "Battle is clarity.",
    innerVoice: "Never lower guard.",
    whenIGrow: "Fights with purpose.",
    shadowSide: "Pushes others away.",
    healingPath: "Trust allies.",
    lifeStage: {
      child: "Protective.",
      adult: "Shadow legend.",
    },
    compatibility: ["nova"],
    theme: "from-slate-800 to-black",
    img: "/black_1.png",
  },

  // 🍳 AURA — Chef
  aura: {
    name: "AURA",
    archetype: "The Chef",
    tagline: "Healing through food.",
    personality: "Warm and caring.",
    mood: "Comforting",
    strengths: "Cooking mastery.",
    weaknesses: "Self-sacrifice.",
    hobbies: ["Baking", "Tea crafting"],
    element: "Spirit",
    bestMatch: "Warriors.",
    fear: "Not needed.",
    quote: "Eat first.",
    selfDescription: "Food heals.",
    innerVoice: "Who heals me?",
    whenIGrow: "Balanced nurturer.",
    shadowSide: "Neglects self.",
    healingPath: "Self-love.",
    lifeStage: {
      child: "Shares snacks.",
      adult: "Legendary chef.",
    },
    compatibility: ["lumin", "royce"],
    //theme: "from-pink-400 to-rose-600",
    theme: "from-slate-500 to-rose-700",
    img: "/pink.png",
  },

  // 🤍 ROYCE — Sovereign (White / Wealth)
  royce: {
    name: "ROYCE",
    archetype: "The Sovereign",
    tagline: "Wealth creates worlds.",
    personality: "Elegant strategist.",
    mood: "Luxury",
    strengths: "Economic mastery.",
    weaknesses: "Detached.",
    hobbies: ["Investing", "Collecting artifacts"],
    element: "Light",
    bestMatch: "Empire builders.",
    fear: "Losing legacy.",
    quote: "Value is built.",
    selfDescription: "I build empires.",
    innerVoice: "Will it last?",
    whenIGrow: "Wise ruler.",
    shadowSide: "Materialistic.",
    healingPath: "Generosity.",
    lifeStage: {
      child: "Ambitious.",
      adult: "Sovereign leader.",
    },
    compatibility: ["nova", "aura"],
    theme: "from-slate-600 to-black",
    img: "/white.png",
  },

};
