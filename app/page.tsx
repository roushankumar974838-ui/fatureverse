"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import QuantumBackground from "@/components/QuantumBackground";
import GlassCard from "@/components/GlassCard";
import OracleTerminal from "@/components/OracleTerminal";
import TypingTerminal from "@/components/TypingTerminal";
import SignalFeed from "@/components/SignalFeed"
import CivilizationTimeline from "@/components/CivilizationTimeline";
import SystemLogs from "@/components/SystemLogs";
import StatusPanel from "@/components/StatusPanel";
import CommandConsole from "@/components/CommandConsole";
import LoadingScreen from "@/components/LoadingScreen";
import MatrixRain from "@/components/MatrixRain";

const MODULES = [
  {
    icon: "◈",
    title: "AI Assistant",
    desc: "Chat, code, research, generate.",
    href: "/assistant",
    glow: "from-cyan-400/40 to-blue-600/10",
  },
  {
    icon: "✺",
    title: "Research Hub",
    desc: "Live science, scientist tracker, papers.",
    href: "/research",
    glow: "from-violet-400/40 to-fuchsia-600/10",
  },
  {
    icon: "⌬",
    title: "Developer Area",
    desc: "Repos, teams, contributions.",
    href: "/developer",
    glow: "from-emerald-400/40 to-teal-600/10",
  },
  {
    icon: "❖",
    title: "Utility & Pay",
    desc: "Recharge, bills, wallet, subs.",
    href: "/utility",
    glow: "from-amber-400/40 to-orange-600/10",
  },
  {
    icon: "✦",
    title: "Knowledge",
    desc: "Courses, notes, roadmaps.",
    href: "/knowledge",
    glow: "from-pink-400/40 to-rose-600/10",
  },
  {
    icon: "◊",
    title: "Community",
    desc: "Teams, forums, chat.",
    href: "/community",
    glow: "from-sky-400/40 to-indigo-600/10",
  },
];

const METRICS = [
  { v: "2.4M", l: "Active Researchers" },
  { v: "184K", l: "Repos Hosted" },
  { v: "9.2B", l: "AI Tokens Today" },
  { v: "99.99%", l: "Uptime" },
];

const TRACKER = [
  {
    name: "Demis Hassabis",
    org: "DeepMind",
    status: "Publishing on protein–RNA folding (AlphaFold 4 hint)",
    color: "bg-emerald-400",
  },
  {
    name: "Sara Walker",
    org: "ASU · Assembly Theory",
    status: "New paper on origin-of-life information thresholds",
    color: "bg-cyan-400",
  },
  {
    name: "Jensen Huang",
    org: "NVIDIA",
    status: "GTC keynote · Rubin Ultra architecture preview",
    color: "bg-fuchsia-400",
  },
];

