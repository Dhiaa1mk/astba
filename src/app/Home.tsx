import { Link } from 'react-router';
import { motion } from 'motion/react';
import { 
  Code, 
  Shield, 
  Cpu, 
  Calculator, 
  FlaskConical, 
  Languages,
  Users,
  GraduationCap,
  Calendar,
  Lightbulb,
  ArrowRight,
  BookOpen,
  Award,
  Rocket
} from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';

// Imports corrigés des images
//import groupPhoto from '../imports/f4.jpg';
//import codingWorkspace from '../imports/d6.jpg';
// Utilisation de la même image pour la bannière en attendant d'avoir l'image spécifique
//import astbaBanner from '../imports/f4.jpg';

export default function Home() {
  const courses = [
    {
      icon: Code,
      title: 'Programming',
      description: 'Learn modern programming languages and software development',
      color: 'text-blue-500',
    },
    {
      icon: Shield,
      title: 'Cybersecurity',
      description: 'Master security principles and protect digital assets',
      color: 'text-red-500',
    },
    {
      icon: Cpu,
      title: 'Robotics',
      description: 'Build and program intelligent robots and automation systems',
      color: 'text-orange-500',
    },
    {
      icon: Calculator,
      title: 'Mathematics',
      description: 'Strengthen your mathematical foundation for technology',
      color: 'text-purple-500',
    },
    {
      icon: FlaskConical,
      title: 'Physics',
      description: 'Understand the physical principles behind technology',
      color: 'text-green-500',
    },
    {
      icon: Languages,
      title: 'Languages',
      description: 'Develop communication skills in multiple languages',
      color: 'text-pink-500',
    },
  ];

  const features = [
    {
      icon: Users,
      title: 'Experienced Instructors',
      description: 'Learn from passionate experts in technology and science',
    },
    {
      icon: Lightbulb,
      title: 'Hands-on Projects',
      description: 'Build real-world projects and gain practical experience',
    },
    {
      icon: Award,
      title: 'Community & Innovation',
      description: 'Join a vibrant community of learners and innovators',
    },
  ];

  const stats = [
    { value: '500+', label: 'Students Trained' },
    { value: '20+', label: 'Courses Available' },
    { value: '50+', label: 'Workshops Organized' },
    { value: '100+', label: 'Projects Built' },
  ];

  const testimonials = [
    {
      name: 'Ahmed Ben Ali',
      role: 'Computer Science Student',
      text: 'ASTBA helped me discover my passion for programming. The instructors are amazing!',
    },
    {
      name: 'Fatma Trabelsi',
      role: 'Robotics Enthusiast',
      text: 'The robotics workshops are incredible. I learned so much and built my first robot!',
    },
    {
      name: 'Mohamed Khalil',
      role: 'Cybersecurity Student',
      text: 'The cybersecurity course opened my eyes to a whole new world. Highly recommended!',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl mb-6">
                Learn Technology and Science with <span className="text-primary">ASTBA</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8">
                Empowering the next generation through technology, robotics, programming and innovation.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" className="text-base">
                  <Link to="/courses">
                    Explore Courses <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="text-base">
                  <Link to="/membership">Join ASTBA</Link>
                </Button>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative"
            >
              <img 
                //src={codingWorkspace} 
                alt="Coding Workspace" 
                className="rounded-lg shadow-2xl w-full"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4">Featured Courses</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore our wide range of courses designed to prepare you for the future
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((course, index) => (
              <motion.div
                key={course.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="hover:shadow-lg transition-shadow cursor-pointer group">
                  <CardContent className="p-6">
                    <course.icon className={`h-12 w-12 mb-4 ${course.color} group-hover:scale-110 transition-transform`} />
                    <h3 className="text-xl mb-2">{course.title}</h3>
                    <p className="text-muted-foreground mb-4">{course.description}</p>
                    <Link to="/courses" className="text-primary hover:underline inline-flex items-center">
                      Learn more <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose ASTBA */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4">Why Choose ASTBA</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Join a community dedicated to excellence in science and technology education
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                  <feature.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl mb-2">{stat.value}</div>
                <div className="text-sm md:text-base opacity-90">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Gallery */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4">Our Community</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              See our students in action, learning and building the future
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <img 
                //src={groupPhoto} 
                alt="ASTBA Students" 
                className="rounded-lg shadow-lg w-full h-full object-cover"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <img 
                //src={astbaBanner} 
                alt="ASTBA Event" 
                className="rounded-lg shadow-lg w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4">What Our Students Say</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Hear from our community of learners and innovators
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card>
                  <CardContent className="p-6">
                    <p className="text-muted-foreground mb-4 italic">"{testimonial.text}"</p>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <span className="text-primary font-semibold">{testimonial.name[0]}</span>
                      </div>
                      <div>
                        <div className="font-medium">{testimonial.name}</div>
                        <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
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
          >
            <Rocket className="h-16 w-16 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl mb-4">Ready to Start Your Journey?</h2>
            <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
              Join ASTBA today and start building your future in technology and science
            </p>
            <Button asChild size="lg" variant="secondary" className="text-base">
              <Link to="/membership">
                Become a Member <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}