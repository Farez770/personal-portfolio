import { motion } from "framer-motion";
import { GraduationCap, BriefcaseBusiness, BookOpenCheck } from "lucide-react";

export default function EducationExperience() {
  return (
    <section id="education" className="section-space section-divider">
      <div className="container-width">
        <p className="section-kicker">The journey so far</p>
        <h2 className="section-title">
          Education & <span className="text-[#b8f550]">experience.</span>
        </h2>
        <p className="section-description mt-4 text-sm">
          A growing foundation in computer science and hands-on learning through
          projects.
        </p>
        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          <motion.article
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card rounded-2xl p-6 sm:p-8"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#b8f550]/[0.08] text-[#b8f550]">
              <GraduationCap size={22} />
            </div>
            <p className="mono mt-6 text-[10px] uppercase tracking-[.15em] text-[#b8f550]">
              Education
            </p>
            <p className="my-2 text-[#9b9ea8]">January 2023 - Present</p>
            <h3 className="mt-2 sm:text-lg font-semibold">
              Bachelor of Science in Computer Science & Engineering
            </h3>
            {/* <p className="mt-3 text-sm leading-7 text-[#9b9ea8]">Add your institution, degree or current study status, and dates here. These details are left editable because they have not yet been confirmed.</p> */}
            {/* <div className="mt-6 rounded-lg border border-dashed border-white/15 px-4 py-3 text-xs text-[#777a84]">
              Institution · Qualification · Dates
            </div> */}
            <p className="my-2 sm:text-lg font-bold">
              International Islamic university Chittagong
            </p>
            <div className="mt-6 rounded-lg border border-dashed border-white/15 px-4 py-3 sm:text-lg text-[#d8dded]">
              <p className=" text-lg font-semibold">Relevant coursework</p>
              <div className="mt-5 flex flex-wrap gap-2">
                <span className="rounded-md border border-white/[0.08] px-2.5 py-1.5 mono text-[10px] text-[#b9bbc4]">
                  Computer Programming
                </span>
                <span className="rounded-md border border-white/[0.08] px-2.5 py-1.5 mono text-[10px] text-[#b9bbc4]">
                  Data Structures & Algorithms
                </span>
                <span className="rounded-md border border-white/[0.08] px-2.5 py-1.5 mono text-[10px] text-[#b9bbc4]">
                  Databases Management System
                </span>
                <span className="rounded-md border border-white/[0.08] px-2.5 py-1.5 mono text-[10px] text-[#b9bbc4]">
                  Software Engineering
                </span>
                <span className="rounded-md border border-white/[0.08] px-2.5 py-1.5 mono text-[10px] text-[#b9bbc4]">
                  Tools & Technology
                </span>
              </div>
            </div>
          </motion.article>
          <motion.article
            id="experience"
            initial={{ opacity: 0, x: 15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card rounded-2xl p-6 sm:p-8"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-300/[0.08] text-cyan-200">
              <BriefcaseBusiness size={22} />
            </div>
            <p className="mono mt-6 text-[10px] uppercase tracking-[.15em] text-cyan-200">
              Experience
            </p>
            <h3 className="mt-2 text-xl font-semibold">
              Learning through real projects
            </h3>
            <p className="mt-3 text-sm leading-7 text-[#9b9ea8]">
              My current focus is building projects, strengthening JavaScript
              fundamentals, and learning how frontend applications work with
              APIs, databases, and authentication.
            </p>
            <div className="mt-6 flex items-center gap-3 rounded-lg border border-white/[0.08] bg-white/[0.02] px-4 py-3">
              <BookOpenCheck size={17} className="text-cyan-200" />
              <span className="text-xs text-[#c1c3cb]">
                Personal projects & continuous learning
              </span>
            </div>
          </motion.article>
        </div>
      </div>
    </section>
  );
}
