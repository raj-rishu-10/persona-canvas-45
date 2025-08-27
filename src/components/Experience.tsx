import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Building, Calendar, MapPin } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'Senior Full Stack Developer',
      company: 'TechCorp Inc.',
      location: 'San Francisco, CA',
      period: '2023 - Present',
      type: 'Full-time',
      description: [
        'Led development of microservices architecture serving 100K+ daily users',
        'Mentored junior developers and established coding standards',
        'Improved application performance by 40% through optimization',
        'Collaborated with product team to deliver features ahead of schedule'
      ],
      technologies: ['React', 'Node.js', 'TypeScript', 'AWS', 'Docker']
    },
    {
      title: 'Full Stack Developer',
      company: 'StartupXYZ',
      location: 'Remote',
      period: '2022 - 2023',
      type: 'Full-time',
      description: [
        'Built responsive web applications from scratch using React and Next.js',
        'Developed RESTful APIs and GraphQL endpoints',
        'Implemented CI/CD pipelines reducing deployment time by 60%',
        'Worked closely with designers to create pixel-perfect UIs'
      ],
      technologies: ['React', 'Next.js', 'PostgreSQL', 'GraphQL', 'Tailwind CSS']
    },
    {
      title: 'Frontend Developer Intern',
      company: 'WebSolutions Ltd.',
      location: 'New York, NY',
      period: '2021 - 2022',
      type: 'Internship',
      description: [
        'Converted Figma designs into responsive React components',
        'Optimized website loading speed by implementing lazy loading',
        'Participated in code reviews and agile development processes',
        'Gained experience with modern frontend development tools'
      ],
      technologies: ['React', 'JavaScript', 'CSS3', 'Webpack', 'Jest']
    }
  ];

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Work <span className="text-gradient">Experience</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            My professional journey in software development, building scalable solutions 
            and collaborating with amazing teams.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card 
                key={index} 
                className="glass border-primary/10 transition-smooth hover:border-primary/30 hover:shadow-glow"
              >
                <CardContent className="p-8">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-6">
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gradient mb-2">{exp.title}</h3>
                      <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <Building className="h-4 w-4" />
                          <span className="font-medium text-primary-glow">{exp.company}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="h-4 w-4" />
                          <span>{exp.location}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4" />
                          <span>{exp.period}</span>
                        </div>
                      </div>
                    </div>
                    <Badge 
                      variant="outline" 
                      className="text-primary border-primary/30 whitespace-nowrap"
                    >
                      {exp.type}
                    </Badge>
                  </div>

                  <ul className="space-y-2 mb-6">
                    {exp.description.map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <Badge 
                        key={tech} 
                        variant="secondary"
                        className="bg-primary/10 text-primary-glow border-primary/20"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;