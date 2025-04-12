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
      company: 'Uber',
      title: 'Software Engineer II',
      range: 'July 2022 - Present',
      duties: [
        "Led the design and development of high-impact features for Uber’s Android apps using Java and Kotlin.",
        'Collaborate cross-functionally with QA engineers, product managers, designers, and data scientists to deliver high-quality, user-centric solutions.',
        'Write clean, maintainable, and self-documenting code that promotes readability and ease of collaboration.'
      ]
    },
    {
      company: 'Ampula Inc.',
      title: 'Software Engineer',
      range: 'December 2020 - June 2022',
      duties: [
        "Developed the primary Android application using modern Android technologies such as MVVM architecture, LiveData, Navigation Component, Retrofit, Hilt for dependency injection, and WebRTC for real-time communication.",
        'Managed the end-to-end setup and successful release of the Ampoza app on the Google Play Store.'
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
