// Mission Notebook page: a space-age archival dossier that frames Owais's curiosity as an interdisciplinary trajectory.
import { useState } from "react";
import {
  ArrowDown,
  ArrowUpRight,
  Atom,
  BrainCircuit,
  CircuitBoard,
  FlaskConical,
  Github,
  Menu,
  Orbit,
  ScanLine,
  Sparkles,
  Stethoscope,
  Telescope,
  X,
} from "lucide-react";

const logo = "/manus-storage/owais-orbit-mark_4bb337f1.png";
const heroImage = "/manus-storage/owais-mission-hero_584f8cb0.jpg";
const biologyImage = "/manus-storage/owais-biology-ai_e6b249d9.jpg";
const visionImage = "/manus-storage/owais-vision-hardware_f7a41c6b.jpg";
const atlasImage = "/manus-storage/owais-project-atlas_db246c5f.jpg";
const githubRepository = "https://github.com/justahumanbuddy/owais-nasa-portfolio";
const githubPages = "https://justahumanbuddy.github.io/owais-nasa-portfolio/";

const navItems = [
  ["01", "Trajectory", "#trajectory"],
  ["02", "Project log", "#projects"],
  ["03", "Fields", "#fields"],
  ["04", "Future", "#future"],
];

const projects = [
  {
    id: "01",
    classification: "EDU-2035 / SIMULATION",
    observation: "Convert study material into a structured way to practise, review, and adjust.",
    title: "NEET Mock 2035 Engine",
    description:
      "A study system exploring how source material can become structured NEET-style practice—combining PDF extraction, question generation, topic planning, scoring logic, and a React/Electron interface.",
    tags: ["AI-assisted learning", "React + Vite", "JSON schemas"],
    icon: FlaskConical,
  },
  {
    id: "02",
    classification: "CV-02 / PHYSICAL INPUT",
    observation: "Investigate a less abstract interface: computer vision that can recognise human action.",
    title: "Cortex Vision",
    description:
      "An experiment in more physical computing: hand tracking, MediaPipe, Python, and interfaces that respond to action instead of requiring every command through a keyboard.",
    tags: ["Computer vision", "MediaPipe", "PyQt6"],
    icon: ScanLine,
  },
  {
    id: "03",
    classification: "AI-01 / DESKTOP AGENT",
    observation: "Explore software that has context and the ability to assist with real computer work.",
    title: "Jarvis Desktop Assistant",
    description:
      "A desktop-assistant direction focused on voice, context, automation, and agentic software that can help carry out work—not only describe how to do it.",
    tags: ["Agentic AI", "Automation", "Desktop systems"],
    icon: BrainCircuit,
  },
  {
    id: "04",
    classification: "UX-07 / INTENTIONALITY",
    observation: "Treat product structure and administration as part of a considered digital experience.",
    title: "Niyyah",
    description:
      "A product concept for an intentional modern Islamic digital experience, where content structure, administration, and thoughtful interface design matter as much as information itself.",
    tags: ["Product thinking", "Content systems", "UI design"],
    icon: Sparkles,
  },
];

const fields = [
  { name: "Biology & medicine", detail: "Living systems, physiology, diagnostics", icon: Stethoscope, tone: "bg-[#d6e3e1] text-[#0a2630]" },
  { name: "AI & software", detail: "Agents, apps, interfaces, local models", icon: BrainCircuit, tone: "bg-[#ff5a3c] text-[#fff6ec]" },
  { name: "Hardware & vision", detail: "Sensors, ESP32, real-time interaction", icon: CircuitBoard, tone: "bg-[#9cb4ca] text-[#081523]" },
  { name: "Physics & systems", detail: "Vectors, motion, energy, first principles", icon: Atom, tone: "bg-[#f4e9d6] text-[#173248]" },
];

function MissionMark({ size = "h-9 w-9" }: { size?: string }) {
  return <img className={`${size} object-contain`} src={logo} alt="Owais orbit-and-spark mark" />;
}

