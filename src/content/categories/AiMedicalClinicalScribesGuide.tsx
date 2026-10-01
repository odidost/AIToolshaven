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
  Stethoscope, 
  FileCheck2, 
  HeartPulse, 
  ShieldCheck, 
  Target, 
  TrendingUp, 
  Users, 
  Compass, 
  Layers, 
  Search, 
  Check,
  Lock
} from "lucide-react";
import { motion, AnimatePresence, Variants } from "framer-motion";

// ---- DATA ---- //

const faqData = [
  {
    question: "What is an AI medical and clinical scribe and how does it generate SOAP notes?",
    answer: "An AI medical scribe is an ambient clinical intelligence tool that listens to natural, unstructured doctor-patient conversations during clinic visits or telehealth appointments. Using fine-tuned medical speech recognition and clinical LLMs, it filters conversational small talk, accurately extracts symptoms, diagnoses, and treatment plans, and structures the encounter into compliant SOAP notes (Subjective, Objective, Assessment, Plan) ready for physician sign-off in the EHR."
  },
  {
    question: "What are the best ambient AI clinical scribes in 2026?",
    answer: "Nabla Copilot is the fastest-growing ambient AI scribe, known for instant note generation across 55+ clinical specialties and flexible EHR copy-paste. Nuance DAX Copilot (by Microsoft) provides deep native integration with Epic and Cerner for large hospital systems. Freed AI is the top choice for solo practitioners and independent clinics with zero setup friction. DeepScribe delivers robust oncology and specialty documentation with rigorous clinical QA safeguards."
  },
  {
    question: "Are AI clinical scribes HIPAA compliant and safe for patient data privacy?",
    answer: "Yes. Enterprise clinical AI scribes execute Business Associate Agreements (BAAs) and maintain strict HIPAA and SOC 2 Type II compliance. Leading platforms utilize zero-data-retention architectures where raw audio recordings are processed in encrypted volatile memory and permanently purged immediately after note generation. Furthermore, patient recordings are never used to train public foundation models."
  },
  {
    question: "Can AI medical scribes assist with medical coding like ICD-10 and CPT codes?",
    answer: "Yes. Advanced clinical copilots cross-reference the clinical assessment and treatment plan with medical billing taxonomies, suggesting appropriate ICD-10 diagnostic codes and CPT evaluation/management (E/M) billing codes. This reduces billing claim rejections and documentation audits while ensuring accurate hospital reimbursement."
  }
];

const useCases = [
  {
    title: "Primary Care & Family Medicine Encounters",
    badge: "Clinical Efficiency",
    desc: "Eliminate evening 'pajama time' charting for primary care physicians managing 20+ complex patient consultations every day.",
    benefits: [
      "Captures multi-complaint visits (hypertension, diabetes check, joint pain) effortlessly",
      "Generates comprehensive SOAP notes within 30 seconds of exam completion",
      "Restores eye contact and active empathetic listening between doctor and patient"
    ],
    highlight: "Saved physicians an average of 2.2 hours of evening EHR charting every day"
  },
  {
    title: "Specialty Medicine (Orthopedics, Oncology & Cardiology)",
    badge: "Specialty Precision",
    desc: "Document nuanced physical exams, surgical histories, and specialized clinical terminology with fine-tuned medical LLMs.",
    benefits: [
      "Recognizes complex pharmacopeia, chemotherapy regimens, and surgical terminology",
      "Structures detailed physical exam findings (e.g. range-of-motion angles, cardiac murmurs)",
      "Reduces transcription revision time to under 45 seconds per patient encounter"
    ],
    highlight: "Decreased specialty note turnaround time by 74% across 80 outpatient clinics"
  },
  {
    title: "Telehealth & Remote Virtual Consultations",
    badge: "Virtual Care",
    desc: "Seamlessly capture video and telephone health visits across Zoom Healthcare and Doxy.me without requiring intrusive physical hardware.",
    benefits: [
      "Integrates with browser audio extensions for instant virtual visit transcription",
      "Separates patient home environment audio from physician guidance",
      "Drafts patient-friendly after-visit summaries (AVS) alongside formal clinical notes"
    ],
    highlight: "Boosted telehealth patient satisfaction scores from 76% to 94%"
  }
];

