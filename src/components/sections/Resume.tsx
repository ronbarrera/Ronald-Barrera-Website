
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

const Resume = () => {
  const education = [
    {
      institution: 'University of California, Berkeley',
      degree: 'B.S. Computer Science',
      date: '2016 - 2020',
      description: 'Graduated with honors. Specialized in Human-Computer Interaction and Web Technologies.'
    },
    {
      institution: 'Coding Bootcamp',
      degree: 'Full Stack Web Development',
      date: '2015',
      description: 'Intensive program focused on modern web technologies like React, Node.js, and MongoDB.'
    }
  ];

  const certifications = [
    {
      name: 'AWS Certified Developer - Associate',
      issuer: 'Amazon Web Services',
      date: '2021',
      credentialID: 'AWS-DEV-1234'
    },
    {
      name: 'Google Cloud Professional Cloud Developer',
      issuer: 'Google',
      date: '2022',
      credentialID: 'GCP-DEV-5678'
    }
  ];

  return (
    <section id="resume" className="section-padding">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold">Resume & Qualifications</h2>
          <Button className="bg-teal text-background hover:bg-teal/80">
            <Download className="mr-2" size={16} />
            Download CV
          </Button>
        </div>
        
        <div className="space-y-12 animate-fade-in">
          {/* Education */}
          <div>
            <h3 className="text-xl font-semibold mb-6 flex items-center">
              <span className="text-teal mr-2">📚</span> Education
            </h3>
            <div className="space-y-6">
              {education.map((item, i) => (
                <Card key={i} className="border-l-4 border-l-teal">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:justify-between mb-2">
                      <h4 className="font-semibold text-lg">{item.institution}</h4>
                      <span className="text-sm text-muted-foreground font-mono">{item.date}</span>
                    </div>
                    <p className="text-primary font-medium mb-2">{item.degree}</p>
                    <p className="text-slate">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          
          {/* Certifications */}
          <div>
            <h3 className="text-xl font-semibold mb-6 flex items-center">
              <span className="text-teal mr-2">🏆</span> Certifications
            </h3>
            <div className="space-y-6">
              {certifications.map((cert, i) => (
                <Card key={i}>
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:justify-between mb-2">
                      <h4 className="font-semibold text-lg">{cert.name}</h4>
                      <span className="text-sm text-muted-foreground font-mono">{cert.date}</span>
                    </div>
                    <p className="text-primary font-medium mb-2">
                      {cert.issuer} <span className="text-slate text-sm">· Credential ID: {cert.credentialID}</span>
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          
          {/* Skills */}
          <div>
            <h3 className="text-xl font-semibold mb-6 flex items-center">
              <span className="text-teal mr-2">🛠️</span> Technical Skills
            </h3>
            <Card>
              <CardContent className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-4">Frontend</h4>
                    <ul className="space-y-2">
                      <li className="text-slate">HTML5, CSS3, JavaScript (ES6+)</li>
                      <li className="text-slate">React, Next.js, Vue.js</li>
                      <li className="text-slate">Redux, Context API, React Query</li>
                      <li className="text-slate">Tailwind CSS, Styled Components</li>
                      <li className="text-slate">TypeScript</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-4">Backend</h4>
                    <ul className="space-y-2">
                      <li className="text-slate">Node.js, Express</li>
                      <li className="text-slate">Python, Django</li>
                      <li className="text-slate">RESTful APIs, GraphQL</li>
                      <li className="text-slate">MongoDB, PostgreSQL</li>
                      <li className="text-slate">Firebase, AWS, GCP</li>
                    </ul>
                  </div>
                </div>
                
                <Separator className="my-6" />
                
                <div>
                  <h4 className="font-semibold mb-4">Other Skills</h4>
                  <ul className="space-y-2">
                    <li className="text-slate">Git, GitHub, CI/CD</li>
                    <li className="text-slate">Docker, Kubernetes</li>
                    <li className="text-slate">Agile, Scrum, Kanban</li>
                    <li className="text-slate">UI/UX Design, Figma</li>
                    <li className="text-slate">Testing (Jest, React Testing Library)</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
