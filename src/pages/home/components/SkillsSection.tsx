import { useEffect, useRef, useState } from "react";

interface Skill {
  name: string;
  detail: string;
  icon: string;
}

const skills: Skill[] = [
  {
    name: "Mechanical System Design",
    detail: "SolidWorks, Mechanism Design, Kinematics",
    icon: "ri-shape-line",
  },
  {
    name: "Embedded Systems",
    detail: "STM32, ESP32, Arduino, Sensor Integration, PCB Design",
    icon: "ri-cpu-line",
  },
  {
    name: "Programming",
    detail: "C++, Python, MATLAB",
    icon: "ri-terminal-box-line",
  },
  {
    name: "Electronics Design",
    detail: "PCB Design, Circuit Design",
    icon: "ri-pulse-line",
  },
  {
    name: "Product Design",
    detail: "Industrial Design, Concepts, PS",
    icon: "ri-layout-2-line",
  },
];

interface SkillCardProps {
  skill: Skill;
  visible: boolean;
  delay: number;
}

function SkillCard({ skill, visible, delay }: SkillCardProps) {
  return (
    <div
      className="group flex items-start gap-4 p-5 rounded-xl border border-dark-500/40 bg-dark-800/40 hover:border-teal-500/30 transition-all duration-300"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(16px)",
        transition: `opacity 0.5s ease ${delay}ms, transform 0.5s ease ${delay}ms, border-color 0.3s`,
      }}
    >
      <div className="w-10 h-10 flex items-center justify-center bg-teal-500/10 border border-teal-500/20 rounded-lg group-hover:border-teal-500/50 transition-colors shrink-0 mt-0.5">
        <i className={`${skill.icon} text-teal-400 text-base`} />
      </div>
      <div>
        <h4 className="text-base font-semibold text-white leading-snug">
          {skill.name}
        </h4>
        <p className="text-sm text-gray-500 mt-1 leading-relaxed">
          {skill.detail}
        </p>
      </div>
    </div>
  );
}

export default function SkillsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="pt-40 pb-24 md:pt-48 md:pb-32 bg-dark-900">
      <div className="max-w-6xl mx-auto px-6 md:px-12" ref={ref}>
        {/* Header */}
        <div className="text-center mb-16">
          <p className="section-label mb-3">EXPERTISE</p>
          <h2 className="text-3xl md:text-5xl font-display font-700 text-white">
            Design &amp; Engineering{" "}
            <span className="teal-gradient-text">Skills</span>
          </h2>
          <p className="text-gray-500 text-base mt-4 max-w-xl mx-auto">
            A multidisciplinary toolkit built across 5+ years of hands-on
            engineering and product development.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {skills.map((skill, idx) => (
            <SkillCard
              key={skill.name}
              skill={skill}
              visible={visible}
              delay={idx * 100}
            />
          ))}
        </div>

        {/* Tool logos strip */}
        <div className="mt-20 border-t border-dark-500/30 pt-12">
          <p className="text-center text-xs text-gray-600 uppercase tracking-widest mb-8">
            Tools &amp; Technologies
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "Mechanical Design",
              "Embedded Systems",
              "Robotics",
              "Control Systems",
              "Mechatronics",
              "Prototyping",
              "Actuation",
              "Sensor Integration",
              "System Integration",
              "Kinematics",
              "Dynamics",
              "Force Control",
              "SolidWorks",
              "EasyEDA",
              "ESP32",
              "Python",
            ].map((tool) => (
              <span
                key={tool}
                className="px-4 py-2 bg-dark-700 border border-dark-500/50 rounded-lg text-xs text-gray-500 hover:text-teal-400 hover:border-teal-500/30 transition-colors cursor-default"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