export default function Home() {
  const [consoleOpen, setConsoleOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [statusIndex, setStatusIndex] = useState(0);

  const heroRef = useRef<HTMLDivElement>(null);

  const statusTexts = [
    "QUANTUM CORE • ONLINE • v4.0.1",
    "SYNCING GLOBAL KNOWLEDGE...",
    "AI NODES ACTIVE • 184K",
    "CONNECTING RESEARCH NETWORK...",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setStatusIndex((prev) => (prev + 1) % statusTexts.length);
    }, 2500);

    const onMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      const { clientX, clientY } = e;
      const x = (clientX / window.innerWidth - 0.5) * 20;
      const y = (clientY / window.innerHeight - 0.5) * 20;
      heroRef.current.style.setProperty("--mx", `${x}px`);
      heroRef.current.style.setProperty("--my", `${y}px`);
    };

    window.addEventListener("mousemove", onMove);

    return () => {
      clearInterval(interval);
      window.removeEventListener("mousemove", onMove);
    };
  }, []);

  return (
    <main className="scanlines relative min-h-screen overflow-x-hidden z-10">
      <MatrixRain />
      <LoadingScreen />
      <QuantumBackground />

      
      {/* NAVBAR */}
      <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-xl bg-black/30 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl">✺</span>
            <span className="font-semibold tracking-[0.25em] text-sm">
              FUTUREVERSE
            </span>
          </Link>

          <nav className="hidden md:flex gap-8 text-sm text-white/70">
            <Link href="/assistant" className="hover:text-white transition">Assistant</Link>
            <Link href="/research" className="hover:text-white transition">Research</Link>
            <Link href="/developer" className="hover:text-white transition">Developer</Link>
            <Link href="/utility" className="hover:text-white transition">Utility</Link>
            <Link href="/knowledge" className="hover:text-white transition">Knowledge</Link>
          </nav>

          <button
            onClick={() => setConsoleOpen(true)}
            className="px-5 py-2 rounded-full bg-linear-to-r from-cyan-400 to-violet-500 text-black font-medium shadow-lg shadow-cyan-500/20 hover:scale-105 transition"
          >
            Launch Console →
          </button>
        </div>
      </header>
      <section className="pt-37 px-6 space-y-8">
        

  <TypingTerminal />

  <OracleTerminal />

  <SignalFeed />

  <CivilizationTimeline />

  <SystemLogs />

  <StatusPanel />

  <CommandConsole />

</section>

      {/* CONSOLE POPUP */}
      {consoleOpen && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex items-center justify-center p-6">
          <div className="w-full max-w-5xl h-[80vh] rounded-3xl animate-float border border-cyan-500/20 bg-black shadow-2xl overflow-hidden">
            <div className="flex items-center justify-between px-6 py-4 border-b border-white/10">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>
              <button
                onClick={() => setConsoleOpen(false)}
                className="text-white/60 hover:text-white"
              >
                Close
              </button>
            </div>

            <div className="p-6 font-mono text-sm text-cyan-400 space-y-4 overflow-y-auto h-full">
              <p>{">"} Initializing Quantum Core...</p>
              <p>{">"} Connecting AI Nodes...</p>
              <p>{">"} Syncing Global Knowledge...</p>
              <p>{">"} Loading Neural Systems...</p>
              <p>{">"} FutureVerse Console Ready ✓</p>

              <div className="mt-8">
                <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full w-[85%] bg-cyan-400 animate-pulse" />
                </div>
                <p className="mt-2 text-cyan-300">SYSTEM STATUS: OPERATIONAL _</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* HERO */}
      <section
        ref={heroRef}
        className="relative pt-40 pb-32 px-6"
        style={{ transform: "translate3d(var(--mx,0), var(--my,0), 0)" }}
      >
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-xs tracking-widest text-white/70 mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            {statusTexts[statusIndex]}
          </div>

          <h1 className="text-6xl md:text-8xl font-bold leading-[1.05] tracking-tight">
            The operating system
            <br />
            for{" "}
            <span className="bg-linear-to-r from-cyan-300 via-violet-300 to-fuchsia-300 bg-clip-text text-transparent">
              human knowledge.
            </span>
          </h1>

          <p className="mt-8 text-lg md:text-xl text-white/60 max-w-2xl mx-auto">
            Search, build, learn, transact, collaborate. One unified surface
            for AI, research, code, and the people moving civilization forward.
          </p>

          {/* SEARCH BAR */}
          <div className="mt-12 max-w-3xl mx-auto">
            <div className="relative group">
              <div className="absolute -inset-1 bg-linear-to-r from-cyan-500 via-violet-500 to-fuchsia-500 rounded-2xl blur-xl opacity-40 group-hover:opacity-70 transition" />
              <div className="relative flex items-center gap-3 px-6 py-5 rounded-2xl bg-black/60 backdrop-blur-xl border border-white/10">
                <span className="text-cyan-300">▸</span>
                <input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Ask anything · search papers · generate code · pay a bill..."
                  className="flex-1 bg-transparent outline-none text-base placeholder:text-white/30"
                />
                <button className="text-white/50 hover:text-white transition" title="Voice">
                  🎙
                </button>
                <button className="px-4 py-1.5 rounded-lg bg-white text-black text-sm font-medium hover:bg-white/90 transition">
                  Run
                </button>
              </div>
            </div>

            <div className="mt-3 flex flex-wrap justify-center gap-2 text-xs text-white/40">
              {[
                "Summarize arXiv 2024.18472",
                "Build a Next.js auth flow",
                "Recharge ₹299 prepaid",
                "What is Sabine Hossenfelder working on?",
              ].map((s) => (
                <button
                  key={s}
                  className="px-3 py-1 rounded-full border border-white/10 hover:border-white/30 hover:text-white/80 transition"
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          {/* METRICS */}
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {METRICS.map((m) => (
              <GlassCard key={m.l} className="py-6">
                <div className="text-3xl md:text-4xl font-bold bg-linear-to-b from-white to-white/40 bg-clip-text text-transparent">
                  {m.v}
                </div>
                <div className="mt-1 text-xs tracking-widest text-white/50">
                  {m.l.toUpperCase()}
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* MODULES */}
      <section className="relative px-6 py-24">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-12">
            <div>
              <div className="text-xs tracking-[0.3em] text-cyan-300/70">
                02 · MODULES
              </div>
              <h2 className="mt-2 text-4xl md:text-5xl font-bold">
                Six surfaces. One mind.
              </h2>
            </div>
            <Link
              href="/dashboard"
              className="hidden md:block text-sm text-white/60 hover:text-white"
            >
              View all →
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {MODULES.map((m) => (
              <Link
                key={m.title}
                href={m.href}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/2 backdrop-blur-xl p-8 hover:border-white/30 transition"
              >
                <div
                  className={`absolute -top-20 -right-20 w-60 h-60 rounded-full bg-gradient-radial ${m.glow} blur-3xl opacity-60 group-hover:opacity-100 transition`}
                />
                <div className="relative">
                  <div className="text-4xl mb-6 text-white/80">{m.icon}</div>
                  <h3 className="text-xl font-semibold">{m.title}</h3>
                  <p className="mt-2 text-sm text-white/50">{m.desc}</p>
                  <div className="mt-6 inline-flex items-center gap-2 text-xs text-white/40 group-hover:text-white transition">
                    Enter module →
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* LIVE TRACKER */}
      <section className="relative px-6 py-24 border-y border-white/5 bg-linear-to-b from-transparent via-violet-950/10 to-transparent">
        <div className="max-w-7xl mx-auto">
          <div className="text-xs tracking-[0.3em] text-violet-300/70">
            03 · LIVE TRACKER
          </div>
          <h2 className="mt-2 text-4xl md:text-5xl font-bold">
            What the world's minds are doing right now.
          </h2>

          <div className="mt-10 grid md:grid-cols-3 gap-5">
            {TRACKER.map((p) => (
              <button
                key={p.name}
                onClick={() =>
                  window.open(
                    `/research/${p.name.toLowerCase().replace(/\s+/g, "-")}`,
                    "_blank"
                  )
                }
                className="text-left"
              >
                <GlassCard className="p-6 hover:border-cyan-400/40 hover:scale-[1.02] transition cursor-pointer">
                  <div className="flex items-center gap-3">
                    <span className={`w-2 h-2 rounded-full ${p.color} animate-pulse`} />
                    <div className="text-xs text-white/50 tracking-widest">LIVE</div>
                  </div>
                  <div className="mt-4 text-lg font-semibold">{p.name}</div>
                  <div className="text-sm text-white/50">{p.org}</div>
                  <div className="mt-4 text-sm text-white/80">{p.status}</div>
                </GlassCard>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative px-6 py-32 text-center">
        <h2 className="text-5xl md:text-7xl font-bold tracking-tight">
          Step into the{" "}
          <span className="bg-linear-to-r from-cyan-300 to-fuchsia-300 bg-clip-text text-transparent">
            FutureVerse.
          </span>
        </h2>
        <p className="mt-6 text-white/50 max-w-xl mx-auto">
          Free during open beta. No credit card. Just curiosity.
        </p>
        <div className="mt-10 flex justify-center gap-4">
          <Link
            href="/dashboard"
            className="px-8 py-4 rounded-full bg-white text-black font-medium hover:scale-105 transition"
          >
            Create Account
          </Link>
          <Link
            href="/assistant"
            className="px-8 py-4 rounded-full border border-white/20 hover:border-white/50 transition"
          >
            Try the Assistant
          </Link>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/5 py-10 text-center text-xs text-white/30 tracking-widest">
        FUTUREVERSE · © 2026 · BUILT FOR THE NEXT CENTURY
      </footer>
    </main>
  );
}