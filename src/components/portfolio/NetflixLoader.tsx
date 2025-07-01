
import React, { useState, useEffect } from 'react';

interface NetflixLoaderProps {
  onComplete: () => void;
}

export const NetflixLoader: React.FC<NetflixLoaderProps> = ({ onComplete }) => {
  const [showN, setShowN] = useState(false);
  const [showFullName, setShowFullName] = useState(false);
  const [showBackground, setShowBackground] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    console.log('NetflixLoader mounted');
    
    const timer1 = setTimeout(() => {
      console.log('Showing N');
      setShowN(true);
    }, 300);

    const timer2 = setTimeout(() => {
      console.log('Showing background image');
      setShowBackground(true);
    }, 1200);

    const timer3 = setTimeout(() => {
      console.log('Showing full name');
      setShowFullName(true);
    }, 2000);

    const timer4 = setTimeout(() => {
      console.log('Starting fade out');
      setFadeOut(true);
    }, 4000);

    const timer5 = setTimeout(() => {
      console.log('Completing loader');
      onComplete();
    }, 4500);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
      clearTimeout(timer5);
    };
  }, [onComplete]);

  return (
    <div className={`fixed inset-0 z-50 bg-black flex items-center justify-center transition-opacity duration-500 ${fadeOut ? 'opacity-0' : 'opacity-100'}`}>
      {/* Your Background Image */}
      {showBackground && (
        <div 
          className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000 opacity-25"
          style={{
            backgroundImage: 'url(/lovable-uploads/a68371e2-cefe-4032-8d9b-b68ca0aa0c4f.png)',
            filter: 'blur(10px) brightness(0.4)',
          }}
          onLoad={() => console.log('Background image loaded')}
          onError={() => console.log('Background image failed to load')}
        />
      )}
      
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/60" />
      
      <div className="relative z-10 text-center">
        {/* N Animation with Netflix-style colors */}
        <div className={`transition-all duration-700 ${showN ? 'scale-100 opacity-100' : 'scale-50 opacity-0'}`}>
          <div className="text-8xl md:text-9xl font-bold text-red-600 mb-4 animate-pulse drop-shadow-2xl" style={{
            textShadow: '0 0 20px rgba(220, 38, 38, 0.8), 0 0 40px rgba(220, 38, 38, 0.6)'
          }}>
            N
          </div>
        </div>

        {/* Full Name Animation with enhanced styling */}
        {showFullName && (
          <div className="animate-fade-in">
            <h1 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-red-500 via-red-400 to-pink-400 bg-clip-text text-transparent drop-shadow-lg">
              Nandhini Medharametla
            </h1>
            <p className="text-gray-300 mt-2 text-lg font-medium tracking-wide">
              Web Developer | Creative Thinker | Tech Enthusiast
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
