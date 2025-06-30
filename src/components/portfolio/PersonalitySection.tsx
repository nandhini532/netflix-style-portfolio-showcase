
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Brain, Handshake, Lightbulb, Clipboard, Circle } from 'lucide-react';

export const PersonalitySection = () => {
  const traits = [
    {
      name: "Creative Thinker",
      icon: <Brain size={32} />,
      description: "I approach problems from unique angles",
      color: "from-pink-500 to-red-500"
    },
    {
      name: "Team Player",
      icon: <Handshake size={32} />,
      description: "Collaboration makes everything better",
      color: "from-blue-500 to-cyan-500"
    },
    {
      name: "Curious Learner",
      icon: <Lightbulb size={32} />,
      description: "Always eager to explore new technologies",
      color: "from-yellow-500 to-orange-500"
    },
    {
      name: "Detail-Oriented",
      icon: <Clipboard size={32} />,
      description: "Precision matters in every line of code",
      color: "from-green-500 to-teal-500"
    },
    {
      name: "Adaptable",
      icon: <Circle size={32} />,
      description: "Embracing change and new challenges",
      color: "from-purple-500 to-indigo-500"
    }
  ];

  return (
    <section className="py-20 px-4 bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-4 text-white">Personality Traits</h2>
        <p className="text-gray-400 mb-12 text-lg">What makes me unique as a developer and individual</p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {traits.map((trait, index) => (
            <Card key={index} className="bg-gray-800 border-gray-700 hover:bg-gray-750 transition-all duration-300 hover:scale-105 group">
              <CardContent className="p-6 text-center">
                <div className={`w-20 h-20 bg-gradient-to-r ${trait.color} rounded-full flex items-center justify-center mx-auto mb-4 text-white group-hover:rotate-12 transition-transform duration-300`}>
                  {trait.icon}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{trait.name}</h3>
                <p className="text-gray-400 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {trait.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
