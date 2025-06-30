
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

export const SkillsSection = () => {
  const skillCategories = [
    {
      category: "Programming Languages",
      icon: "💻",
      skills: ["C", "Java", "Python", "JavaScript", "SQL"],
      color: "from-blue-500 to-blue-700"
    },
    {
      category: "Web Technologies",
      icon: "🌐",
      skills: ["HTML5", "CSS3", "React", "Node.js", "Express"],
      color: "from-green-500 to-green-700"
    },
    {
      category: "Tools & Platforms",
      icon: "🛠️",
      skills: ["Git", "GitHub", "VS Code", "Docker", "AWS"],
      color: "from-purple-500 to-purple-700"
    },
    {
      category: "Operating Systems",
      icon: "💾",
      skills: ["Linux", "Windows", "Ubuntu", "Command Line"],
      color: "from-orange-500 to-orange-700"
    },
    {
      category: "Creative Skills",
      icon: "🎨",
      skills: ["Video Editing", "Photography", "UI/UX Design", "Adobe Creative Suite"],
      color: "from-pink-500 to-pink-700"
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-4 text-white">Skills & Technologies</h2>
        <p className="text-gray-400 mb-12 text-lg">My technical toolkit and expertise</p>
        
        <Carousel className="w-full">
          <CarouselContent className="-ml-2 md:-ml-4">
            {skillCategories.map((category, index) => (
              <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                <Card className="bg-gray-800 border-gray-700 h-full hover:scale-105 transition-transform duration-300">
                  <CardContent className="p-6">
                    <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${category.color} flex items-center justify-center text-2xl mb-4 mx-auto`}>
                      {category.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-4 text-center">{category.category}</h3>
                    <div className="flex flex-wrap gap-2 justify-center">
                      {category.skills.map((skill) => (
                        <Badge key={skill} variant="secondary" className="bg-gray-700 text-gray-300 hover:bg-gray-600">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="text-white border-white hover:bg-white hover:text-black" />
          <CarouselNext className="text-white border-white hover:bg-white hover:text-black" />
        </Carousel>
      </div>
    </section>
  );
};
