
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

export const ProjectsSection = () => {
  const projects = [
    {
      title: "Recipe Recommendation System",
      description: "AI-powered recipe suggestions based on ingredients and dietary preferences",
      techStack: ["Python", "Machine Learning", "Flask", "React"],
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=250&fit=crop",
      liveDemo: "#",
      github: "#"
    },
    {
      title: "Email Filtering Bot",
      description: "Intelligent email classification and spam detection system",
      techStack: ["Python", "NLP", "TensorFlow", "API"],
      image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400&h=250&fit=crop",
      liveDemo: "#",
      github: "#"
    },
    {
      title: "Hotel Booking Form",
      description: "Full-stack booking system with payment integration",
      techStack: ["React", "Node.js", "MongoDB", "Stripe"],
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&h=250&fit=crop",
      liveDemo: "#",
      github: "#"
    },
    {
      title: "Portfolio Website",
      description: "Netflix-style portfolio showcase with modern animations",
      techStack: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=250&fit=crop",
      liveDemo: "#",
      github: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-4 text-white">Featured Projects</h2>
        <p className="text-gray-400 mb-12 text-lg">A collection of my latest work and experiments</p>
        
        <Carousel className="w-full">
          <CarouselContent className="-ml-2 md:-ml-4">
            {projects.map((project, index) => (
              <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                <Card className="bg-gray-800 border-gray-700 hover:bg-gray-750 transition-all duration-300 group hover:scale-105">
                  <CardContent className="p-0">
                    <div className="relative overflow-hidden rounded-t-lg">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                        <Button variant="outline" size="sm" className="text-white border-white hover:bg-white hover:text-black">
                          <ExternalLink size={16} className="mr-2" />
                          Live Demo
                        </Button>
                        <Button variant="outline" size="sm" className="text-white border-white hover:bg-white hover:text-black">
                          <Github size={16} className="mr-2" />
                          Code
                        </Button>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                      <p className="text-gray-400 mb-4 text-sm">{project.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {project.techStack.map((tech) => (
                          <Badge key={tech} variant="secondary" className="bg-red-600/20 text-red-400 border-red-600/30">
                            {tech}
                          </Badge>
                        ))}
                      </div>
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
