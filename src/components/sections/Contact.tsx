
import React from 'react';
import { Button } from '@/components/ui/button';

const Contact = () => {
  return (
    <section id="contact" className="section-padding text-center">
      <div className="max-w-2xl mx-auto animate-fade-in">
        <p className="text-teal font-mono mb-2">04. What's Next?</p>
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Get In Touch</h2>
        <p className="text-slate text-lg mb-10">
          I'm currently looking for new opportunities. Whether you have a question or just want to say hi, 
          I'll do my best to get back to you!
        </p>
        <Button 
          className="bg-transparent hover:bg-teal/10 text-teal border border-teal px-8 py-6 rounded"
          asChild
        >
          <a href="mailto:hello@example.com">Say Hello</a>
        </Button>
      </div>
    </section>
  );
};

export default Contact;
