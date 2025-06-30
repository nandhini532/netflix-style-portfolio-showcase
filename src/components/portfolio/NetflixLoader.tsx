
import React, { useState, useEffect } from 'react';

interface NetflixLoaderProps {
  onComplete: () => void;
}

export const NetflixLoader: React.FC<NetflixLoaderProps> = ({ onComplete }) => {
  const [showN, setShowN] = useState(false);
  const [showFullName, setShowFullName] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => {
      setShowN(true);
    }, 300);

    const timer2 = setTimeout(() => {
      setShowFullName(true);
    }, 1500);

    const timer3 = setTimeout(() => {
      setFadeOut(true);
    }, 3000);

    const timer4 = setTimeout(() => {
      onComplete();
    }, 3500);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
    };
  }, [onComplete]);

  return (
    <div className={`fixed inset-0 z-50 bg-black flex items-center justify-center transition-opacity duration-500 ${fadeOut ? 'opacity-0' : 'opacity-100'}`}>
      <div className="text-center">
        {/* N Animation */}
        <div className={`transition-all duration-700 ${showN ? 'scale-100 opacity-100' : 'scale-50 opacity-0'}`}>
          <div className="text-8xl md:text-9xl font-bold text-red-600 mb-4 animate-pulse">
            N
          </div>
        </div>

        {/* Full Name Animation */}
        {showFullName && (
          <div className="animate-fade-in">
            <h1 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-red-500 to-pink-500 bg-clip-text text-transparent">
              Nandhini Medharametla
            </h1>
            <p className="text-gray-400 mt-2 text-lg">
              Web Developer | Creative Thinker | Tech Enthusiast
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
