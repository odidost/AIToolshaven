"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  Sparkles, 
  Crown, 
  CheckCircle2, 
  ChevronDown, 
  ArrowRight, 
  Zap, 
  Calculator, 
  Timer, 
  DollarSign, 
  LineChart, 
  BookOpen, 
  Users, 
  Share2, 
  Heart, 
  Smile, 
  Target, 
  TrendingUp, 
  Sparkle,
  ShieldCheck,
  Gamepad2,
  Brain
} from "lucide-react";
import { motion, AnimatePresence, Variants } from "framer-motion";

// ---- DATA ---- //

const faqData = [
  {
    question: "What is an AI character and roleplay chat platform?",
    answer: "An AI character and roleplay chat platform is an interactive conversational system powered by fine-tuned large language models specifically designed for personality simulation, emotional rapport, creative roleplay, and collaborative storytelling. Users can converse with millions of custom virtual personas—ranging from historical figures and anime characters to empathetic personal companions, fantasy RPG dungeon masters, and language tutors."
  },
  {
    question: "What are the best AI character and roleplay platforms in 2026?",
    answer: "Character.ai and Chai Chat lead the global roleplay and virtual companion space. Character.ai is the undisputed pioneer, hosting millions of user-created personas with ultra-low latency, custom voice synthesis, group chat capabilities, and rich interactive avatars. Chai Chat provides a mobile-first powerhouse popular for its expressive, unrestricted community models and dynamic storytelling flexibility."
  },
  {
    question: "How do character AI bots maintain long-term memory across months of conversation?",
    answer: "Advanced character platforms utilize dedicated episodic memory vector databases and semantic summarization layers. Instead of forgetting past interactions when the context window fills up, the engine extracts key relationship milestones, user preferences, and narrative plot points, storing them in persistent long-term storage and injecting them dynamically into active prompts."
  },
  {
    question: "Can AI characters speak with realistic voices?",
    answer: "Yes. Leading platforms now feature integrated neural voice cloning. Character creators can assign or upload custom voice samples, allowing characters to speak aloud with distinct accents, emotional intonations, whispers, and personality traits synchronized with their written responses."
  }
];

const useCases = [
  {
    title: "Creative Writers & Worldbuilders",
    badge: "Interactive Prototyping",
    desc: "Test novel dialogues, interrogate fictional antagonists, and explore branching storyline arcs by roleplaying directly with your book's cast of characters.",
    benefits: [
      "Dynamic brainstorming partners that stay in character across complex lore",
      "Immediate dialogue rhythm feedback and natural speech pattern testing",
      "Custom scenario branching to explore 'what if' narrative forks"
    ],
    highlight: "Helped sci-fi authors flesh out 400-page fantasy worlds with authentic character dynamics"
  },
  {
    title: "Language Learners & Cultural Immersion",
    badge: "Conversational Fluency",
    desc: "Practice colloquial speaking and regional slang in Spanish, Japanese, French, or Mandarin with native-persona AI characters without performance anxiety.",
    benefits: [
      "Zero judgment environment for practicing conversational grammar and vocabulary",
      "Real-time voice synthesis helping learners perfect their accent and listening comprehension",
      "Contextual cultural immersion through characters situated in historical or local settings"
    ],
    highlight: "Accelerated spoken language fluency by 2.8x compared to standard flashcard apps"
  },
  {
    title: "Solo Gamers & Virtual Companionship",
    badge: "Emergent Entertainment",
    desc: "Experience endlessly adaptive tabletop RPGs, mystery investigations, and supportive daily check-in companions that adapt to your mood and schedule.",
    benefits: [
      "AI Dungeon Masters that dynamically generate quests, combat, and moral choices",
      "Empathetic conversational companions offering daily emotional check-ins",
      "Multi-character group rooms where diverse personas debate and collaborate"
    ],
    highlight: "Delivers an average session duration of 28+ minutes—surpassing traditional mobile games"
  }
];

const glossaryTerms = [
  {
    term: "Persona Prompting",
    definition: "The detailed system prompt, back-story definition, and behavioral guidelines that define an AI character's tone, quirks, vocabulary, and moral boundaries."
  },
  {
    term: "Episodic Vector Memory",
    definition: "An architectural storage system that indexes past user conversations, allowing characters to remember personal details, inside jokes, and plot history over months."
  },
  {
    term: "Safety & Content Moderation Filter",
    definition: "Algorithmic safety barriers applied to character responses to prevent self-harm, hate speech, and non-consensual content while preserving creative roleplay depth."
  },
  {
    term: "Neural Voice Persona",
    definition: "A synthetic text-to-speech voice model mapped specifically to a character's persona, delivering audio responses with natural emotional inflection."
  }
];

