import { motion } from "framer-motion";
import { ArrowUpRight, BookOpen, Braces, Lightbulb, Rocket } from "lucide-react";

const values = [
  { icon: BookOpen, title: "Always learning", text: "I enjoy understanding the fundamentals, asking questions, and improving through consistent practice." },
  { icon: Braces, title: "Building with purpose", text: "I like turning ideas into useful interfaces and learning how the frontend connects to backend systems." },
  { icon: Lightbulb, title: "Curious by nature", text: "Alongside web development, I'm interested in AI and Machine Learning and how they can solve real problems." }
];

export default function About() {
  return (
    <section id="about" className="section-space section-divider">
      <div className="container-width">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .2 }}>
          <p className="section-kicker">A little about me</p>
          <div className="mt-4 grid gap-8 lg:grid-cols-[.85fr_1.15fr] lg:gap-16">
            <h2 className="section-title max-w-md">Curiosity turned into <span className="text-[#b8f550]">code.</span></h2>
            <div>
              <p className="text-sm leading-8 text-[#c1c3cb] sm:text-base">
                I&apos;m S. M. Asfaqur Rahman, an aspiring full-stack web developer with a growing interest in building useful, accessible, and responsive web applications. My journey is driven by learning the fundamentals, experimenting with new tools, and improving by building real projects.
              </p>
              <p className="mt-4 text-sm leading-8 text-[#9295a0]">
                I&apos;ve worked on projects such as FitLog and BazarDor, and I&apos;m developing TaskPad while learning more about authentication, databases, and backend fundamentals. Outside of web development, I&apos;d like this portfolio to reflect my own interests and hobbies too—those personal details can be added when I finalize my profile.
              </p>
              <a href="#projects" className="text-link mt-6">See what I&apos;ve been building <ArrowUpRight size={15} /></a>
            </div>
          </div>
        </motion.div>
        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {values.map(({ icon: Icon, title, text }, index) => (
            <motion.article key={title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .2 }} transition={{ delay: index * .1 }} className="glass-card rounded-2xl p-6 transition duration-300 hover:-translate-y-1 hover:border-[#b8f550]/25">
              <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl border border-[#b8f550]/20 bg-[#b8f550]/[0.07] text-[#b8f550]"><Icon size={20} /></div>
              <h3 className="text-lg font-semibold">{title}</h3>
              <p className="mt-3 text-sm leading-7 text-[#9295a0]">{text}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}