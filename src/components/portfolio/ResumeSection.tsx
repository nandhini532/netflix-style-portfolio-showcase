
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { FileText, Download, Upload } from 'lucide-react';

export const ResumeSection = () => {
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [resumeUrl, setResumeUrl] = useState<string | null>(null);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file && file.type === 'application/pdf') {
      setResumeFile(file);
      const url = URL.createObjectURL(file);
      setResumeUrl(url);
      console.log('Resume uploaded:', file.name);
    } else {
      alert('Please upload a PDF file only');
    }
  };

  const handleDownload = () => {
    if (resumeFile && resumeUrl) {
      const link = document.createElement('a');
      link.href = resumeUrl;
      link.download = resumeFile.name;
      link.click();
    } else {
      alert('Please upload your resume first');
    }
  };

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
              {/* File Upload */}
              <div className="mb-4">
                <input
                  type="file"
                  accept=".pdf"
                  onChange={handleFileUpload}
                  className="hidden"
                  id="resume-upload"
                />
                <label htmlFor="resume-upload">
                  <Button 
                    as="div"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white cursor-pointer"
                  >
                    <Upload size={20} className="mr-2" />
                    {resumeFile ? `Uploaded: ${resumeFile.name}` : 'Upload Resume PDF'}
                  </Button>
                </label>
              </div>

              {resumeFile && resumeUrl && (
                <>
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
                      <div className="flex-1 bg-white rounded-lg overflow-hidden">
                        <iframe
                          src={resumeUrl}
                          className="w-full h-full"
                          title="Resume PDF Viewer"
                        />
                      </div>
                    </DialogContent>
                  </Dialog>
                  
                  <Button 
                    onClick={handleDownload}
                    variant="outline" 
                    className="w-full text-white border-white hover:bg-white hover:text-black"
                  >
                    <Download size={20} className="mr-2" />
                    Download PDF
                  </Button>
                </>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
