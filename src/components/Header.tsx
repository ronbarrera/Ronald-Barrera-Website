
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className={cn(
      "fixed top-0 z-40 w-full transition-all duration-300 py-4 px-6 md:px-12",
      isScrolled ? "bg-background/90 backdrop-blur-md shadow-sm" : "bg-transparent"
    )}>
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <Link 
          to="/" 
          className="text-2xl font-bold text-foreground hover:text-primary transition-colors"
        >
          <span className="text-teal">{'<'}</span>
          Ronald Barrera
          <span className="text-teal">{'/>'}</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <ol className="flex space-x-6">
            {navLinks.map((link, i) => (
              <li key={link.name}>
                <a href={link.href} className="nav-link">
                  <span className="text-teal mr-1">{`0${i + 1}.`}</span>
                  {link.name}
                </a>
              </li>
            ))}
          </ol>
          <Button variant="outline" className="border-teal text-teal hover:bg-teal/10">
            Resume
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-foreground p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div 
        className={cn(
          "fixed inset-0 z-30 bg-navy/95 transform transition-transform duration-300 ease-in-out md:hidden",
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex flex-col items-center justify-center h-full">
          <nav className="flex flex-col items-center space-y-6">
            {navLinks.map((link, i) => (
              <a 
                key={link.name}
                href={link.href}
                className="text-slate-light text-xl font-medium hover:text-teal transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="text-teal mr-2">{`0${i + 1}.`}</span>
                {link.name}
              </a>
            ))}
            <Button 
              variant="outline" 
              className="mt-4 border-teal text-teal hover:bg-teal/10"
            >
              Resume
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
