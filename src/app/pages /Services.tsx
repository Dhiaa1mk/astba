import { motion } from 'motion/react';
import { Code, Cpu, GraduationCap, Lightbulb, Shield, Baby, Users, BookOpen } from 'lucide-react';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Link } from 'react-router';

export default function Services() {
  const services = [
    {
      icon: Code,
      title: 'Coding Workshops',
      description: 'Interactive coding workshops covering Python, JavaScript, Java, and more. Perfect for beginners and intermediate learners.',
      features: ['Hands-on projects', 'Expert instructors', 'Small class sizes', 'Certificate of completion'],
      color: 'text-blue-500',
    },
    {
      icon: Cpu,
      title: 'Robotics Labs',
      description: 'State-of-the-art robotics facilities where you can build, program, and test your own robots.',
      features: ['Arduino & Raspberry Pi', 'Robot kits provided', 'Competition preparation', 'Team projects'],
      color: 'text-orange-500',
    },
    {
      icon: GraduationCap,
      title: 'STEM Education',
      description: 'Comprehensive STEM programs integrating Science, Technology, Engineering, and Mathematics.',
      features: ['Curriculum aligned', 'Project-based learning', 'Real-world applications', 'Experienced educators'],
      color: 'text-purple-500',
    },
    {
      icon: Lightbulb,
      title: 'Technology Training',
      description: 'Professional technology training programs for students and professionals looking to upgrade their skills.',
      features: ['Industry-relevant skills', 'Flexible schedules', 'Certification programs', 'Career guidance'],
      color: 'text-green-500',
    },
    {
      icon: Shield,
      title: 'Cybersecurity Awareness',
      description: 'Learn to protect yourself and your organization from cyber threats through our security programs.',
      features: ['Ethical hacking', 'Network security', 'Security best practices', 'Incident response'],
      color: 'text-red-500',
    },
    {
      icon: Baby,
      title: 'Programming for Kids',
      description: 'Specialized programs designed to introduce children to programming in a fun and engaging way.',
      features: ['Age-appropriate content', 'Scratch & Blockly', 'Game development', 'Creative projects'],
      color: 'text-pink-500',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl mb-6">Our Services</h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Comprehensive technology and science education programs tailored to meet your learning needs
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow group">
                  <CardContent className="p-6">
                    <service.icon className={`h-12 w-12 mb-4 ${service.color} group-hover:scale-110 transition-transform`} />
                    <h3 className="text-xl mb-3">{service.title}</h3>
                    <p className="text-muted-foreground mb-4">{service.description}</p>
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button variant="outline" className="w-full">Learn More</Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4">How It Works</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Getting started with ASTBA is easy and straightforward
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {[
              { step: '01', title: 'Choose a Service', description: 'Browse our services and select what interests you' },
              { step: '02', title: 'Register', description: 'Sign up and create your account' },
              { step: '03', title: 'Start Learning', description: 'Join your first class or workshop' },
              { step: '04', title: 'Grow & Build', description: 'Apply your skills to real projects' },
            ].map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-5xl font-bold text-primary/20 mb-3">{item.step}</div>
                <h3 className="text-lg mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4">Why Choose Our Services</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Card>
                <CardContent className="p-6 text-center">
                  <Users className="h-12 w-12 mx-auto mb-4 text-primary" />
                  <h3 className="text-xl mb-3">Expert Instructors</h3>
                  <p className="text-muted-foreground">
                    Learn from experienced professionals passionate about technology education
                  </p>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Card>
                <CardContent className="p-6 text-center">
                  <Lightbulb className="h-12 w-12 mx-auto mb-4 text-secondary" />
                  <h3 className="text-xl mb-3">Practical Learning</h3>
                  <p className="text-muted-foreground">
                    Hands-on projects and real-world applications in every program
                  </p>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Card>
                <CardContent className="p-6 text-center">
                  <BookOpen className="h-12 w-12 mx-auto mb-4 text-green-500" />
                  <h3 className="text-xl mb-3">Comprehensive Curriculum</h3>
                  <p className="text-muted-foreground">
                    Well-structured programs covering everything from basics to advanced topics
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-primary to-secondary text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl mb-4">Ready to Get Started?</h2>
            <p className="text-lg mb-6 opacity-90">
              Join ASTBA today and start your journey in technology and science
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button asChild size="lg" variant="secondary">
                <Link to="/courses">Browse Courses</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-transparent text-white border-white hover:bg-white/10">
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