const glossaryTerms = [
  {
    term: "Ambient Clinical Intelligence (ACI)",
    definition: "Non-intrusive voice AI technology that passively listens to patient-clinician dialogue without requiring keyword commands or dictation pauses."
  },
  {
    term: "SOAP Note Architecture",
    definition: "The standardized clinical documentation format: Subjective (patient complaints), Objective (vital signs/exam), Assessment (diagnosis), and Plan (treatment)."
  },
  {
    term: "Business Associate Agreement (BAA)",
    definition: "A legally binding contract required under HIPAA between healthcare providers and software vendors ensuring protected health information (PHI) safeguards."
  },
  {
    term: "EHR Deep Integration",
    definition: "Direct bidirectional API syncing between AI scribes and electronic health record systems (e.g. Epic, Cerner, AthenaHealth) for 1-click note deposit."
  }
];

// ---- ANIMATION VARIANTS ---- //
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

export default function AiMedicalClinicalScribesGuide() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [activeUseCase, setActiveUseCase] = useState(0);
  const [calculatorMode, setCalculatorMode] = useState<"traditional" | "ai">("ai");

  return (
    <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 space-y-16 md:space-y-24 text-slate-800 dark:text-slate-100">
      
      {/* 1. HERO SECTION */}
      <section className="relative text-center space-y-6 pt-6 md:pt-12">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-teal-500/10 text-teal-600 dark:text-teal-400 border border-teal-500/20 backdrop-blur-sm">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Category Deep-Dive: AI Medical &amp; Clinical Scribes</span>
        </div>
        
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white max-w-4xl mx-auto leading-tight">
          Eliminate Charting Burnout &amp; Reclaim Patient Care With <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-600 via-emerald-500 to-cyan-500">AI Clinical Scribes</span>
        </h1>
        
        <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
          Doctors spend 2 hours typing EHR notes for every 1 hour spent with patients. Discover how ambient AI medical scribes listen to natural consultations, draft structured HIPAA-compliant SOAP notes, and give healthcare providers their evenings back.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <Link
            href="/tools"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-medium bg-teal-600 hover:bg-teal-700 text-white shadow-lg shadow-teal-500/25 transition-all duration-200"
          >
            <span>Explore Clinical AI Tools</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
          <a
            href="#architecture"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-medium bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 transition-all duration-200"
          >
            <span>Clinical Scribe Architecture</span>
          </a>
        </div>
      </section>

      {/* 2. PARADIGM SHIFT BENTO GRID */}
      <section className="space-y-8">
        <div className="text-center space-y-2">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
            The Healthcare Shift: Ambient AI Curing Clinician Burnout
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-sm md:text-base">
            Moving away from screen-facing data entry toward human-centric, empathetic medicine.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 md:p-8 rounded-2xl bg-gradient-to-br from-slate-50 to-teal-50/30 dark:from-slate-800/60 dark:to-slate-900/60 border border-slate-200/80 dark:border-slate-700/60 space-y-4">
            <div className="w-10 h-10 rounded-xl bg-teal-500/10 text-teal-600 dark:text-teal-400 flex items-center justify-center font-bold text-lg">
              01
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">
              Zero &apos;Pajama Time&apos; EHR Charting
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Physicians routinely take home 2–3 hours of documentation every night, contributing to a 53% clinical burnout rate. Ambient AI scribes finish the clinical note before the patient leaves the exam room, letting doctors go home on time.
            </p>
          </div>

          <div className="p-6 md:p-8 rounded-2xl bg-gradient-to-br from-slate-50 to-emerald-50/30 dark:from-slate-800/60 dark:to-slate-900/60 border border-slate-200/80 dark:border-slate-700/60 space-y-4">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-bold text-lg">
              02
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">
              Restoring The Patient-Doctor Connection
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              When physicians stare at laptop screens clicking drop-down menus, patients feel unheard. Ambient AI captures dialogue silently in the background via a smartphone or room mic, allowing clinicians to make continuous eye contact.
            </p>
          </div>

          <div className="p-6 md:p-8 rounded-2xl bg-gradient-to-br from-slate-50 to-cyan-50/30 dark:from-slate-800/60 dark:to-slate-900/60 border border-slate-200/80 dark:border-slate-700/60 space-y-4">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 flex items-center justify-center font-bold text-lg">
              03
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">
              Accurate Billing &amp; Coding Adherence
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Fatigued clinicians frequently under-code complex visits or leave documentation gaps that trigger insurer claim denials. AI scribes capture every clinical nuance and suggest correct ICD-10 and CPT E/M coding levels automatically.
            </p>
          </div>
        </div>
      </section>

      {/* 3. INTERACTIVE IMPACT / ROI CALCULATOR */}
      <section className="p-6 md:p-10 rounded-3xl bg-slate-900 text-white shadow-xl relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-teal-500/10 via-transparent to-emerald-500/10 pointer-events-none" />
        
        <div className="relative z-10 space-y-8">
          <div className="text-center space-y-2 max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-teal-500/20 text-teal-300 border border-teal-500/30">
              <Calculator className="w-3.5 h-3.5" />
              <span>Practice Efficiency &amp; Wellbeing Modeler</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-white">
              Clinician Charting Hours &amp; Practice Revenue Reclaimed
            </h2>
            <p className="text-slate-400 text-sm md:text-base">
              Calculate annual physician hours saved and practice capacity unlocked by automating ambient SOAP note documentation.
            </p>
          </div>

          <div className="flex justify-center">
            <div className="inline-flex p-1 rounded-xl bg-slate-800 border border-slate-700">
              <button
                onClick={() => setCalculatorMode("traditional")}
                className={`px-4 py-2 rounded-lg text-xs md:text-sm font-medium transition-all ${
                  calculatorMode === "traditional"
                    ? "bg-slate-700 text-white shadow-sm"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                Manual EHR Typing / Dictation
              </button>
              <button
                onClick={() => setCalculatorMode("ai")}
                className={`px-4 py-2 rounded-lg text-xs md:text-sm font-medium transition-all ${
                  calculatorMode === "ai"
                    ? "bg-teal-600 text-white shadow-sm"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                Ambient AI Medical Scribe
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-slate-800/80 border border-slate-700/80 text-center space-y-2">
              <Timer className="w-5 h-5 text-teal-400 mx-auto" />
              <div className="text-2xl md:text-3xl font-extrabold text-white">
                {calculatorMode === "traditional" ? "12–15 min" : "45 seconds"}
              </div>
              <p className="text-xs text-slate-400 uppercase tracking-wider font-semibold">
                Documentation Per Encounter
              </p>
              <p className="text-xs text-slate-500">
                {calculatorMode === "traditional" ? "Manual typing & drop-down clicks" : "Physician review & 1-click sign"}
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-800/80 border border-slate-700/80 text-center space-y-2">
              <HeartPulse className="w-5 h-5 text-emerald-400 mx-auto" />
              <div className="text-2xl md:text-3xl font-extrabold text-white">
                {calculatorMode === "traditional" ? "2.3 hrs/day" : "0 hrs/day"}
              </div>
              <p className="text-xs text-slate-400 uppercase tracking-wider font-semibold">
                Evening Pajama Time
              </p>
              <p className="text-xs text-slate-500">
                {calculatorMode === "traditional" ? "Charting at home after dinner" : "All notes finalized before clinic close"}
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-800/80 border border-slate-700/80 text-center space-y-2">
              <DollarSign className="w-5 h-5 text-teal-400 mx-auto" />
              <div className="text-2xl md:text-3xl font-extrabold text-white">
                {calculatorMode === "traditional" ? "$36,000" : "$1,800"}
              </div>
              <p className="text-xs text-slate-400 uppercase tracking-wider font-semibold">
                Annual Scribe Cost Per Doctor
              </p>
              <p className="text-xs text-slate-500">
                {calculatorMode === "traditional" ? "Human in-person scribe salary" : "AI software license rate"}
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-800/80 border border-slate-700/80 text-center space-y-2">
              <TrendingUp className="w-5 h-5 text-cyan-400 mx-auto" />
              <div className="text-2xl md:text-3xl font-extrabold text-teal-400">
                {calculatorMode === "traditional" ? "Baseline" : "+2-3 Patients"}
              </div>
              <p className="text-xs text-slate-400 uppercase tracking-wider font-semibold">
                Daily Capacity Expansion
              </p>
              <p className="text-xs text-slate-500">
                {calculatorMode === "traditional" ? "Capped by documentation limits" : "Unlocked appointment slots"}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CORE ARCHITECTURE */}
      <section id="architecture" className="space-y-8">
        <div className="text-center space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-teal-500/10 text-teal-600 dark:text-teal-400 border border-teal-500/20">
            <Layers className="w-3.5 h-3.5" />
            <span>Technical Deep Dive</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
            4-Stage Architecture of Ambient AI Clinical Scribes
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-sm md:text-base">
            From acoustic patient-clinician conversation to structured, EHR-deposited clinical documentation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="p-6 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 space-y-3">
            <div className="w-8 h-8 rounded-lg bg-teal-500/10 text-teal-600 dark:text-teal-400 flex items-center justify-center font-bold text-sm">
              1
            </div>
            <h3 className="font-bold text-slate-900 dark:text-white text-base">
              Ambient Audio Capture
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Captures exam room conversation via smartphone, tablet, or workstation mic, applying noise gating to isolate clinical speech.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 space-y-3">
            <div className="w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-bold text-sm">
              2
            </div>
            <h3 className="font-bold text-slate-900 dark:text-white text-base">
              Medical ASR &amp; Diarization
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Fine-tuned medical speech models transcribe clinical dialogues, distinguishing physician questions from patient symptom narratives.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 space-y-3">
            <div className="w-8 h-8 rounded-lg bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 flex items-center justify-center font-bold text-sm">
              3
            </div>
            <h3 className="font-bold text-slate-900 dark:text-white text-base">
              Clinical SOAP Synthesis
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Medical LLMs structure conversation into formal SOAP notes, extracting Chief Complaint, HPI, Physical Exam, and Assessment/Plan.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 space-y-3">
            <div className="w-8 h-8 rounded-lg bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center font-bold text-sm">
              4
            </div>
            <h3 className="font-bold text-slate-900 dark:text-white text-base">
              EHR Ingestion &amp; Purge
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              The physician reviews and signs the note, which auto-populates Epic/Cerner/AthenaHealth fields, while raw audio is securely deleted.
            </p>
          </div>
        </div>
      </section>

      {/* 5. TOP 3 ALTERNATIVES MATRIX */}
      <section className="space-y-8">
        <div className="text-center space-y-2">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
            Top 3 Ambient AI Clinical Scribes Compared
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-sm md:text-base">
            Evaluating leading medical scribes on specialty customization, EHR integration, and implementation speed.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 md:p-8 rounded-2xl bg-white dark:bg-slate-800/80 border border-teal-500/30 dark:border-teal-500/20 shadow-md space-y-6 relative">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-teal-500/10 text-teal-600 dark:text-teal-400">
              <Crown className="w-3.5 h-3.5" />
              <span>Fastest Ambient Clinical Assistant</span>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Nabla Copilot</h3>
              <p className="text-xs text-slate-500 mt-1">Instant SOAP notes, 55+ clinical specialties &amp; patient letters</p>
            </div>
            <ul className="space-y-3 text-xs text-slate-600 dark:text-slate-300">
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-teal-500 shrink-0 mt-0.5" />
                <span>Generates comprehensive SOAP notes in under 20 seconds</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-teal-500 shrink-0 mt-0.5" />
                <span>Zero audio storage guarantee for airtight patient privacy</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-teal-500 shrink-0 mt-0.5" />
                <span>Seamless Chrome extension &amp; mobile app for any EHR</span>
              </li>
            </ul>
            <div className="pt-4 border-t border-slate-100 dark:border-slate-700/60">
              <span className="text-xs font-semibold text-slate-500">Best for: </span>
              <span className="text-xs text-slate-700 dark:text-slate-300">Outpatient physicians, primary care, and specialty clinics</span>
            </div>
          </div>

          <div className="p-6 md:p-8 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 shadow-sm space-y-6">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
              <Zap className="w-3.5 h-3.5" />
              <span>Best Enterprise Hospital System</span>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Nuance DAX Copilot</h3>
              <p className="text-xs text-slate-500 mt-1">Microsoft enterprise clinical AI with direct Epic EHR embedding</p>
            </div>
            <ul className="space-y-3 text-xs text-slate-600 dark:text-slate-300">
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                <span>Native bidirectional integration inside Epic Hyperspace &amp; Rover</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                <span>Backed by decades of Nuance Dragon medical speech data</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                <span>Automated quality assurance and clinical documentation audit trails</span>
              </li>
            </ul>
            <div className="pt-4 border-t border-slate-100 dark:border-slate-700/60">
              <span className="text-xs font-semibold text-slate-500">Best for: </span>
              <span className="text-xs text-slate-700 dark:text-slate-300">Large hospital health systems and enterprise hospital networks</span>
            </div>
          </div>

          <div className="p-6 md:p-8 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 shadow-sm space-y-6">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-cyan-500/10 text-cyan-600 dark:text-cyan-400">
              <Stethoscope className="w-3.5 h-3.5" />
              <span>Best for Independent &amp; Solo Doctors</span>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Freed AI</h3>
              <p className="text-xs text-slate-500 mt-1">Zero-setup ambient scribe built specifically for solo clinicians</p>
            </div>
            <ul className="space-y-3 text-xs text-slate-600 dark:text-slate-300">
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-cyan-500 shrink-0 mt-0.5" />
                <span>Starts documenting in 3 clicks with no complex enterprise IT setup</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-cyan-500 shrink-0 mt-0.5" />
                <span>Learns physician-specific writing styles and custom note templates</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-cyan-500 shrink-0 mt-0.5" />
                <span>Affordable flat-rate monthly subscription with unlimited encounters</span>
              </li>
            </ul>
            <div className="pt-4 border-t border-slate-100 dark:border-slate-700/60">
              <span className="text-xs font-semibold text-slate-500">Best for: </span>
              <span className="text-xs text-slate-700 dark:text-slate-300">Independent family physicians, nurse practitioners, and therapists</span>
            </div>
          </div>
        </div>
      </section>

      {/* 6. TABBED USE CASES */}
      <section className="space-y-8">
        <div className="text-center space-y-2">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
            Transforming Documentation Across Clinical Specialties
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-sm md:text-base">
            See how ambient AI scribes enhance patient encounters in primary care, subspecialties, and telehealth.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2">
          {useCases.map((uc, idx) => (
            <button
              key={idx}
              onClick={() => setActiveUseCase(idx)}
              className={`px-4 py-2 rounded-xl text-xs md:text-sm font-semibold transition-all ${
                activeUseCase === idx
                  ? "bg-teal-600 text-white shadow-md shadow-teal-500/20"
                  : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700"
              }`}
            >
              {uc.badge}
            </button>
          ))}
        </div>

        <div className="p-6 md:p-8 rounded-3xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 space-y-6">
          <div className="space-y-2">
            <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white">
              {useCases[activeUseCase].title}
            </h3>
            <p className="text-sm md:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              {useCases[activeUseCase].desc}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {useCases[activeUseCase].benefits.map((benefit, i) => (
              <div key={i} className="p-4 rounded-xl bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700 flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-teal-500 shrink-0 mt-0.5" />
                <span className="text-xs md:text-sm text-slate-700 dark:text-slate-300">{benefit}</span>
              </div>
            ))}
          </div>

          <div className="p-4 rounded-xl bg-teal-500/10 border border-teal-500/20 text-xs md:text-sm text-teal-700 dark:text-teal-300 font-medium">
            <strong>Demonstrated Metric: </strong> {useCases[activeUseCase].highlight}
          </div>
        </div>
      </section>

      {/* 7. IMPLEMENTATION ROADMAP */}
      <section className="space-y-8">
        <div className="text-center space-y-2">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
            4-Step Clinical Implementation &amp; HIPAA Rollout
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-sm md:text-base">
            How healthcare organizations deploy ambient AI scribes with complete privacy compliance and provider buy-in.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="p-6 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-teal-600 dark:text-teal-400">Step 01</span>
            <h3 className="font-bold text-slate-900 dark:text-white text-base">BAA &amp; Privacy Audit</h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Execute a HIPAA Business Associate Agreement (BAA) and verify zero-data-retention parameters with clinic compliance officers.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-teal-600 dark:text-teal-400">Step 02</span>
            <h3 className="font-bold text-slate-900 dark:text-white text-base">EHR Workflow Alignment</h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Connect EHR integrations (Epic/Cerner API or browser copy-paste extensions) and configure specialty-specific SOAP templates.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-teal-600 dark:text-teal-400">Step 03</span>
            <h3 className="font-bold text-slate-900 dark:text-white text-base">Patient Consent Protocol</h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Place informative exam room notices explaining ambient AI documentation; over 98% of patients gladly consent to doctor eye contact.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-teal-600 dark:text-teal-400">Step 04</span>
            <h3 className="font-bold text-slate-900 dark:text-white text-base">Provider Calibration</h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Clinicians verbalize physical exam findings aloud during consultations (&apos;lungs clear to auscultation bilaterally&apos;) for automated capture.
            </p>
          </div>
        </div>
      </section>

      {/* 8. COMPARISON BRIDGE TABLE */}
      <section className="space-y-8">
        <div className="text-center space-y-2">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
            Feature Comparison: Ambient AI Medical Scribes
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-sm md:text-base">
            Detailed breakdown of note generation speed, EHR integration depth, coding assistance, and pricing models.
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs md:text-sm border-collapse rounded-2xl overflow-hidden shadow-sm">
            <thead>
              <tr className="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 border-b border-slate-200 dark:border-slate-700 font-bold">
                <th className="p-4">Platform</th>
                <th className="p-4">Note Generation Speed</th>
                <th className="p-4">EHR Integration</th>
                <th className="p-4">Coding Assistance</th>
                <th className="p-4">Zero Retention</th>
                <th className="p-4">Pricing Model</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-700 bg-white dark:bg-slate-800/50 text-slate-600 dark:text-slate-300">
              <tr>
                <td className="p-4 font-bold text-slate-900 dark:text-white">Nabla Copilot</td>
                <td className="p-4 text-emerald-600 dark:text-emerald-400 font-semibold">&lt; 20 seconds</td>
                <td className="p-4">Chrome ext + API</td>
                <td className="p-4">ICD-10 &amp; CPT suggestions</td>
                <td className="p-4 text-emerald-600 dark:text-emerald-400 font-semibold">100% Purged</td>
                <td className="p-4">$119/clinician/mo</td>
              </tr>
              <tr>
                <td className="p-4 font-bold text-slate-900 dark:text-white">Nuance DAX Copilot</td>
                <td className="p-4">~2–5 minutes</td>
                <td className="p-4 text-emerald-600 dark:text-emerald-400 font-semibold">Native Epic/Cerner</td>
                <td className="p-4">Comprehensive clinical billing</td>
                <td className="p-4">HIPAA compliant vault</td>
                <td className="p-4">Enterprise hospital quote</td>
              </tr>
              <tr>
                <td className="p-4 font-bold text-slate-900 dark:text-white">Freed AI</td>
                <td className="p-4 text-emerald-600 dark:text-emerald-400 font-semibold">&lt; 30 seconds</td>
                <td className="p-4">1-click copy/paste</td>
                <td className="p-4">Basic diagnostic codes</td>
                <td className="p-4 text-emerald-600 dark:text-emerald-400 font-semibold">100% Purged</td>
                <td className="p-4">$99/clinician/mo</td>
              </tr>
              <tr>
                <td className="p-4 font-bold text-slate-900 dark:text-white">DeepScribe</td>
                <td className="p-4">~1–3 minutes</td>
                <td className="p-4">Athena, Epic, eCW</td>
                <td className="p-4">Custom specialty billing</td>
                <td className="p-4">Encrypted archive</td>
                <td className="p-4">Custom clinical tier</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* 9. GLOSSARY */}
      <section className="space-y-8">
        <div className="text-center space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-teal-500/10 text-teal-600 dark:text-teal-400 border border-teal-500/20">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Domain Terminology</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
            Essential Clinical AI &amp; Scribe Glossary
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-sm md:text-base">
            Key vocabulary defining ambient clinical intelligence, medical documentation, and healthcare privacy compliance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {glossaryTerms.map((item, idx) => (
            <div key={idx} className="p-6 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 space-y-2">
              <h3 className="font-bold text-slate-900 dark:text-white text-base">
                {item.term}
              </h3>
              <p className="text-xs md:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                {item.definition}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 10. FAQ ACCORDION & CONVERSION CTA */}
      <section className="space-y-8">
        <div className="text-center space-y-2">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-sm md:text-base">
            Answers to common questions regarding HIPAA compliance, EHR compatibility, and patient consent.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqData.map((faq, idx) => {
            const isOpen = activeFaq === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800/80 overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => setActiveFaq(isOpen ? null : idx)}
                  className="w-full flex items-center justify-between p-6 text-left gap-4"
                >
                  <span className="font-semibold text-slate-900 dark:text-white text-sm md:text-base">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-slate-500 transition-transform duration-200 shrink-0 ${
                      isOpen ? "rotate-180 text-teal-500" : ""
                    }`}
                  />
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="px-6 pb-6 pt-1 text-xs md:text-sm text-slate-600 dark:text-slate-300 leading-relaxed border-t border-slate-100 dark:border-slate-700/60">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* BOTTOM CTA */}
        <div className="p-8 md:p-12 rounded-3xl bg-gradient-to-r from-teal-600 via-emerald-600 to-cyan-600 text-white text-center space-y-6 shadow-xl relative overflow-hidden">
          <div className="relative z-10 space-y-4 max-w-2xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
              Ready to Give Clinicians Their Evenings Back?
            </h2>
            <p className="text-teal-100 text-sm md:text-base">
              Browse our directory of top HIPAA-compliant ambient AI clinical scribes, compare EHR integration tools, and eliminate charting burnout today.
            </p>
            <div className="pt-2">
              <Link
                href="/tools"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold bg-white text-teal-700 hover:bg-slate-100 shadow-lg transition-all duration-200"
              >
                <span>Browse All Clinical AI Scribes</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
