import { Link, useParams } from "react-router-dom";
import {
  ArrowLeft,
  ArrowUpRight,
  CheckCircle2,
  CircleDot,
  ExternalLink,
  Github,
  Lightbulb,
  Layers3,
  Rocket,
} from "lucide-react";
import { motion } from "framer-motion";
import { projects } from "../data/projects.js";

export default function ProjectDetailsPage() {
  const { slug } = useParams();
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return (
      <main className="container-width min-h-[70vh] pt-36">
        <h1 className="text-3xl font-semibold">Project not found</h1>
        <Link className="text-link mt-6" to="/#projects">
          <ArrowLeft size={15} /> Back to projects
        </Link>
      </main>
    );
  }

  return (
    <main className="pt-[52px]">
      {/*pt-[72px]  */}
      <section className="relative overflow-hidden border-b border-white/[0.08]">
        <div className="absolute inset-0 grid-background opacity-40" />
        <div
          className="absolute -right-20 top-0 h-80 w-80 rounded-full blur-[120px]"
          style={{ background: `${project.accent}15` }}
        />
        <div className="container-width relative py-16 sm:py-24">
          <Link
            to="/#projects"
            className="inline-flex items-center gap-2 text-xs text-[#9295a0] transition hover:text-[#b8f550]"
          >
            <ArrowLeft size={14} /> Back to all projects
          </Link>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-10 max-w-4xl"
          >
            <p className="section-kicker">
              {project.number} / {project.category}
            </p>
            <div className="mt-4 flex flex-wrap items-center gap-3">
              <h1 className="text-5xl font-semibold tracking-[-.07em] sm:text-7xl">
                {project.name}
                <span style={{ color: project.accent }}>.</span>
              </h1>
              <span className="rounded-full border border-white/10 px-3 py-1.5 mono text-[10px] text-[#b8bbc4]">
                {project.status}
              </span>
            </div>
            <p className="mt-6 max-w-2xl text-base leading-8 text-[#a4a6b0]">
              {project.longDescription}
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="lime-button"
                >
                  Visit live project <ExternalLink size={15} />
                </a>
              )}
              {project.repoUrl ? (
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="outline-button"
                >
                  <Github size={15} /> Client repository
                </a>
              ) : (
                <span className="outline-button cursor-default opacity-60">
                  <Github size={15} /> Repository URL to be added
                </span>
              )}
            </div>
          </motion.div>
          <div className="mt-12 overflow-y-auto overflow-x-hidden project-scrollbar rounded-2xl border border-white/10 bg-[#17191e] max-h-[520px]">
            <img
              src={project.image}
              alt={`${project.name} preview`}
              className=" block h-auto w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="container-width grid gap-12 lg:grid-cols-[1fr_300px]">
          <div>
            <p className="section-kicker">Inside the project</p>
            <h2 className="section-title">
              What it <span className="text-[#b8f550]">does.</span>
            </h2>
            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              {project.features.map((feature) => (
                <div
                  key={feature}
                  className="flex items-start gap-3 rounded-xl border border-white/[0.08] bg-white/[0.02] p-4"
                >
                  <CheckCircle2
                    size={17}
                    className="mt-0.5 shrink-0 text-[#b8f550]"
                  />
                  <span className="text-sm leading-6 text-[#c1c3cb]">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
            <div className="mt-14">
              <p className="section-kicker">Problem solving</p>
              <h2 className="section-title">
                Challenges & <span className="text-[#b8f550]">lessons.</span>
              </h2>
              <div className="mt-7 space-y-4">
                {project.challenges.map((challenge, index) => (
                  <article
                    key={challenge.title}
                    className="glass-card rounded-xl p-5 sm:p-6"
                  >
                    <div className="flex items-start gap-3">
                      <span className="mono pt-1 text-xs text-[#b8f550]">
                        0{index + 1}
                      </span>
                      <div>
                        <h3 className="font-semibold">{challenge.title}</h3>
                        <p className="mt-2 text-sm leading-7 text-[#9699a3]">
                          {challenge.detail}
                        </p>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
            <div className="mt-14">
              <p className="section-kicker">What's next</p>
              <h2 className="section-title">
                Future <span className="text-[#b8f550]">improvements.</span>
              </h2>
              <div className="mt-7 space-y-3">
                {project.improvements.map((improvement) => (
                  <div
                    key={improvement}
                    className="flex items-start gap-3 text-sm leading-6 text-[#a4a6b0]"
                  >
                    <Rocket
                      size={16}
                      className="mt-1 shrink-0 text-[#b8f550]"
                    />
                    {improvement}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <aside className="space-y-5">
            <div className="glass-card rounded-2xl p-5">
              <div className="flex items-center gap-2">
                <Layers3 size={17} className="text-[#b8f550]" />
                <h3 className="font-semibold">Technology stack</h3>
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-lg border border-white/10 bg-white/[0.025] px-3 py-2 text-xs text-[#d0d1d7]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div className="glass-card rounded-2xl p-5">
              <div className="flex items-center gap-2">
                <CircleDot size={17} className="text-[#b8f550]" />
                <h3 className="font-semibold">Project links</h3>
              </div>
              <div className="mt-5 space-y-4">
                {project.liveUrl ? (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-between gap-2 text-sm text-[#bfc1c9] hover:text-[#b8f550]"
                  >
                    Live website <ArrowUpRight size={15} />
                  </a>
                ) : (
                  <p className="text-sm text-[#777a84]">
                    Live URL will be added after deployment.
                  </p>
                )}
                {project.repoUrl ? (
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-between gap-2 text-sm text-[#bfc1c9] hover:text-[#b8f550]"
                  >
                    Client repository <Github size={15} />
                  </a>
                ) : (
                  <p className="text-xs leading-6 text-[#777a84]">
                    {project.repoLabel}
                  </p>
                )}
              </div>
            </div>
            <div className="rounded-2xl border border-[#b8f550]/15 bg-[#b8f550]/[0.04] p-5">
              <Lightbulb size={19} className="text-[#b8f550]" />
              <h3 className="mt-3 font-semibold">Built by learning</h3>
              <p className="mt-2 text-xs leading-6 text-[#a4a6b0]">
                This case study is a starting point. Replace the general notes
                with the exact decisions, challenges, and lessons from your own
                development process.
              </p>
            </div>
          </aside>
        </div>
      </section>
      <section className="section-divider py-12">
        <div className="container-width flex flex-col justify-between gap-5 sm:flex-row sm:items-center">
          <div>
            <p className="mono text-[10px] uppercase tracking-[.15em] text-[#858894]">
              Keep exploring
            </p>
            <h2 className="mt-2 text-2xl font-semibold">
              More projects, more learning.
            </h2>
          </div>
          <Link to="/#projects" className="outline-button w-fit">
            Explore all projects <ArrowUpRight size={15} />
          </Link>
        </div>
      </section>
    </main>
  );
}
