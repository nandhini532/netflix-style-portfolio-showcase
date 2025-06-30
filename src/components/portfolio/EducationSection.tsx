
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { GraduationCap, Award } from 'lucide-react';

export const EducationSection = () => {
  const education = [
    {
      degree: "B.Tech Computer Science & Engineering",
      institution: "GITAM University",
      duration: "2020 - 2024",
      grade: "CGPA: 8.5/10",
      icon: <GraduationCap className="text-red-500" size={24} />
    },
    {
      degree: "Intermediate (12th Grade)",
      institution: "Sri Narayana Junior College",
      duration: "2018 - 2020",
      grade: "Percentage: 92%",
      icon: <Award className="text-blue-500" size={24} />
    },
    {
      degree: "Matriculation (10th Grade)",
      institution: "Vijnana Bharathi EM School",
      duration: "2017 - 2018",
      grade: "CGPA: 9.8/10",
      icon: <Award className="text-green-500" size={24} />
    }
  ];

  return (
    <section id="education" className="py-20 px-4 bg-black">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-4 text-white">Education</h2>
        <p className="text-gray-400 mb-12 text-lg">My academic journey and achievements</p>
        
        <div className="grid md:grid-cols-3 gap-8">
          {education.map((edu, index) => (
            <Card key={index} className="bg-gray-800 border-gray-700 hover:bg-gray-750 transition-all duration-300 hover:scale-105">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {edu.icon}
                  <Badge variant="outline" className="ml-auto text-xs text-gray-400 border-gray-600">
                    {edu.duration}
                  </Badge>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{edu.degree}</h3>
                <p className="text-red-400 mb-3 font-medium">{edu.institution}</p>
                <Badge className="bg-green-600/20 text-green-400 border-green-600/30">
                  {edu.grade}
                </Badge>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
