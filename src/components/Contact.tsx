import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Github, Linkedin, MapPin, Phone, Send, MessageCircle, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact = () => {
  const contactMethods = [
    {
      icon: Mail,
      label: 'Email Me',
      value: 'tojsinfinite@gmail.com',
      description: 'Drop me a line',
      action: () => window.open('mailto:tojsinfinite@gmail.com'),
      gradient: 'gradient-primary',
      shadow: 'shadow-glow'
    },
    {
      icon: MessageCircle,
      label: 'WhatsApp',
      value: '+1 (555) 123-4567',
      description: 'Quick chat',
      action: () => window.open('https://wa.me/15551234567', '_blank'),
      gradient: 'gradient-success',
      shadow: 'shadow-success'
    },
    {
      icon: Calendar,
      label: 'Schedule Call',
      value: 'Book a meeting',
      description: 'Let\'s discuss',
      action: () => window.open('https://calendly.com/johndoe', '_blank'),
      gradient: 'gradient-accent',
      shadow: 'shadow-accent'
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      value: 'github.com/johndoe',
      action: () => window.open('https://github.com', '_blank')
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'linkedin.com/in/johndoe',
      action: () => window.open('https://linkedin.com', '_blank')
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    alert('Thank you for your message! I\'ll get back to you soon.');
  };

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <motion.div
          className="absolute top-20 left-10 w-32 h-32 rounded-full gradient-primary blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-40 h-40 rounded-full gradient-secondary blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            Let's <span className="text-gradient">Connect</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Ready to bring your ideas to life? I'm always excited to discuss new projects,
            creative collaborations, and innovative solutions.
          </p>
        </motion.div>

        {/* Contact Methods */}
        <motion.div 
          className="grid md:grid-cols-3 gap-6 mb-16 max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {contactMethods.map((method, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="cursor-pointer"
              onClick={method.action}
            >
              <Card className={`glass border-primary/20 h-full transition-all duration-500 hover:border-primary/40 hover:${method.shadow}`}>
                <CardContent className="p-6 text-center">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl ${method.gradient} flex items-center justify-center shadow-lg`}>
                    <method.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{method.label}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{method.description}</p>
                  <p className="text-sm font-medium text-primary">{method.value}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Left Side - Social & Info */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div>
              <h3 className="text-3xl font-bold mb-6 text-gradient">Follow Me</h3>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Stay connected and follow my journey in the world of frontend development.
                Check out my latest projects and thoughts on modern web technologies.
              </p>
            </div>

            <div className="space-y-4">
              {socialLinks.map((social, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.02, x: 10 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Card 
                    className="glass border-primary/20 transition-all duration-300 hover:border-primary/40 hover:shadow-glow cursor-pointer"
                    onClick={social.action}
                  >
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-xl gradient-rainbow flex items-center justify-center">
                          <social.icon className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <h4 className="font-bold text-lg">{social.label}</h4>
                          <p className="text-muted-foreground">{social.value}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Enhanced Stats */}
            <motion.div 
              className="grid grid-cols-2 gap-6 pt-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <div className="text-center p-6 glass rounded-2xl border border-primary/20">
                <motion.div 
                  className="text-4xl font-bold gradient-primary bg-clip-text text-transparent mb-2"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.6, type: "spring" }}
                >
                  100%
                </motion.div>
                <div className="text-sm text-muted-foreground font-medium">Client Satisfaction</div>
              </div>
              <div className="text-center p-6 glass rounded-2xl border border-primary/20">
                <motion.div 
                  className="text-4xl font-bold gradient-success bg-clip-text text-transparent mb-2"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.7, type: "spring" }}
                >
                  24/7
                </motion.div>
                <div className="text-sm text-muted-foreground font-medium">Support Available</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Card className="glass border-primary/20 hover:border-primary/30 transition-all duration-500">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center">
                    <Send className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold">Send Message</h3>
                </div>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-bold mb-3 text-primary">
                        Your Name
                      </label>
                      <Input
                        id="name"
                        type="text"
                        placeholder="John Smith"
                        required
                        className="glass border-primary/30 focus:border-primary h-12 text-base"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-bold mb-3 text-primary">
                        Email Address
                      </label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="john@example.com"
                        required
                        className="glass border-primary/30 focus:border-primary h-12 text-base"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-bold mb-3 text-primary">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      type="text"
                      placeholder="Let's build something amazing together"
                      required
                      className="glass border-primary/30 focus:border-primary h-12 text-base"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-bold mb-3 text-primary">
                      Your Message
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Tell me about your project, ideas, or how we can collaborate..."
                      rows={6}
                      required
                      className="glass border-primary/30 focus:border-primary resize-none text-base"
                    />
                  </div>

                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button 
                      type="submit"
                      className="w-full gradient-rainbow border-0 h-14 text-lg font-bold shadow-glow hover:shadow-accent transition-all duration-300"
                    >
                      <Send className="mr-3 h-5 w-5" />
                      Send Message
                    </Button>
                  </motion.div>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;