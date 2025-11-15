"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";

const manifesto = [
  "We remix analog memories into digital rebellions.",
  "We treat pixels like bricks, stack them loud, bold, and unapologetic.",
  "We sample color palettes from underground raves and satellite glitches.",
  "We choreograph experiences that make scrollbars feel like basslines.",
];

const neonModules = [
  {
    title: "Psycho-Interface Lab",
    accent: "bg-amber-400",
    brief:
      "Prototype interfaces that behave like living creatures. Hard corners, soft reactions, always a surprise.",
  },
  {
    title: "Brutal Rhythm Forge",
    accent: "bg-lime-400",
    brief:
      "Beat-match motion curves with visceral soundscapes. Sync your microinteractions with heartbeats.",
  },
  {
    title: "Chromatic Myth Lab",
    accent: "bg-sky-400",
    brief:
      "Craft juxtapositions that feel like graffiti on a cathedral. Reverent chaos, sacred noise.",
  },
];

const palettes = [
  {
    name: "Night Signal",
    spectrum: ["#111", "#b4ff39", "#fef08a", "#ff3d7f"],
  },
  {
    name: "Satellite Bloom",
    spectrum: ["#0a0a23", "#38f9ff", "#ff00b8", "#f4f4f4"],
  },
  {
    name: "Digital Pulp",
    spectrum: ["#121212", "#ff7a00", "#ffe700", "#7df9ff"],
  },
];

const ctaLinks = [
  { label: "Download Manifest", href: "#manifesto" },
  { label: "Join the Lab", href: "#colony" },
  { label: "Ping the Oracle", href: "#wave" },
];

