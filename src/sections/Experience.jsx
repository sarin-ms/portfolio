import React, { useEffect, useRef } from 'react';

const Experience = () => {
  const experienceRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fadeInUp');
          }
        });
      },
      { threshold: 0.1 }
    );

    experienceRef.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const experiences = [
    {
      id: 1,
      role: 'IEEE SB CEC',
      position: 'Web Team',
      period: 'May 2025 - Present',
      description: 'Maintaining IEEE SB CEC website and developing new web applications for IEEE events.',
      side: 'left',
      logo: '/icons/ieee.webp'
    },
    {
      id: 2,
      role: 'GDG On Campus CEC',
      position: 'Designer',
      period: 'Sep 2025 - Present',
      description: 'Designing Posters for GDG On Campus CEC events.',
      side: 'right',
      logo: '/icons/gdg.webp'
    }
  ];

  return (
    <section className="min-h-screen px-6 py-20 bg-linear-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-bold text-center mb-20 animate-fadeInUp">
          My <span className="text-orange-500">Work Experience</span>
        </h2>

        <div className="relative">
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-linear-to-b from-orange-200 via-orange-300 to-orange-200 rounded-full"></div>

          <div className="space-y-20">
            {experiences.map((exp, index) => (
              <div 
                key={exp.id} 
                ref={(el) => (experienceRef.current[index] = el)}
                className="relative"
              >
                <div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-linear-to-br from-orange-400 to-orange-600 rounded-full items-center justify-center z-10 border-4 border-white shadow-xl hover:scale-110 transition-transform duration-300">
                  <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
                </div>

                <div className={`lg:w-5/12 ${exp.side === 'left' ? 'lg:mr-auto lg:pr-20' : 'lg:ml-auto lg:pl-20'}`}>
                  <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 group relative overflow-hidden">
                    <div className="absolute top-6 right-6 w-16 h-16 z-20">
                      <img 
                        src={exp.logo} 
                        alt={`${exp.role} logo`}
                        className="w-full h-full object-contain opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                      />
                    </div>
                    
                    <div className="absolute top-0 right-0 w-20 h-20 bg-linear-to-br from-orange-100 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    <div className="relative z-10">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-orange-500 transition-colors duration-300">
                        {exp.role}
                      </h3>
                      <div className="flex items-center gap-2 mb-3">
                        <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                        <p className="text-orange-500 font-bold text-lg">
                          {exp.position}
                        </p>
                      </div>
                      <p className="text-sm text-gray-500 mb-4 font-medium flex items-center gap-2">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        {exp.period}
                      </p>
                      <p className="text-gray-700 leading-relaxed">
                        {exp.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
