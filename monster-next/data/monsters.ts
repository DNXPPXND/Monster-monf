// ===============================
// MONF MONSTER DATA SYSTEM
// ===============================

export interface LifeStage {
  child: string;
  adult: string;
}

export interface Stat {
  influence: number;
  wisdom: number;
  rarity: number;
  stability: number;
}

export interface SignatureItem {
  name: string;
  desc: string;
}

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
  lore: string;
  stats: Stat;
  signatureItems: SignatureItem[];
}

// ===============================
// MONSTERS RECORD
// ===============================

export const monsters: Record<string, Omit<Monster, "id">> = {

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
    lore:
      "Bloop originated from the deepest pressure of the Silence Ocean. While others swim for survival, Bloop swims for 'Why'. It doesn't just see the water; it calculates the flow of existence. Legend says Bloop once found a sunken library and spent a century reading through the ripples.",
    stats: { influence: 65, wisdom: 95, rarity: 80, stability: 45 },
    signatureItems: [
      { name: "The Infinite Lens", desc: "A droplet that magnifies the truth in any lie." },
      { name: "Ink of Echoes", desc: "Writing that speaks back to the author." },
      { name: "Deep-Sea Compass", desc: "Points only toward things worth knowing." }
    ]
  },

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
    theme: "from-slate-500 to-red-700",
    img: "/red_1.png",
    lore:
      "Zest is the physical manifestation of a dying star's final wish. It carries a relentless heat that doesn't consume, but creates. Where Zest walks, the air vibrates with possibility.",
    stats: { influence: 88, wisdom: 40, rarity: 75, stability: 30 },
    signatureItems: [
      { name: "Ignition Ring", desc: "Turns any movement into a burst of light." },
      { name: "Sonic Sneakers", desc: "Footwear that leaves trails of warm embers." },
      { name: "Ever-Burning Torch", desc: "A light that glows brighter when others are afraid." }
    ]
  },

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
    theme: "from-slate-500 to-yellow-700",
    img: "/yellow_2.png",
    lore:
      "Born from the first ray of dawn after a thousand-year night, Lumin is the steady hand in the storm.",
    stats: { influence: 92, wisdom: 98, rarity: 85, stability: 90 },
    signatureItems: [
      { name: "Lantern of Truth", desc: "Reveals paths that are hidden by fear." },
      { name: "Elder's Scroll", desc: "A document that updates itself with new wisdom." },
      { name: "Prism Cloak", desc: "Neutralizes negative energy by breaking it into colors." }
    ]
  },
    vibez: {
    name: "VIBEZ",
    archetype: "The Pulse Master",
    tagline: "Feel the frequency of the universe.",
    personality: "Emotionally intuitive and rhythm-driven.",
    mood: "Vibing & Electric",
    strengths: "Emotional awareness, creativity.",
    weaknesses: "Mood swings.",
    hobbies: ["Music production", "Night walks", "DJ sessions"],
    element: "Sound",
    bestMatch: "Free spirits.",
    fear: "Silence without meaning.",
    quote: "Can you feel that?",
    selfDescription: "I speak in frequencies.",
    innerVoice: "If the music stops… do I disappear?",
    whenIGrow: "Masters emotional balance.",
    shadowSide: "Lost in feelings.",
    healingPath: "Mindful grounding.",
    lifeStage: {
      child: "Dances before walking.",
      adult: "Creates emotional harmony.",
    },
    compatibility: ["aura", "zest"],
    theme: "from-slate-700 to-purple-700",
    img: "/purple.png",
    lore:
      "Vibez was born from the first heartbeat of a forming planet. Its body hums with invisible waves, tuning the emotions of everyone nearby.",
    stats: { influence: 85, wisdom: 70, rarity: 78, stability: 55 },
    signatureItems: [
      { name: "Pulse Core", desc: "A crystal that beats in sync with nearby souls." },
      { name: "Wave Blades", desc: "Invisible arcs of compressed vibration." },
      { name: "Neon Headset", desc: "Lets Vibez hear hidden emotions." }
    ]
  },

  echo: {
    name: "ECHO",
    archetype: "The Resonance",
    tagline: "Every shadow has a voice.",
    personality: "Observant and mysterious.",
    mood: "Silent & Deep",
    strengths: "Listening, emotional depth.",
    weaknesses: "Withdrawn.",
    hobbies: ["Writing poetry", "Moon watching"],
    element: "Shadow",
    bestMatch: "Introspective souls.",
    fear: "Being forgotten.",
    quote: "I am what remains.",
    selfDescription: "I exist between sound and silence.",
    innerVoice: "Will they remember me?",
    whenIGrow: "Speaks truths bravely.",
    shadowSide: "Isolation.",
    healingPath: "Connection.",
    lifeStage: {
      child: "Quiet observer.",
      adult: "Voice of hidden truths.",
    },
    compatibility: ["lumin", "umbra"],
    theme: "from-slate-800 to-green-900",
    img: "/green_1.png",
    lore:
      "Echo formed where forgotten memories gather. It absorbs whispers and turns them into understanding.",
    stats: { influence: 60, wisdom: 88, rarity: 82, stability: 65 },
    signatureItems: [
      { name: "Whisper Cloak", desc: "Turns presence into soft echoes." },
      { name: "Memory Orb", desc: "Stores fragments of lost voices." },
      { name: "Silent Dagger", desc: "Cuts without sound." }
    ]
  },

  ory: {
    name: "ORY",
    archetype: "The Strategist",
    tagline: "Move smart. Strike precise.",
    personality: "Calculated and tactical.",
    mood: "Focused",
    strengths: "Planning, foresight.",
    weaknesses: "Over-control.",
    hobbies: ["Chess", "Mapping systems"],
    element: "Metal",
    bestMatch: "Visionaries.",
    fear: "Chaos.",
    quote: "Everything has a pattern.",
    selfDescription: "Logic is my weapon.",
    innerVoice: "If I lose control, I lose everything.",
    whenIGrow: "Trusts unpredictability.",
    shadowSide: "Rigid.",
    healingPath: "Flexibility.",
    lifeStage: {
      child: "Strategic thinker.",
      adult: "Master planner.",
    },
    compatibility: ["royce", "nova"],
    theme: "from-slate-600 to-orange-800",
    img: "/orange.png",
    lore:
      "Forged inside a collapsing machine-city, Ory calculates probabilities faster than light.",
    stats: { influence: 75, wisdom: 85, rarity: 77, stability: 88 },
    signatureItems: [
      { name: "Quantum Map", desc: "Shows branching futures." },
      { name: "Steel Codex", desc: "Contains tactical doctrines." },
      { name: "Clockwork Core", desc: "Ticks with perfect precision." }
    ]
  },

  nova: {
    name: "NOVA",
    archetype: "The Awakener",
    tagline: "Explode into your true self.",
    personality: "Transformational and fearless.",
    mood: "Intense",
    strengths: "Reinvention.",
    weaknesses: "Impulsive change.",
    hobbies: ["Sky watching", "Training"],
    element: "Starfire",
    bestMatch: "Dreamers ready to evolve.",
    fear: "Stagnation.",
    quote: "Burn to become.",
    selfDescription: "I am rebirth.",
    innerVoice: "Will I rise again?",
    whenIGrow: "Becomes stable brilliance.",
    shadowSide: "Self-destruction.",
    healingPath: "Patience.",
    lifeStage: {
      child: "Wild spark.",
      adult: "Radiant star.",
    },
    compatibility: ["zest", "ory"],
    theme: "from-slate-800 to-gray-700",
    img: "/silver.png",
    lore:
      "Nova is born each time a star collapses. It carries endings and beginnings in the same breath.",
    stats: { influence: 90, wisdom: 72, rarity: 92, stability: 40 },
    signatureItems: [
      { name: "Supernova Shard", desc: "Fragment of rebirth energy." },
      { name: "Flare Armor", desc: "Radiates protective heat." },
      { name: "Star Mark", desc: "Glows when destiny shifts." }
    ]
  },

  umbra: {
    name: "UMBRA",
    archetype: "The Guardian of Night",
    tagline: "Strength in the unseen.",
    personality: "Protective and stoic.",
    mood: "Dark Calm",
    strengths: "Endurance.",
    weaknesses: "Emotion suppression.",
    hobbies: ["Night patrol", "Meditation"],
    element: "Darkness",
    bestMatch: "Sensitive souls.",
    fear: "Losing control.",
    quote: "I stand in the dark so you can shine.",
    selfDescription: "Silence is strength.",
    innerVoice: "I must not break.",
    whenIGrow: "Opens emotionally.",
    shadowSide: "Cold detachment.",
    healingPath: "Trust.",
    lifeStage: {
      child: "Silent protector.",
      adult: "Unbreakable shield.",
    },
    compatibility: ["echo", "aura"],
    theme: "from-slate-900 to-black",
    img: "/black_1.png",
    lore:
      "Umbra guards the space between light and void, absorbing chaos before it reaches others.",
    stats: { influence: 80, wisdom: 84, rarity: 86, stability: 95 },
    signatureItems: [
      { name: "Void Shield", desc: "Absorbs hostile energy." },
      { name: "Night Blade", desc: "Strikes unseen." },
      { name: "Eclipse Helm", desc: "Masks emotion and fear." }
    ]
  },

  aura: {
    name: "AURA",
    archetype: "The Empath",
    tagline: "Energy speaks louder than words.",
    personality: "Sensitive and nurturing.",
    mood: "Warm",
    strengths: "Healing presence.",
    weaknesses: "Energy drain.",
    hobbies: ["Yoga", "Painting"],
    element: "Spirit",
    bestMatch: "Emotional souls.",
    fear: "Conflict.",
    quote: "I feel you.",
    selfDescription: "I sense the invisible.",
    innerVoice: "Is this my emotion… or yours?",
    whenIGrow: "Sets boundaries.",
    shadowSide: "Self-neglect.",
    healingPath: "Self-care.",
    lifeStage: {
      child: "Gentle heart.",
      adult: "Energy healer.",
    },
    compatibility: ["vibez", "umbra"],
    theme: "from-slate-400 to-pink-500",
    img: "/pink.png",
    lore:
      "Aura emerged from the collective breath of living beings. It feels before it thinks.",
    stats: { influence: 82, wisdom: 86, rarity: 79, stability: 60 },
    signatureItems: [
      { name: "Spirit Bloom", desc: "Restores emotional balance." },
      { name: "Heart Prism", desc: "Amplifies empathy." },
      { name: "Serenity Veil", desc: "Calms chaotic energy." }
    ]
  },

  royce: {
    name: "ROYCE",
    archetype: "The Sovereign",
    tagline: "Rule with elegance.",
    personality: "Charismatic and refined.",
    mood: "Confident",
    strengths: "Leadership and influence.",
    weaknesses: "Pride.",
    hobbies: ["Collecting artifacts", "Debates"],
    element: "Royal Flame",
    bestMatch: "Ambitious minds.",
    fear: "Losing authority.",
    quote: "Command with grace.",
    selfDescription: "Power is responsibility.",
    innerVoice: "Am I worthy of the throne?",
    whenIGrow: "Leads with humility.",
    shadowSide: "Arrogance.",
    healingPath: "Humility.",
    lifeStage: {
      child: "Born leader.",
      adult: "Visionary ruler.",
    },
    compatibility: ["ory", "lumin"],
    theme: "from-slate-700 to-black",
    img: "/white.png",
    lore:
      "Royce descended from an ancient celestial dynasty. Its presence alone shifts power structures.",
    stats: { influence: 95, wisdom: 78, rarity: 91, stability: 85 },
    signatureItems: [
      { name: "Crown of Embers", desc: "Symbol of earned authority." },
      { name: "Golden Sigil", desc: "Marks alliances." },
      { name: "Sovereign Blade", desc: "Cuts through deception." }
    ]
  }
};

// ===============================
// HELPER FUNCTIONS
// ===============================

export function getMonster(id: string): Monster | null {
  const monster = monsters[id];
  if (!monster) return null;

  return { id, ...monster };
}

export function getAllMonsters(): Monster[] {
  return Object.entries(monsters).map(([id, monster]) => ({
    id,
    ...monster,
  }));
}
