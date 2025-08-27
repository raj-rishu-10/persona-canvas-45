import { Button } from '@/components/ui/button';
import { ArrowDown, Github, Linkedin, Mail, Download, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import profilePhoto from '@/assets/profile-photo.jpg';

const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Enhanced background with animated elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-10 left-10 w-64 h-64 rounded-full gradient-primary opacity-20 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute bottom-10 right-10 w-80 h-80 rounded-full gradient-secondary opacity-20 blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full gradient-accent opacity-10 blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>
      
      {/* Animated floating particles */}
      <div className="absolute inset-0">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: Math.random() * 3,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          
          {/* Enhanced Content */}
          <motion.div 
            className="flex-1 text-center lg:text-left space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-6">
              <motion.h1 
                className="text-6xl lg:text-8xl font-bold leading-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <span className="block gradient-secondary bg-clip-text text-transparent">FRONTEND</span>
                <span className="block text-gradient">DEVELOPER</span>
              </motion.h1>
              
              <motion.p 
                className="text-xl lg:text-2xl text-muted-foreground max-w-2xl leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                I believe in a user-centered design approach, ensuring that every project I 
                work on is tailored to meet the specific needs of its users.
              </motion.p>
            </div>

            <motion.div 
              className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  size="lg" 
                  className="gradient-rainbow border-0 text-lg px-10 py-6 font-bold shadow-glow hover:shadow-accent transition-all duration-300"
                  onClick={scrollToAbout}
                >
                  <Sparkles className="mr-3 h-6 w-6" />
                  Hire Me
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  variant="outline" 
                  size="lg"
                  className="glass border-primary/40 text-lg px-10 py-6 font-bold hover:border-primary hover:bg-primary/10 hover:shadow-glow transition-all duration-300"
                  onClick={() => window.open('mailto:tojsinfinite@gmail.com')}
                >
                  <Download className="mr-3 h-6 w-6" />
                  Download CV
                </Button>
              </motion.div>
            </motion.div>

            {/* Enhanced Social Links */}
            <motion.div 
              className="flex gap-6 justify-center lg:justify-start pt-4"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              {[
                { icon: Github, gradient: 'gradient-primary', url: 'https://github.com' },
                { icon: Linkedin, gradient: 'gradient-secondary', url: 'https://linkedin.com' },
                { icon: Mail, gradient: 'gradient-accent', url: 'mailto:tojsinfinite@gmail.com' }
              ].map((social, index) => (
                <motion.div
                  key={index}
                  className={`w-14 h-14 rounded-2xl ${social.gradient} flex items-center justify-center cursor-pointer shadow-lg`}
                  whileHover={{ 
                    scale: 1.2, 
                    rotate: 15,
                    boxShadow: "0 0 30px rgba(123, 97, 255, 0.5)"
                  }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  onClick={() => window.open(social.url, '_blank')}
                >
                  <social.icon className="h-6 w-6 text-white" />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Enhanced Profile Photo */}
          <motion.div 
            className="flex-1 flex justify-center lg:justify-end"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative">
              <motion.div 
                className="absolute inset-0 rounded-full gradient-rainbow opacity-50 blur-2xl"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <motion.img
                src={profilePhoto}
                alt="John Doe"
                className="relative w-80 h-80 lg:w-96 lg:h-96 rounded-full object-cover border-4 border-primary/30 shadow-glow"
                whileHover={{ scale: 1.05, rotate: 5 }}
                transition={{ duration: 0.3 }}
              />
              <motion.div 
                className="absolute -top-4 -right-4 w-8 h-8 rounded-full gradient-success shadow-lg"
                animate={{
                  scale: [1, 1.2, 1],
                  boxShadow: ["0 0 10px rgba(34, 197, 94, 0.5)", "0 0 20px rgba(34, 197, 94, 0.8)", "0 0 10px rgba(34, 197, 94, 0.5)"]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </div>
          </motion.div>
        </div>

        {/* Enhanced scroll indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <p className="text-sm text-muted-foreground mb-2 font-medium">Scroll to explore</p>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="cursor-pointer"
            onClick={scrollToAbout}
          >
            <div className="w-10 h-10 rounded-full gradient-primary flex items-center justify-center shadow-lg">
              <ArrowDown className="h-5 w-5 text-white" />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;