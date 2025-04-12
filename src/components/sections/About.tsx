
import React from 'react';
import { Card } from '@/components/ui/card';
import { Check } from 'lucide-react';

const About = () => {
  const skills = [
    'Java', "Kotlin", 'TypeScript', 'React', 'Git/GitHub',
  ];

  return (
    <section id="about" className="section-padding bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <h2 className="numbered-heading mb-12">
          <span className="text-teal mr-2">01.</span> About Me
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-3 animate-fade-in">
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-slate mb-4">
                Hello! I'm Ronald, a software developer based in San Francisco, CA. I enjoy creating things that live on an Android device. My goal is to always build products that provide pixel-perfect, performant experiences.
              </p>
              <p className="text-lg text-slate mb-4">
              I graduated from San Francisco State University in 2018 with a bachelor's degree in Computer Science and a minor in Mathematics. I have been working in the industry since then. I've had the privilege of working at a <a href="https://www.ampoza.com/" className="text-teal hover:underline">start-up</a>, and <a href="https://www.uber.com/us/en/about/" className="text-teal hover:underline">a huge tech company corporation</a>.
              </p>
              <p className="text-lg text-slate">
                When I'm not at the computer, I'm usually travelling exploring new places, hanging out with family and friends. 
              </p>
            </div>
          </div>
          
          <div className="lg:col-span-2 animate-fade-in delay-200">
            <Card className="p-6 shadow-md">
              <h3 className="font-semibold text-xl text-foreground mb-4">Skills & Technologies</h3>
              <div className="grid grid-cols-2 gap-2">
                {skills.map((skill) => (
                  <div key={skill} className="flex items-center">
                    <Check className="text-teal mr-2" size={16} />
                    <span className="text-slate">{skill}</span>
                  </div>
                ))}
              </div>
            </Card>
            
            <div className="mt-8 relative">
              <div className="aspect-square bg-teal/20 rounded-lg overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80"
                  alt="Profile"
                  className="w-full h-full object-cover rounded-lg hover:scale-105 transition-all"
                />
              </div>
              <div className="absolute inset-0 border-2 border-teal rounded-lg -z-10 translate-x-4 translate-y-4"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
