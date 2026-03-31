import React, { useState, useEffect, useRef } from "react";
import { FaExternalLinkAlt, FaEye } from "react-icons/fa";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [animateCards, setAnimateCards] = useState(false);
  const sectionRef = useRef(null);

  const projects = [
    {
      id: 1,
      title: "ISQIP Landing Page",
      category: "Web Development",
      type: "web",
      url: "https://isqip.vercel.app/",
      image: "/projects/isqip.webp",
      description:
        "A modern, responsive landing page for ISQIP — built with clean UI and smooth UX.",
      tags: ["React", "Tailwind"],
    },
    {
      id: 2,
      title: "Snailometer",
      category: "Web Development",
      type: "web",
      url: "https://snailometer.vercel.app/",
      image: "/projects/snailometer.webp",
      description:
        "A fun, interactive project for Useless Projects 2.0 — because why not measure snail speed?",
      tags: ["HTML", "CSS", "JS"],
    },
    {
      id: 3,
      title: "MVP Landing Page",
      category: "Web Development",
      type: "web",
      url: "https://mvp.cecieee.org/",
      image: "/projects/mvp.webp",
      description:
        "Official event landing page for MVP by IEEE SB CEC — polished and production-ready.",
      tags: ["React", "Tailwind"],
    },
    {
      id: 4,
      title: "GDG Team Reveal Cover",
      category: "Poster Design",
      type: "design",
      image: "/projects/cover.webp",
      description:
        "Eye-catching cover design for GDG On Campus CEC team reveal campaign.",
      tags: ["Figma", "Branding"],
    },
    {
      id: 5,
      title: "GDG Team Reveal Post",
      category: "Poster Design",
      type: "design",
      image: "/projects/reveal_sarin.webp",
      description:
        "Individual team member reveal post — designed with consistency and personality.",
      tags: ["Figma", "Social Media"],
    },
    {
      id: 6,
      title: "Cloud Study Jam Cover",
      category: "Poster Design",
      type: "design",
      image: "/projects/reveal.webp",
      description:
        "Promotional poster for Google Cloud Study Jam event held at CEC.",
      tags: ["Canva", "Event Design"],
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setAnimateCards(true);
          }
        });
      },
      { threshold: 0.1 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    setAnimateCards(false);
    const timer = setTimeout(() => setAnimateCards(true), 50);
    return () => clearTimeout(timer);
  }, [activeFilter]);

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => project.type === activeFilter);

  const filters = [
    { key: "all", label: "All Projects" },
    { key: "web", label: "Web Development" },
    { key: "design", label: "Graphic Design" },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative px-4 sm:px-6 py-16 sm:py-24 bg-white overflow-hidden"
    >
      <div
        className="absolute top-0 right-0 w-72 h-72 sm:w-96 sm:h-96 rounded-full mix-blend-multiply filter blur-3xl opacity-[0.07] pointer-events-none"
        style={{
          background: "radial-gradient(circle, #f97316, transparent 70%)",
        }}
      />
      <div
        className="absolute bottom-0 left-0 w-72 h-72 sm:w-96 sm:h-96 rounded-full mix-blend-multiply filter blur-3xl opacity-[0.05] pointer-events-none"
        style={{
          background: "radial-gradient(circle, #f97316, transparent 70%)",
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-10 sm:mb-14">
          <h2 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-gray-900">
            My <span className="text-orange-500">Projects</span>
          </h2>
          <p className="text-gray-500 text-base sm:text-lg max-w-lg mx-auto px-2">
            A collection of my best work in web development and graphic design
          </p>
        </div>

        <div className="flex justify-center gap-2 sm:gap-3 mb-10 sm:mb-14 flex-wrap px-2">
          {filters.map((filter) => (
            <button
              key={filter.key}
              onClick={() => setActiveFilter(filter.key)}
              className={`px-5 sm:px-7 py-2.5 rounded-full font-medium text-sm sm:text-base transition-all duration-300 ${
                activeFilter === filter.key
                  ? "bg-orange-500 text-white shadow-lg shadow-orange-500/25"
                  : "bg-gray-100 text-gray-600 hover:bg-orange-50 hover:text-orange-600"
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="group relative rounded-2xl overflow-hidden bg-white border border-gray-100 transition-all duration-500 hover:shadow-2xl hover:shadow-orange-500/10 hover:-translate-y-2"
              style={{
                opacity: animateCards ? 1 : 0,
                transform: animateCards ? "translateY(0)" : "translateY(40px)",
                transitionDelay: `${index * 100}ms`,
              }}
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-gray-50">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-400 flex flex-col items-center justify-end pb-6 px-4">
                  <p className="text-white/90 text-sm text-center leading-relaxed mb-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 max-w-[90%]">
                    {project.description}
                  </p>
                  {project.url ? (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-sm font-semibold text-white bg-orange-500 hover:bg-orange-600 transition-all duration-300 hover:scale-105 shadow-lg shadow-orange-500/30 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100"
                      style={{ transitionDelay: "100ms" }}
                    >
                      <FaExternalLinkAlt className="text-xs" />
                      Visit Live
                    </a>
                  ) : (
                    <div
                      className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-sm font-semibold text-white/80 bg-white/15 backdrop-blur-sm border border-white/20 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100"
                      style={{ transitionDelay: "100ms" }}
                    >
                      <FaEye className="text-xs" />
                      Design Work
                    </div>
                  )}
                </div>
              </div>

              <div className="p-4 sm:p-5">
                <span className="text-xs text-orange-500 font-semibold uppercase tracking-wider">
                  {project.category}
                </span>
                <h3 className="text-base sm:text-lg font-bold text-gray-900 mt-1.5 mb-2.5 group-hover:text-orange-500 transition-colors duration-300">
                  {project.title}
                </h3>

                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-orange-50 text-orange-600 border border-orange-100"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="absolute bottom-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-orange-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
