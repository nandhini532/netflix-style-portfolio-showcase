
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Camera, Film, BookOpen, Gamepad2, Palette } from 'lucide-react';

export const HobbiesSection = () => {
  const hobbies = [
    {
      name: "Photography",
      icon: <Camera size={48} />,
      description: "Capturing moments that speak stories",
      color: "from-purple-500 to-pink-500"
    },
    {
      name: "Video Editing",
      icon: <Film size={48} />,
      description: "Crafting visual narratives",
      color: "from-blue-500 to-cyan-500"
    },
    {
      name: "Web Design",
      icon: <Palette size={48} />,
      description: "Creating beautiful digital experiences",
      color: "from-green-500 to-teal-500"
    },
    {
      name: "Reading Tech Blogs",
      icon: <BookOpen size={48} />,
      description: "Staying updated with latest trends",
      color: "from-orange-500 to-red-500"
    },
    {
      name: "Gaming",
      icon: <Gamepad2 size={48} />,
      description: "Exploring virtual worlds and challenges",
      color: "from-indigo-500 to-purple-500"
    }
  ];

  return (
    <section className="py-20 px-4 bg-black">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-4 text-white">Hobbies & Interests</h2>
        <p className="text-gray-400 mb-12 text-lg">What I love doing beyond coding</p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {hobbies.map((hobby, index) => (
            <Card key={index} className="bg-gray-800 border-gray-700 hover:bg-gray-750 transition-all duration-300 hover:scale-105 group">
              <CardContent className="p-6 text-center">
                <div className={`w-20 h-20 bg-gradient-to-r ${hobby.color} rounded-full flex items-center justify-center mx-auto mb-4 text-white group-hover:scale-110 transition-transform duration-300`}>
                  {hobby.icon}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{hobby.name}</h3>
                <p className="text-gray-400 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {hobby.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
