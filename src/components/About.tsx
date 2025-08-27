import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Code, Database, Globe, Smartphone } from 'lucide-react';

const About = () => {
  const skills = [
    { category: 'Frontend', icon: Globe, skills: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Framer Motion'] },
    { category: 'Backend', icon: Database, skills: ['Node.js', 'Python', 'PostgreSQL', 'MongoDB', 'GraphQL'] },
    { category: 'Mobile', icon: Smartphone, skills: ['React Native', 'Flutter', 'iOS', 'Android'] },
    { category: 'Tools', icon: Code, skills: ['Git', 'Docker', 'AWS', 'Figma', 'VS Code'] },
  ];

  const education = [
    {
      degree: 'Bachelor of Science in Computer Science',
      institution: 'Tech University',
      year: '2020-2024',
      description: 'Specialized in Software Engineering and Web Development'
    },
    {
      degree: 'Full Stack Web Development Bootcamp',
      institution: 'Code Academy',
      year: '2023',
      description: 'Intensive 6-month program focused on modern web technologies'
    }
  ];

  return (
    <section id="about" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            I'm a passionate developer with 3+ years of experience creating digital solutions 
            that bridge the gap between design and functionality.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Skills */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold mb-6">Technical Skills</h3>
            <div className="grid sm:grid-cols-2 gap-6">
              {skills.map((skillGroup, index) => (
                <Card key={skillGroup.category} className="glass border-primary/10 transition-smooth hover:border-primary/30">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <skillGroup.icon className="h-6 w-6 text-primary mr-3" />
                      <h4 className="font-semibold">{skillGroup.category}</h4>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {skillGroup.skills.map((skill) => (
                        <Badge 
                          key={skill} 
                          variant="secondary"
                          className="bg-primary/10 text-primary-glow border-primary/20"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold mb-6">Education</h3>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <Card key={index} className="glass border-primary/10 transition-smooth hover:border-primary/30">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-semibold text-lg">{edu.degree}</h4>
                      <Badge variant="outline" className="text-primary border-primary/30">
                        {edu.year}
                      </Badge>
                    </div>
                    <p className="text-primary-glow font-medium mb-2">{edu.institution}</p>
                    <p className="text-muted-foreground">{edu.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;