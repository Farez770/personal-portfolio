import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Mail,
  Phone,
  MessageCircle,
  Github,
  Linkedin,
  Send,
} from "lucide-react";

const email = "asfaq.farez@gmail.com";
const phone = "+880 1866455770"; // Add a public contact number if you want one shown.

export default function Contact() {
  return (
    <section id="contact" className="section-space">
      <div className="container-width">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-3xl border border-[#b8f550]/20 bg-[radial-gradient(ellipse_at_85%_0%,rgba(184,245,80,.12),transparent_42%),linear-gradient(145deg,#1a1d20,#131418)] p-6 sm:p-10 lg:p-14"
        >
          <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full border border-[#b8f550]/10" />
          <div className="absolute -right-8 -top-8 h-40 w-40 rounded-full border border-[#b8f550]/10" />
          <div className="relative grid gap-10 lg:grid-cols-[1.1fr_.9fr] lg:items-end">
            <div>
              <p className="section-kicker">Have a project in mind?</p>
              <h2 className="mt-5 max-w-xl text-4xl font-semibold leading-tight tracking-[-.06em] sm:text-6xl">
                Let&apos;s make something{" "}
                <span className="text-[#b8f550]">meaningful.</span>
              </h2>
              <p className="mt-5 max-w-lg text-sm leading-7 text-[#a4a6b0]">
                I&apos;m always interested in learning, connecting with other
                developers, and exploring opportunities to build useful things.
              </p>
              <a href={`mailto:${email}`} className="lime-button mt-7">
                Send me an email <Send size={15} />
              </a>
            </div>
            <div className="space-y-3">
              <a
                href={`mailto:${email}`}
                className="flex items-center gap-4 rounded-xl border border-white/10 bg-black/15 p-4 transition hover:border-[#b8f550]/35"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#b8f550]/10 text-[#b8f550]">
                  <Mail size={19} />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block text-xs text-[#858894]">Email me</span>
                  <span className="mt-1 block truncate text-sm">{email}</span>
                </span>
                <ArrowUpRight size={16} className="text-[#858894]" />
              </a>
              {phone && (
                <a
                  href={`tel:${phone}`}
                  className="flex items-center gap-4 rounded-xl border border-white/10 bg-black/15 p-4 transition hover:border-[#b8f550]/35"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#b8f550]/10 text-[#b8f550]">
                    <Phone size={19} />
                  </span>
                  <span className="flex-1">
                    <span className="block text-xs text-[#858894]">Phone</span>
                    <span className="mt-1 block text-sm">{phone}</span>
                  </span>
                  <ArrowUpRight size={16} />
                </a>
              )}
              <a
                href="https://github.com/farez770"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 rounded-xl border border-white/10 bg-black/15 p-4 transition hover:border-[#b8f550]/35"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-white/[0.06] text-white">
                  <Github size={19} />
                </span>
                <span className="flex-1">
                  <span className="block text-xs text-[#858894]">
                    Code & projects
                  </span>
                  <span className="mt-1 block text-sm">GitHub profile</span>
                </span>
                <ArrowUpRight size={16} className="text-[#858894]" />
              </a>
              <a
                href="https://www.linkedin.com/in/s-m-asfaqur-rahman/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 rounded-xl border border-white/10 bg-black/15 p-4 transition hover:border-[#b8f550]/35"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#0a66c2]/15 text-[#73baff]">
                  <Linkedin size={19} />
                </span>
                <span className="flex-1">
                  <span className="block text-xs text-[#858894]">
                    Let&apos;s connect
                  </span>
                  <span className="mt-1 block text-sm">LinkedIn profile</span>
                </span>
                <ArrowUpRight size={16} className="text-[#858894]" />
              </a>
              {/* <p className="flex items-center gap-2 px-1 pt-1 text-[10px] text-[#6f727c]">
                <MessageCircle size={12} /> Replace placeholder contact and
                social URLs before publishing.
              </p> */}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
