import { useState } from 'react';
import { motion } from 'motion/react';
import { Code, Shield, Cpu, Calculator, FlaskConical, Languages, Clock, BarChart, Users } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';

export default function Courses() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filters = ['All', 'Programming', 'Robotics', 'Cybersecurity', 'Mathematics', 'Physics', 'Languages'];

  const courses = [
    {
      id: 1,
      title: 'Python Programming',
      category: 'Programming',
      instructor: 'Youssef Gharbi',
      duration: '12 weeks',
      level: 'Beginner',
      students: 45,
      icon: Code,
      description: 'Learn Python from scratch and build real-world applications',
    },
    {
      id: 2,
      title: 'Web Development',
      category: 'Programming',
      instructor: 'Karim Ben Ahmed',
      duration: '16 weeks',
      level: 'Intermediate',
      students: 38,
      icon: Code,
      description: 'Master HTML, CSS, JavaScript and modern web frameworks',
    },
    {
      id: 3,
      title: 'Introduction to Robotics',
      category: 'Robotics',
      instructor: 'Sarah Meddeb',
      duration: '10 weeks',
      level: 'Beginner',
      students: 32,
      icon: Cpu,
      description: 'Build and program your first robot from scratch',
    },
    {
      id: 4,
      title: 'Advanced Robotics',
      category: 'Robotics',
      instructor: 'Sarah Meddeb',
      duration: '14 weeks',
      level: 'Advanced',
      students: 20,
      icon: Cpu,
      description: 'Design complex robotic systems with AI integration',
    },
    {
      id: 5,
      title: 'Cybersecurity Fundamentals',
      category: 'Cybersecurity',
      instructor: 'Amira Bouaziz',
      duration: '8 weeks',
      level: 'Beginner',
      students: 40,
      icon: Shield,
      description: 'Learn the basics of cybersecurity and ethical hacking',
    },
    {
      id: 6,
      title: 'Network Security',
      category: 'Cybersecurity',
      instructor: 'Amira Bouaziz',
      duration: '12 weeks',
      level: 'Intermediate',
      students: 28,
      icon: Shield,
      description: 'Protect networks and systems from cyber threats',
    },
    {
      id: 7,
      title: 'Advanced Mathematics',
      category: 'Mathematics',
      instructor: 'Nabil Hamdi',
      duration: '20 weeks',
      level: 'Advanced',
      students: 25,
      icon: Calculator,
      description: 'Master calculus, linear algebra, and discrete mathematics',
    },
    {
      id: 8,
      title: 'Applied Physics',
      category: 'Physics',
      instructor: 'Leila Mansour',
      duration: '16 weeks',
      level: 'Intermediate',
      students: 30,
      icon: FlaskConical,
      description: 'Explore physics principles in technology and engineering',
    },
    {
      id: 9,
      title: 'English for Tech',
      category: 'Languages',
      instructor: 'Ahmed Salah',
      duration: '10 weeks',
      level: 'Beginner',
      students: 50,
      icon: Languages,
      description: 'Learn technical English for the technology industry',
    },
  ];

  const filteredCourses = activeFilter === 'All' 
    ? courses 
    : courses.filter(course => course.category === activeFilter);

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Beginner':
        return 'bg-green-500/10 text-green-500';
      case 'Intermediate':
        return 'bg-blue-500/10 text-blue-500';
      case 'Advanced':
        return 'bg-orange-500/10 text-orange-500';
      default:
        return 'bg-gray-500/10 text-gray-500';
    }
  };

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
            <h1 className="text-4xl md:text-5xl mb-6">Our Courses</h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Explore our comprehensive range of courses designed to equip you with cutting-edge skills
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 border-b border-border sticky top-16 bg-background/95 backdrop-blur z-40">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-2 justify-center">
            {filters.map((filter) => (
              <Button
                key={filter}
                variant={activeFilter === filter ? 'default' : 'outline'}
                onClick={() => setActiveFilter(filter)}
                className="rounded-full"
              >
                {filter}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCourses.map((course, index) => (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
              >
                <Card className="h-full hover:shadow-lg transition-all group cursor-pointer">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <course.icon className="h-6 w-6 text-primary" />
                      </div>
                      <Badge className={getLevelColor(course.level)}>
                        {course.level}
                      </Badge>
                    </div>
                    <h3 className="text-xl mb-2">{course.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{course.description}</p>
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Users className="h-4 w-4" />
                        <span>Instructor: {course.instructor}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Clock className="h-4 w-4" />
                        <span>Duration: {course.duration}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <BarChart className="h-4 w-4" />
                        <span>{course.students} students enrolled</span>
                      </div>
                    </div>
                    <Button className="w-full">Enroll Now</Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-secondary text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl mb-4">Can't Find What You're Looking For?</h2>
            <p className="text-lg mb-6 opacity-90">
              Contact us to suggest a new course or get more information about our programs
            </p>
            <Button asChild size="lg" variant="secondary">
              <a href="/contact">Contact Us</a>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
