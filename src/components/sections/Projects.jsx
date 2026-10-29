import { motion } from "framer-motion";
import { ArrowUpRight, ExternalLink, Github } from "lucide-react";
import { Link } from "react-router-dom";
import { projects } from "../../data/projects.js";

export default function Projects() {
  return (
    <section id="projects" className="section-space section-divider">
      <div className="container-width">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="section-kicker">Selected work</p>
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <h2 className="section-title">
              Things I&apos;ve <span className="text-[#b8f550]">built.</span>
            </h2>
            <p className="section-description text-sm sm:max-w-sm">
              A few projects that reflect my learning, problem-solving, and
              progress as a developer.
            </p>
          </div>
        </motion.div>

        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          {projects.map((project, index) => (
            <motion.article
              key={project.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ delay: index * 0.08 }}
              className={`group overflow-hidden rounded-2xl border border-white/10 bg-[#17191e] transition duration-300 hover:-translate-y-1 hover:border-white/20 ${index === 2 ? "lg:col-span-2 lg:grid lg:grid-cols-[.9fr_1.1fr]" : ""}`}
            >
              {/* Scrollable project screenshot */}
              <div className="project-scrollbar relative h-[260px] overflow-y-auto overflow-x-hidden bg-[#1d2027] sm:h-[320px]">
                <Link
                  to={`/projects/${project.slug}`}
                  aria-label={`View ${project.name} project details`}
                  className="block"
                >
                  <img
                    src={project.image}
                    alt={`${project.name} project preview`}
                    className="block h-auto w-full"
                  />
                </Link>

                <span className="pointer-events-none absolute left-4 top-4 rounded-full border border-white/15 bg-black/50 px-3 py-1.5 mono text-[10px] text-white/80 backdrop-blur">
                  {project.status}
                </span>
              </div>

              <div className="flex flex-col p-5 sm:p-7">
                <div className="flex items-center justify-between gap-3">
                  <span
                    className="mono text-[10px] uppercase tracking-[.15em]"
                    style={{ color: project.accent }}
                  >
                    {project.number} / {project.category}
                  </span>
                  <ArrowUpRight
                    size={17}
                    className="shrink-0 text-[#777a84] transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#b8f550]"
                  />
                </div>

                <h3 className="mt-3 text-2xl font-semibold tracking-[-.04em]">
                  {project.name}
                </h3>

                <p className="mt-3 flex-1 text-sm leading-7 text-[#9699a3]">
                  {project.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.stack.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md border border-white/[0.08] px-2.5 py-1.5 mono text-[10px] text-[#b9bbc4]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex flex-wrap items-center gap-4 border-t border-white/[0.08] pt-5">
                  <Link to={`/projects/${project.slug}`} className="text-link">
                    View project details <ArrowUpRight size={15} />
                  </Link>

                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs text-[#a1a3ad] transition hover:text-white"
                    >
                      <ExternalLink size={13} /> Live site
                    </a>
                  )}

                  {project.repoUrl && (
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs text-[#a1a3ad] transition hover:text-white"
                    >
                      <Github size={13} /> Source
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
