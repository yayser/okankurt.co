import { Link } from "react-router-dom";

export default function HeroSection() {
  const handleScrollDown = () => {
    const el = document.getElementById("portfolio");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative flex flex-col lg:flex-row min-h-screen overflow-hidden">
      {/* LEFT — YouTube Video Panel */}
      <div className="relative w-full lg:w-[55%] h-[50vh] lg:h-auto overflow-hidden">
        {/* YouTube iframe — cover fill trick */}
        <iframe
          src="https://www.youtube.com/embed/2X4pdNTG-PU?autoplay=1&mute=1&loop=1&playlist=2X4pdNTG-PU&controls=1&rel=0&modestbranding=1&playsinline=1&showinfo=0&enablejsapi=1&origin=https://okankurt.co"
          allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
          allowFullScreen
          title="Hero background video"
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          style={{
            width: "max(100%, 177.78vh)",
            height: "max(100%, 56.25vw)",
            border: "none",
            pointerEvents: "none",
          }}
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-dark-800/30 via-dark-800/20 to-dark-800/60" />

        {/* Animated Grid HUD overlay */}
        <div className="absolute inset-0 animated-grid opacity-40 pointer-events-none" />

        {/* Teal glow at bottom for blend */}
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-dark-800/80 to-transparent" />

        {/* Bottom scan lines decoration */}
        <div className="absolute bottom-8 left-8 right-8 flex flex-col gap-1 opacity-30 pointer-events-none">
          {[80, 60, 40].map((w, i) => (
            <div
              key={i}
              className="h-px bg-teal-500/60"
              style={{ width: `${w}%` }}
            />
          ))}
        </div>
      </div>

      {/* RIGHT — Content Panel */}
      <div className="relative w-full lg:w-[45%] bg-dark-800 flex items-center justify-center px-4 md:px-7 lg:px-10 py-10 lg:py-0">
        {/* Background subtle texture */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(20,184,166,0.07),transparent_60%)]" />

        <div className="relative z-10 max-w-lg w-full">
          {/* Label */}
          <div className="flex items-center gap-2 mb-5">
            <div className="w-5 h-px bg-teal-500" />
            <span className="section-label text-[10px] lg:text-xs">MECHATRONICS ENGINEER</span>
          </div>

          {/* Headline */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-[3.2rem] font-display font-700 text-white leading-[1.05] mb-4">
            I Design and Build{" "}
            <span className="teal-gradient-text">Real&#8209;World</span>{" "}
            Products
          </h1>

          {/* Sub-headline */}
          <p className="text-gray-400 text-sm lg:text-base font-light mb-3 tracking-wide">
            Prototyping &nbsp;|&nbsp; Embedded Systems &nbsp;|&nbsp; Product
            Design
          </p>

          {/* Intro */}
          <p className="text-gray-500 text-sm leading-relaxed mb-8 max-w-sm">
            I turn complex engineering challenges into elegant, functional
            products — from concept sketches to working prototypes. Based in
            Istanbul, collaborating globally.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-3 mb-8">
            <Link
              to="/portfolio"
              className="btn-primary flex items-center justify-center gap-2 px-6 py-3 rounded-full text-white font-semibold text-sm cursor-pointer whitespace-nowrap"
            >
              <span>View My Work</span>
              <span className="w-4 h-4 flex items-center justify-center">
                <i className="ri-arrow-right-line" />
              </span>
            </Link>
            <button
              onClick={() => {
                const el = document.getElementById("contact");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
              className="btn-outline flex items-center justify-center gap-2 px-6 py-3 rounded-full font-semibold text-sm cursor-pointer whitespace-nowrap"
            >
              Contact Me
            </button>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap gap-6 border-t border-dark-500/50 pt-6">
            {[
              { value: "15+", label: "Years Exp." },
              { value: "30+", label: "Projects" },
              { value: "5", label: "Countries" },
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col">
                <span className="text-2xl lg:text-3xl font-display font-700 teal-gradient-text">
                  {stat.value}
                </span>
                <span className="text-xs text-gray-500 mt-0.5">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={handleScrollDown}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40 hover:opacity-80 transition-opacity cursor-pointer z-20 hidden lg:flex"
      >
        <span className="text-xs text-gray-500 tracking-widest uppercase">
          Scroll
        </span>
        <div className="w-px h-10 bg-gradient-to-b from-teal-500 to-transparent" />
      </button>
    </section>
  );
}
