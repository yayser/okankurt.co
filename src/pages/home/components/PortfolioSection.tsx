import { useState } from "react";
import { createPortal } from "react-dom";
import { projects } from "../../../mocks/projects";
import ProjectModal from "../../../components/feature/ProjectModal";
import type { Project } from "../../../mocks/projects";

// Derive categories from actual project data, sorted by frequency
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

export default function PortfolioSection() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [showAll, setShowAll] = useState(false);
  const [showExplorations, setShowExplorations] = useState(false);

  const categoryFiltered =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  const mainProjects = categoryFiltered.slice(0, 7);
  const explorationProjects = categoryFiltered.slice(7);
  const visibleProjects = showExplorations
    ? [...mainProjects, ...explorationProjects]
    : mainProjects;

  const hasExplorations = explorationProjects.length > 0;

  return (
    <section id="portfolio" className="py-24 md:py-32 bg-dark-800 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <p className="section-label mb-3">MY WORK</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-700 text-white leading-tight">
              Featured{" "}
              <span className="teal-gradient-text">Projects</span>
            </h2>
          </div>
          {/* Filter */}
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 cursor-pointer whitespace-nowrap ${
                  activeCategory === cat
                    ? "bg-teal-500 text-white"
                    : "bg-dark-600 text-gray-400 hover:border-teal-500/50 border border-dark-500 hover:text-teal-400"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div
          data-product-shop
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {visibleProjects.map((project, idx) => (
            <article
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="bg-dark-700 border border-dark-500/60 rounded-xl overflow-hidden card-hover cursor-pointer group"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              {/* Image */}
              <div className="relative w-full h-64 overflow-hidden">
                <img
                  src={project.coverImage}
                  alt={project.title}
                  className={`w-full h-full object-cover ${project.id === "for-the-love-of-duct-tape" ? "object-center" : "object-top"} ${project.coverImageColor ? "" : "img-grayscale"}`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-700/80 to-transparent" />
                {/* Category badge */}
                <span className="absolute top-3 left-3 bg-dark-800/70 backdrop-blur-sm border border-teal-500/50 text-teal-400 text-[10px] font-semibold px-2.5 py-1 rounded-full">
                  {project.category}
                </span>
                {/* Year */}
                <span className="absolute top-3 right-3 text-xs text-gray-400 bg-dark-800/60 px-2 py-1 rounded-md">
                  {project.year}
                </span>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-teal-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="w-10 h-10 flex items-center justify-center bg-teal-500/20 border border-teal-500/40 rounded-full">
                    <i className="ri-eye-line text-teal-400 text-base" />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-base font-display font-700 text-white mb-2 leading-snug line-clamp-2">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed line-clamp-3 mb-4">
                  {project.shortDesc}
                </p>
                {/* Tags */}
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="text-xs text-gray-600 bg-dark-600 px-2.5 py-1 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}

          {/* Explorations button — occupies the 8th grid slot */}
          {hasExplorations && !showExplorations && (
            <div className="flex items-center justify-center">
              <button
                onClick={() => setShowExplorations(true)}
                className="btn-outline inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm cursor-pointer whitespace-nowrap"
              >
                Explorations
                <span className="w-4 h-4 flex items-center justify-center">
                  <i className="ri-arrow-right-line" />
                </span>
              </button>
            </div>
          )}
        </div>

        {/* Hide Explorations CTA — shown after expanding */}
        {hasExplorations && showExplorations && (
          <div className="text-center mt-10">
            <button
              onClick={() => setShowExplorations(false)}
              className="btn-outline inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm cursor-pointer whitespace-nowrap"
            >
              Hide Explorations
              <span className="w-4 h-4 flex items-center justify-center">
                <i className="ri-arrow-up-line" />
              </span>
            </button>
          </div>
        )}
      </div>

      {/* Modal — rendered via portal to escape the CSS transform context */}
      {selectedProject &&
        createPortal(
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />,
          document.body
        )}
    </section>
  );
}
