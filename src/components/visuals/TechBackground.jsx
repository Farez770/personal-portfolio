import { motion, useReducedMotion } from "framer-motion";
import { Code2, Database, GitBranch, Github, Globe, Layers, Terminal, Braces, Cpu, Workflow } from "lucide-react";

const techItems = [
  { name: "React", icon: Code2, x: "8%", y: "24%", delay: 0, color: "#61dafb", drift: "float-one" },
  { name: "Next.js", icon: Globe, x: "22%", y: "13%", delay: .5, color: "#f5f5f0", drift: "float-two" },
  { name: "Tailwind", icon: Layers, x: "43%", y: "17%", delay: 1, color: "#55dff2", drift: "float-one" },
  { name: "Node.js", icon: Braces, x: "69%", y: "20%", delay: .3, color: "#b8f550", drift: "float-two" },
  { name: "MongoDB", icon: Database, x: "84%", y: "31%", delay: .8, color: "#64e6a5", drift: "float-one" },
  { name: "Git", icon: GitBranch, x: "91%", y: "13%", delay: 1.4, color: "#ff9b72", drift: "float-two" },
  { name: "JavaScript", icon: Braces, x: "78%", y: "55%", delay: .7, color: "#f4d35e", drift: "float-two" },
  { name: "GitHub", icon: Github, x: "10%", y: "61%", delay: 1.2, color: "#f5f5f0", drift: "float-one" },
  { name: "VS Code", icon: Terminal, x: "25%", y: "72%", delay: .4, color: "#55b8ff", drift: "float-two" },
  { name: "APIs", icon: Workflow, x: "64%", y: "76%", delay: 1.5, color: "#b8f550", drift: "float-one" },
  { name: "Dev Tools", icon: Cpu, x: "88%", y: "77%", delay: .9, color: "#a78bfa", drift: "float-two" }
];

const particles = Array.from({ length: 32 }, (_, i) => ({
  left: `${(i * 37 + 11) % 100}%`,
  top: `${(i * 61 + 7) % 100}%`,
  delay: `${(i % 9) * .45}s`,
  size: i % 5 === 0 ? 4 : 2
}));

export default function TechBackground() {
  const reduceMotion = useReducedMotion();

  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="grid-background absolute inset-0 opacity-35" />
      <div className="absolute -left-32 top-24 h-80 w-80 rounded-full bg-[#0e7490]/10 blur-[100px]" />
      <div className="absolute -right-20 top-40 h-96 w-96 rounded-full bg-[#84cc16]/10 blur-[120px]" />
      <div className="absolute left-[38%] top-[35%] h-64 w-64 rounded-full bg-[#2563eb]/10 blur-[110px]" />
      <div className="line-sweep absolute left-[-20%] top-[44%] h-px w-[55%] bg-gradient-to-r from-transparent via-[#55dff2]/70 to-transparent shadow-[0_0_14px_#55dff2]" />
      <div className="line-sweep absolute left-[40%] top-[65%] h-px w-[45%] bg-gradient-to-r from-transparent via-[#b8f550]/60 to-transparent shadow-[0_0_14px_#b8f550]" style={{ animationDelay: "-6s" }} />

      {particles.map((particle, index) => (
        <span key={index} className="pulse-glow absolute rounded-full bg-[#b8f550]" style={{ left: particle.left, top: particle.top, width: particle.size, height: particle.size, animationDelay: particle.delay, opacity: .4 }} />
      ))}

      {techItems.map((item) => {
        const Icon = item.icon;
        return (
          <motion.div key={item.name} className={`absolute hidden sm:block ${reduceMotion ? "" : item.drift}`} style={{ left: item.x, top: item.y }} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .8, delay: item.delay }}>
            <div className="flex items-center gap-2.5 rounded-xl border border-white/10 bg-[#12151b]/65 px-3 py-2.5 shadow-[0_10px_35px_rgba(0,0,0,.18)] backdrop-blur-sm" style={{ boxShadow: `0 0 28px ${item.color}0c` }}>
              <Icon size={18} style={{ color: item.color }} strokeWidth={1.7} />
              <span className="mono text-[10px] tracking-wide text-white/60">{item.name}</span>
            </div>
          </motion.div>
        );
      })}

      <div className="absolute left-[8%] top-[42%] hidden -rotate-6 rounded-lg border border-cyan-300/10 bg-[#0b1017]/50 p-3 font-mono text-[10px] leading-5 text-cyan-200/30 lg:block">
        <span className="text-[#b8f550]/60">const</span> build = () =&gt; {"{"}<br />
        &nbsp;&nbsp;createExperience();<br />
        &nbsp;&nbsp;shipWithCare();<br />
        {"}"}
      </div>
      <div className="absolute bottom-[14%] right-[9%] hidden rotate-3 rounded-lg border border-lime-300/10 bg-[#0b1017]/50 p-3 font-mono text-[10px] leading-5 text-lime-200/35 lg:block">
        <span className="text-[#b8f550]/70">$</span> npm run build<br />
        <span className="text-[#b8f550]/60">✓</span> ready for launch
      </div>
    </div>
  );
}