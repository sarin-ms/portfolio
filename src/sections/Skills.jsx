import React from "react";
import { FaHtml5, FaCss3Alt, FaReact, FaPython, FaFigma } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";

const Skills = () => {
  const skills = [
    {
      name: "HTML",
      icon: FaHtml5,
      color: "from-orange-500 to-red-600",
    },
    {
      name: "CSS",
      icon: FaCss3Alt,
      color: "from-blue-400 to-blue-600",
    },
    {
      name: "JavaScript",
      icon: IoLogoJavascript,
      color: "from-yellow-400 to-yellow-600",
    },
    {
      name: "React",
      icon: FaReact,
      color: "from-cyan-400 to-blue-500",
    },
    {
      name: "Tailwind CSS",
      icon: RiTailwindCssFill,
      color: "from-blue-500 to-yellow-500",
    },
    {
      name: "Figma",
      icon: FaFigma,
      color: "from-purple-400 to-pink-500",
    },
  ];

  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-bold text-center mb-3 sm:mb-4 text-gray-900">
          My <span className="text-orange-500">Skills</span>
        </h2>
        <p className="text-center text-gray-600 mb-10 sm:mb-16 text-base sm:text-lg px-2">
          Technologies and tools I work with
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
          {skills.map((skill, index) => {
            const IconComponent = skill.icon;
            return (
              <div
                key={index}
                className="group relative"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 sm:hover:-translate-y-3 border border-gray-100 flex flex-col items-center justify-center aspect-square">
                  <div
                    className={`absolute inset-0 bg-linear-to-br ${skill.color} opacity-0 group-hover:opacity-10 rounded-xl sm:rounded-2xl transition-opacity duration-300`}
                  ></div>

                  <div className="text-4xl xs:text-5xl sm:text-6xl mb-2 sm:mb-3 group-hover:scale-110 transition-transform duration-300 text-gray-700 group-hover:text-orange-500">
                    <IconComponent />
                  </div>

                  <h3 className="text-sm xs:text-base sm:text-lg font-bold text-gray-900 group-hover:text-orange-500 transition-colors duration-300 text-center">
                    {skill.name}
                  </h3>

                  <div
                    className={`absolute inset-0 border-2 border-transparent group-hover:border-orange-500 rounded-xl sm:rounded-2xl transition-all duration-300`}
                  ></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
