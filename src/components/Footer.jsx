import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white px-4 sm:px-6 py-6 sm:py-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8 mb-4 sm:mb-8">
          <div className="text-center md:text-left">
            <h3 className="text-lg sm:text-2xl font-bold mb-2 sm:mb-4 text-orange-500">Sarin M S</h3>
            <p className="text-gray-400 text-xs sm:text-base">
              Front End Developer & Designer passionate about creating beautiful and functional web experiences.
            </p>
          </div>

          <div className="text-center md:text-right">
            <h4 className="text-base sm:text-xl font-bold mb-2 sm:mb-4">Connect</h4>
            <div className="flex justify-center md:justify-end gap-4 sm:gap-6">
              <a 
                href="https://github.com/sarin-ms" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-orange-500 transition-colors flex items-center gap-2 text-xs sm:text-base"
              >
                <FaGithub className="text-lg sm:text-xl" />
                <span>GitHub</span>
              </a>
              <a 
                href="https://www.linkedin.com/in/sarin-ms" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-orange-500 transition-colors flex items-center gap-2 text-xs sm:text-base"
              >
                <FaLinkedin className="text-lg sm:text-xl" />
                <span>LinkedIn</span>
              </a>
              <a 
                href="mailto:sarinms7@hotmail.com" 
                className="text-gray-400 hover:text-orange-500 transition-colors flex items-center gap-2 text-xs sm:text-base"
              >
                <FaEnvelope className="text-lg sm:text-xl" />
                <span>Email</span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-3 sm:pt-8 text-center text-gray-400">
          <p className="text-xs sm:text-base">&copy;{currentYear} Designed and developed with ❤️ by Sarin</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
