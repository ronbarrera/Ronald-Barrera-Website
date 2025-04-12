
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center pt-20 px-6 md:px-12 lg:px-24">
      <div className="max-w-4xl animate-fade-in">
        <p className="text-teal font-mono mb-5">Hi, my name is</p>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 text-foreground">
          Ronald Barrera.
        </h1>
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-slate">
          I build things for the Android.
        </h2>
        <p className="text-slate text-lg md:text-xl max-w-xl mb-8">
        I'm an Android engineer passionate about crafting seamless, high-quality mobile experiences. Right now, I'm focused on developing accessible, user-centered apps that make a meaningful impact.
        </p>
        <Button 
          className="bg-transparent hover:bg-teal/10 text-teal border border-teal px-7 py-5 rounded"
          asChild
        >
          <a href="#projects">
            Check out my work <ArrowRight className="ml-2" size={18} />
          </a>
        </Button>
      </div>
    </section>
  );
};

export default Hero;
