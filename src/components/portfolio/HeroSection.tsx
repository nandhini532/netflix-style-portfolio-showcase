
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';
import { NetflixLoader } from './NetflixLoader';

export const HeroSection = () => {
  const [showLoader, setShowLoader] = useState(true);

  const scrollToProjects = () => {
    document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleLoaderComplete = () => {
    setShowLoader(false);
  };

  return (
    <>
      {showLoader && <NetflixLoader onComplete={handleLoaderComplete} />}
      
      <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-red-500 to-pink-500 bg-clip-text text-transparent">
            Nandhini Medharametla
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 font-light">
            Web Developer | Creative Thinker | Tech Enthusiast
          </p>
          <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
            Crafting digital experiences with passion and precision. 
            Bringing ideas to life through code and creativity.
          </p>
          <Button 
            onClick={scrollToProjects}
            className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 text-lg rounded-lg transition-all transform hover:scale-105"
          >
            Explore My Work
          </Button>
          
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronDown className="text-gray-400" size={32} />
          </div>
        </div>
      </section>
    </>
  );
};
