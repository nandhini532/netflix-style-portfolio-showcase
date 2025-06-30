
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Linkedin, Github, Send } from 'lucide-react';

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 px-4 bg-black">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-4 text-white text-center">Get In Touch</h2>
        <p className="text-gray-400 mb-12 text-lg text-center">Let's connect and create something amazing together</p>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold text-white mb-6">Contact Information</h3>
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center">
                  <Mail className="text-white" size={24} />
                </div>
                <div>
                  <h4 className="text-white font-medium">Email</h4>
                  <p className="text-gray-400">nandinichowdary532@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                  <Linkedin className="text-white" size={24} />
                </div>
                <div>
                  <h4 className="text-white font-medium">LinkedIn</h4>
                  <p className="text-gray-400">Connect with me professionally</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center">
                  <Github className="text-white" size={24} />
                </div>
                <div>
                  <h4 className="text-white font-medium">GitHub</h4>
                  <p className="text-gray-400">Check out my code repositories</p>
                </div>
              </div>
            </div>
          </div>

          <Card className="bg-gray-800 border-gray-700">
            <CardContent className="p-6">
              <h3 className="text-2xl font-semibold text-white mb-6">Send a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <Input
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                  required
                />
                <Input
                  name="email"
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                  required
                />
                <Textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  className="bg-gray-700 border-gray-600 text-white placeholder-gray-400 min-h-[120px]"
                  required
                />
                <Button type="submit" className="w-full bg-red-600 hover:bg-red-700 text-white">
                  <Send size={20} className="mr-2" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
        
        <div className="text-center mt-12 pt-8 border-t border-gray-800">
          <p className="text-gray-400">
            © 2024 Nandhini Medharametla. Crafted with ❤️ and lots of ☕
          </p>
        </div>
      </div>
    </section>
  );
};
