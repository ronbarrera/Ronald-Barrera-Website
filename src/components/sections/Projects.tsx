import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github, Folder } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  github?: string;
  external?: string;
  image?: string;
  featured: boolean;
  category: 'frontend' | 'fullstack' | 'mobile' | 'other';
}

const Projects = () => {
  const [activeTab, setActiveTab] = useState('all');
  
  const projects: Project[] = [
    {
      title: 'Developer Portfolio',
      description: 'A responsive portfolio website built with React and Tailwind CSS. Features include light and dark mode, smooth scrolling, and a contact form.',
      technologies: ['React', 'Tailwind CSS', 'TypeScript'],
      github: 'https://github.com',
      external: 'https://example.com',
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80',
      featured: true,
      category: 'frontend'
    },
    {
      title: 'E-commerce Platform',
      description: 'A full-stack e-commerce application with product listings, cart functionality, user authentication, and payment processing.',
      technologies: ['Next.js', 'Node.js', 'MongoDB', 'Stripe'],
      github: 'https://github.com',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80',
      featured: true,
      category: 'fullstack'
    },
    {
      title: 'Task Management App',
      description: 'A Kanban-style task management application with drag-and-drop functionality, user roles, and real-time updates.',
      technologies: ['React', 'Firebase', 'Tailwind CSS'],
      github: 'https://github.com',
      external: 'https://example.com',
      featured: true,
      category: 'frontend'
    },
    {
      title: 'Weather Dashboard',
      description: 'A weather dashboard that displays current weather and forecasts for multiple locations using a third-party API.',
      technologies: ['JavaScript', 'CSS', 'Weather API'],
      github: 'https://github.com',
      featured: false,
      category: 'frontend'
    },
    {
      title: 'Blog Platform',
      description: 'A blog platform with markdown support, comments, and user authentication.',
      technologies: ['React', 'Node.js', 'MongoDB'],
      github: 'https://github.com',
      featured: false,
      category: 'fullstack'
    },
    {
      title: 'Mobile Fitness App',
      description: 'A React Native fitness application that tracks workouts, provides custom workout plans, and visualizes progress.',
      technologies: ['React Native', 'Expo', 'Firebase'],
      github: 'https://github.com',
      featured: false,
      category: 'mobile'
    }
  ];

  const filteredProjects = activeTab === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeTab);

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <section id="projects" className="section-padding bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <h2 className="numbered-heading mb-12">
          <span className="text-teal mr-2">03.</span> Some Things I've Built
        </h2>
        
        {/* Featured Projects */}
        <div className="space-y-24 mb-24">
          {featuredProjects.map((project, i) => (
            <div 
              key={i}
              className={`relative grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-10 items-center ${
                i % 2 === 0 ? '' : 'md:text-right'
              } animate-fade-in`}
            >
              {/* Project Image */}
              <div className={`md:col-span-7 order-1 ${
                i % 2 === 0 ? 'md:order-1' : 'md:order-2'
              }`}>
                <a 
                  href={project.external || project.github || '#'} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block relative group"
                >
                  <div className="absolute inset-0 bg-teal/20 group-hover:bg-transparent transition-all rounded overflow-hidden"></div>
                  <img 
                    src={project.image || 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80'} 
                    alt={project.title} 
                    className="w-full h-full object-cover rounded shadow-lg" 
                  />
                </a>
              </div>
              
              {/* Project Content */}
              <div className={`md:col-span-6 md:absolute ${
                i % 2 === 0 ? 'md:right-0 md:text-right' : 'md:left-0 md:text-left'
              } order-2 ${
                i % 2 === 0 ? 'md:order-2' : 'md:order-1'
              }`}>
                <p className="text-teal font-mono text-sm mb-2">Featured Project</p>
                <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
                <div className="bg-card p-6 rounded shadow-md mb-4">
                  <p className="text-slate">{project.description}</p>
                </div>
                <ul className={`flex flex-wrap gap-3 mb-6 ${
                  i % 2 === 0 ? 'md:justify-end' : 'md:justify-start'
                }`}>
                  {project.technologies.map((tech) => (
                    <li key={tech} className="text-slate text-sm font-mono">
                      {tech}
                    </li>
                  ))}
                </ul>
                <div className={`flex gap-4 ${
                  i % 2 === 0 ? 'md:justify-end' : 'md:justify-start'
                }`}>
                  {project.github && (
                    <a 
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground hover:text-teal"
                      aria-label="GitHub Repository"
                    >
                      <Github size={20} />
                    </a>
                  )}
                  {project.external && (
                    <a 
                      href={project.external}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground hover:text-teal"
                      aria-label="External Link"
                    >
                      <ExternalLink size={20} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Other Projects */}
        <div>
          <h3 className="text-center text-2xl font-semibold mb-8">Other Noteworthy Projects</h3>
          
          <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="flex justify-center mb-12 bg-transparent">
              <TabsTrigger 
                value="all" 
                className="px-4 py-2 data-[state=active]:bg-teal/10 data-[state=active]:text-teal rounded border data-[state=active]:border-teal"
              >
                All
              </TabsTrigger>
              <TabsTrigger 
                value="frontend" 
                className="px-4 py-2 data-[state=active]:bg-teal/10 data-[state=active]:text-teal rounded border data-[state=active]:border-teal"
              >
                Frontend
              </TabsTrigger>
              <TabsTrigger 
                value="fullstack" 
                className="px-4 py-2 data-[state=active]:bg-teal/10 data-[state=active]:text-teal rounded border data-[state=active]:border-teal"
              >
                Full Stack
              </TabsTrigger>
              <TabsTrigger 
                value="mobile" 
                className="px-4 py-2 data-[state=active]:bg-teal/10 data-[state=active]:text-teal rounded border data-[state=active]:border-teal"
              >
                Mobile
              </TabsTrigger>
              <TabsTrigger 
                value="other" 
                className="px-4 py-2 data-[state=active]:bg-teal/10 data-[state=active]:text-teal rounded border data-[state=active]:border-teal"
              >
                Other
              </TabsTrigger>
            </TabsList>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects
                .filter(project => !project.featured)
                .map((project, i) => (
                <Card 
                  key={i} 
                  className="bg-card hover:translate-y-[-5px] transition-all group animate-fade-in"
                >
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-6">
                      <Folder className="text-teal" size={40} />
                      <div className="flex gap-4">
                        {project.github && (
                          <a 
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-slate hover:text-teal"
                            aria-label="GitHub Repository"
                          >
                            <Github size={20} />
                          </a>
                        )}
                        {project.external && (
                          <a 
                            href={project.external}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-slate hover:text-teal"
                            aria-label="External Link"
                          >
                            <ExternalLink size={20} />
                          </a>
                        )}
                      </div>
                    </div>
                    
                    <h4 className="text-xl font-semibold mb-2 group-hover:text-teal transition-colors">
                      {project.title}
                    </h4>
                    <p className="text-slate mb-6">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary" className="text-xs font-mono">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default Projects;
