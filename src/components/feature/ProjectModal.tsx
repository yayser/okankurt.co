import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import type { Project } from "../../mocks/projects";

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  const navigate = useNavigate();
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKey);
    };
  }, [onClose]);

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === overlayRef.current) onClose();
  };

  const handleViewProject = () => {
    onClose();
    window.scrollTo({ top: 0, behavior: "smooth" });
    navigate(`/project/${project.id}`);
  };

  return (
    <div
      ref={overlayRef}
      onClick={handleOverlayClick}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-dark-900/85 backdrop-blur-sm p-4 md:p-8"
    >
      <div className="relative bg-dark-700 teal-glow-border rounded-2xl w-full max-w-xl max-h-[90vh] overflow-y-auto">
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 z-10 w-7 h-7 flex items-center justify-center bg-dark-600 hover:bg-dark-500 rounded-full transition-colors cursor-pointer"
        >
          <i className="ri-close-line text-gray-300 text-base" />
        </button>

        {/* Image */}
        <div className="relative w-full h-40 md:h-52 overflow-hidden rounded-t-2xl">
          <img
            src={project.coverImage}
            alt={project.title}
            className="w-full h-full object-cover"
            style={{ objectPosition: "center 30%" }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dark-700 via-dark-700/30 to-transparent" />
          <span className="absolute top-3 left-3 bg-teal-500/20 border border-teal-500/40 text-teal-400 text-[10px] font-semibold px-2 py-0.5 rounded-full">
            {project.category}
          </span>
        </div>

        {/* Content */}
        <div className="p-4 md:p-6">
          <div className="flex flex-wrap gap-2 mb-1.5">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-[10px] text-gray-500 bg-dark-600 px-2 py-0.5 rounded-md"
              >
                {tag}
              </span>
            ))}
          </div>
          <h2 className="text-lg md:text-xl font-display font-700 text-white mt-2 mb-2">
            {project.title}
          </h2>
          <p className="text-gray-400 text-xs md:text-sm leading-relaxed mb-4">
            {project.modalDesc ?? project.shortDesc}
          </p>

          {/* Meta */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-5">
            {[
              { label: "Client", value: project.client },
              { label: "Year", value: project.year },
              { label: "Duration", value: project.duration },
            ].map((m) => (
              <div key={m.label} className="bg-dark-600 rounded-lg p-3">
                <p className="text-[10px] text-gray-500 uppercase tracking-wider mb-0.5">
                  {m.label}
                </p>
                <p className="text-xs text-white font-medium">{m.value}</p>
              </div>
            ))}
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-2">
            <button
              onClick={handleViewProject}
              className="btn-primary flex-1 flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-lg text-white font-semibold text-xs cursor-pointer"
            >
              <span>View Full Project</span>
              <span className="w-4 h-4 flex items-center justify-center">
                <i className="ri-arrow-right-line" />
              </span>
            </button>
            <button
              onClick={onClose}
              className="btn-outline flex-1 flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-lg font-semibold text-xs cursor-pointer"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
