import { ExternalLink, Github, Clock, Users, TrendingUp } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';

const PortfolioSection = () => {
  const projects = [
    {
      title: 'Infrastructure as Code with Terraform',
      description: 'Automated AWS infrastructure provisioning using Terraform, implementing best practices for scalable and maintainable cloud resources.',
      achievements: [
        'Reduced manual setup time by 80%',
        'Implemented multi-environment deployments',
        'Enhanced infrastructure consistency'
      ],
      technologies: ['Terraform', 'AWS', 'EC2', 'VPC', 'S3', 'RDS'],
      metrics: {
        timeReduction: '80%',
        environments: '3',
        resources: '25+'
      },
      icon: TrendingUp,
      color: 'text-primary'
    },
    {
      title: 'Jenkins CI/CD Pipeline',
      description: 'Built comprehensive CI/CD pipeline for Python applications with automated testing, building, and deployment processes.',
      achievements: [
        'Reduced deployment time from 20 to 5 minutes',
        'Automated testing and quality gates',
        'Zero-downtime deployments'
      ],
      technologies: ['Jenkins', 'Python', 'Docker', 'Git', 'SonarQube', 'AWS'],
      metrics: {
        timeReduction: '75%',
        uptime: '99.9%',
        deployments: '200+'
      },
      icon: Clock,
      color: 'text-secondary'
    },
    {
      title: 'Containerized Deployment Platform',
      description: 'Designed and implemented scalable containerized infrastructure using Docker and Kubernetes for microservices architecture.',
      achievements: [
        'Built scalable microservices platform',
        'Minimized deployment errors',
        'Improved resource utilization'
      ],
      technologies: ['Docker', 'Kubernetes', 'AWS EKS', 'Helm', 'Prometheus', 'Grafana'],
      metrics: {
        errorReduction: '90%',
        scalability: '10x',
        efficiency: '60%'
      },
      icon: Users,
      color: 'text-accent'
    }
  ];

  return (
    <section id="portfolio" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            My <span className="text-primary">Portfolio</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Showcasing real-world DevOps projects and infrastructure solutions
          </p>
        </div>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <Card key={index} className="group hover:shadow-glow transition-all duration-300">
              <div className="grid lg:grid-cols-3 gap-6 p-6">
                {/* Project Info */}
                <div className="lg:col-span-2 space-y-4">
                  <CardHeader className="p-0">
                    <div className="flex items-center mb-2">
                      <div className={`p-2 rounded-lg bg-muted/50 mr-3`}>
                        <project.icon className={`h-6 w-6 ${project.color}`} />
                      </div>
                      <CardTitle className="text-xl">{project.title}</CardTitle>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>
                  </CardHeader>

                  <CardContent className="p-0">
                    {/* Key Achievements */}
                    <div className="mb-4">
                      <h4 className="font-semibold mb-2">Key Achievements:</h4>
                      <ul className="space-y-1">
                        {project.achievements.map((achievement, achievementIndex) => (
                          <li key={achievementIndex} className="flex items-center text-sm">
                            <TrendingUp className="h-3 w-3 mr-2 text-success flex-shrink-0" />
                            <span className="text-muted-foreground">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div className="mb-4">
                      <h4 className="font-semibold mb-2">Technologies Used:</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <Badge key={techIndex} variant="secondary" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3 pt-2">
                      <Button variant="outline" size="sm">
                        <Github className="h-4 w-4 mr-2" />
                        View Code
                      </Button>
                      <Button variant="outline" size="sm">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Live Demo
                      </Button>
                    </div>
                  </CardContent>
                </div>

                {/* Metrics */}
                <div className="space-y-4">
                  <h4 className="font-semibold">Project Metrics</h4>
                  <div className="space-y-3">
                    {Object.entries(project.metrics).map(([key, value], metricIndex) => (
                      <div key={metricIndex} className="bg-muted/30 rounded-lg p-3 text-center">
                        <div className="text-2xl font-bold text-primary">{value}</div>
                        <div className="text-xs text-muted-foreground capitalize">
                          {key.replace(/([A-Z])/g, ' $1').trim()}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Additional Projects CTA */}
        <div className="text-center mt-12">
          <Card className="inline-block p-6 bg-muted/50">
            <CardContent className="p-0">
              <h3 className="text-xl font-semibold mb-2">Want to See More?</h3>
              <p className="text-muted-foreground mb-4">
                Check out my GitHub for additional projects and contributions
              </p>
              <Button variant="outline">
                <Github className="h-4 w-4 mr-2" />
                View GitHub Profile
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;