export default function Home() {
  const pageRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: pageRef, offset: ["start start", "end end"] });
  const progressWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const titleSkew = useTransform(scrollYProgress, [0, 1], ["0deg", "6deg"]);
  const titleScale = useTransform(scrollYProgress, [0, 1], [1.05, 0.9]);

  return (
    <div ref={pageRef} className="relative min-h-screen overflow-x-hidden text-neutral-950">
      <div className="noise" aria-hidden />
      <div className="grid-mask" aria-hidden />

      <motion.div
        className="fixed left-0 top-0 z-40 h-1 bg-gradient-to-r from-amber-400 via-fuchsia-500 to-sky-400"
        style={{ width: progressWidth }}
      />

      <main className="snap-mandala relative z-10 flex flex-col gap-40 pb-32">
        <section
          id="hero"
          className="snap-panel relative flex min-h-screen flex-col justify-between overflow-hidden px-6 pt-24 sm:px-10 lg:px-16"
        >
          <motion.div
            className="absolute -top-24 right-[-20%] h-72 w-72 rounded-[3rem] border-8 border-black bg-gradient-to-br from-amber-200 via-pink-300 to-sky-300 blur-[2px] chrome"
            initial={{ rotate: -12, scale: 0.8, opacity: 0 }}
            animate={{ rotate: -4, scale: 1, opacity: 1 }}
            transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
          />
          <motion.div
            className="absolute bottom-[-18%] left-[-18%] h-[28rem] w-[28rem] rounded-[4rem] border-8 border-black bg-gradient-to-tr from-lime-200 via-emerald-200 to-cyan-200 blur-sm chrome"
            initial={{ rotate: 8, scale: 0.85, opacity: 0 }}
            animate={{ rotate: 2, scale: 1, opacity: 0.95 }}
            transition={{ duration: 1.6, ease: [0.65, 0, 0.35, 1], delay: 0.2 }}
          />

          <div className="relative flex flex-col gap-16 pt-10">
            <div className="flex flex-col gap-10 sm:gap-20">
              <div className="flex flex-wrap items-center gap-6 text-sm uppercase tracking-[0.4em] text-neutral-800">
                <span className="rounded-full border border-neutral-900 bg-amber-100 px-4 py-2 shadow-[4px_4px_0_0_#000]">
                  Neobrutalist Playground
                </span>
                <span className="rounded-full border border-neutral-900 bg-white px-4 py-2 shadow-[4px_4px_0_0_#000]">
                  Hypercolor Interfaces
                </span>
                <span className="rounded-full border border-neutral-900 bg-lime-200 px-4 py-2 shadow-[4px_4px_0_0_#000]">
                  Audio Reactive Scrolls
                </span>
              </div>

              <motion.h1
                className="relative max-w-5xl text-6xl font-black uppercase leading-[0.95] tracking-tight text-neutral-900 drop-shadow-[6px_6px_0px_rgba(0,0,0,0.85)] sm:text-8xl lg:text-[8.5rem]"
                style={{ skewY: titleSkew, scale: titleScale }}
              >
                dorksense
                <span className="ml-4 inline-flex items-center gap-3 rounded-full border-4 border-neutral-900 bg-lime-200 px-6 py-2 text-xl tracking-[0.6em] text-neutral-900 shadow-[6px_6px_0_#111]">
                  2049
                </span>
              </motion.h1>

              <p className="max-w-2xl text-lg font-medium leading-relaxed text-neutral-800 sm:text-xl">
                A creative dojo for designers, deviants, and data poets. We sculpt experiences that punch through the mundane with
                unapologetic geometry, primal typography, and color palettes stolen from rogue satellites.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-[minmax(0,2fr)_minmax(0,1.3fr)]">
              <div className="grid gap-6 sm:grid-cols-2">
                {neonModules.map((module) => (
                  <motion.article
                    key={module.title}
                    className="group relative flex h-full flex-col justify-between rounded-3xl border-4 border-neutral-900 bg-white p-6 shadow-[8px_8px_0_#111] transition-transform duration-300 ease-out hover:-translate-y-1 hover:rotate-[-1.5deg] hover:shadow-[14px_14px_0_#111]"
                    whileHover={{ scale: 1.03 }}
                    initial={{ y: 30, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
                  >
                    <span className={`absolute right-6 top-6 h-10 w-10 rounded-full border-2 border-neutral-900 ${module.accent} shadow-[4px_4px_0_#111]`} />
                    <h2 className="text-2xl font-black uppercase tracking-tight text-neutral-900">
                      {module.title}
                    </h2>
                    <p className="mt-6 text-sm font-medium leading-relaxed text-neutral-700">
                      {module.brief}
                    </p>
                    <span className="mt-8 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.4em] text-neutral-900">
                      Enter Module
                      <span className="h-2 w-8 bg-neutral-900" />
                    </span>
                  </motion.article>
                ))}
              </div>
              <motion.div
                className="relative flex flex-col gap-8 rounded-3xl border-4 border-neutral-900 bg-[#fff7df]/80 p-8 shadow-[10px_10px_0_#111]"
                initial={{ y: 60, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
              >
                <h3 className="text-3xl font-black uppercase tracking-tight text-neutral-900">Broadcast</h3>
                <p className="text-sm font-medium leading-relaxed text-neutral-700">
                  Every scroll is a tune. Every hover is a chord. We wireframe with audio-reactive grids and compose experiences that
                  scream in RGB. Plug in your weirdest idea—we will amplify it until satellites take notice.
                </p>
                <div className="flex flex-wrap gap-3">
                  {ctaLinks.map((link) => (
                    <Link
                      key={link.label}
                      href={link.href}
                      className="rounded-full border-2 border-neutral-900 bg-white px-5 py-3 text-xs font-black uppercase tracking-[0.35em] shadow-[6px_6px_0_#111] transition-all hover:-translate-y-1 hover:shadow-[10px_10px_0_#111]"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section id="manifesto" className="snap-panel relative mx-auto flex w-full max-w-6xl flex-col gap-16 px-6 sm:px-10 lg:px-16">
          <header className="flex flex-col gap-6">
            <span className="inline-flex w-fit items-center gap-3 rounded-full border-4 border-neutral-900 bg-lime-200 px-4 py-2 text-xs font-black uppercase tracking-[0.4em] shadow-[6px_6px_0_#111]">
              The Manifesto
              <span className="h-2 w-8 bg-neutral-900" />
            </span>
            <h2 className="text-5xl font-black uppercase tracking-tight text-neutral-950 drop-shadow-[6px_6px_0_#111] sm:text-6xl">
              Our rules for beautiful disobedience
            </h2>
          </header>

          <div className="grid gap-8 lg:grid-cols-[1.1fr_minmax(0,1fr)]">
            <motion.div
              className="relative overflow-hidden rounded-3xl border-4 border-neutral-900 bg-white/90 p-10 shadow-[10px_10px_0_#111]"
              initial={{ x: -80, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="absolute right-6 top-6 h-20 w-20 rounded-2xl border-4 border-neutral-900 bg-gradient-to-br from-amber-200 via-fuchsia-300 to-sky-200 shadow-[6px_6px_0_#111]" />
              <ul className="relative z-10 space-y-6 text-lg font-semibold text-neutral-800">
                {manifesto.map((line, index) => (
                  <li key={line} className="flex gap-4">
                    <span className="mt-1 h-8 w-8 flex-none rounded-lg border-2 border-neutral-900 bg-lime-200 text-center font-black text-neutral-900 shadow-[4px_4px_0_#111]">
                      {index + 1}
                    </span>
                    <span className="leading-relaxed">{line}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              className="flex h-full flex-col justify-between gap-12 rounded-3xl border-4 border-neutral-900 bg-[#121212] p-10 text-white shadow-[10px_10px_0_#111]"
              initial={{ x: 80, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            >
              <div className="flex flex-col gap-5">
                <p className="text-sm font-semibold uppercase tracking-[0.4em] text-lime-200">Signal to Noise</p>
                <h3 className="text-4xl font-black uppercase leading-tight tracking-tight text-white">
                  We remix data into neon rituals
                </h3>
              </div>
              <p className="text-sm leading-relaxed text-neutral-100/80">
                Nothing here is beige. We render raw textures through noise filters, we bathe grids in sub-bass, we celebrate the pixels
                that misbehave. Dorksense is a sonic scroll experiment. Wear headphones.
              </p>
              <div className="flex flex-wrap gap-3">
                {palettes.map((palette) => (
                  <div key={palette.name} className="group flex flex-col gap-2">
                    <span className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-200">
                      {palette.name}
                    </span>
                    <div className="flex overflow-hidden rounded-xl border-2 border-neutral-900 bg-white shadow-[4px_4px_0_#111]">
                      {palette.spectrum.map((hex) => (
                        <span key={hex} className="h-10 w-10" style={{ backgroundColor: hex }} />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        <section id="colony" className="snap-panel relative min-h-[80vh] bg-neutral-950 py-24 text-white">
          <div className="absolute inset-x-0 -top-24 h-24 bg-gradient-to-b from-transparent via-black/40 to-black" aria-hidden />
          <div className="mx-auto flex w-full max-w-6xl flex-col gap-16 px-6 sm:px-10 lg:px-16">
            <header className="flex flex-col gap-4">
              <span className="inline-flex w-fit items-center gap-3 rounded-full border-4 border-white bg-amber-400 px-4 py-2 text-xs font-black uppercase tracking-[0.4em] text-black shadow-[6px_6px_0_#111]">
                The Neon Colony
              </span>
              <h2 className="text-5xl font-black uppercase tracking-tight text-white drop-shadow-[10px_10px_0_#ef476f] sm:text-6xl">
                Scroll-synchronized experiences built by strange minds
              </h2>
            </header>

            <div className="grid gap-10 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]">
              <motion.div
                className="relative overflow-hidden rounded-[3rem] border-4 border-white bg-gradient-to-br from-fuchsia-500 via-amber-300 to-cyan-400 p-1 shadow-[12px_12px_0_#ef476f]"
                initial={{ opacity: 0, scale: 0.8, rotate: -6 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="flex flex-col gap-16 rounded-[2.7rem] bg-black/80 px-10 py-12 backdrop-blur">
                  <p className="max-w-2xl text-lg font-medium leading-relaxed text-neutral-100">
                    We choreograph experiences where scroll velocity modulates depth, and magnetic buttons snap to the beat. Our mission is to
                    craft digital venues that honor brutalist honesty while splashing color like street murals.
                  </p>
                  <motion.div
                    className="grid gap-6 sm:grid-cols-3"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      visible: {
                        opacity: 1,
                        y: 0,
                        transition: { staggerChildren: 0.1, delayChildren: 0.2 },
                      },
                    }}
                  >
                    {["Motion Poets", "Audio Architects", "Texture Hackers"].map((badge) => (
                      <motion.span
                        key={badge}
                        className="flex h-full items-center justify-center rounded-2xl border-2 border-white bg-black/60 px-4 py-6 text-center text-sm font-semibold uppercase tracking-[0.35em]"
                        variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                      >
                        {badge}
                      </motion.span>
                    ))}
                  </motion.div>
                </div>
              </motion.div>

              <motion.div
                className="flex flex-col justify-between gap-8 rounded-[2.5rem] border-4 border-white bg-neutral-900/80 p-10 shadow-[12px_12px_0_#ef476f]"
                initial={{ opacity: 0, x: 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
              >
                <h3 className="text-3xl font-black uppercase tracking-tight text-white">
                  Residency Wave
                </h3>
                <p className="text-sm leading-relaxed text-neutral-100/80">
                  Every quarter we open the vaults to a handful of collaborators. Expect glitch rituals, analog synthesizer jams, and
                  typography sprints. If your brainstorm leaves scorch marks, you belong here.
                </p>
                <form className="mt-4 flex flex-col gap-4">
                  <label className="flex flex-col gap-2">
                    <span className="text-xs font-semibold uppercase tracking-[0.3em] text-neutral-300">Secret Alias</span>
                    <input
                      type="text"
                      placeholder="e.g. Neon Cartographer"
                      className="w-full rounded-xl border-2 border-white bg-black/40 px-4 py-3 text-sm text-white shadow-[6px_6px_0_#ef476f] placeholder:text-neutral-500 focus:border-lime-200 focus:outline-none"
                    />
                  </label>
                  <label className="flex flex-col gap-2">
                    <span className="text-xs font-semibold uppercase tracking-[0.3em] text-neutral-300">Contact Signal</span>
                    <input
                      type="email"
                      placeholder="glow@dorksense.club"
                      className="w-full rounded-xl border-2 border-white bg-black/40 px-4 py-3 text-sm text-white shadow-[6px_6px_0_#ef476f] placeholder:text-neutral-500 focus:border-lime-200 focus:outline-none"
                    />
                  </label>
                  <button
                    type="submit"
                    className="w-full rounded-full border-2 border-black bg-amber-400 px-6 py-4 text-xs font-black uppercase tracking-[0.35em] text-black shadow-[8px_8px_0_#111] transition-transform hover:-translate-y-1 hover:shadow-[12px_12px_0_#111]"
                  >
                    Request Entry
                  </button>
                </form>
              </motion.div>
            </div>
          </div>
        </section>

        <section id="wave" className="snap-panel relative mx-auto flex w-full max-w-6xl flex-col gap-16 px-6 sm:px-10 lg:px-16">
          <header className="flex flex-col gap-4">
            <span className="inline-flex w-fit items-center gap-3 rounded-full border-4 border-neutral-900 bg-cyan-200 px-4 py-2 text-xs font-black uppercase tracking-[0.4em] shadow-[6px_6px_0_#111]">
              Signal Diagram
            </span>
            <h2 className="text-5xl font-black uppercase tracking-tight text-neutral-900 drop-shadow-[6px_6px_0_#111] sm:text-6xl">
              Drop into the feedback loop
            </h2>
          </header>

          <motion.div
            className="relative overflow-hidden rounded-[2.5rem] border-4 border-neutral-900 bg-white/90 p-10 shadow-[12px_12px_0_#111]"
            initial={{ opacity: 0, scale: 0.94 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="pointer-events-none absolute inset-0 beam" aria-hidden />
            <div className="relative z-10 grid gap-10 lg:grid-cols-[1.2fr_minmax(0,1fr)]">
              <div className="flex flex-col gap-6 text-neutral-800">
                <p className="max-w-xl text-lg font-medium leading-relaxed">
                  We transmit audio-reactive design briefs every new moon. Expect generative prompts, web experiments, and glitch-art
                  tutorials. When you respond, the colony listens.
                </p>
                <div className="grid gap-4 sm:grid-cols-2">
                  {[
                    { label: "Glitch Chorus", value: "57 contributors" },
                    { label: "Live Set", value: "13 synths" },
                    { label: "Typeface Lab", value: "8 brutal fonts" },
                    { label: "Feedback Threads", value: "∞ iterations" },
                  ].map((stat) => (
                    <div
                      key={stat.label}
                      className="flex flex-col gap-1 rounded-xl border-2 border-neutral-900 bg-lime-200/80 px-4 py-6 text-neutral-900 shadow-[6px_6px_0_#111]"
                    >
                      <span className="text-xs font-semibold uppercase tracking-[0.35em]">{stat.label}</span>
                      <span className="text-2xl font-black uppercase tracking-tight">{stat.value}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex flex-col gap-6 rounded-[2rem] border-4 border-neutral-900 bg-neutral-900 p-8 text-white shadow-[10px_10px_0_#111]">
                <h3 className="text-2xl font-black uppercase tracking-tight text-white">Transmit a pulse</h3>
                <p className="text-sm leading-relaxed text-neutral-200">
                  Upload a thought fragment, a synth loop, or a scribble. We remix every submission into the next drop.
                </p>
                <textarea
                  rows={4}
                  placeholder="Dear dorksense, tonight the skyline turned ultraviolet..."
                  className="min-h-[120px] rounded-xl border-2 border-white bg-black/60 px-4 py-3 text-sm text-white shadow-[6px_6px_0_#111] placeholder:text-neutral-500 focus:border-lime-200 focus:outline-none"
                />
                <button
                  type="button"
                  className="w-full rounded-full border-2 border-black bg-lime-200 px-6 py-4 text-xs font-black uppercase tracking-[0.35em] text-black shadow-[8px_8px_0_#111] transition-transform hover:-translate-y-1 hover:shadow-[12px_12px_0_#111]"
                >
                  Send Transmission
                </button>
                <p className="text-xs font-medium uppercase tracking-[0.3em] text-neutral-400">
                  Response in <span className="text-lime-200">08:23</span> minutes (average)
                </p>
              </div>
            </div>
          </motion.div>
        </section>
      </main>

      <footer className="relative z-10 mt-32 flex flex-col items-center gap-8 px-6 pb-20 text-center text-neutral-900">
        <div className="flex flex-wrap justify-center gap-3 text-xs font-semibold uppercase tracking-[0.4em]">
          <span className="rounded-full border-2 border-neutral-900 bg-white px-4 py-2 shadow-[4px_4px_0_#111]">
            dorksense cooperative
          </span>
          <span className="rounded-full border-2 border-neutral-900 bg-amber-200 px-4 py-2 shadow-[4px_4px_0_#111]">
            Est. 2049
          </span>
          <span className="rounded-full border-2 border-neutral-900 bg-lime-200 px-4 py-2 shadow-[4px_4px_0_#111]">
            Scroll Responsibly
          </span>
        </div>
        <p className="max-w-2xl text-sm font-medium leading-relaxed text-neutral-700">
          Crafted in perpetual beta. Designed for retina burn, sonic fidelity, and audacious collaborators. Deploying fresh signals every
          time you refresh.
        </p>
      </footer>
    </div>
  );
}
