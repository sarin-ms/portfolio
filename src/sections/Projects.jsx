import React, { useState } from 'react';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'ISQIP Landing Page',
      category: 'Web Development',
      type: 'web',
      url: 'https://isqip.vercel.app/',
      image: '/projects/isqip.webp',
      description: 'Modern landing page design'
    },
    {
      id: 2,
      title: 'Snailometer - Useless Projects 2.0',
      category: 'Web development!!',
      type: 'web',
      url: 'https://snailometer.github.io/snailometer/',
      image: '/projects/snailometer.webp',
      description: 'Fun interactive web project'
    },
    {
      id: 3,
      title: 'MVP Landing Page',
      category: 'Web development',
      type: 'web',
      url: 'https://mvp.cecieee.org/',
      image: '/projects/mvp.webp',
      description: 'Product landing page'
    },
    {
      id: 4,
      title: 'GDS Team Reveal Cover',
      category: 'Poster Designing',
      type: 'design',
      image: '/projects/reveal.webp',
      description: 'Team reveal poster design'
    },
    {
      id: 5,
      title: 'GDS Team Reveal Individual Post',
      category: 'Poster Designing',
      type: 'design',
      image: '/projects/cover.webp',
      description: 'Individual team member post'
    },
    {
      id: 6,
      title: 'Cloud Study Jam Cover',
      category: 'Poster Designing',
      type: 'design',
      image: '/projects/reveal_sarin.webp',
      description: 'Google Cloud Study Jam poster'
    }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.type === activeFilter);

  return (
    <section className="min-h-screen px-6 py-20 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-bold text-center mb-12 text-gray-900">
          My <span className="text-gray-900">Projects</span>
        </h2>

        {/* Filter Buttons */}
        <div className="flex justify-center gap-4 mb-12 flex-wrap">
            <button
            onClick={() => setActiveFilter('all')}
            className={`px-6 py-2 rounded-md font-medium transition-colors ${
              activeFilter === 'all' 
                ? 'bg-orange-500 text-white' 
                : 'bg-white text-gray-700 border border-gray-300 hover:border-orange-500'
            }`}
          >
            All
          </button>
          <button
            onClick={() => setActiveFilter('web')}
            className={`px-6 py-2 rounded-md font-medium transition-colors ${
              activeFilter === 'web' 
                ? 'bg-orange-500 text-white' 
                : 'bg-white text-gray-700 border border-gray-300 hover:border-orange-500'
            }`}
          >
            Web Development
          </button>
          <button
            onClick={() => setActiveFilter('design')}
            className={`px-6 py-2 rounded-md font-medium transition-colors ${
              activeFilter === 'design' 
                ? 'bg-orange-500 text-white' 
                : 'bg-white text-gray-700 border border-gray-300 hover:border-orange-500'
            }`}
          >
            Graphic Design
          </button>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div 
              key={project.id}
              className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 bg-white hover:-translate-y-2"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Project Image */}
              <div className="aspect-4/3 bg-white overflow-hidden border-b border-gray-100">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Project Info */}
              <div className="p-6 bg-white">
                <span className="text-sm text-orange-500 font-semibold uppercase tracking-wide">
                  {project.category}
                </span>
                <h3 className="text-xl font-bold text-gray-900 mt-2 mb-3">
                  {project.title}
                </h3>
                {project.url && (
                  <a 
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-gray-500 hover:text-orange-500 transition-colors block truncate"
                  >
                    {project.url}
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
