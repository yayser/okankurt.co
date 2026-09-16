import { useEffect, useRef, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import Navbar from "../../components/feature/Navbar";
import Footer from "../../components/feature/Footer";
import { projects } from "../../mocks/projects";
import type { StoryBlock } from "../../mocks/projects";

/* ─── Inline carousel used inside storyContent ─── */
function StoryCarousel({ images }: { images: string[] }) {
  const [active, setActive] = useState(0);
  const [lightbox, setLightbox] = useState(false);
  const prev = () => setActive((i) => (i === 0 ? images.length - 1 : i - 1));
  const next = () => setActive((i) => (i === images.length - 1 ? 0 : i + 1));

  useEffect(() => {
    if (!lightbox) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox(false);
      if (e.key === "ArrowLeft") setActive((i) => (i === 0 ? images.length - 1 : i - 1));
      if (e.key === "ArrowRight") setActive((i) => (i === images.length - 1 ? 0 : i + 1));
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [lightbox, images.length]);

  return (
    <>
      <div className="my-8 w-full">
        <div className="relative w-full rounded-xl overflow-hidden border border-dark-500/50 bg-dark-700">
          {/* Main image — clickable */}
          <div
            className="relative w-full cursor-zoom-in"
            style={{ aspectRatio: "4/3" }}
            onClick={() => setLightbox(true)}
            title="Click to enlarge"
          >
            <img
              src={images[active]}
              alt={`carousel image ${active + 1}`}
              className="w-full h-full object-cover object-top transition-opacity duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dark-800/20 to-transparent pointer-events-none" />
            {/* Enlarge hint */}
            <div className="absolute top-3 left-3 bg-dark-800/60 border border-dark-500/50 text-white text-[10px] px-2 py-0.5 rounded-full flex items-center gap-1 select-none pointer-events-none">
              <i className="ri-zoom-in-line text-xs" />
              <span>Click to enlarge</span>
            </div>
          </div>

          {/* Arrows */}
          <button
            onClick={prev}
            className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center bg-dark-800/80 hover:bg-teal-500/20 border border-dark-500/60 hover:border-teal-500/60 rounded-full transition-all cursor-pointer"
          >
            <i className="ri-arrow-left-s-line text-white text-base" />
          </button>
          <button
            onClick={next}
            className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center bg-dark-800/80 hover:bg-teal-500/20 border border-dark-500/60 hover:border-teal-500/60 rounded-full transition-all cursor-pointer"
          >
            <i className="ri-arrow-right-s-line text-white text-base" />
          </button>

          {/* Dots */}
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
            {images.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActive(idx)}
                className={`h-0.5 rounded-full transition-all duration-300 cursor-pointer ${
                  idx === active ? "w-4 bg-teal-500" : "w-1.5 bg-white/30 hover:bg-white/60"
                }`}
              />
            ))}
          </div>

          {/* Counter */}
          <div className="absolute top-3 right-3 bg-dark-800/70 border border-dark-500/50 text-white text-[10px] font-medium px-2 py-0.5 rounded-full select-none">
            {active + 1} / {images.length}
          </div>
        </div>

        {/* Thumbnails */}
        <div className="flex gap-2 mt-2.5 overflow-x-auto pb-1">
          {images.map((img, idx) => (
            <button
              key={idx}
              onClick={() => setActive(idx)}
              className={`flex-shrink-0 w-12 h-9 rounded overflow-hidden border-2 transition-all cursor-pointer ${
                idx === active
                  ? "border-teal-500"
                  : "border-dark-500/50 opacity-60 hover:opacity-100"
              }`}
            >
              <img
                src={img}
                alt={`thumb ${idx + 1}`}
                className="w-full h-full object-cover object-top"
              />
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox overlay */}
      {lightbox && (
        <div
          className="fixed inset-0 z-[200] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
          onClick={() => setLightbox(false)}
        >
          {/* Close button */}
          <button
            onClick={() => setLightbox(false)}
            className="absolute top-4 right-4 w-9 h-9 flex items-center justify-center bg-dark-700/80 hover:bg-dark-600 border border-dark-500/60 rounded-full transition-colors cursor-pointer z-10"
          >
            <i className="ri-close-line text-white text-lg" />
          </button>

          {/* Prev arrow */}
          <button
            onClick={(e) => { e.stopPropagation(); prev(); }}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-dark-700/80 hover:bg-teal-500/20 border border-dark-500/60 hover:border-teal-500/60 rounded-full transition-all cursor-pointer z-10"
          >
            <i className="ri-arrow-left-s-line text-white text-xl" />
          </button>

          {/* Image */}
          <img
            src={images[active]}
            alt={`enlarged ${active + 1}`}
            className="max-w-full max-h-[90vh] object-contain rounded-lg select-none"
            onClick={(e) => e.stopPropagation()}
          />

          {/* Next arrow */}
          <button
            onClick={(e) => { e.stopPropagation(); next(); }}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-dark-700/80 hover:bg-teal-500/20 border border-dark-500/60 hover:border-teal-500/60 rounded-full transition-all cursor-pointer z-10"
          >
            <i className="ri-arrow-right-s-line text-white text-xl" />
          </button>

          {/* Counter */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-dark-800/80 border border-dark-500/50 text-white text-xs px-3 py-1 rounded-full select-none">
            {active + 1} / {images.length}
          </div>
        </div>
      )}
    </>
  );
}

/* ─── Render a single story block ─── */
function StoryBlockRenderer({ block }: { block: StoryBlock }) {
  if (block.type === "text") {
    return (
      <p className="text-gray-300 text-sm md:text-[15px] leading-relaxed">
        {block.value}
      </p>
    );
  }
  if (block.type === "image") {
    return (
      <div className="my-8 w-full rounded-xl overflow-hidden border border-dark-500/50 bg-dark-700">
        <img
          src={block.value}
          alt="story image"
          className="w-full h-auto object-cover object-top"
        />
      </div>
    );
  }
  if (block.type === "carousel") {
    return <StoryCarousel images={block.value} />;
  }
  return null;
}

export default function ProjectDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const project = projects.find((p) => p.id === id);

  const isStickyLayout = !!(project?.stickyVideo && project?.videoUrl);
  const leftColRef = useRef<HTMLDivElement>(null);
  const [leftColHeight, setLeftColHeight] = useState<number>(0);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [id]);

  useEffect(() => {
    if (!project) return;
    const pageTitle = `${project.title} – Okan Kurt | ${project.category}`;
    const pageDesc = project.shortDesc
      ? `${project.shortDesc} — An engineering project by Okan Kurt, mechatronics engineer and product designer based in Istanbul.`
      : `${project.title} — An engineering project by Okan Kurt, mechatronics engineer and product designer based in Istanbul.`;

    document.title = pageTitle;

    const desc = document.querySelector('meta[name="description"]');
    if (desc) desc.setAttribute("content", pageDesc);

    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) canonical.setAttribute("href", `https://okankurt.co/project/${project.id}`);

    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute("content", pageTitle);

    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute("content", pageDesc);

    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) ogUrl.setAttribute("content", `https://okankurt.co/project/${project.id}`);

    const ogImage = document.querySelector('meta[property="og:image"]');
    if (ogImage) ogImage.setAttribute("content", project.coverImage);

    const twTitle = document.querySelector('meta[name="twitter:title"]');
    if (twTitle) twTitle.setAttribute("content", pageTitle);

    const twDesc = document.querySelector('meta[name="twitter:description"]');
    if (twDesc) twDesc.setAttribute("content", pageDesc);

    const twImage = document.querySelector('meta[name="twitter:image"]');
    if (twImage) twImage.setAttribute("content", project.coverImage);

    // Schema.org CreativeWork + BreadcrumbList JSON-LD
    const siteUrl = import.meta.env.VITE_SITE_URL || "https://okankurt.co";
    const schemaId = "schema-project-detail";
    let el = document.getElementById(schemaId);
    if (!el) {
      el = document.createElement("script");
      el.id = schemaId;
      (el as HTMLScriptElement).type = "application/ld+json";
      document.head.appendChild(el);
    }
    el.textContent = JSON.stringify([
      {
        "@context": "https://schema.org",
        "@type": "CreativeWork",
        "@id": `${siteUrl}/project/${project.id}#creativeWork`,
        "url": `${siteUrl}/project/${project.id}`,
        "name": project.title,
        "description": pageDesc,
        "image": project.coverImage,
        "dateCreated": project.year,
        "keywords": project.tags.join(", "),
        "genre": project.category,
        "author": {
          "@type": "Person",
          "name": "Okan Kurt",
          "url": `${siteUrl}/`,
          "jobTitle": "Mechatronics Engineer & Product Designer",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Istanbul",
            "addressCountry": "TR"
          }
        },
        "creator": {
          "@type": "Person",
          "name": "Okan Kurt"
        },
        "isPartOf": {
          "@type": "CollectionPage",
          "url": `${siteUrl}/portfolio`,
          "name": "Engineering Portfolio – Okan Kurt"
        }
      },
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": `${siteUrl}/` },
          { "@type": "ListItem", "position": 2, "name": "Portfolio", "item": `${siteUrl}/portfolio` },
          { "@type": "ListItem", "position": 3, "name": project.title, "item": `${siteUrl}/project/${project.id}` }
        ]
      }
    ]);

    return () => {
      const existing = document.getElementById(schemaId);
      if (existing) existing.remove();
    };
  }, [project]);

  useEffect(() => {
    if (!isStickyLayout) return;
    const measure = () => {
      if (leftColRef.current) {
        setLeftColHeight(leftColRef.current.offsetHeight);
      }
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [isStickyLayout, project]);

  if (!project) {
    return (
      <div className="min-h-screen bg-dark-800 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl text-white mb-4">Project not found</h2>
          <Link
            to="/portfolio"
            className="btn-primary px-6 py-3 rounded-full text-white text-sm font-semibold cursor-pointer"
          >
            Back to Portfolio
          </Link>
        </div>
      </div>
    );
  }

  const hasStory = !!(project.storyContent && project.storyContent.length > 0);

  return (
    <div className="min-h-screen bg-dark-800 overflow-x-hidden">
      <Navbar />

      {/* Hero Banner */}
      <section className="relative h-[30vh] md:h-[36vh] overflow-hidden">
        <img
          src={project.coverImage}
          alt={project.title}
          className="absolute inset-0 w-full h-full object-cover object-[center_20%]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark-800 via-dark-800/50 to-dark-800/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-dark-800/40 to-transparent" />

        {/* Hero Content */}
        <div className="absolute bottom-0 left-0 right-0 max-w-3xl mx-auto px-3 md:px-6 pb-6">
          {/* Breadcrumb */}
          <div className="flex items-center gap-1 mb-2 text-[10px] text-gray-500">
            <Link to="/" className="hover:text-teal-400 transition-colors cursor-pointer">
              Home
            </Link>
            <i className="ri-arrow-right-s-line" />
            <Link to="/portfolio" className="hover:text-teal-400 transition-colors cursor-pointer">
              Portfolio
            </Link>
            <i className="ri-arrow-right-s-line" />
            <span className="text-gray-400 line-clamp-1">{project.title}</span>
          </div>

          <span className="inline-block bg-teal-500/20 border border-teal-500/40 text-teal-400 text-[9px] font-semibold px-2 py-0.5 rounded-full mb-2">
            {project.category}
          </span>
          <h1 className="text-xl md:text-2xl lg:text-3xl font-display font-700 text-white leading-tight max-w-xl">
            {project.title}
          </h1>
        </div>
      </section>

      {/* Main Content */}
      <div className="py-9 pb-20">

        {/* Meta row */}
        <div className="max-w-3xl mx-auto px-4 md:px-8 mb-9">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { label: "Client", value: project.client, icon: "ri-building-line" },
              { label: "Year", value: project.year, icon: "ri-calendar-line" },
              { label: "Duration", value: project.duration, icon: "ri-time-line" },
              {
                label: "Tags",
                value: project.tags.slice(0, 2).join(", "),
                icon: "ri-price-tag-3-line",
              },
            ].map((m) => (
              <div
                key={m.label}
                className="bg-dark-700 border border-dark-500/50 rounded-md p-3"
              >
                <div className="flex items-center gap-1.5 mb-1.5">
                  <span className="w-3.5 h-3.5 flex items-center justify-center">
                    <i className={`${m.icon} text-teal-500 text-xs`} />
                  </span>
                  <p className="text-[10px] text-gray-500 uppercase tracking-wider">
                    {m.label}
                  </p>
                </div>
                <p className="text-xs text-white font-medium">{m.value}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ── STORY CONTENT (for narrative pages like for-the-love-of-duct-tape) ── */}
        {hasStory ? (
          <div className="max-w-3xl mx-auto px-4 md:px-8 mb-9">
            <div className="space-y-5">
              {project.storyContent!.map((block, i) => (
                <StoryBlockRenderer key={i} block={block} />
              ))}
            </div>
          </div>
        ) : isStickyLayout ? (
          /* ── STICKY VIDEO LAYOUT ── */
          <div className="max-w-6xl mx-auto px-4 md:px-8 mb-9">
            <div className="flex flex-col lg:flex-row gap-8 items-start">

              {/* Left: text + single image below */}
              <div className="flex-1 min-w-0" ref={leftColRef}>
                <div className="text-gray-300 text-sm md:text-[15px] leading-relaxed space-y-5 mb-6">
                  {project.summary.split("\n\n").map((para, i) => (
                    <p key={i}>{para}</p>
                  ))}
                </div>

                {project.singleImage ? (
                  <div className="w-full rounded-xl overflow-hidden border border-dark-500/50 bg-dark-700" style={{ aspectRatio: "16/9" }}>
                    <img
                      src={project.singleImage}
                      alt={`${project.title} detail`}
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                ) : null}
              </div>

              {/* Right: sticky video (desktop) */}
              <div
                className="hidden lg:block flex-shrink-0"
                style={{
                  width: "476px",
                  position: "sticky",
                  top: "96px",
                  alignSelf: "flex-start",
                  height: leftColHeight > 0 ? `${leftColHeight}px` : "auto",
                }}
              >
                <div className="rounded-xl overflow-hidden border border-dark-500/50 bg-black w-full h-full" style={{ position: "relative" }}>
                  <iframe
                    src={project.videoUrl}
                    title={project.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    style={{
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      width: "320%",
                      height: "320%",
                      transform: "translate(-50%, -50%)",
                      border: "none",
                      pointerEvents: "auto",
                    }}
                  />
                </div>
              </div>

              {/* Mobile: video below text (16:9) */}
              <div className="lg:hidden w-full">
                <div className="rounded-xl overflow-hidden border border-dark-500/50 bg-black w-full" style={{ aspectRatio: "16/9" }}>
                  <iframe
                    src={project.videoUrl}
                    title={project.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    style={{ width: "100%", height: "100%", border: "none", display: "block" }}
                  />
                </div>
              </div>

            </div>
          </div>
        ) : (
          /* ── DEFAULT LAYOUT ── */
          <div className="max-w-3xl mx-auto px-4 md:px-8">
            <div className="mb-9">
              <div className="text-gray-300 text-sm md:text-base leading-relaxed space-y-3">
                {project.summary.split("\n\n").slice(0, 3).map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
            </div>

            {/* Image carousel — shown when project has images */}
            {project.images && project.images.filter(Boolean).length > 0 && (
              <div className="mb-9">
                <StoryCarousel images={project.images.filter(Boolean)} />
              </div>
            )}

            {project.videoUrl && (
              <div className="mb-9">
                <div className="w-full rounded-lg overflow-hidden border border-dark-500/50 bg-dark-700">
                  <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
                    <iframe
                      src={project.videoUrl}
                      title={project.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="absolute inset-0 w-full h-full"
                    />
                  </div>
                </div>
              </div>
            )}

            {project.summary.split("\n\n").length > 3 && (
              <div className="mb-9">
                <div className="text-gray-300 text-sm md:text-base leading-relaxed space-y-3">
                  {project.summary.split("\n\n").slice(3).map((para, i) => (
                    <p key={i}>{para}</p>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {/* Navigation between projects */}
        <div className="max-w-3xl mx-auto px-4 md:px-8">

          {/* ── PROBLEM / NEED / SOLUTION ── */}
          {!project.hideProblemSolution && (project.problem || project.need || project.solution) && (
            <div className="mb-10">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* Problem */}
                {project.problem && (
                  <div className="bg-dark-700 border border-dark-500/50 rounded-lg p-5 flex flex-col gap-3">
                    <div className="flex items-center gap-2">
                      <span className="w-7 h-7 flex items-center justify-center rounded-full bg-rose-500/15 border border-rose-500/30">
                        <i className="ri-error-warning-line text-rose-400 text-sm" />
                      </span>
                      <h4 className="text-[11px] font-semibold uppercase tracking-widest text-rose-400">
                        Problem
                      </h4>
                    </div>
                    <p className="text-gray-300 text-sm leading-relaxed whitespace-pre-line">{project.problem}</p>
                  </div>
                )}

                {/* Need */}
                {project.need && (
                  <div className="bg-dark-700 border border-dark-500/50 rounded-lg p-5 flex flex-col gap-3">
                    <div className="flex items-center gap-2">
                      <span className="w-7 h-7 flex items-center justify-center rounded-full bg-amber-500/15 border border-amber-500/30">
                        <i className="ri-lightbulb-line text-amber-400 text-sm" />
                      </span>
                      <h4 className="text-[11px] font-semibold uppercase tracking-widest text-amber-400">
                        Need
                      </h4>
                    </div>
                    <p className="text-gray-300 text-sm leading-relaxed whitespace-pre-line">{project.need}</p>
                  </div>
                )}

                {/* Solution */}
                {project.solution && (
                  <div className="bg-dark-700 border border-dark-500/50 rounded-lg p-5 flex flex-col gap-3">
                    <div className="flex items-center gap-2">
                      <span className="w-7 h-7 flex items-center justify-center rounded-full bg-teal-500/15 border border-teal-500/30">
                        <i className="ri-checkbox-circle-line text-teal-400 text-sm" />
                      </span>
                      <h4 className="text-[11px] font-semibold uppercase tracking-widest text-teal-400">
                        Solution
                      </h4>
                    </div>
                    <p className="text-gray-300 text-sm leading-relaxed whitespace-pre-line">{project.solution}</p>
                  </div>
                )}
              </div>
            </div>
          )}

          <div className="border-t border-dark-500/30 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3">
            <button
              onClick={() => navigate("/portfolio")}
              className="btn-outline flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold cursor-pointer whitespace-nowrap"
            >
              <i className="ri-arrow-left-line" />
              Back to Portfolio
            </button>

            {(() => {
              const currentIdx = projects.findIndex((p) => p.id === id);
              const nextProject = projects[(currentIdx + 1) % projects.length];
              return (
                <Link
                  to={`/project/${nextProject.id}`}
                  className="flex items-center gap-2 group cursor-pointer"
                >
                  <div className="text-right">
                    <p className="text-[10px] text-gray-600 mb-0.5">Next Project</p>
                    <p className="text-xs text-white font-medium group-hover:text-teal-400 transition-colors line-clamp-1 max-w-36">
                      {nextProject.title}
                    </p>
                  </div>
                  <div className="w-7 h-7 flex items-center justify-center bg-dark-700 border border-dark-500/50 group-hover:border-teal-500/50 group-hover:bg-teal-500/10 rounded-full transition-all">
                    <i className="ri-arrow-right-line text-gray-400 group-hover:text-teal-400 transition-colors text-sm" />
                  </div>
                </Link>
              );
            })()}
          </div>
        </div>

      </div>

      <Footer />
    </div>
  );
}
