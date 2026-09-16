import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Skills", href: "/#skills" },
  { label: "About", href: "/#about" },
  { label: "Contact", href: "/#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    if (href.startsWith("/#")) {
      const id = href.replace("/#", "");
      if (location.pathname !== "/") {
        window.location.href = href;
        return;
      }
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-dark-800/90 backdrop-blur-md border-b border-dark-500/50"
          : "bg-transparent"
      }`}
    >
      <nav className="relative flex items-center h-11 md:h-14 w-full">
        {/* Logo — always pinned to left edge */}
        <Link to="/" className="flex items-center gap-1.5 cursor-pointer absolute left-4 md:left-8 z-10">
          <div className="w-7 h-7 flex items-center justify-center rounded-full overflow-hidden bg-white/10">
            <img
              src="/media/097_acf33594-998d-4636-bf48-0b4277b348cc_OK_logo_metal.jpg"
              alt="Okan Kurt logo"
              className="w-full h-full object-cover"
            />
          </div>
          <span className="font-display font-700 text-white text-xs md:text-sm tracking-wider">
            Okan Kurt
          </span>
        </Link>

        {/* Desktop Nav + CTA — centered in right dark panel (55%→100%) */}
        <div className="hidden md:flex items-center gap-2 absolute left-[55%] right-0 justify-center" style={{ transform: "scale(1.556)", transformOrigin: "center center" }}>
          <ul className="flex items-center gap-0.5 bg-black/80 backdrop-blur-sm border border-white/10 rounded-full px-2 py-1">
            {navLinks.map((link) => (
              <li key={link.label}>
                {link.href.startsWith("/#") ? (
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="text-xs text-gray-300 hover:text-white transition-colors duration-200 relative group cursor-pointer whitespace-nowrap px-2.5 py-0.5"
                  >
                    {link.label}
                    <span className="absolute -bottom-0.5 left-2.5 w-0 h-px bg-teal-500 group-hover:w-[calc(100%-1.25rem)] transition-all duration-300" />
                  </button>
                ) : (
                  <Link
                    to={link.href}
                    className="text-xs text-gray-300 hover:text-white transition-colors duration-200 relative group cursor-pointer whitespace-nowrap px-2.5 py-0.5"
                  >
                    {link.label}
                    <span className="absolute -bottom-0.5 left-2.5 w-0 h-px bg-teal-500 group-hover:w-[calc(100%-1.25rem)] transition-all duration-300" />
                  </Link>
                )}
              </li>
            ))}
          </ul>

          <a
            href="https://drive.google.com/file/d/1bEUkPGyB7qiB-fgE1bG972xLKmEmx_DM/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 btn-outline px-3.5 py-1.5 rounded-full text-xs font-medium cursor-pointer whitespace-nowrap"
          >
            View my CV
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden absolute right-4 w-11 h-11 flex items-center justify-center cursor-pointer z-10"
          aria-label="Toggle menu"
        >
          <div className="flex flex-col gap-1.5">
            <span
              className={`block h-0.5 bg-white transition-all duration-300 ${menuOpen ? "w-6 rotate-45 translate-y-2" : "w-6"}`}
            />
            <span
              className={`block h-0.5 bg-white transition-all duration-300 ${menuOpen ? "w-0 opacity-0" : "w-4"}`}
            />
            <span
              className={`block h-0.5 bg-white transition-all duration-300 ${menuOpen ? "w-6 -rotate-45 -translate-y-2" : "w-6"}`}
            />
          </div>
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-dark-800/95 backdrop-blur-md border-b border-dark-500/50 px-6 py-6">
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.label}>
                {link.href.startsWith("/#") ? (
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="text-base text-gray-300 hover:text-teal-400 transition-colors cursor-pointer whitespace-nowrap"
                  >
                    {link.label}
                  </button>
                ) : (
                  <Link
                    to={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="text-base text-gray-300 hover:text-teal-400 transition-colors cursor-pointer whitespace-nowrap"
                  >
                    {link.label}
                  </Link>
                )}
              </li>
            ))}
            <li>
              <a
                href="https://drive.google.com/file/d/1bEUkPGyB7qiB-fgE1bG972xLKmEmx_DM/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline px-5 py-2.5 rounded-full text-sm font-medium cursor-pointer whitespace-nowrap"
              >
                View my CV
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
