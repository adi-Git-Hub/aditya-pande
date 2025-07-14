import { Cloud, Cog, Server, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';

const ServicesSection = () => {
  const services = [
    {
      icon: Cog,
      title: 'DevOps Consulting',
      description: 'Streamline your development and operations workflows with modern DevOps practices and automation solutions.',
      features: [
        'CI/CD Pipeline Implementation',
        'Infrastructure Automation',
        'Monitoring & Logging Setup',
        'Security Best Practices'
      ],
      color: 'text-primary'
    },
    {
      icon: Cloud,
      title: 'AWS Cloud Management',
      description: 'Optimize your cloud infrastructure for performance, security, and cost-effectiveness on Amazon Web Services.',
      features: [
        'Cloud Architecture Design',
        'EC2, S3, VPC Configuration',
        'Auto-scaling & Load Balancing',
        'Cost Optimization Strategies'
      ],
      color: 'text-secondary'
    },
    {
      icon: Server,
      title: 'Linux Administration',
      description: 'Comprehensive Linux system administration and server management for optimal performance and security.',
      features: [
        'System Configuration & Tuning',
        'Security Hardening',
        'Performance Monitoring',
        'Backup & Recovery Solutions'
      ],
      color: 'text-accent'
    }
  ];

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            My <span className="text-primary">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Helping businesses improve their infrastructure automation and operational efficiency
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-glow transition-all duration-300 hover:-translate-y-2">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto mb-4 p-4 rounded-full bg-muted/50 w-fit group-hover:bg-gradient-primary group-hover:text-white transition-all duration-300">
                  <service.icon className={`h-8 w-8 ${service.color} group-hover:text-white`} />
                </div>
                <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {service.description}
                </p>
              </CardHeader>
              
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm">
                      <ArrowRight className="h-3 w-3 mr-2 text-primary flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  variant="outline" 
                  className="w-full mt-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                  onClick={scrollToContact}
                >
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Card className="inline-block p-8 bg-gradient-primary text-white shadow-glow">
            <CardContent className="p-0">
              <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Infrastructure?</h3>
              <p className="text-white/90 mb-6 max-w-lg">
                Let's discuss how I can help optimize your DevOps processes and cloud infrastructure 
                for better performance and efficiency.
              </p>
              <Button 
                variant="secondary" 
                size="lg"
                onClick={scrollToContact}
                className="bg-white text-primary hover:bg-white/90"
              >
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;