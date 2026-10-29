import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="section-divider bg-[#0c0d10]">
      <div className="container-width flex flex-col gap-6 py-8 sm:flex-row items-center  sm:justify-between">
        <a href="/#home" className="text-lg font-bold tracking-[-.06em]">
          SMAR<span className="text-[#b8f550]">.</span>
        </a>

        <div className="flex flex-col justify-center items-center gap-1">
          <p className="text-xs text-[#777a84] sm:text-sm">
            © {new Date().getFullYear()}{" "}
            <span className="font-medium text-[#b8f550]">
              S. M. Asfaqur Rahman
            </span>
            . All rights reserved.
          </p>
          <p className="text-xs sm:text-sm text-[#777a84]">
            Designed with curiosity. Built with code.
          </p>
        </div>
        <div className="flex items-center gap-4">
          <a
            aria-label="GitHub profile"
            href="https://github.com/farez770"
            target="_blank"
            rel="noreferrer"
            className="text-[#9a9ca5] transition hover:text-[#b8f550]"
          >
            <Github size={17} />
          </a>
          <a
            aria-label="LinkedIn profile"
            href="https://www.linkedin.com/in/s-m-asfaqur-rahman/"
            target="_blank"
            rel="noreferrer"
            className="text-[#9a9ca5] transition hover:text-[#b8f550]"
          >
            <Linkedin size={17} />
          </a>
          <a
            aria-label="Email Asfaqur"
            href="mailto:asfaq.farez@gmail.com"
            className="text-[#9a9ca5] transition hover:text-[#b8f550]"
          >
            <Mail size={17} />
          </a>
          <a href="/#home" className="text-xs text-[#b8f550]">
            Back to top <ArrowUpRight className="ml-1 inline" size={13} />
          </a>
        </div>
      </div>
    </footer>
  );
}
