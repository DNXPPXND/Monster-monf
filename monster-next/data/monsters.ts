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
  // 🔵 BLOOP
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
      "I become someone who trusts intuition as much as logic.",
    shadowSide:
      "Detached from reality when lost in thoughts.",
    healingPath:
      "Grounding through nature and sharing thoughts.",
    lifeStage: {
      child: "Endlessly curious, always asking 'why?'",
      adult: "A reflective philosopher.",
    },
    compatibility: ["lumin", "vibez"],
    theme: "from-cyan-400 to-blue-700",
    img: "/m_blue.png",
  },

  // 🔴 ZEST
  zest: {
    name: "ZEST",
    archetype: "The Spark",
    tagline: "Ignite your inner spark and go full speed ahead!",
    personality: "Bold, expressive, and full of vibrant energy.",
    mood: "Energetic & Warm",
    strengths: "Motivates others.",
    weaknesses: "Impatient.",
    hobbies: ["Dancing", "Baking", "Working out"],
    element: "Fire",
    bestMatch: "People who need courage.",
    fear: "Being ignored.",
    quote: "Let’s do it now!",
    selfDescription:
      "Life is too short to hesitate.",
    innerVoice: "If I stop shining… will anyone notice me?",
    whenIGrow:
      "I become a steady flame.",
    shadowSide: "Burns out quickly.",
    healingPath: "Rest and patience.",
    lifeStage: {
      child: "Fearless and playful.",
      adult: "An inspiring leader.",
    },
    compatibility: ["echo", "ory"],
    theme: "from-rose-500 to-red-700",
    img: "/m_red.png",
  },

  // 🟡 LUMIN
  lumin: {
    name: "LUMIN",
    archetype: "The Guide",
    tagline: "Lead your life with wisdom.",
    personality: "Calm and thoughtful.",
    mood: "Calm & Wise",
    strengths: "Clarity.",
    weaknesses: "Suppresses emotion.",
    hobbies: ["Reading", "Planning"],
    element: "Light",
    bestMatch: "Those seeking direction.",
    fear: "Preventable mistakes.",
    quote: "Every moment teaches something.",
    selfDescription: "Every experience holds a lesson.",
    innerVoice: "What if I allowed imperfection?",
    whenIGrow: "Balance wisdom and vulnerability.",
    shadowSide: "Over-responsible.",
    healingPath: "Opening emotionally.",
    lifeStage: {
      child: "Naturally mature.",
      adult: "A mentor.",
    },
    compatibility: ["bloop", "echo"],
    theme: "from-yellow-400 to-orange-600",
    img: "/m_yellow.png",
  },

  // 🟣 VIBEZ
  vibez: {
    name: "VIBEZ",
    archetype: "The Dreamer",
    tagline: "Create through feeling.",
    personality: "Emotionally intuitive.",
    mood: "Deep & Emotional",
    strengths: "Empathy and creativity.",
    weaknesses: "Overly sensitive.",
    hobbies: ["Music", "Poetry"],
    element: "Sound",
    bestMatch: "Quiet souls.",
    fear: "Meaningless silence.",
    quote: "Feel it before you speak it.",
    selfDescription: "I feel everything intensely.",
    innerVoice: "Why so much emotion?",
    whenIGrow: "Turn sensitivity into strength.",
    shadowSide: "Withdraws emotionally.",
    healingPath: "Creative expression.",
    lifeStage: {
      child: "Imaginative.",
      adult: "An expressive artist.",
    },
    compatibility: ["bloop", "ory"],
    theme: "from-purple-500 to-indigo-700",
    img: "/m_purple.png",
  },

  // 🟢 ECHO
  echo: {
    name: "ECHO",
    archetype: "The Connector",
    tagline: "Build bridges through conversation.",
    personality: "Friendly and expressive.",
    mood: "Friendly & Curious",
    strengths: "Communication.",
    weaknesses: "Talks too much.",
    hobbies: ["Podcasting", "Meeting people"],
    element: "Air",
    bestMatch: "Open communicators.",
    fear: "Being unheard.",
    quote: "Tell me more.",
    selfDescription: "Conversations build bridges.",
    innerVoice: "Am I listening deeply?",
    whenIGrow: "Powerful listener.",
    shadowSide: "Avoids silence.",
    healingPath: "Mindful pauses.",
    lifeStage: {
      child: "Talkative.",
      adult: "Depth connector.",
    },
    compatibility: ["zest", "lumin"],
    theme: "from-green-400 to-emerald-700",
    img: "/m_green.png",
  },

  // 🟠 ORY
  ory: {
    name: "ORY",
    archetype: "The Creator",
    tagline: "Turn inspiration into reality.",
    personality: "Visionary.",
    mood: "Inspired",
    strengths: "Brings ideas to life.",
    weaknesses: "Struggles to finish.",
    hobbies: ["Painting", "Design"],
    element: "Earth",
    bestMatch: "Dreamers ready to act.",
    fear: "Creative burnout.",
    quote: "Let’s create magic.",
    selfDescription: "My mind is full of colors.",
    innerVoice: "What if inspiration disappears?",
    whenIGrow: "Disciplined creator.",
    shadowSide: "Feels lost without momentum.",
    healingPath: "Structured routine.",
    lifeStage: {
      child: "Inventive.",
      adult: "Grounded visionary.",
    },
    compatibility: ["zest", "vibez"],
    theme: "from-orange-400 to-red-600",
    img: "/m_orange.png",
  },

  nova: {
    name: "NOVA",
    archetype: "The Radiant",
    tagline: "Shine with quiet strength.",
    personality: "Confident, composed, and effortlessly powerful.",
    mood: "Elegant & Dominant",
    strengths: "Natural leadership presence, calm authority, strategic clarity.",
    weaknesses: "Can appear emotionally distant.",
    hobbies: ["Chess", "Architecture", "Minimalist design"],
    element: "Metal",
    bestMatch: "Strategic thinkers and grounded leaders.",
    fear: "Losing control.",
    quote: "Power doesn’t need to be loud.",
    selfDescription:
      "I move with intention. I don’t chase attention — I command it quietly.",
    innerVoice: "Strength is silence.",
    whenIGrow:
      "I become a stable force others rely on.",
    shadowSide:
      "Too self-contained, struggles to show vulnerability.",
    healingPath:
      "Opening up emotionally and trusting others.",
    lifeStage: {
      child: "Quietly observant and mature.",
      adult: "A composed leader with grounded authority.",
    },
    compatibility: ["umbra", "lumin"],
    theme: "from-gray-400 to-slate-700",
    img: "/m_secret.png",
  },


  // ⚫ UMBRA (DARK)
  umbra: {
    name: "UMBRA",
    archetype: "The Shadow",
    tagline: "Strength grows in silence.",
    personality: "Mysterious and deep.",
    mood: "Dark & Powerful",
    strengths: "Emotional resilience.",
    weaknesses: "Isolation.",
    hobbies: ["Night walks", "Philosophy"],
    element: "Void",
    bestMatch: "Introspective minds.",
    fear: "Being exposed.",
    quote: "Silence speaks.",
    selfDescription: "I observe before acting.",
    innerVoice: "Is solitude safety?",
    whenIGrow: "Balanced solitude.",
    shadowSide: "Pushes others away.",
    healingPath: "Trust and openness.",
    lifeStage: {
      child: "Quiet observer.",
      adult: "Grounded strategist.",
    },
    compatibility: ["bloop"],
    theme: "from-slate-700 to-black",
    img: "/m_black.png",
  },

  // 💖 AURA (PINK)
  aura: {
    name: "AURA",
    archetype: "The Healer",
    tagline: "Warmth is your superpower.",
    personality: "Compassionate and gentle.",
    mood: "Soft & Loving",
    strengths: "Empathy.",
    weaknesses: "Self-sacrifice.",
    hobbies: ["Volunteering", "Gardening"],
    element: "Spirit",
    bestMatch: "Sensitive hearts.",
    fear: "Letting others down.",
    quote: "You are safe here.",
    selfDescription: "I care deeply.",
    innerVoice: "Who heals the healer?",
    whenIGrow: "Healthy boundaries.",
    shadowSide: "Neglects self-care.",
    healingPath: "Prioritizing self-love.",
    lifeStage: {
      child: "Naturally caring.",
      adult: "Gentle protector.",
    },
    compatibility: ["lumin"],
    theme: "from-pink-400 to-rose-600",
    img: "/m_pink.png",
  },
};