function MissionRail() {
  return <aside className="fixed bottom-0 left-0 top-[78px] z-30 hidden w-[74px] flex-col border-r border-[#7a8d9c]/25 bg-[#081523]/95 backdrop-blur-xl xl:flex" aria-label="Mission record navigation">
    <div className="flex h-16 items-center justify-center border-b border-[#7a8d9c]/25"><MissionMark size="h-8 w-8" /></div>
    <div className="flex flex-1 flex-col items-center justify-center gap-1">
      {navItems.map(([number, label, href]) => <a key={label} href={href} className="rail-link group" aria-label={`Go to ${label}`}><span className="absolute left-[78px] hidden whitespace-nowrap bg-[#0d1d2b] px-3 py-2 text-[9px] font-bold uppercase tracking-[0.16em] text-[#f6f1e7] shadow-xl group-hover:block">{number} / {label}</span></a>)}
    </div>
    <div className="flex flex-col items-center gap-3 border-t border-[#7a8d9c]/25 py-5"><span className="h-1.5 w-1.5 rounded-full bg-[#ff5a3c]" style={{ animation: "signal-pulse 1.8s ease-in-out infinite" }} /><span className="writing-mode-vertical text-[8px] font-bold uppercase tracking-[0.2em] text-[#8da3b4]">record active</span></div>
  </aside>;
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#081523]">
      <header className="sticky top-0 z-40 border-b border-[#7a8d9c]/25 bg-[#081523]/90 backdrop-blur-xl">
        <div className="mx-auto flex h-[78px] max-w-[1540px] items-center justify-between px-5 sm:px-8 lg:px-12">
          <a href="#top" className="flex items-center gap-3" aria-label="Back to top">
            <MissionMark />
            <span className="text-[13px] font-bold tracking-[0.12em] text-[#f6f1e7]"><span className="text-[#ff5a3c]">O/</span>WAIS</span>
          </a>
          <nav className="hidden items-center gap-7 lg:flex" aria-label="Main navigation">
            {navItems.map(([number, label, href]) => (
              <a key={label} href={href} className="group flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.16em] text-[#a5b7c6] transition-colors hover:text-[#f6f1e7]">
                <span className="text-[#ff5a3c]">{number}</span>{label}
              </a>
            ))}
          </nav>
          <a href="#future" className="hidden border border-[#f6f1e7]/55 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.15em] text-[#f6f1e7] transition-all hover:border-[#ff5a3c] hover:bg-[#ff5a3c] hover:text-[#081523] active:scale-[0.97] sm:inline-flex">
            Open dossier <ArrowUpRight className="ml-2 h-3.5 w-3.5" />
          </a>
          <button onClick={() => setMenuOpen(!menuOpen)} className="inline-flex p-2 text-[#f6f1e7] lg:hidden" aria-expanded={menuOpen} aria-label="Toggle menu">
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
        {menuOpen && (
          <nav className="border-t border-[#7a8d9c]/25 bg-[#0d1d2b] px-5 py-5 lg:hidden" aria-label="Mobile navigation">
            <div className="grid gap-1">
              {navItems.map(([number, label, href]) => (
                <a key={label} href={href} onClick={() => setMenuOpen(false)} className="flex items-center gap-3 px-2 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-[#f6f1e7]">
                  <span className="text-[#ff5a3c]">{number}</span>{label}
                </a>
              ))}
            </div>
          </nav>
        )}
      </header>

      <MissionRail />
      <main id="top" className="xl:pl-[74px]">
        <section className="mission-grid relative isolate overflow-hidden border-b border-[#7a8d9c]/25">
          <img src={heroImage} alt="Abstract astronomical field journal illustration" className="absolute inset-0 -z-20 h-full w-full object-cover object-center opacity-85" />
          <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,#081523_2%,#081523_38%,rgba(8,21,35,0.86)_49%,rgba(8,21,35,0.15)_78%,#081523_100%)]" />
          <div className="mx-auto grid min-h-[680px] max-w-[1540px] grid-cols-1 px-5 pb-14 pt-12 sm:px-8 lg:grid-cols-[124px_1fr_230px] lg:px-12 lg:pb-12 lg:pt-20">
            <div className="hidden flex-col items-center justify-between py-1 lg:flex">
              <div className="writing-mode-vertical text-[9px] font-bold uppercase tracking-[0.23em] text-[#a5b7c6]">Personal mission dossier</div>
              <div className="h-24 w-px bg-[#7a8d9c]/45" />
              <div className="writing-mode-vertical text-[9px] font-bold uppercase tracking-[0.23em] text-[#ff5a3c]">Karnataka · India</div>
            </div>
            <div className="flex max-w-4xl flex-col justify-end py-14 lg:py-24">
              <div className="enter mb-7 flex flex-wrap items-center gap-3">
                <span className="border border-[#ff5a3c]/70 bg-[#ff5a3c]/10 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.18em] text-[#ff8c74]">Status: in active pursuit</span>
                <span className="eyebrow">Class 11 science · NEET pathway</span>
              </div>
              <h1 className="enter enter-2 font-display max-w-[760px] text-[clamp(4.3rem,9vw,8.9rem)] leading-[0.81] tracking-[-0.06em] text-[#f6f1e7]">
                From living systems<br />to <em className="font-normal text-[#ff6d50]">learning systems.</em>
              </h1>
              <div className="enter enter-3 mt-9 max-w-[560px] border-l border-[#ff5a3c] pl-5 text-[16px] leading-7 text-[#c0cdda] sm:text-[18px]">
                I’m Owais—a student who follows the question past the textbook, into biology, AI, software, hardware, and the systems that connect them.
              </div>
              <div className="enter enter-4 mt-10 flex flex-wrap items-center gap-5">
                <a href="#trajectory" className="inline-flex items-center gap-3 bg-[#f6f1e7] px-5 py-3 text-[11px] font-bold uppercase tracking-[0.14em] text-[#0a1b2a] transition-transform hover:-translate-y-0.5 active:scale-[0.97]">
                  Trace the trajectory <ArrowDown className="h-4 w-4 text-[#ff5a3c]" />
                </a>
                <a href={githubRepository} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 border border-[#b7c9d5]/50 px-4 py-3 text-[10px] font-bold uppercase tracking-[0.14em] text-[#e2ebef] transition-colors hover:border-[#ff5a3c] hover:text-[#ff8c74] active:scale-[0.97]">
                  <Github className="h-3.5 w-3.5" /> Source code
                </a>
                <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#a5b7c6]">Curiosity is the common thread.</span>
              </div>
            </div>
            <aside className="hidden flex-col justify-end gap-7 py-10 lg:flex">
              <div className="border-t border-[#b5c7d4]/35 pt-3">
                <div className="eyebrow">Current coordinates</div>
                <p className="mt-2 text-sm leading-6 text-[#d9e2e7]">11th grade, science stream.<br />Medicine + technology.</p>
              </div>
              <div className="border-t border-[#b5c7d4]/35 pt-3">
                <div className="eyebrow">Operating principle</div>
                <p className="mt-2 text-sm leading-6 text-[#d9e2e7]">Understand the mechanism. Then build something real with it.</p>
              </div>
            </aside>
          </div>
        </section>

        <section id="trajectory" className="relative bg-[#f2eadc] text-[#102539]">
          <div className="mx-auto max-w-[1540px] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
            <div className="flex items-center gap-4"><span className="section-number">01</span><span className="rule bg-[#53677a]/35" /><span className="eyebrow !text-[#53677a]">Trajectory / working theory</span></div>
            <div className="mt-14 grid gap-12 lg:grid-cols-[1.06fr_0.94fr] lg:items-end">
              <div>
                <p className="eyebrow !text-[#b5422c]">Not a single track</p>
                <h2 className="mt-5 max-w-3xl font-display text-5xl leading-[0.91] tracking-[-0.04em] sm:text-6xl lg:text-7xl">The interesting work happens where disciplines start talking to each other.</h2>
              </div>
              <div className="max-w-xl border-l-2 border-[#ff5a3c] pl-6 text-[17px] leading-8 text-[#385166]">
                I’m preparing for medicine, but I don’t see technology as a separate life. Biology makes me ask how systems stay alive. AI and software make me ask how systems can learn, assist, and become useful.
              </div>
            </div>
            <div className="mt-16 grid border-y border-[#8a9baa]/40 sm:grid-cols-3">
              {[['01', 'Ask why', 'Concepts before memorization.'], ['02', 'Test ideas', 'Questions, mock systems, experiments.'], ['03', 'Make it real', 'Interfaces, tools, and useful prototypes.']].map(([num, title, body]) => (
                <div key={num} className="group border-[#8a9baa]/40 p-7 sm:border-r last:border-0 lg:p-9">
                  <div className="text-xs font-bold tracking-[0.2em] text-[#ff5a3c]">{num}</div>
                  <h3 className="mt-10 text-xl font-bold tracking-[-0.03em]">{title}</h3>
                  <p className="mt-2 max-w-48 text-sm leading-6 text-[#50677a]">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="relative overflow-hidden bg-[#0d1d2b] py-20 sm:py-28">
          <div className="absolute right-[-15%] top-0 h-[540px] w-[540px] rounded-full border border-[#93a9ba]/15" />
          <div className="absolute right-[-3%] top-[90px] h-[360px] w-[360px] rounded-full border border-[#ff5a3c]/20" style={{ animation: "orbit-drift 50s linear infinite" }} />
          <div className="relative mx-auto max-w-[1540px] px-5 sm:px-8 lg:px-12">
            <div className="flex items-center gap-4"><span className="section-number">02</span><span className="rule" /><span className="eyebrow">Project log / prototypes & experiments</span></div>
            <div className="mt-14 grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
              <div>
                <h2 className="font-display max-w-xl text-5xl leading-[0.9] tracking-[-0.04em] sm:text-6xl">Things I’ve made to investigate the question.</h2>
                <p className="mt-6 max-w-md text-[15px] leading-7 text-[#a9bac7]">The throughline is simple: use technology to turn an idea into something a person can actually interact with.</p>
              </div>
              <img src={atlasImage} alt="Abstract study-engine atlas illustration" className="h-[220px] w-full border border-[#8fa4b4]/25 object-cover sm:h-[280px]" />
            </div>
            <div className="mt-12 grid border-t border-[#7a8d9c]/35 lg:grid-cols-2">
              {projects.map((project, index) => {
                const Icon = project.icon;
                return <article key={project.id} className={`group relative border-b border-[#7a8d9c]/35 p-6 transition-colors hover:bg-[#13293a] sm:p-8 ${index % 2 === 0 ? "lg:border-r" : ""}`}>
                  <div className="absolute -top-1 left-0 hidden h-2 w-2 rounded-full border border-[#ff5a3c] bg-[#0d1d2b] lg:block" />
                  <div className="flex items-start justify-between gap-5"><div><span className="text-[11px] font-bold tracking-[0.18em] text-[#ff6d50]">{project.id} / EXPERIMENT LOG</span><p className="mt-2 text-[9px] font-bold uppercase tracking-[0.16em] text-[#91a6b7]">{project.classification}</p></div><Icon className="h-5 w-5 text-[#9ab0c2] transition-transform duration-300 group-hover:rotate-12 group-hover:text-[#ff6d50]" /></div>
                  <h3 className="mt-10 max-w-sm text-2xl font-bold tracking-[-0.04em] text-[#f6f1e7] sm:text-3xl">{project.title}</h3>
                  <p className="mt-4 max-w-lg text-sm leading-7 text-[#a9bac7]">{project.description}</p>
                  <div className="mt-7 border-l border-[#ff5a3c]/70 pl-3"><p className="text-[9px] font-bold uppercase tracking-[0.16em] text-[#ff8c74]">Observed intent</p><p className="mt-1 text-xs leading-5 text-[#bbcad4]">{project.observation}</p></div>
                  <div className="mt-6 flex flex-wrap items-center gap-2">{project.tags.map(tag => <span key={tag} className="border border-[#8fa4b4]/25 px-2.5 py-1 text-[9px] font-bold uppercase tracking-[0.12em] text-[#bed0db]">{tag}</span>)}<span className="ml-auto rotate-[-4deg] border border-[#ff6d50]/70 px-2 py-1 text-[8px] font-bold uppercase tracking-[0.16em] text-[#ff8c74]">Logged</span></div>
                </article>;
              })}
            </div>
          </div>
        </section>

        <section id="fields" className="relative bg-[#dbe5e7] py-20 text-[#0d2434] sm:py-28">
          <div className="mx-auto max-w-[1540px] px-5 sm:px-8 lg:px-12">
            <div className="flex items-center gap-4"><span className="section-number">03</span><span className="rule bg-[#53677a]/35" /><span className="eyebrow !text-[#53677a]">Fields / a working constellation</span></div>
            <div className="mt-14 grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
              <div>
                <h2 className="font-display max-w-2xl text-5xl leading-[0.9] tracking-[-0.045em] sm:text-6xl">Many tabs open.<br /><em className="font-normal text-[#b5422c]">One desire to understand.</em></h2>
                <div className="mt-10 grid gap-px overflow-hidden border border-[#60778a]/30 bg-[#60778a]/30 sm:grid-cols-2">
                  {fields.map((field) => { const Icon = field.icon; return <div key={field.name} className="min-h-[190px] bg-[#e6edf0] p-6 transition-colors hover:bg-[#f3eee3]">
                    <span className={`inline-flex h-10 w-10 items-center justify-center rounded-full ${field.tone}`}><Icon className="h-5 w-5" /></span>
                    <h3 className="mt-7 text-lg font-bold tracking-[-0.03em]">{field.name}</h3><p className="mt-2 text-sm leading-6 text-[#50677a]">{field.detail}</p>
                  </div>; })}
                </div>
              </div>
              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-1">
                <figure className="relative min-h-[330px] overflow-hidden bg-[#0d2434] sm:col-span-1 lg:min-h-[376px]"><img src={biologyImage} alt="Biology and AI abstract editorial illustration" className="absolute inset-0 h-full w-full object-cover" /><div className="absolute right-4 top-4 border border-[#dce7e7]/55 bg-[#081523]/75 px-2 py-1.5 text-[8px] font-bold uppercase tracking-[0.16em] text-[#eef2e9]">Plate B-11 / specimen map</div><div className="absolute left-5 top-5 h-9 w-9 rounded-full border border-[#ff5a3c]/80"><span className="absolute left-1/2 top-1/2 h-1 w-1 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#ff5a3c]" /></div><figcaption className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#06111b] to-transparent p-6 pt-20"><p className="eyebrow">Study field / biology + AI</p><p className="mt-2 font-display text-2xl text-[#f6f1e7]">A future where diagnosis has a better interface.</p></figcaption></figure>
                <figure className="relative min-h-[330px] overflow-hidden bg-[#0d2434] sm:col-span-1 lg:min-h-[376px]"><img src={visionImage} alt="Computer vision and hardware abstract editorial illustration" className="absolute inset-0 h-full w-full object-cover" /><div className="absolute right-4 top-4 border border-[#dce7e7]/55 bg-[#081523]/75 px-2 py-1.5 text-[8px] font-bold uppercase tracking-[0.16em] text-[#eef2e9]">Plate H-04 / input study</div><div className="absolute left-5 top-5 h-9 w-9 rounded-full border border-[#ff5a3c]/80"><span className="absolute left-1/2 top-1/2 h-1 w-1 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#ff5a3c]" /></div><figcaption className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#06111b] to-transparent p-6 pt-20"><p className="eyebrow">Study field / vision + hardware</p><p className="mt-2 font-display text-2xl text-[#f6f1e7]">Computing that sees more than a cursor.</p></figcaption></figure>
              </div>
            </div>
          </div>
        </section>

        <section id="future" className="relative overflow-hidden bg-[#f2eadc] text-[#091927]">
          <div className="absolute right-[7%] top-[8%] hidden opacity-20 lg:block"><Telescope className="h-80 w-80 stroke-[0.7]" /></div>
          <div className="absolute right-[8%] top-0 h-4 w-36 bg-[#ff5a3c]" />
          <div className="relative mx-auto grid max-w-[1540px] gap-12 px-5 py-20 sm:px-8 sm:py-28 lg:grid-cols-[120px_1fr_300px] lg:px-12">
            <div className="hidden lg:block"><MissionMark size="h-12 w-12" /></div>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.23em] text-[#b5422c]">04 / Forward vector</p>
              <h2 className="mt-7 max-w-4xl font-display text-[clamp(4rem,8vw,8.5rem)] leading-[0.8] tracking-[-0.06em]">Keep asking.<br /><em className="font-normal text-[#b5422c]">Keep building.</em></h2>
              <p className="mt-10 max-w-2xl text-[17px] leading-8 text-[#1a2a38]">The long-term direction is medicine + technology: medical AI, computer vision, diagnostics, biomedical systems, and better tools for the people learning and working inside them.</p>
              <div className="mt-12 flex flex-wrap gap-3"><span className="border border-[#152735]/40 px-3 py-2 text-[10px] font-bold uppercase tracking-[0.15em]">Research-minded</span><span className="border border-[#152735]/40 px-3 py-2 text-[10px] font-bold uppercase tracking-[0.15em]">Systems-curious</span><span className="border border-[#152735]/40 px-3 py-2 text-[10px] font-bold uppercase tracking-[0.15em]">Always learning</span></div>
            </div>
            <aside className="self-end border-t border-[#152735]/35 pt-5 lg:mb-1"><div className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#b5422c]">Final observation</div><p className="mt-3 text-sm leading-7 text-[#1a2a38]">I like learning how things work—and building things that make those ideas real.</p></aside>
          </div>
        </section>
      </main>

      <footer className="bg-[#06111b] px-5 py-8 sm:px-8 lg:px-12 xl:pl-[86px]"><div className="mx-auto flex max-w-[1540px] flex-col gap-5 text-[10px] font-bold uppercase tracking-[0.17em] text-[#9ab0c2] sm:flex-row sm:items-center sm:justify-between"><div className="flex items-center gap-3"><MissionMark size="h-7 w-7" /><span>Owais / Personal mission dossier</span></div><div className="flex flex-wrap items-center gap-4"><a href={githubRepository} target="_blank" rel="noreferrer" className="transition-colors hover:text-[#f6f1e7]">GitHub source</a><a href={githubPages} target="_blank" rel="noreferrer" className="transition-colors hover:text-[#f6f1e7]">GitHub Pages</a><span className="text-[#ff6d50]">Curiosity in active orbit</span></div></div></footer>
    </div>
  );
}
