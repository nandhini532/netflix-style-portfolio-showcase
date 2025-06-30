
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export const AboutSection = () => {
  const traits = [
    "Problem Solver",
    "Creative Thinker", 
    "Team Player",
    "Detail Oriented",
    "Quick Learner",
    "Tech Enthusiast"
  ];

  return (
    <section id="about" className="py-20 px-4 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6 text-white">About Me</h2>
            <div className="space-y-4 text-gray-300">
              <p className="text-lg leading-relaxed">
                Hello! I'm Nandhini, a passionate web developer with a love for creating 
                digital experiences that make a difference. I believe in the power of 
                technology to solve real-world problems and bring creative ideas to life.
              </p>
              <p className="leading-relaxed">
                My journey in tech started with curiosity and has evolved into a deep 
                passion for full-stack development. I enjoy working with modern technologies 
                and am always eager to learn and adapt to new challenges.
              </p>
              <p className="leading-relaxed">
                When I'm not coding, you'll find me exploring new technologies, 
                capturing moments through photography, or diving into the latest tech blogs.
              </p>
            </div>
            
            <div className="mt-8">
              <h3 className="text-xl font-semibold text-white mb-4">What Defines Me</h3>
              <div className="flex flex-wrap gap-3">
                {traits.map((trait) => (
                  <Badge key={trait} className="bg-red-600/20 text-red-400 border-red-600/30 px-3 py-1">
                    {trait}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          <div className="relative">
            <Card className="bg-gradient-to-br from-red-600/20 to-pink-600/20 border-red-600/30">
              <CardContent className="p-8 text-center">
                <div className="w-48 h-48 mx-auto mb-6 bg-gradient-to-br from-red-500 to-pink-500 rounded-full flex items-center justify-center text-4xl font-bold">
                  NM
                </div>
                <blockquote className="text-gray-300 italic text-lg">
                  "Code is poetry written in logic, and every bug is just a plot twist 
                  waiting to be resolved."
                </blockquote>
                <p className="text-red-400 mt-4 font-medium">- My Philosophy</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
