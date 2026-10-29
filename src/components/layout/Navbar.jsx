import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { ArrowUpRight, Menu, X } from "lucide-react";

const links = [
  { label: "About", href: "/#about" },
  { label: "Skills", href: "/#skills" },
  { label: "Projects", href: "/#projects" },
  { label: "Education", href: "/#education" },
  { label: "Contact", href: "/#contact" }
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const closeMenu = () => setOpen(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/[0.07] bg-[#101114]/85 backdrop-blur-xl">
      <nav className="container-width flex h-[72px] items-center justify-between gap-6">
        <Link to="/" onClick={closeMenu} className="shrink-0 text-lg font-bold tracking-[-.07em]">
          <span className="text-[#f5f5f0]">SMAR</span><span className="text-[#b8f550]">.</span>
          <span className="ml-2 hidden text-[10px] font-normal tracking-[.14em] text-[#888b96] sm:inline">DEVELOPER PORTFOLIO</span>
        </Link>

        <div className="hidden items-center gap-7 md:flex">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="text-[12px] text-[#a4a6b0] transition hover:text-[#b8f550]">{link.label}</a>
          ))}
        </div>

        <a href="/#contact" className="lime-button hidden !px-4 !py-2.5 md:inline-flex">Let&apos;s Talk <ArrowUpRight size={15} /></a>
        <button type="button" aria-label={open ? "Close navigation menu" : "Open navigation menu"} aria-expanded={open} onClick={() => setOpen(!open)} className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-white transition hover:border-[#b8f550] md:hidden">
          {open ? <X size={19} /> : <Menu size={19} />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-white/10 bg-[#141519] px-5 py-4 md:hidden">
          <div className="mx-auto flex max-w-xl flex-col items-center gap-1">
            {links.map((link) => (
              <a key={link.href} href={link.href} onClick={closeMenu} className="w-full rounded-lg px-4 py-3 text-center text-sm text-[#d6d7dc] transition hover:bg-white/5 hover:text-[#b8f550]">{link.label}</a>
            ))}
            <a href="/#contact" onClick={closeMenu} className="lime-button mt-2 w-full">Let&apos;s Talk <ArrowUpRight size={15} /></a>
          </div>
        </div>
      )}
    </header>
  );
}