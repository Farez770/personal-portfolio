import { motion } from "framer-motion";
import { Code2, Database, Wrench, ArrowUpRight } from "lucide-react";
import { skillGroups } from "../../data/skills.js";

const icons = { Code2, Database, Wrench };

export default function Skills() {
  return (
    <section id="skills" className="section-space">
      <div className="container-width">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="section-kicker">Tools of the trade</p>
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <h2 className="section-title">
              My current <span className="text-[#b8f550]">toolkit.</span>
            </h2>
            <p className="section-description text-sm sm:max-w-sm">
              A practical snapshot of the technologies I use, practice, and
              continue to learn.
            </p>
          </div>
        </motion.div>
        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {skillGroups.map((group, index) => {
            const Icon = icons[group.icon] || Code2;
            return (
              <motion.article
                key={group.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: index * 0.1 }}
                className="glass-card rounded-2xl p-5 sm:p-6"
              >
                <div className="flex items-start justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#b8f550]/[0.08] text-[#b8f550]">
                    <Icon size={20} />
                  </div>
                  <span className="mono text-[10px] text-[#666974]">
                    0{index + 1}
                  </span>
                </div>
                <h3 className="mt-5 text-lg font-semibold">{group.title}</h3>
                <p className="mt-2 min-h-10 text-xs leading-6 text-[#858894]">
                  {group.description}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill.name}
                      title={skill.level}
                      className="group inline-flex items-center gap-2 rounded-lg border border-white/[0.08] bg-white/[0.025] px-3 py-2 text-xs text-[#d4d5db] transition hover:border-[#b8f550]/35 hover:text-[#b8f550]"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-[#b8f550]/70" />
                      {skill.name}
                    </span>
                  ))}
                </div>
                <p className="mt-5 flex items-center gap-2 border-t border-white/[0.08] pt-4 text-[10px] text-[#737681]">
                  <ArrowUpRight size={13} className="text-[#b8f550]" /> Hover a
                  skill to see its learning status
                </p>
              </motion.article>
            );
          })}
        </div>
        {/* <p className="mt-4 text-xs leading-6 text-[#727580]">Skill labels are intentionally honest: some technologies are still in progress. Update <code className="text-[#b8f550]">src/data/skills.js</code> as your experience grows.</p> */}
      </div>
    </section>
  );
}
