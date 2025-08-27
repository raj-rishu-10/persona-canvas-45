import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github } from 'lucide-react';
import project1 from '@/assets/project1.jpg';
import project2 from '@/assets/project2.jpg';
import project3 from '@/assets/project3.jpg';

const Projects = () => {
  const projects = [
    {
      title: 'Analytics Dashboard',
      description: 'A comprehensive analytics dashboard built with React and D3.js, featuring real-time data visualization, interactive charts, and user management capabilities.',
      image: project1,
      technologies: ['React', 'TypeScript', 'D3.js', 'Node.js', 'PostgreSQL'],
      githubUrl: 'https://github.com',
      liveUrl: 'https://demo.example.com',
      featured: true
    },
    {
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with payment integration, inventory management, and admin dashboard. Built with modern web technologies.',
      image: project2,
      technologies: ['Next.js', 'Stripe', 'MongoDB', 'Tailwind CSS', 'Vercel'],
      githubUrl: 'https://github.com',
      liveUrl: 'https://demo.example.com',
      featured: true
    },
    {
      title: 'Task Management App',
      description: 'Collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
      image: project3,
      technologies: ['React', 'Firebase', 'Material-UI', 'Socket.io'],
      githubUrl: 'https://github.com',
      liveUrl: 'https://demo.example.com',
      featured: false
    }
  ];

  const communityContributions = [
    {
      title: 'Open Source Contributor',
      description: 'Active contributor to popular React libraries and tools',
      count: '25+ PRs merged'
    },
    {
      title: 'Stack Overflow',
      description: 'Helping developers solve complex problems',
      count: '500+ reputation'
    },
    {
      title: 'Tech Blog',
      description: 'Writing articles about web development best practices',
      count: '10+ articles'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-6">
        {/* Projects Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of my recent work, demonstrating expertise in modern web development 
            and problem-solving skills.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-20">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className={`glass border-primary/10 transition-smooth hover:border-primary/30 hover:shadow-glow group ${
                project.featured ? 'xl:col-span-2' : ''
              }`}
            >
              <div className="relative overflow-hidden rounded-t-lg">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-smooth group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-smooth"></div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3 text-gradient">{project.title}</h3>
                <p className="text-muted-foreground mb-4 line-clamp-3">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <Badge 
                      key={tech} 
                      variant="secondary"
                      className="bg-primary/10 text-primary-glow border-primary/20"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-3">
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="flex-1 glass border-primary/30 hover:border-primary"
                    onClick={() => window.open(project.githubUrl, '_blank')}
                  >
                    <Github className="mr-2 h-4 w-4" />
                    Code
                  </Button>
                  <Button 
                    size="sm"
                    className="flex-1 gradient-primary border-0"
                    onClick={() => window.open(project.liveUrl, '_blank')}
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Live Demo
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Community Contributions */}
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold mb-4">
            Community <span className="text-gradient">Contributions</span>
          </h3>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Giving back to the developer community through open source contributions 
            and knowledge sharing.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {communityContributions.map((contribution, index) => (
            <Card key={index} className="glass border-primary/10 transition-smooth hover:border-primary/30 text-center">
              <CardContent className="p-6">
                <h4 className="font-semibold text-lg mb-2">{contribution.title}</h4>
                <p className="text-muted-foreground mb-3">{contribution.description}</p>
                <Badge variant="outline" className="text-primary border-primary/30">
                  {contribution.count}
                </Badge>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;