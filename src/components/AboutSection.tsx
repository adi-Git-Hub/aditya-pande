import { GraduationCap, Code, Users, Clock, Lightbulb, MessageSquare } from 'lucide-react';
import { Card, CardContent } from './ui/card';

const AboutSection = () => {
  const skills = [
    { name: 'AWS', level: 90, color: 'bg-primary' },
    { name: 'Docker', level: 85, color: 'bg-secondary' },
    { name: 'Kubernetes', level: 80, color: 'bg-accent' },
    { name: 'Terraform', level: 88, color: 'bg-success' },
    { name: 'Jenkins', level: 85, color: 'bg-primary' },
    { name: 'Linux', level: 92, color: 'bg-secondary' },
    { name: 'Python', level: 75, color: 'bg-accent' },
    { name: 'CI/CD', level: 88, color: 'bg-success' }
  ];

  const softSkills = [
    { icon: MessageSquare, name: 'Communication', description: 'Clear and effective communication with team members and stakeholders.' },
    { icon: Users, name: 'Teamwork', description: 'Collaborative approach to problem-solving and project delivery.' },
    { icon: Lightbulb, name: 'Problem Solving', description: 'Analytical thinking and creative solutions for complex challenges.' },
    { icon: Clock, name: 'Time Management', description: 'Efficient prioritization and deadline management skills.' }
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            About <span className="text-primary">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Passionate DevOps engineer with a strong foundation in cloud technologies and automation
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Bio Section */}
          <div className="space-y-6">
            <Card className="p-6 shadow-card">
              <CardContent className="p-0">
                <div className="flex items-center mb-4">
                  <GraduationCap className="h-6 w-6 text-primary mr-3" />
                  <h3 className="text-xl font-semibold">Educational Journey</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Currently pursuing B.Tech in Artificial Intelligence at G.H. Raisoni College of Engineering and Management. 
                  My academic journey has provided me with a strong foundation in technology and problem-solving methodologies.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 shadow-card">
              <CardContent className="p-0">
                <div className="flex items-center mb-4">
                  <Code className="h-6 w-6 text-secondary mr-3" />
                  <h3 className="text-xl font-semibold">Technical Expertise</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Specialized in DevOps practices with hands-on experience in cloud technologies, containerization, 
                  and infrastructure automation. I'm passionate about continuous learning and staying updated with 
                  the latest industry trends.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  My technical toolkit includes Linux administration, AWS services (EC2, S3, VPC, RDS, ELB), 
                  Docker, Kubernetes, Terraform, CI/CD pipelines, and monitoring tools like DataDog and SonarQube.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Skills Section */}
          <div className="space-y-8">
            {/* Technical Skills */}
            <div>
              <h3 className="text-2xl font-semibold mb-6">Technical Skills</h3>
              <div className="space-y-4">
                {skills.map((skill, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div
                        className={`h-full ${skill.color} rounded-full transition-all duration-1000 ease-out`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Soft Skills */}
            <div>
              <h3 className="text-2xl font-semibold mb-6">Soft Skills</h3>
              <div className="grid grid-cols-2 gap-4">
                {softSkills.map((skill, index) => (
                  <Card key={index} className="p-4 hover:shadow-card transition-shadow cursor-pointer">
                    <CardContent className="p-0 text-center">
                      <skill.icon className="h-8 w-8 text-primary mx-auto mb-2" />
                      <h4 className="font-medium mb-1">{skill.name}</h4>
                      <p className="text-xs text-muted-foreground">{skill.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;