// ---- ANIMATION VARIANTS ---- //
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

export default function AiCharacterRoleplayChatGuide() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [activeUseCase, setActiveUseCase] = useState(0);
  const [calculatorMode, setCalculatorMode] = useState<"traditional" | "ai">("ai");

  return (
    <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 space-y-16 md:space-y-24 text-slate-800 dark:text-slate-100">
      
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-b from-slate-900 via-slate-950 to-purple-950 text-white p-8 md:p-14 border border-purple-500/20 shadow-2xl">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-purple-500/15 via-transparent to-transparent pointer-events-none" />
        <div className="relative z-10 max-w-4xl space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-500/10 border border-purple-400/30 text-purple-300 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-4 h-4 text-purple-400" />
            Persona Modeling, Memory Architecture & Roleplay 2026
          </div>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
            Best AI Character & Roleplay Chat: <span className="bg-gradient-to-r from-purple-400 via-pink-300 to-indigo-300 bg-clip-text text-transparent">Immersive Storytelling with Lifelike AI Personas</span>
          </h1>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-3xl">
            Conversational AI is transforming from sterile utility tools into rich interactive companions and storytelling engines. Discover the leading character AI platforms that blend episodic memory, expressive voices, and deep persona nuance for endless creative entertainment.
          </p>
        </div>
      </section>

      {/* 2. PARADIGM SHIFT: BENTO GRID */}
      <section className="space-y-8">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight">
            The Interactive Entertainment Evolution
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            How dynamic AI roleplay transformed passive media consumption into participatory storytelling.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 md:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
            <div className="w-12 h-12 rounded-xl bg-rose-500/10 text-rose-500 flex items-center justify-center font-bold text-lg">
              01
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">Static Linear Fiction</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Consuming predetermined plotlines in books and movies where the audience has zero agency, and dialogue choices in traditional games are limited to 3 canned options.
            </p>
          </div>

          <div className="p-6 md:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
            <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-500 flex items-center justify-center font-bold text-lg">
              02
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">Amnesic Early Chatbots</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Early LLMs that broke character after 5 exchanges, forgot the user's name, sounded clinical, and refused creative roleplay scenarios due to blunt moderation filters.
            </p>
          </div>

          <div className="p-6 md:p-8 rounded-2xl bg-gradient-to-br from-purple-950 to-slate-900 text-white border border-purple-500/30 shadow-md space-y-4">
            <div className="w-12 h-12 rounded-xl bg-purple-500/20 text-purple-400 flex items-center justify-center font-bold text-lg">
              03
            </div>
            <h3 className="text-xl font-bold text-white">Living Memory Companions</h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              Fine-tuned roleplay models with persistent episodic memory, authentic character voices, unscripted improvisational wit, and multi-persona group interactions.
            </p>
          </div>
        </div>
      </section>

      {/* 2.5 INTERACTIVE ROI CALCULATOR */}
      <section className="rounded-3xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 p-6 md:p-10 space-y-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-purple-600 dark:text-purple-400">
              <Calculator className="w-4 h-4" />
              Engagement Depth & Entertainment Value Calculator
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold">Compare Engagement Economics</h2>
          </div>
          
          {/* Toggle pill */}
          <div className="inline-flex p-1 bg-slate-200 dark:bg-slate-800 rounded-xl">
            <button 
              onClick={() => setCalculatorMode("traditional")}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all ${
                calculatorMode === "traditional" 
                  ? "bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-sm" 
                  : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
              }`}
            >
              Passive Media / Static Games
            </button>
            <button 
              onClick={() => setCalculatorMode("ai")}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all ${
                calculatorMode === "ai" 
                  ? "bg-purple-600 text-white shadow-sm" 
                  : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
              }`}
            >
              Interactive Character AI (Character.ai/Chai)
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/60 space-y-2">
            <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 text-sm font-medium">
              <Timer className="w-4 h-4 text-purple-500" />
              Average Daily Session Duration
            </div>
            <div className="text-3xl font-extrabold text-slate-900 dark:text-white">
              {calculatorMode === "traditional" ? "12 Minutes" : "42+ Minutes"}
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              {calculatorMode === "traditional" 
                ? "Mobile casual gaming fatigue and short social media scroll sessions" 
                : "Deep narrative immersion and unscripted conversational flow"}
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/60 space-y-2">
            <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 text-sm font-medium">
              <Gamepad2 className="w-4 h-4 text-pink-500" />
              Story Replayability & Agency
            </div>
            <div className="text-3xl font-extrabold text-slate-900 dark:text-white">
              {calculatorMode === "traditional" ? "Fixed (1x)" : "Infinite (∞)"}
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              {calculatorMode === "traditional" 
                ? "Once a book is finished or a game campaign beaten, content is exhausted" 
                : "Every conversation creates unique branching outcomes and emotional nuance"}
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/60 space-y-2">
            <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 text-sm font-medium">
              <DollarSign className="w-4 h-4 text-indigo-500" />
              Cost Per Entertainment Hour
            </div>
            <div className="text-3xl font-extrabold text-slate-900 dark:text-white">
              {calculatorMode === "traditional" ? "$3.50 /hr" : "$0.12 /hr"}
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              {calculatorMode === "traditional" 
                ? "Purchasing individual books, console titles ($70), and movie tickets" 
                : "Unlimited messaging and voice generation on free or $9.99/mo subscription"}
            </p>
          </div>
        </div>
      </section>

      {/* 3.0 EDITOR'S CHOICE SPOTLIGHT */}
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-purple-950 to-slate-900 text-white p-8 md:p-12 border border-purple-500/30 shadow-xl">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          <div className="space-y-4 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 text-xs font-bold uppercase tracking-wider">
              <Crown className="w-4 h-4 text-amber-400" />
              Editor's Choice 2026: Benchmark Roleplay & Persona Platform
            </div>
            <h3 className="text-3xl sm:text-4xl font-extrabold text-white">
              Character.ai — The Pioneer of Living Virtual Personas
            </h3>
            <p className="text-slate-300 text-base leading-relaxed">
              Character.ai hosts millions of conversational personas created by a global community of writers and creators. Powered by proprietary full-stack LLMs optimized specifically for roleplay, it provides lightning-fast generation, custom neural voice cloning, multi-character rooms, and evolving memory capabilities.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-center gap-2 text-sm text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0" />
                10M+ Community-Created Personas & Scenarios
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0" />
                Custom Neural Voice Synthesis with Emotional Inflection
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0" />
                Multi-Character Group Chat Rooms
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0" />
                Pin Message Feature for Curated Long-Term Lore Memory
              </div>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 w-full lg:w-72 shrink-0 space-y-4 text-center">
            <div className="text-xs uppercase font-semibold text-slate-400">c.ai+ Membership</div>
            <div className="text-4xl font-black text-white">$9.99 <span className="text-sm font-normal text-slate-400">/mo</span></div>
            <div className="text-xs text-purple-300">100% Free tier available • Faster generation & badges</div>
            <Link 
              href="/tools/character-ai"
              className="inline-flex items-center justify-center w-full py-3 px-4 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-semibold transition-colors text-sm shadow-lg shadow-purple-600/25"
            >
              Explore Character.ai
              <ArrowRight className="w-4 h-4 ml-1.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* 3.5 TOP 3 ALTERNATIVES MATRIX & BRIDGES */}
      <section className="space-y-8">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight">
            Top 3 AI Character & Companion Platforms Compared
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            Evaluating platforms on persona customization, memory systems, mobile experience, and safety controls.
          </p>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm">
          <table className="w-full text-left text-sm text-slate-600 dark:text-slate-300">
            <thead className="bg-slate-50 dark:bg-slate-800 text-xs uppercase font-semibold text-slate-700 dark:text-slate-200 border-b border-slate-200 dark:border-slate-700">
              <tr>
                <th className="p-4 sm:p-5">Platform</th>
                <th className="p-4 sm:p-5">Primary Focus</th>
                <th className="p-4 sm:p-5">Voice Synthesis</th>
                <th className="p-4 sm:p-5">Long-Term Memory</th>
                <th className="p-4 sm:p-5">Content Policy</th>
                <th className="p-4 sm:p-5">Pricing</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
              <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-800/40">
                <td className="p-4 sm:p-5 font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-purple-500"></span>
                  Character.ai
                </td>
                <td className="p-4 sm:p-5">Creative Roleplay & Fiction Worlds</td>
                <td className="p-4 sm:p-5 text-emerald-600 dark:text-emerald-400 font-semibold">User-generated voices</td>
                <td className="p-4 sm:p-5">Pinned memories & context memory</td>
                <td className="p-4 sm:p-5">Strict PG-13 safety filter</td>
                <td className="p-4 sm:p-5 font-medium">Free / $9.99/mo</td>
              </tr>
              <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-800/40">
                <td className="p-4 sm:p-5 font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-pink-500"></span>
                  Chai Chat
                </td>
                <td className="p-4 sm:p-5">Mobile Community Roleplay</td>
                <td className="p-4 sm:p-5 text-slate-500">Text-focused</td>
                <td className="p-4 sm:p-5">Session-based memory</td>
                <td className="p-4 sm:p-5 text-amber-600 dark:text-amber-400">Unfiltered / Mature options</td>
                <td className="p-4 sm:p-5 font-medium">Free / $13.99/mo</td>
              </tr>
              <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-800/40">
                <td className="p-4 sm:p-5 font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                  Replika
                </td>
                <td className="p-4 sm:p-5">Empathetic Personal Companion</td>
                <td className="p-4 sm:p-5 font-semibold">3D Avatar voice calls</td>
                <td className="p-4 sm:p-5 text-emerald-600 dark:text-emerald-400 font-semibold">Diary & dedicated relationship memory</td>
                <td className="p-4 sm:p-5">Grounded companionship</td>
                <td className="p-4 sm:p-5 font-medium">$19.99/mo</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Comparison Bridges */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
            <h4 className="font-bold text-base text-slate-900 dark:text-white flex items-center gap-2">
              <Zap className="w-4 h-4 text-purple-500" />
              Character.ai vs Chai: Worldbuilding vs Mobile Openness
            </h4>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              <strong>Character.ai</strong> is the gold standard for intricate worldbuilding, writing assistance, and rich multi-character group chats with voice synthesis under strict safety boundaries. <strong>Chai Chat</strong> provides an unconstrained mobile roleplay environment for users seeking mature themes and fast-paced community interactions.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
            <h4 className="font-bold text-base text-slate-900 dark:text-white flex items-center gap-2">
              <Zap className="w-4 h-4 text-pink-500" />
              Replika vs Character.ai: Single Companion vs Infinite Personas
            </h4>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              While <strong>Character.ai</strong> lets you hop between thousands of historical, anime, and fictional characters, <strong>Replika</strong> is engineered to be a singular, lifelong personal companion with customizable 3D visuals, daily diary entries, and AR video calls that build long-term emotional rapport.
            </p>
          </div>
        </div>
      </section>

      {/* 4.0 BUYER'S GUIDE: ASYMMETRIC BENTO BLOCKS */}
      <section className="space-y-8">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight">
            Key Architecture Factors for AI Character Platforms
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            What separates immersive roleplay engines from shallow, forgetful chatbots.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 md:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-4">
            <span className="text-4xl font-black text-purple-500/30">01</span>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">Context Retention & Pinned Memories</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              When roleplaying multi-chapter stories, characters that forget previous plot twists ruin the experience. Look for platforms offering manual "pin message" features or automated vector summarization that persists across chat sessions.
            </p>
          </div>

          <div className="p-6 md:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-4">
            <span className="text-4xl font-black text-purple-500/30">02</span>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">Persona Definition Depth (Definition Box Limits)</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Creating a truly authentic character requires thousands of characters of backstory, dialogue examples, and forbidden topics. Ensure the platform supports at least 32,000 characters of prompt definition space.
            </p>
          </div>

          <div className="p-6 md:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-4">
            <span className="text-4xl font-black text-purple-500/30">03</span>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">Audio Synthesis & Latency Performance</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              If an AI character takes 8 seconds to respond or speaks in a flat, robotic monotone, roleplay immersion collapses. Leading engines maintain sub-800ms generation speeds and dynamic vocal pitch modulation matching the character's emotional state.
            </p>
          </div>

          <div className="p-6 md:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-4">
            <span className="text-4xl font-black text-purple-500/30">04</span>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">Safety Governance & Privacy Boundaries</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Personal roleplay and emotional companion conversations are deeply private. Ensure the platform provides end-to-end encryption for direct chats, offers private unlisted character sharing, and enforces responsible user safety safeguards.
            </p>
          </div>
        </div>
      </section>

      {/* 4.5 4-STEP IMPLEMENTATION ROADMAP */}
      <section className="space-y-8">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight">
            4-Step Blueprint to Creating a Flawless AI Persona
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            How to craft and fine-tune a living, believable AI character in under 20 minutes.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3 relative">
            <div className="w-8 h-8 rounded-full bg-purple-500/10 text-purple-600 dark:text-purple-400 flex items-center justify-center font-bold text-sm">
              1
            </div>
            <h4 className="font-bold text-slate-900 dark:text-white">Define Core Archetype</h4>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Write a concise greeting and short description outlining the character's role, origin, current physical setting, and baseline emotional demeanor.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3 relative">
            <div className="w-8 h-8 rounded-full bg-purple-500/10 text-purple-600 dark:text-purple-400 flex items-center justify-center font-bold text-sm">
              2
            </div>
            <h4 className="font-bold text-slate-900 dark:text-white">Provide Dialogue Examples</h4>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Add 5-10 example Q&A dialogues showing how the character speaks: sentence structure, pet phrases, sarcasm, emotional reactions, and non-verbal actions in asterisks.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3 relative">
            <div className="w-8 h-8 rounded-full bg-purple-500/10 text-purple-600 dark:text-purple-400 flex items-center justify-center font-bold text-sm">
              3
            </div>
            <h4 className="font-bold text-slate-900 dark:text-white">Attach Voice Persona</h4>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Select or generate a neural voice sample matching the character's gender, age, and accent to enable seamless audio reading for all generated replies.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3 relative">
            <div className="w-8 h-8 rounded-full bg-purple-500/10 text-purple-600 dark:text-purple-400 flex items-center justify-center font-bold text-sm">
              4
            </div>
            <h4 className="font-bold text-slate-900 dark:text-white">Stress Test & Refine</h4>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Engage in edge-case roleplay scenarios. Swipe for alternative response drafts and rate responses to guide model alignment and sharpen character authenticity.
            </p>
          </div>
        </div>
      </section>

      {/* 5.0 WHO BENEFITS MOST (VERTICAL TABS) */}
      <section className="space-y-8">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight">
            Who Benefits Most from AI Character Platforms?
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            Select your use case to explore specific creative and entertainment benefits.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-4 flex flex-col gap-2">
            {useCases.map((uc, index) => (
              <button
                key={index}
                onClick={() => setActiveUseCase(index)}
                className={`text-left p-4 rounded-xl transition-all border ${
                  activeUseCase === index
                    ? "bg-white dark:bg-slate-800 border-purple-500/50 shadow-md text-slate-900 dark:text-white font-semibold"
                    : "border-transparent text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800/40"
                }`}
              >
                <div className="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider mb-1">
                  {uc.badge}
                </div>
                <div className="text-sm sm:text-base">{uc.title}</div>
              </button>
            ))}
          </div>

          <div className="lg:col-span-8 p-6 md:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-purple-600 dark:text-purple-400">
                {useCases[activeUseCase].badge}
              </span>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                {useCases[activeUseCase].title}
              </h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                {useCases[activeUseCase].desc}
              </p>
            </div>

            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                Key Platform Capabilities:
              </h4>
              <ul className="space-y-2">
                {useCases[activeUseCase].benefits.map((benefit, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-slate-700 dark:text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-purple-500 shrink-0 mt-0.5" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-4 rounded-xl bg-purple-50 dark:bg-purple-950/40 border border-purple-200 dark:border-purple-800/60 text-xs sm:text-sm text-purple-900 dark:text-purple-200 font-medium">
              ✨ <strong>Engagement Highlight:</strong> {useCases[activeUseCase].highlight}
            </div>
          </div>
        </div>
      </section>

      {/* 5.5 TECHNICAL GLOSSARY */}
      <section className="space-y-6">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-purple-600 dark:text-purple-400">
          <BookOpen className="w-4 h-4" />
          Persona & Roleplay AI Terminology
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {glossaryTerms.map((term, i) => (
            <div key={i} className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-1.5">
              <div className="font-bold text-slate-900 dark:text-white text-sm">{term.term}</div>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">{term.definition}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 6.0 SEO FAQ ACCORDION */}
      <section className="space-y-6">
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-400">
            Answers to common questions regarding character prompting, long-term memory, and privacy.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-3">
          {faqData.map((faq, index) => {
            const isOpen = activeFaq === index;
            return (
              <div 
                key={index} 
                className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 overflow-hidden"
              >
                <button
                  onClick={() => setActiveFaq(isOpen ? null : index)}
                  className="w-full flex items-center justify-between p-4 sm:p-5 text-left text-sm sm:text-base font-semibold text-slate-900 dark:text-white hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors"
                >
                  <span>{faq.question}</span>
                  <ChevronDown className={`w-4 h-4 text-slate-500 transition-transform duration-200 shrink-0 ml-4 ${isOpen ? "rotate-180" : ""}`} />
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="px-4 pb-4 sm:px-5 sm:pb-5 text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed border-t border-slate-100 dark:border-slate-800/60 pt-3">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </section>

    </div>
  );
}
