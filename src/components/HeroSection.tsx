import { ArrowDown, Download, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import adityaProfile from '@/assets/aditya-profile.jpg';

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 pb-16">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                Hello, I'm{' '}
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  Aditya Pande
                </span>
              </h1>
              <h2 className="text-2xl lg:text-3xl text-muted-foreground font-medium">
                DevOps Engineer & Cloud Enthusiast
              </h2>
              <p className="text-lg text-muted-foreground max-w-md">
                Passionate about cloud technologies, automation, and building scalable infrastructure. 
                Currently pursuing B.Tech in AI while gaining hands-on experience in DevOps.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <Button 
                onClick={() => scrollToSection('portfolio')}
                className="bg-gradient-primary hover:shadow-glow transition-all duration-300"
              >
                View My Work
                <ArrowDown className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" className="hover:bg-muted">
                <Download className="mr-2 h-4 w-4" />
                Download CV
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4">
              <Button variant="ghost" size="sm" className="hover:text-primary">
                <Github className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="sm" className="hover:text-primary">
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="sm" className="hover:text-primary">
                <Mail className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end animate-scale-in">
            <Card className="p-1 bg-gradient-primary shadow-glow">
              <div className="relative">
                <img
                  src={adityaProfile}
                  alt="Aditya Pande"
                  className="w-80 h-80 lg:w-96 lg:h-96 object-cover rounded-lg"
                />
                <div className="absolute inset-0 bg-gradient-primary opacity-10 rounded-lg"></div>
              </div>
            </Card>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="flex justify-center mt-16">
          <button
            onClick={() => scrollToSection('about')}
            className="animate-bounce p-2 rounded-full hover:bg-muted transition-colors"
          >
            <ArrowDown className="h-6 w-6 text-muted-foreground" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;