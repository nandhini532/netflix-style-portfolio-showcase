
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Award, ExternalLink } from 'lucide-react';

export const CertificatesSection = () => {
  const certificates = [
    {
      name: "Full Stack Web Development",
      issuer: "Coursera",
      date: "2023",
      credentialId: "ABC123"
    },
    {
      name: "Python Programming",
      issuer: "HackerRank",
      date: "2023",
      credentialId: "PY456"
    },
    {
      name: "Machine Learning Basics",
      issuer: "edX",
      date: "2023",
      credentialId: "ML789"
    },
    {
      name: "Git & GitHub Certification",
      issuer: "GitHub",
      date: "2022",
      credentialId: "GH012"
    }
  ];

  return (
    <section id="certificates" className="py-20 px-4 bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-4 text-white">Certificates & Awards</h2>
        <p className="text-gray-400 mb-12 text-lg">Professional certifications and achievements</p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {certificates.map((cert, index) => (
            <Card key={index} className="bg-gray-800 border-gray-700 hover:bg-gray-750 transition-all duration-300 hover:scale-105">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="text-white" size={32} />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{cert.name}</h3>
                <p className="text-red-400 mb-2">{cert.issuer}</p>
                <Badge variant="outline" className="mb-4 text-gray-400 border-gray-600">
                  {cert.date}
                </Badge>
                <Button variant="outline" size="sm" className="w-full text-white border-white hover:bg-white hover:text-black">
                  <ExternalLink size={16} className="mr-2" />
                  View Certificate
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
