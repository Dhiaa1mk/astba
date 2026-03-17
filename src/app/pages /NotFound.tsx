import { motion } from 'motion/react';
import { Home, Search } from 'lucide-react';
import { Link } from 'react-router';
import { Button } from '../components/ui/button';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/10 via-background to-secondary/10 flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center max-w-2xl"
      >
        <div className="text-8xl md:text-9xl mb-6">404</div>
        <h1 className="text-3xl md:text-4xl mb-4">Page Not Found</h1>
        <p className="text-lg text-muted-foreground mb-8">
          Oops! The page you're looking for doesn't exist. It might have been moved or deleted.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Button asChild size="lg">
            <Link to="/">
              <Home className="mr-2 h-5 w-5" />
              Go Home
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link to="/courses">
              <Search className="mr-2 h-5 w-5" />
              Browse Courses
            </Link>
          </Button>
        </div>
      </motion.div>
    </div>
  );
}
