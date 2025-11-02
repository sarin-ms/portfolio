import React, { useState, useEffect } from 'react';

const CursorFollower = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <>
      {/* Outer circle */}
      <div
        className="fixed w-8 h-8 border-2 border-orange-500 rounded-full pointer-events-none z-50 transition-all duration-200 ease-out"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: 'translate(-50%, -50%)',
          opacity: isVisible ? 0.6 : 0,
        }}
      />
      {/* Inner dot */}
      <div
        className="fixed w-2 h-2 bg-orange-500 rounded-full pointer-events-none z-50 transition-all duration-100"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: 'translate(-50%, -50%)',
          opacity: isVisible ? 1 : 0,
        }}
      />
    </>
  );
};

export default CursorFollower;
