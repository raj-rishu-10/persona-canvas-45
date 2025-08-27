import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-secondary/30 border-t border-primary/10">
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo and tagline */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold text-gradient mb-2">John Doe</h3>
            <p className="text-muted-foreground">Building the future, one line of code at a time.</p>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-4">
            <Button 
              variant="ghost" 
              size="icon"
              className="hover:text-primary transition-smooth"
              onClick={() => window.open('https://github.com', '_blank')}
            >
              <Github className="h-5 w-5" />
            </Button>
            <Button 
              variant="ghost" 
              size="icon"
              className="hover:text-primary transition-smooth"
              onClick={() => window.open('https://linkedin.com', '_blank')}
            >
              <Linkedin className="h-5 w-5" />
            </Button>
            <Button 
              variant="ghost" 
              size="icon"
              className="hover:text-primary transition-smooth"
              onClick={() => window.open('mailto:john.doe@example.com')}
            >
              <Mail className="h-5 w-5" />
            </Button>
          </div>
        </div>

        <div className="border-t border-primary/10 mt-8 pt-8 text-center">
          <p className="text-muted-foreground flex items-center justify-center gap-2">
            © {currentYear} John Doe. Made with{' '}
            <Heart className="h-4 w-4 text-red-500" fill="currentColor" />
            {' '}using React & TypeScript
          </p>
          
          <Button 
            variant="ghost" 
            size="sm"
            onClick={scrollToTop}
            className="mt-4 hover:text-primary transition-smooth"
          >
            Back to top ↑
          </Button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;