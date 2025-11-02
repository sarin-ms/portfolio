import React, { useEffect, useRef } from 'react';

const Hero = () => {
  const heroRef = useRef(null);

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

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 py-20 sm:py-24 bg-white relative overflow-hidden">
      <div className="absolute top-20 left-5 sm:left-10 w-40 h-40 sm:w-72 sm:h-72 bg-orange-200 rounded-full mix-blend-multiply filter blur-xl opacity-30"></div>
      <div className="absolute bottom-20 right-5 sm:right-10 w-40 h-40 sm:w-72 sm:h-72 bg-orange-300 rounded-full mix-blend-multiply filter blur-xl opacity-30"></div>
      
      <div ref={heroRef} className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center relative z-10">
        <div className="space-y-4 sm:space-y-6 text-center lg:text-left">
          <div>
            <h2 className="text-lg sm:text-xl font-normal text-gray-700 mb-2">Hi! am</h2>
            <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-bold mb-2">
              <span className="text-orange-500">Sarin M S</span>
            </h1>
            <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
              Front End Developer
            </h1>
            <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
              & Designer
            </h1>
          </div>
          
          <p className="text-gray-700 text-base sm:text-lg max-w-md mx-auto lg:mx-0 px-2 sm:px-0">
            Hey! I'm Sarin M S. I'm interested into Front End web development and Poster, UI/UX designing.
          </p>
        </div>

        <div className="flex justify-center lg:justify-end mt-8 lg:mt-0 lg:mr-20">
          <div className="relative w-56 h-56 xs:w-64 xs:h-64 sm:w-72 sm:h-72 md:w-80 md:h-80">
            <div className="absolute inset-0 rounded-full bg-linear-to-b from-transparent via-orange-300/50 to-orange-500" style={{ padding: '4px' }}>
              <div className="w-full h-full rounded-full overflow-hidden bg-gray-200 shadow-2xl hover:scale-105 transition-transform duration-300">
                <img 
                  src="/profile.webp" 
                  alt="Sarin M S" 
                  className="w-full h-full pt-6 pl-4 object-cover grayscale hover:grayscale-0 transition-all duration-500 scale-120"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
