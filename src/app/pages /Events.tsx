import { motion } from 'motion/react';
import { Calendar, MapPin, Users, Trophy, Code, Cpu, Clock } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';

export default function Events() {
  const upcomingEvents = [
    {
      id: 1,
      title: 'Web Development Hackathon',
      date: 'April 15, 2026',
      time: '09:00 - 18:00',
      location: 'ASTBA Center, Ben Arous',
      participants: '50+ participants',
      category: 'Hackathon',
      description: 'Build amazing web applications in 24 hours. Team up and compete for prizes!',
      status: 'Registration Open',
      icon: Code,
    },
    {
      id: 2,
      title: 'Robotics Competition',
      date: 'April 22, 2026',
      time: '10:00 - 16:00',
      location: 'Ben Arous Sports Hall',
      participants: '30 teams',
      category: 'Competition',
      description: 'Showcase your robotics skills in this exciting competition.',
      status: 'Registration Open',
      icon: Cpu,
    },
    {
      id: 3,
      title: 'Python Workshop',
      date: 'April 28, 2026',
      time: '14:00 - 17:00',
      location: 'ASTBA Lab',
      participants: '25 seats',
      category: 'Workshop',
      description: 'Learn Python programming from basics to intermediate level.',
      status: 'Few Seats Left',
      icon: Code,
    },
  ];

  const pastEvents = [
    {
      id: 4,
      title: 'AI & Machine Learning Conference',
      date: 'March 10, 2026',
      participants: '100+',
      description: 'A day of insights into AI and machine learning technologies.',
    },
    {
      id: 5,
      title: 'Cybersecurity Awareness Day',
      date: 'February 25, 2026',
      participants: '80+',
      description: 'Learn about online security and protecting your digital identity.',
    },
    {
      id: 6,
      title: 'First Robotics Tournament',
      date: 'February 15, 2026',
      participants: '40 teams',
      description: 'Young roboticists competed in our inaugural robotics tournament.',
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
            <h1 className="text-4xl md:text-5xl mb-6">Events & Activities</h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Join our exciting events, workshops, and competitions throughout the year
            </p>
          </motion.div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4">Upcoming Events</h2>
            <p className="text-lg text-muted-foreground">
              Don't miss out on these amazing opportunities
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {upcomingEvents.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                        <event.icon className="h-6 w-6 text-primary" />
                      </div>
                      <Badge variant={event.status === 'Few Seats Left' ? 'destructive' : 'default'}>
                        {event.status}
                      </Badge>
                    </div>
                    <h3 className="text-xl mb-2">{event.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{event.description}</p>
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center gap-2 text-sm">
                        <Calendar className="h-4 w-4 text-muted-foreground" />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Clock className="h-4 w-4 text-muted-foreground" />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <MapPin className="h-4 w-4 text-muted-foreground" />
                        <span>{event.location}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Users className="h-4 w-4 text-muted-foreground" />
                        <span>{event.participants}</span>
                      </div>
                    </div>
                    <Button className="w-full">Register Now</Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Event Types */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4">Event Types</h2>
            <p className="text-lg text-muted-foreground">
              We organize various types of events throughout the year
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Trophy,
                title: 'Hackathons',
                description: 'Intensive coding competitions to build innovative solutions',
                color: 'text-yellow-500',
              },
              {
                icon: Cpu,
                title: 'Robotics Competitions',
                description: 'Showcase your robotics projects and compete with peers',
                color: 'text-orange-500',
              },
              {
                icon: Code,
                title: 'Coding Workshops',
                description: 'Learn new programming languages and frameworks',
                color: 'text-blue-500',
              },
              {
                icon: Users,
                title: 'Tech Conferences',
                description: 'Connect with industry experts and learn about trends',
                color: 'text-purple-500',
              },
            ].map((type, index) => (
              <motion.div
                key={type.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <type.icon className={`h-12 w-12 mx-auto mb-4 ${type.color}`} />
                    <h3 className="text-lg mb-2">{type.title}</h3>
                    <p className="text-sm text-muted-foreground">{type.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Past Events */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4">Past Events</h2>
            <p className="text-lg text-muted-foreground">
              Take a look at our successful past events
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {pastEvents.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <h3 className="text-lg mb-2">{event.title}</h3>
                    <p className="text-sm text-muted-foreground mb-3">{event.description}</p>
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Calendar className="h-4 w-4" />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Users className="h-4 w-4" />
                        <span>{event.participants}</span>
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
            className="max-w-2xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl mb-4">Want to Organize an Event?</h2>
            <p className="text-lg mb-6 opacity-90">
              Have an idea for a tech event? Let's collaborate and make it happen!
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
