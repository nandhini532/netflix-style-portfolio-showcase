
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { FileText, Download, ExternalLink } from 'lucide-react';

export const ResumeSection = () => {
  return (
    <section id="resume" className="py-20 px-4 bg-black">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4 text-white">Resume</h2>
        <p className="text-gray-400 mb-12 text-lg">View my complete professional profile</p>
        
        <Card className="bg-gray-800 border-gray-700 max-w-md mx-auto">
          <CardContent className="p-8">
            <div className="w-24 h-24 bg-gradient-to-r from-red-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <FileText className="text-white" size={48} />
            </div>
            <h3 className="text-2xl font-semibold text-white mb-4">My Resume</h3>
            <p className="text-gray-400 mb-6">
              Complete overview of my education, experience, skills, and achievements.
            </p>
            
            <div className="space-y-3">
              <Dialog>
                <DialogTrigger asChild>
                  <Button className="w-full bg-red-600 hover:bg-red-700 text-white">
                    <FileText size={20} className="mr-2" />
                    View Resume
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-4xl h-[80vh] bg-gray-900 border-gray-700">
                  <DialogHeader>
                    <DialogTitle className="text-white">Resume - Nandhini Medharametla</DialogTitle>
                  </DialogHeader>
                  <div className="flex-1 bg-white rounded-lg p-8 overflow-y-auto">
                    <div className="text-black">
                      <div className="text-center mb-8">
                        <h1 className="text-3xl font-bold mb-2">Nandhini Medharametla</h1>
                        <p className="text-lg text-gray-600">Web Developer | Creative Thinker | Tech Enthusiast</p>
                        <p className="text-gray-600">nandinichowdary532@gmail.com</p>
                      </div>
                      
                      <div className="mb-6">
                        <h2 className="text-xl font-bold mb-3 border-b-2 border-red-500">Education</h2>
                        <div className="mb-3">
                          <h3 className="font-semibold">B.Tech Computer Science & Engineering</h3>
                          <p className="text-gray-600">GITAM University (2020-2024) - CGPA: 8.5/10</p>
                        </div>
                      </div>
                      
                      <div className="mb-6">
                        <h2 className="text-xl font-bold mb-3 border-b-2 border-red-500">Skills</h2>
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <h3 className="font-semibold">Programming:</h3>
                            <p className="text-gray-600">C, Java, Python, JavaScript, SQL</p>
                          </div>
                          <div>
                            <h3 className="font-semibold">Web Technologies:</h3>
                            <p className="text-gray-600">HTML, CSS, React, Node.js</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="mb-6">
                        <h2 className="text-xl font-bold mb-3 border-b-2 border-red-500">Projects</h2>
                        <div className="space-y-3">
                          <div>
                            <h3 className="font-semibold">Recipe Recommendation System</h3>
                            <p className="text-gray-600">AI-powered recipe suggestions using Python and Machine Learning</p>
                          </div>
                          <div>
                            <h3 className="font-semibold">Email Filtering Bot</h3>
                            <p className="text-gray-600">Intelligent email classification system using NLP and TensorFlow</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
              
              <Button variant="outline" className="w-full text-white border-white hover:bg-white hover:text-black">
                <Download size={20} className="mr-2" />
                Download PDF
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
