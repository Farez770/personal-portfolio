import {
  ArrowDown,
  ArrowRight,
  Download,
  Github,
  Linkedin,
  Mail,
  Sparkles,
} from "lucide-react";
import { motion } from "framer-motion";
import TechBackground from "../visuals/TechBackground";
import myImg from "/images/myImg.jpeg";

const socialLinks = [
  { label: "GitHub", href: "https://github.com/farez770", icon: Github },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/s-m-asfaqur-rahman/",
    icon: Linkedin,
  },
  { label: "Email", href: "mailto:asfaq.farez@gmail.com", icon: Mail },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[760px] items-center overflow-hidden pt-18 sm:min-h-[820px] lg:min-h-[880px]"
    >
      {/* pt-28 */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[url('/images/tech-portfolio-background.webp')] bg-cover bg-center opacity-45 sm:opacity-55"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(90deg,rgba(16,17,20,.84)_0%,rgba(16,17,20,.48)_48%,rgba(16,17,20,.78)_100%)]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-b from-[#101114]/25 via-[#101114]/35 to-[#101114]"
      />
      <TechBackground />
      <div className="container-width relative z-10 grid items-center gap-12 pb-20 pt-12 lg:grid-cols-[1.1fr_.9fr] lg:gap-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#b8f550]/20 bg-[#b8f550]/[0.06] px-3 py-2">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#9ae616] opacity-50" />
              {/* bg-[#b8f550] */}
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#b8f550]" />
              {/* bg-[#b8f550] */}
            </span>
            <span className="mono text-[10px] tracking-[.12em] text-[#c8e9a0]">
              {/* text-[#c8e9a0] */}
              OPEN TO LEARNING & OPPORTUNITIES
            </span>
          </div>
          <p className="section-kicker sm:text-lg">Hello, world! I&apos;m</p>
          <h1 className="mt-3 max-w-3xl text-5xl font-semibold leading-[.98] tracking-[-.075em] sm:text-6xl md:text-7xl xl:text-[84px]">
            S. M. Asfaqur <span className="text-[#b8f550]">Rahman</span>
          </h1>
          <h2 className="mt-6 text-lg font-medium text-[#d5d6dc] md:text-xl lg:text-2xl">
            Aspiring Full-Stack Web Developer
          </h2>
          <p className="mt-5 max-w-xl text-sm leading-7 text-[#c7c8cc] sm:text-base sm:leading-8">
            {/* text-[#a4a6b0] */}I build responsive web experiences with React
            and Next.js, explore backend development, and stay curious about AI
            & Machine Learning.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#projects" className="lime-button">
              Explore my work <ArrowRight size={16} />
            </a>
            <a
              href="/resume.pdf"
              download="Asfaqur-Rahman-Resume.pdf"
              className="outline-button"
            >
              <Download size={16} /> Download resume
            </a>
          </div>
          <div className="mt-8 flex items-center gap-3">
            <span className="mono mr-1 text-[10px] uppercase tracking-[.15em] text-[#b9bbc2]">
              {/* text-[#737681] */}
              Find me
            </span>
            {socialLinks.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                aria-label={label}
                href={href}
                target={label === "Email" ? undefined : "_blank"}
                rel="noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/[0.025] text-[#a4a6b0] transition hover:-translate-y-1 hover:border-[#b8f550]/50 hover:text-[#b8f550]"
              >
                <Icon size={17} />
              </a>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="relative mx-auto w-full max-w-[410px] lg:ml-auto lg:mr-2"
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15 }}
        >
          <div className="absolute -inset-5 rounded-[32px] border border-[#b8f550]/10 rotate-3" />
          <div className="absolute -inset-3 rounded-[28px] border border-cyan-300/10 -rotate-2" />
          <div className="relative overflow-hidden rounded-[24px] border border-white/10 bg-[#191b21] p-3 shadow-[0_30px_100px_rgba(0,0,0,.45)]">
            <div className="flex items-center gap-1.5 border-b border-white/10 px-2 pb-3 pt-1">
              <span className="h-2 w-2 rounded-full bg-[#ff6b6b]" />
              <span className="h-2 w-2 rounded-full bg-[#f4d35e]" />
              <span className="h-2 w-2 rounded-full bg-[#b8f550]" />
              <span className="mono ml-3 text-[10px] text-[#777a84]">
                about-me.jsx
              </span>
            </div>
            <div className="flex min-h-[310px] flex-col items-center justify-center overflow-hidden rounded-b-xl bg-[radial-gradient(ellipse_at_50%_35%,rgba(184,245,80,.10),transparent_60%),linear-gradient(145deg,#1d2027,#111216)] px-6 py-10 text-center">
              <div className="relative mb-6 flex h-60 w-52 items-center justify-center rounded-full border border-[#b8f550]/35 bg-[#b8f550]/[0.06] shadow-[0_0_55px_rgba(184,245,80,.09)]">
                {/* h-38 w-36 */}
                {/* <div className="absolute inset-2 rounded-full border border-dashed border-white/15" /> */}
                <span className="text-5xl font-semibold tracking-[-.08em] text-[#b8f550] h-full w-full">
                  {/* AR<span className="text-white">.</span> */}
                  <img
                    src={myImg}
                    alt="my image"
                    srcset=""
                    className="rounded-2xl w-full h-full"
                  />
                </span>
                {/* before ->  -right-1 top-5*/}
                <span className="absolute -right-4 top-3 rounded-full border border-[#b8f550]/30 bg-[#171a1c] p-2 text-[#b8f550]">
                  <Sparkles size={15} />
                </span>
              </div>
              <p className="mono text-[10px] uppercase tracking-[.18em] text-[#b8f550]">
                Curious mind · Builder
              </p>
              <h3 className="mt-2 text-xl font-semibold">
                Learning by building.
              </h3>
              {/* <p className="mt-2 max-w-xs text-xs leading-6 text-[#9295a0]">
                Replace this initials avatar with your professional portrait in
                the next step.
              </p> */}
              <div className="mt-6 flex flex-wrap justify-center gap-2">
                {["React", "Next.js", "JavaScript", "TypeScript"].map((tag) => (
                  <span
                    key={tag}
                    className="mono rounded-md border border-white/10 px-2.5 py-1.5 text-[10px] text-[#c4c6cd]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div className="absolute -bottom-5 -left-5 hidden items-center gap-3 rounded-xl border border-white/10 bg-[#17191e]/90 px-4 py-3 shadow-xl backdrop-blur md:flex">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#b8f550]/10 text-[#b8f550]">
              <Code2Icon />
            </span>
            <span>
              <span className="block text-xs font-semibold">
                Always learning
              </span>
              <span className="mono text-[9px] text-[#888b96]">
                ONE COMMIT AT A TIME
              </span>
            </span>
          </div>
        </motion.div>
      </div>
      <a
        href="#about"
        className="absolute bottom-7 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 text-[#777a84] transition hover:text-[#b8f550]"
      >
        <span className="mono text-[9px] tracking-[.22em]">
          SCROLL TO EXPLORE
        </span>
        <ArrowDown size={15} className="animate-bounce" />
      </a>
    </section>
  );
}

function Code2Icon() {
  return <span className="mono text-sm font-bold">&lt;/&gt;</span>;
}
