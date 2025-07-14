import { Heart, Github, Linkedin, Mail, ArrowUp } from 'lucide-react';
import { Button } from './ui/button';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-2">Aditya Pande</h3>
            <p className="text-background/70">
              DevOps Engineer & Cloud Enthusiast
            </p>
          </div>

          {/* Social Links */}
          <div className="text-center">
            <div className="flex justify-center gap-4 mb-4">
              <Button 
                variant="ghost" 
                size="sm" 
                asChild
                className="text-background hover:text-primary hover:bg-background/10"
              >
                <a href="https://github.com/adi-Git-Hub" target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5" />
                </a>
              </Button>
              <Button 
                variant="ghost" 
                size="sm" 
                asChild
                className="text-background hover:text-primary hover:bg-background/10"
              >
                <a href="https://linkedin.com/in/aditya-pande" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
              <Button 
                variant="ghost" 
                size="sm" 
                asChild
                className="text-background hover:text-primary hover:bg-background/10"
              >
                <a href="mailto:aditya.r.pande@outlook.com">
                  <Mail className="h-5 w-5" />
                </a>
              </Button>
            </div>
            <p className="text-background/70 text-sm">
              Let's connect and build something amazing together
            </p>
          </div>

          {/* Back to Top */}
          <div className="text-right">
            <Button
              variant="ghost"
              onClick={scrollToTop}
              className="text-background hover:text-primary hover:bg-background/10"
            >
              <ArrowUp className="h-4 w-4 mr-2" />
              Back to Top
            </Button>
          </div>
        </div>

        <div className="border-t border-background/20 mt-8 pt-8 text-center">
          <p className="text-background/70 text-sm">
            © {currentYear} Aditya Pande. Built with{' '}
            <Heart className="inline h-4 w-4 text-red-500 mx-1" />
            using React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;