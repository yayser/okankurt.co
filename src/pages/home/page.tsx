import { useEffect } from "react";
import Navbar from "../../components/feature/Navbar";
import Footer from "../../components/feature/Footer";
import HeroSection from "./components/HeroSection";
import PortfolioSection from "./components/PortfolioSection";
import SkillsSection from "./components/SkillsSection";
import AboutSection from "./components/AboutSection";

export default function Home() {
  useEffect(() => {
    document.title = "Okan Kurt – Mechatronics Engineer & Product Designer | Istanbul";
    const desc = document.querySelector('meta[name="description"]');
    if (desc) desc.setAttribute("content", "Okan Kurt is a mechatronics engineer and product designer based in Istanbul with 15+ years of experience in embedded systems, prototyping, robotics, IoT, and CAD/CAE — building real-world engineering products that work.");
    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) canonical.setAttribute("href", "https://okankurt.co/");

    // Schema.org WebPage JSON-LD
    const siteUrl = import.meta.env.VITE_SITE_URL || "https://okankurt.co";
    const schemaId = "schema-home-webpage";
    let el = document.getElementById(schemaId);
    if (!el) {
      el = document.createElement("script");
      el.id = schemaId;
      (el as HTMLScriptElement).type = "application/ld+json";
      document.head.appendChild(el);
    }
    el.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": `${siteUrl}/#webpage`,
      "url": `${siteUrl}/`,
      "name": "Okan Kurt – Mechatronics Engineer & Product Designer | Istanbul",
      "description": "Okan Kurt is a mechatronics engineer and product designer based in Istanbul with 15+ years of experience in embedded systems, prototyping, robotics, IoT, and CAD/CAE.",
      "inLanguage": "en",
      "isPartOf": {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        "url": `${siteUrl}/`,
        "name": "Okan Kurt Portfolio"
      },
      "about": {
        "@type": "Person",
        "name": "Okan Kurt",
        "jobTitle": "Mechatronics Engineer & Product Designer",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Istanbul",
          "addressCountry": "TR"
        }
      },
      "breadcrumb": {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": `${siteUrl}/`
          }
        ]
      }
    });

    return () => {
      const existing = document.getElementById(schemaId);
      if (existing) existing.remove();
    };
  }, []);

  return (
    <div className="min-h-screen bg-dark-800 overflow-x-hidden">
      <Navbar />
      <main>
        <HeroSection />
        <PortfolioSection />
        <SkillsSection />
        <AboutSection />
      </main>
      <Footer />
    </div>
  );
}
