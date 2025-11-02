import React from 'react';

const About = () => {
  const skills = [
    { name: 'Website Design', level: 85 },
    { name: 'Web Development', level: 80 },
    { name: 'Poster, UI/UX Design', level: 90 }
  ];

  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20 bg-gray-50">
      <div className="max-w-4xl w-full">
        <h2 className="text-5xl md:text-6xl font-bold text-center mb-12 text-gray-900">
          About Me
        </h2>
        
        <div className="space-y-8">
          <p className="text-gray-700 text-lg leading-relaxed text-center">
            I'm Sarin M S, a Computer Science (AI & ML) student at CEC, passionate about design 
            and web development. I love creating visually appealing, responsive, and user-friendly 
            digital experiences using React, Next.js, Figma, and Canva. I aim to combine creativity 
            and technology to craft impactful and innovative solutions.
          </p>

          {/* Skills */}
          <div className="space-y-8 mt-12">
            {skills.map((skill, index) => (
              <div key={index} className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-900 font-bold text-lg">{skill.name}</span>
                </div>
                <div className="relative h-4 bg-gray-300 rounded-full overflow-visible">
                  <div 
                    className="absolute top-0 left-0 h-full bg-orange-500 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${skill.level}%` }}
                  />
                  <div 
                    className="absolute top-1/2 -translate-y-1/2 w-6 h-6 bg-white border-4 border-orange-500 rounded-full transition-all duration-1000 ease-out shadow-lg"
                    style={{ left: `calc(${skill.level}% - 12px)` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
