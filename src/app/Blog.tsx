import { motion } from 'motion/react';
import { Calendar, User, ArrowRight, Tag } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';

export default function Blog() {
  const articles = [
    {
      id: 1,
      title: 'Getting Started with Python Programming',
      excerpt: 'Learn the fundamentals of Python, one of the most popular programming languages today.',
      author: 'Youssef Gharbi',
      date: 'March 10, 2026',
      category: 'Programming',
      readTime: '5 min read',
    },
    {
      id: 2,
      title: '10 Cybersecurity Tips for Students',
      excerpt: 'Essential security practices every student should follow to protect their digital life.',
      author: 'Amira Bouaziz',
      date: 'March 8, 2026',
      category: 'Cybersecurity',
      readTime: '7 min read',
    },
    {
      id: 3,
      title: 'Building Your First Robot with Arduino',
      excerpt: 'A step-by-step guide to creating your first Arduino-based robot project.',
      author: 'Sarah Meddeb',
      date: 'March 5, 2026',
      category: 'Robotics',
      readTime: '10 min read',
    },
    {
      id: 4,
      title: 'The Future of Artificial Intelligence',
      excerpt: 'Exploring the latest trends and innovations in AI technology and their impact.',
      author: 'Dr. Karim Ben Ahmed',
      date: 'March 1, 2026',
      category: 'Technology',
      readTime: '8 min read',
    },
    {
      id: 5,
      title: 'Web Development Best Practices in 2026',
      excerpt: 'Modern techniques and frameworks for building efficient web applications.',
      author: 'Youssef Gharbi',
      date: 'February 28, 2026',
      category: 'Programming',
      readTime: '6 min read',
    },
    {
      id: 6,
      title: 'Robotics Projects That Changed the World',
      excerpt: 'Discover groundbreaking robotics projects and their real-world applications.',
      author: 'Sarah Meddeb',
      date: 'February 25, 2026',
      category: 'Robotics',
      readTime: '9 min read',
    },
  ];

  const categories = ['All', 'Programming', 'Robotics', 'Cybersecurity', 'Technology'];

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
            <h1 className="text-4xl md:text-5xl mb-6">Blog & News</h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Stay updated with the latest in technology, programming tips, and ASTBA news
            </p>
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 border-b border-border sticky top-16 bg-background/95 backdrop-blur z-40">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <Button
                key={category}
                variant="outline"
                className="rounded-full"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="grid md:grid-cols-2">
                <div className="bg-gradient-to-br from-primary/20 to-secondary/20 p-12 flex items-center justify-center">
                  <div className="text-6xl">📱</div>
                </div>
                <CardContent className="p-8 flex flex-col justify-center">
                  <Badge className="w-fit mb-3">Featured</Badge>
                  <h2 className="text-2xl md:text-3xl mb-3">{articles[0].title}</h2>
                  <p className="text-muted-foreground mb-4">{articles[0].excerpt}</p>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-1">
                      <User className="h-4 w-4" />
                      <span>{articles[0].author}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span>{articles[0].date}</span>
                    </div>
                    <span>{articles[0].readTime}</span>
                  </div>
                  <Button>
                    Read More <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4">Latest Articles</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.slice(1).map((article, index) => (
              <motion.div
                key={article.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer group">
                  <CardContent className="p-6">
                    <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg p-8 mb-4 flex items-center justify-center">
                      <span className="text-4xl">
                        {article.category === 'Programming' && '💻'}
                        {article.category === 'Cybersecurity' && '🔒'}
                        {article.category === 'Robotics' && '🤖'}
                        {article.category === 'Technology' && '⚡'}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 mb-3">
                      <Badge variant="secondary">
                        <Tag className="h-3 w-3 mr-1" />
                        {article.category}
                      </Badge>
                    </div>
                    <h3 className="text-lg mb-2 group-hover:text-primary transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4">{article.excerpt}</p>
                    <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
                      <div className="flex items-center gap-1">
                        <User className="h-3 w-3" />
                        <span>{article.author}</span>
                      </div>
                      <span>{article.readTime}</span>
                    </div>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Calendar className="h-3 w-3" />
                      <span>{article.date}</span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl mx-auto"
          >
            <Card className="bg-gradient-to-br from-primary/10 to-secondary/10 border-none">
              <CardContent className="p-8 text-center">
                <div className="text-4xl mb-4">📬</div>
                <h2 className="text-2xl md:text-3xl mb-3">Subscribe to Our Newsletter</h2>
                <p className="text-muted-foreground mb-6">
                  Get the latest articles and updates delivered to your inbox
                </p>
                <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-2 rounded-md border border-border bg-background"
                  />
                  <Button>Subscribe</Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
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
            <h2 className="text-3xl md:text-4xl mb-4">Want to Contribute?</h2>
            <p className="text-lg mb-6 opacity-90">
              Share your knowledge and write for the ASTBA blog
            </p>
            <Button asChild size="lg" variant="secondary">
              <a href="/contact">Get in Touch</a>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
