export default function AboutSection() {
  return (
    <section id="about" className="py-24 md:py-32 bg-dark-800">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-20">
          {/* Image */}
          <div className="relative w-full lg:w-[40%] flex-shrink-0">
            <div className="relative w-full max-w-sm mx-auto lg:mx-0">
              {/* Teal glow border */}
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-teal-500/30 to-transparent blur-sm" />
              <div className="relative overflow-hidden rounded-2xl aspect-[4/5] border border-teal-500/20">
                <img
                  src="/media/083_d5c8213f27dbf0cd9c6f8e1f280bd24c.jpeg"
                  alt="Okan Kurt – Mechatronics Engineer"
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-800/40 to-transparent" />
              </div>

              {/* Location badge */}
              <div className="absolute -top-3 -left-3 bg-dark-700 border border-dark-500/60 rounded-xl px-4 py-2.5 flex items-center gap-2 shadow-xl">
                <span className="w-4 h-4 flex items-center justify-center">
                  <i className="ri-map-pin-2-fill text-teal-500 text-sm" />
                </span>
                <span className="text-xs text-gray-300 font-medium whitespace-nowrap">
                  Istanbul, Turkey
                </span>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="w-full lg:w-[60%]">
            <p className="section-label mb-4">ABOUT ME</p>
            <div className="flex flex-col gap-5 text-gray-400 text-base leading-relaxed mb-8">
              <p>
                Have you ever had a moment that changed everything?
              </p>
              <p>
                For me, it came at the age of 7, when I watched my dad upgrade my toy car. He added a tiny light bulb that flickered as it rolled forward. That simple act sparked a fire in me. It showed me that things don&apos;t have to be the way they are — we can change and improve them.
              </p>
              <p>
                As I grew older, I couldn&apos;t stop taking things apart and building them again. That&apos;s what eventually led me to mechatronics, where I could bring mechanics and electronics together to create real, working systems.
              </p>
              <p>
                Over time, I learned that curiosity alone is not enough. You also need patience — especially when things don&apos;t work, again and again. But the moment everything finally comes together makes all the frustration worth it.
              </p>
              <p>
                In 2014, after several years of professional experience, I founded Mobius Engineering and Consultancy Ltd. Since then, I&apos;ve been working as a freelancer and consultant, collaborating on a wide range of projects and continuously exploring new ideas.
              </p>
              <p>
                Today, I&apos;m also part of the team at BXL/USA, working on real-world systems where reliability truly matters.
              </p>
            </div>

            {/* Traits */}
            <div className="flex flex-wrap gap-3 mb-10">
              {[
                "Systems Thinker",
                "Hands-on Builder",
                "Cross-disciplinary",
                "Detail-oriented",
              ].map((trait) => (
                <span
                  key={trait}
                  className="text-xs font-semibold text-teal-400 bg-teal-500/10 border border-teal-500/20 px-3.5 py-1.5 rounded-full"
                >
                  {trait}
                </span>
              ))}
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-4">
              {[
                { value: "15+", label: "Years Experience" },
                { value: "30+", label: "Projects Done" },
                { value: "5", label: "Countries Served" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="bg-dark-700 border border-dark-500/50 rounded-xl p-4 text-center"
                >
                  <p className="text-2xl font-display font-700 teal-gradient-text mb-1">
                    {stat.value}
                  </p>
                  <p className="text-xs text-gray-500">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
