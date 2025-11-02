import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white px-6 py-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4 text-orange-500">Sarin M S</h3>
            <p className="text-gray-400">
              Front End Developer & Designer passionate about creating beautiful and functional web experiences.
            </p>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-gray-400 hover:text-orange-500 transition-colors">
                  About Me
                </a>
              </li>
              <li>
                <a href="#projects" className="text-gray-400 hover:text-orange-500 transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="#experience" className="text-gray-400 hover:text-orange-500 transition-colors">
                  Experience
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-4">Connect</h4>
            <div className="space-y-3">
              <a 
                href="https://github.com/sarin-ms" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block text-gray-400 hover:text-orange-500 transition-colors"
              >
                GitHub
              </a>
              <a 
                href="https://www.linkedin.com/in/sarin-ms" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block text-gray-400 hover:text-orange-500 transition-colors"
              >
                LinkedIn
              </a>
              <a 
                href="mailto:sarinms7@hotmail.com" 
                className="block text-gray-400 hover:text-orange-500 transition-colors"
              >
                Email
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>&copy;{currentYear} Designed and developed with ❤️ by Sarin</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
