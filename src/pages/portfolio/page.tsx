import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/feature/Navbar";
import Footer from "../../components/feature/Footer";
import { projects } from "../../mocks/projects";
import ProjectModal from "../../components/feature/ProjectModal";
import type { Project } from "../../mocks/projects";

// Derive categories from actual project data, sorted by frequency (most used first)
const categoryCounts = projects.reduce<Record<string, number>>((acc, p) => {
  acc[p.category] = (acc[p.category] ?? 0) + 1;
  return acc;
}, {});

const CATEGORIES = [
  "All",
  ...Object.entries(categoryCounts)
    .sort((a, b) => b[1] - a[1])
    .map(([cat]) => cat),
];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Engineering Portfolio – Okan Kurt | Mechatronics & Product Design Projects";
    const desc = document.querySelector('meta[name="description"]');
    if (desc) desc.setAttribute("content", "Browse Okan Kurt's engineering portfolio — mechatronics, robotics, biomedical devices, machine vision, and product design projects built for real-world impact. Based in Istanbul.");
    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) canonical.setAttribute("href", "https://okankurt.co/portfolio");

    // Schema.org CollectionPage + ItemList + BreadcrumbList JSON-LD
    const siteUrl = import.meta.env.VITE_SITE_URL || "https://okankurt.co";
    const schemaId = "schema-portfolio-page";
    let el = document.getElementById(schemaId);
    if (!el) {
      el = document.createElement("script");
      el.id = schemaId;
      (el as HTMLScriptElement).type = "application/ld+json";
      document.head.appendChild(el);
    }
    el.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "@id": `${siteUrl}/portfolio#webpage`,
      "url": `${siteUrl}/portfolio`,
      "name": "Engineering Portfolio – Okan Kurt | Mechatronics & Product Design Projects",
      "description": "Browse Okan Kurt's engineering portfolio — mechatronics, robotics, biomedical devices, machine vision, and product design projects built for real-world impact. Based in Istanbul.",
      "inLanguage": "en",
      "isPartOf": {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        "url": `${siteUrl}/`,
        "name": "Okan Kurt Portfolio"
      },
      "breadcrumb": {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": `${siteUrl}/` },
          { "@type": "ListItem", "position": 2, "name": "Portfolio", "item": `${siteUrl}/portfolio` }
        ]
      },
      "mainEntity": {
        "@type": "ItemList",
        "name": "Engineering Projects by Okan Kurt",
        "numberOfItems": projects.length,
        "itemListElement": projects.map((p, idx) => ({
          "@type": "ListItem",
          "position": idx + 1,
          "url": `${siteUrl}/project/${p.id}`,
          "name": p.title
        }))
      }
    });

    return () => {
      const existing = document.getElementById(schemaId);
      if (existing) existing.remove();
    };
  }, []);

  const filtered =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-dark-800">
      <Navbar />

      {/* Page Hero */}
      <section className="relative pt-36 pb-20 px-6 md:px-12 overflow-hidden">
        <div className="absolute inset-0 animated-grid opacity-20 pointer-events-none" />
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-teal-500/40 to-transparent" />
        <div className="relative max-w-6xl mx-auto">
          <p className="section-label mb-4">MY WORK</p>
          <h1 className="text-4xl md:text-6xl font-display font-700 text-white mb-5">
            Engineering{" "}
            <span className="teal-gradient-text">Portfolio</span>
          </h1>
          <p className="text-gray-500 text-lg max-w-2xl">
            A selection of mechatronics, robotics, IoT, and biomedical
            engineering projects — each solving a real-world challenge with
            design-led thinking.
          </p>
        </div>
      </section>

      {/* Filter & Grid */}
      <section className="pb-32 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          {/* Filter bar */}
          <div className="flex flex-wrap items-center gap-3 mb-10 pb-8 border-b border-dark-500/30">
            <span className="text-xs text-gray-600 uppercase tracking-widest mr-2">
              Filter:
            </span>
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 cursor-pointer whitespace-nowrap ${
                  activeCategory === cat
                    ? "bg-teal-500 text-white"
                    : "bg-dark-600 text-gray-400 border border-dark-500 hover:border-teal-500/50 hover:text-teal-400"
                }`}
              >
                {cat}
                <span
                  className={`ml-2 text-xs ${
                    activeCategory === cat ? "text-teal-100" : "text-gray-600"
                  }`}
                >
                  {cat === "All"
                    ? projects.length
                    : projects.filter((p) => p.category === cat).length}
                </span>
              </button>
            ))}
          </div>

          {/* Project Grid */}
          <div
            data-product-shop
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filtered.map((project) => (
              <article
                key={project.id}
                className="bg-dark-700 border border-dark-500/60 rounded-2xl overflow-hidden card-hover cursor-pointer group"
                onClick={() => setSelectedProject(project)}
              >
                <div className="relative w-full h-52 overflow-hidden">
                  <img
                    src={project.coverImage}
                    alt={project.title}
                    className={`w-full h-full object-cover object-top ${project.coverImageColor ? "" : "img-grayscale"}`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-700/80 to-transparent" />
                  <span className="absolute top-3 left-3 bg-dark-800/70 backdrop-blur-sm border border-teal-500/50 text-teal-400 text-xs font-semibold px-3 py-1 rounded-full">
                    {project.category}
                  </span>
                  <span className="absolute top-3 right-3 text-xs text-gray-400 bg-dark-800/60 px-2 py-1 rounded-md">
                    {project.year}
                  </span>
                  <div className="absolute inset-0 bg-teal-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="w-12 h-12 flex items-center justify-center bg-teal-500/20 border border-teal-500/40 rounded-full">
                      <i className="ri-eye-line text-teal-400 text-xl" />
                    </div>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-base font-display font-700 text-white mb-2 leading-snug line-clamp-2">
                    {project.title}
                  </h3>
                  <p className="text-xs text-gray-500 leading-relaxed line-clamp-3 mb-4">
                    {project.shortDesc}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] text-gray-600 bg-dark-600 px-2 py-0.5 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="py-24 text-center">
              <i className="ri-folder-open-line text-4xl text-gray-700 mb-4 block" />
              <p className="text-gray-600">
                No projects in this category yet.
              </p>
            </div>
          )}
        </div>
      </section>

      <Footer />

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </div>
  );
}
