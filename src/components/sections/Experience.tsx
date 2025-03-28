import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface Job {
  company: string;
  title: string;
  range: string;
  duties: string[];
}

const Experience = () => {
  const jobs: Job[] = [
    {
      company: 'Google',
      title: 'Senior Frontend Developer',
      range: 'January 2022 - Present',
      duties: [
        'Developed and maintained critical infrastructure for Google Photos, reducing load times by 40%',
        'Led a team of 5 engineers, implementing agile methodologies and improving sprint velocity by 25%',
        'Architected and implemented a new component library used across multiple Google products',
        'Collaborated with UX designers to implement responsive designs, ensuring accessibility compliance'
      ]
    },
    {
      company: 'Uber',
      title: 'Frontend Engineer',
      range: 'January 2021 - December 2021',
      duties: [
        'Improved the rider experience by optimizing the checkout flow, increasing conversion rates by 15%',
        'Built reusable UI components for the driver app, reducing development time for new features',
        'Collaborated with backend teams to integrate APIs and improve real-time data synchronization',
        'Participated in user testing sessions to gather feedback and iterate on designs'
      ]
    },
    {
      company: 'Facebook',
      title: 'Frontend Developer',
      range: 'July 2020 - December 2021',
      duties: [
        "Built and shipped new features for Facebook's news feed, impacting millions of daily users",
        'Improved application performance by implementing code splitting and lazy loading techniques',
        'Participated in code reviews and mentored junior developers',
        'Collaborated with the data science team to implement A/B testing framework for new features'
      ]
    },
    {
      company: 'Startup Inc',
      title: 'Full Stack Developer',
      range: 'May 2018 - June 2020',
      duties: [
        "Developed and maintained the company's flagship SaaS product from scratch",
        'Implemented authentication and authorization systems using OAuth and JWT',
        'Designed and built RESTful APIs used by web and mobile applications',
        'Deployed and maintained applications using Docker and AWS services'
      ]
    }
  ];

  return (
    <section id="experience" className="section-padding">
      <div className="max-w-3xl mx-auto">
        <h2 className="numbered-heading mb-12">
          <span className="text-teal mr-2">02.</span> Where I've Worked
        </h2>
        
        <Tabs defaultValue={jobs[0].company} className="w-full animate-fade-in">
          <TabsList className="mb-8 flex flex-wrap justify-start border-b border-border rounded-none h-auto p-0 bg-transparent">
            {jobs.map((job) => (
              <TabsTrigger 
                key={job.company}
                value={job.company}
                className="px-5 py-2 rounded-none border-b-2 border-transparent data-[state=active]:border-teal data-[state=active]:shadow-none bg-transparent text-muted-foreground data-[state=active]:text-teal"
              >
                {job.company}
              </TabsTrigger>
            ))}
          </TabsList>
          
          {jobs.map((job) => (
            <TabsContent key={job.company} value={job.company} className="mt-0">
              <div>
                <h3 className="text-xl font-medium mb-1">
                  {job.title} <span className="text-teal">@ {job.company}</span>
                </h3>
                <p className="text-slate text-sm mb-4 font-mono">{job.range}</p>
                <ul className="space-y-4">
                  {job.duties.map((duty, i) => (
                    <li key={i} className="flex">
                      <span className="text-teal mr-2">▹</span>
                      <span className="text-slate">{duty}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default Experience;
