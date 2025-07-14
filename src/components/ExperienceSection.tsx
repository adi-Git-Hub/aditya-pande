import { Briefcase, Calendar, MapPin, CheckCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';

const ExperienceSection = () => {
  const achievements = [
    'Implemented infrastructure as code using Terraform',
    'Built and maintained CI/CD pipelines with Jenkins',
    'Managed containerized applications using Docker and Kubernetes',
    'Automated deployment processes reducing manual errors by 70%',
    'Collaborated with development teams on cloud migration strategies',
    'Monitored and optimized system performance using various tools'
  ];

  const technologies = [
    'AWS', 'Docker', 'Kubernetes', 'Terraform', 'Jenkins', 'Linux', 
    'Python', 'Git', 'DataDog', 'SonarQube', 'CI/CD'
  ];

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Work <span className="text-primary">Experience</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Gaining practical experience in DevOps and cloud technologies
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="p-6 shadow-card hover:shadow-glow transition-shadow duration-300">
            <CardHeader className="pb-4">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <CardTitle className="text-2xl text-primary mb-2">
                    DevOps Engineer
                  </CardTitle>
                  <h3 className="text-xl font-semibold text-foreground">
                    Hisan Labs Pvt Ltd
                  </h3>
                </div>
                <div className="flex flex-col sm:flex-row gap-2 text-muted-foreground">
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span>Full-time Internship</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 mr-2" />
                    <span>Remote</span>
                  </div>
                </div>
              </div>
            </CardHeader>

            <CardContent>
              <div className="space-y-6">
                {/* Description */}
                <div>
                  <h4 className="text-lg font-semibold mb-3 flex items-center">
                    <Briefcase className="h-5 w-5 mr-2 text-primary" />
                    Role Overview
                  </h4>
                  <p className="text-muted-foreground leading-relaxed">
                    As a DevOps Engineer intern at Hisan Labs, I've been working on implementing and maintaining 
                    cloud infrastructure, automating deployment processes, and collaborating with development teams 
                    to ensure smooth software delivery pipelines. This role has provided me with hands-on experience 
                    in real-world DevOps practices and cloud technologies.
                  </p>
                </div>

                {/* Key Achievements */}
                <div>
                  <h4 className="text-lg font-semibold mb-4 flex items-center">
                    <CheckCircle className="h-5 w-5 mr-2 text-success" />
                    Key Achievements & Responsibilities
                  </h4>
                  <div className="grid md:grid-cols-2 gap-3">
                    {achievements.map((achievement, index) => (
                      <div key={index} className="flex items-start">
                        <CheckCircle className="h-4 w-4 mr-2 text-success mt-1 flex-shrink-0" />
                        <span className="text-muted-foreground text-sm">{achievement}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technologies Used */}
                <div>
                  <h4 className="text-lg font-semibold mb-4">Technologies & Tools</h4>
                  <div className="flex flex-wrap gap-2">
                    {technologies.map((tech, index) => (
                      <Badge key={index} variant="secondary" className="hover:bg-primary hover:text-primary-foreground transition-colors">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Key Learnings */}
                <div>
                  <h4 className="text-lg font-semibold mb-3">Key Learnings</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    This internship has been instrumental in developing my practical skills in DevOps methodologies, 
                    cloud architecture design, and automation practices. I've learned the importance of monitoring, 
                    security best practices, and effective collaboration in a professional development environment.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;