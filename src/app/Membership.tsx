import { motion } from 'motion/react';
import { Check, Star, Sparkles, Crown } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader } from '../components/ui/card';
import { Badge } from '../components/ui/badge';

export default function Membership() {
  const plans = [
    {
      name: 'Student',
      price: '50 TND',
      period: '/month',
      icon: Star,
      description: 'Perfect for students getting started',
      features: [
        'Access to all basic courses',
        'Monthly workshops',
        'Community forum access',
        'Course materials',
        'Email support',
      ],
      popular: false,
    },
    {
      name: 'Premium',
      price: '100 TND',
      period: '/month',
      icon: Sparkles,
      description: 'For serious learners and enthusiasts',
      features: [
        'All Student features',
        'Access to advanced courses',
        'Hands-on projects',
        'Weekly mentorship sessions',
        'Certificate upon completion',
        'Priority support',
        'Access to robotics lab',
      ],
      popular: true,
    },
    {
      name: 'Professional',
      price: '150 TND',
      period: '/month',
      icon: Crown,
      description: 'Complete package for career advancement',
      features: [
        'All Premium features',
        'Industry certifications',
        'Advanced training programs',
        'One-on-one mentorship',
        'Job placement assistance',
        'Exclusive workshops',
        'Lifetime community access',
        '24/7 priority support',
      ],
      popular: false,
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
            <h1 className="text-4xl md:text-5xl mb-6">Membership Plans</h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Choose the perfect plan to start your learning journey with ASTBA
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={plan.popular ? 'md:-mt-4' : ''}
              >
                <Card className={`h-full relative ${plan.popular ? 'border-primary shadow-xl' : ''}`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                      <Badge className="bg-primary text-primary-foreground px-4 py-1">
                        Most Popular
                      </Badge>
                    </div>
                  )}
                  <CardHeader className="text-center pb-4">
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full mx-auto mb-4 ${
                      plan.popular ? 'bg-primary text-primary-foreground' : 'bg-muted'
                    }`}>
                      <plan.icon className="h-8 w-8" />
                    </div>
                    <h3 className="text-2xl mb-2">{plan.name}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center gap-1">
                      <span className="text-4xl">{plan.price}</span>
                      <span className="text-muted-foreground">{plan.period}</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 mb-6">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button 
                      className="w-full" 
                      variant={plan.popular ? 'default' : 'outline'}
                      size="lg"
                    >
                      Join {plan.name}
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4">Member Benefits</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              All members enjoy these exclusive benefits
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              { icon: '🎓', title: 'Expert Guidance', description: 'Learn from industry professionals' },
              { icon: '🏆', title: 'Certificates', description: 'Earn recognized certifications' },
              { icon: '🤝', title: 'Community', description: 'Join a network of learners' },
              { icon: '💼', title: 'Career Support', description: 'Get job placement assistance' },
              { icon: '🔬', title: 'Lab Access', description: 'Use state-of-the-art facilities' },
              { icon: '📚', title: 'Resources', description: 'Access learning materials' },
              { icon: '🎯', title: 'Projects', description: 'Build real-world projects' },
              { icon: '⚡', title: 'Support', description: '24/7 member support' },
            ].map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
              >
                <Card className="text-center h-full">
                  <CardContent className="p-6">
                    <div className="text-4xl mb-3">{benefit.icon}</div>
                    <h3 className="mb-2">{benefit.title}</h3>
                    <p className="text-sm text-muted-foreground">{benefit.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4">Frequently Asked Questions</h2>
          </div>
          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                question: 'Can I change my plan later?',
                answer: 'Yes, you can upgrade or downgrade your plan at any time. Changes will take effect in the next billing cycle.',
              },
              {
                question: 'Is there a student discount?',
                answer: 'Yes, all our plans are already student-friendly priced. Contact us for additional discounts for groups.',
              },
              {
                question: 'What payment methods do you accept?',
                answer: 'We accept credit cards, debit cards, and bank transfers. Contact us for other payment options.',
              },
              {
                question: 'Can I cancel my membership?',
                answer: 'Yes, you can cancel anytime. You\'ll continue to have access until the end of your billing period.',
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-lg mb-2">{faq.question}</h3>
                    <p className="text-muted-foreground">{faq.answer}</p>
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
            <h2 className="text-3xl md:text-4xl mb-4">Still Have Questions?</h2>
            <p className="text-lg mb-6 opacity-90">
              Our team is here to help you choose the right membership plan
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
