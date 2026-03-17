import { motion } from 'motion/react';
import { Target, Eye, Users, Code, Trophy, BookOpen, Cpu, Shield } from 'lucide-react';
import { Card, CardContent } from '../components/ui/card';
//import meetingRoom from 'figma:asset/feb6fed2937aa54325fb0b7feb83e75ae1e85162.png';

export default function About() {
  const team = [
    {
      name: 'Dr. Karim Ben Ahmed',
      role: 'Founder & Director',
      expertise: 'Computer Science & AI',
    },
    {
      name: 'Sarah Meddeb',
      role: 'Head of Robotics',
      expertise: 'Robotics & Automation',
    },
    {
      name: 'Youssef Gharbi',
      role: 'Programming Instructor',
      expertise: 'Software Development',
    },
    {
      name: 'Amira Bouaziz',
      role: 'Cybersecurity Expert',
      expertise: 'Information Security',
    },
    {
      name: 'Nabil Hamdi',
      role: 'Mathematics Teacher',
      expertise: 'Applied Mathematics',
    },
    {
      name: 'Leila Mansour',
      role: 'Physics Instructor',
      expertise: 'Applied Physics',
    },
  ];

  const activities = [
    {
      icon: Code,
      title: 'Coding Workshops',
      description: 'Regular hands-on coding sessions covering multiple programming languages',
    },
    {
      icon: Trophy,
      title: 'Competitions',
      description: 'Participate in local and international technology competitions',
    },
    {
      icon: BookOpen,
      title: 'Coding Bootcamps',
      description: 'Intensive training programs to accelerate your learning',
    },
    {
      icon: Cpu,
      title: 'Robotics Labs',
      description: 'State-of-the-art facilities for building and testing robots',
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
            <h1 className="text-4xl md:text-5xl mb-6">About ASTBA</h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Association Science and Technology Ben Arous - Dedicated to promoting science and technology education for the youth of Tunisia
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Card className="h-full">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Target className="h-6 w-6 text-primary" />
                    </div>
                    <h2 className="text-2xl md:text-3xl">Our Mission</h2>
                  </div>
                  <p className="text-muted-foreground text-lg">
                    To promote science and technology education among youth in Ben Arous and beyond. We strive to make quality STEM education accessible to all students, regardless of their background, and foster a love for learning and innovation.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Card className="h-full">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center">
                      <Eye className="h-6 w-6 text-secondary" />
                    </div>
                    <h2 className="text-2xl md:text-3xl">Our Vision</h2>
                  </div>
                  <p className="text-muted-foreground text-lg">
                    To prepare the next generation for the digital world and equip them with the skills needed to thrive in tomorrow's technology-driven society. We envision a future where every young person has the opportunity to become a creator and innovator.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Image Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <img 
              //src={meetingRoom} 
              alt="ASTBA Workshop" 
              className="rounded-lg shadow-2xl w-full max-w-4xl mx-auto"
            />
          </motion.div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4">Our Team</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Meet our passionate educators and technology experts
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 text-center">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-secondary text-white flex items-center justify-center text-2xl mx-auto mb-4">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <h3 className="text-xl mb-1">{member.name}</h3>
                    <p className="text-primary mb-2">{member.role}</p>
                    <p className="text-sm text-muted-foreground">{member.expertise}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Activities */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4">Our Activities</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Engaging programs and activities to enhance your learning experience
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {activities.map((activity, index) => (
              <motion.div
                key={activity.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 text-center">
                    <activity.icon className="h-12 w-12 mx-auto mb-4 text-primary" />
                    <h3 className="text-lg mb-2">{activity.title}</h3>
                    <p className="text-sm text-muted-foreground">{activity.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4">Our Values</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <div className="text-4xl mb-3">🎯</div>
              <h3 className="text-xl mb-2">Excellence</h3>
              <p className="text-muted-foreground">
                We strive for excellence in everything we do
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-center"
            >
              <div className="text-4xl mb-3">💡</div>
              <h3 className="text-xl mb-2">Innovation</h3>
              <p className="text-muted-foreground">
                We encourage creativity and innovative thinking
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-center"
            >
              <div className="text-4xl mb-3">🤝</div>
              <h3 className="text-xl mb-2">Community</h3>
              <p className="text-muted-foreground">
                We build a supportive and inclusive community
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
