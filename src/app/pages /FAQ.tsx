import { motion } from 'motion/react';
import { HelpCircle, Plus } from 'lucide-react';
import { Card, CardContent } from '../components/ui/card';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../components/ui/accordion';

export default function FAQ() {
  const faqs = [
    {
      category: 'General',
      questions: [
        {
          question: 'What is ASTBA?',
          answer: 'ASTBA (Association Science and Technology Ben Arous) is a non-profit educational association dedicated to promoting science and technology education among youth in Ben Arous, Tunisia. We offer courses, workshops, and programs in programming, robotics, cybersecurity, and more.',
        },
        {
          question: 'Who can join ASTBA?',
          answer: 'ASTBA is open to everyone! We welcome students, professionals, and anyone interested in learning about technology and science. Our programs cater to different age groups and skill levels, from complete beginners to advanced learners.',
        },
        {
          question: 'Where is ASTBA located?',
          answer: 'We are located in Ben Arous, Tunisia. Our main center provides modern facilities including computer labs, robotics workshops, and learning spaces.',
        },
      ],
    },
    {
      category: 'Courses & Programs',
      questions: [
        {
          question: 'What courses do you offer?',
          answer: 'We offer courses in Programming (Python, JavaScript, Web Development), Robotics, Cybersecurity, Mathematics, Physics, and Languages. Each course is designed by industry experts and tailored to different skill levels.',
        },
        {
          question: 'How long are the courses?',
          answer: 'Course duration varies depending on the subject and level. Most courses range from 8 to 20 weeks, with 2-3 sessions per week. Intensive bootcamps and workshops may be shorter.',
        },
        {
          question: 'Do I need prior experience?',
          answer: 'No! We offer courses for all levels. Our beginner courses require no prior experience. If you\'re more advanced, we have intermediate and advanced programs to challenge you.',
        },
        {
          question: 'Will I receive a certificate?',
          answer: 'Yes! Upon successful completion of a course, you will receive a certificate of completion from ASTBA. Premium and Professional members also receive industry-recognized certifications.',
        },
      ],
    },
    {
      category: 'Membership',
      questions: [
        {
          question: 'What are the membership plans?',
          answer: 'We offer three membership plans: Student (50 TND/month), Premium (100 TND/month), and Professional (150 TND/month). Each plan offers different levels of access to courses, workshops, and mentorship.',
        },
        {
          question: 'Can I try before I commit?',
          answer: 'Yes! We offer trial sessions for some of our courses. Contact us to schedule a trial session and experience our teaching methods firsthand.',
        },
        {
          question: 'Can I upgrade my membership?',
          answer: 'Absolutely! You can upgrade your membership at any time. The upgrade will take effect immediately, and you\'ll be charged the prorated difference.',
        },
        {
          question: 'Is there a refund policy?',
          answer: 'We offer a 7-day money-back guarantee for new members. If you\'re not satisfied within the first week, we\'ll provide a full refund.',
        },
      ],
    },
    {
      category: 'Events & Workshops',
      questions: [
        {
          question: 'How can I participate in events?',
          answer: 'Check our Events page for upcoming hackathons, competitions, and workshops. Registration is usually done through our website or by contacting us directly.',
        },
        {
          question: 'Are events free for members?',
          answer: 'Most events are free or discounted for members. Some special events may have a separate registration fee.',
        },
        {
          question: 'Can I organize an event at ASTBA?',
          answer: 'Yes! We welcome collaboration. If you have an idea for a tech event or workshop, please contact us to discuss the details.',
        },
      ],
    },
    {
      category: 'Technical',
      questions: [
        {
          question: 'What equipment do I need?',
          answer: 'For most courses, you\'ll need a laptop with internet access. For robotics courses, we provide all necessary kits and equipment during lab sessions.',
        },
        {
          question: 'Are courses online or in-person?',
          answer: 'We offer both online and in-person courses. Some programs are hybrid, combining online learning with hands-on lab sessions.',
        },
        {
          question: 'What programming languages do you teach?',
          answer: 'We teach Python, JavaScript, Java, C++, and more. The language depends on the course. Our web development courses cover HTML, CSS, and modern frameworks like React.',
        },
      ],
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
            <HelpCircle className="h-16 w-16 mx-auto mb-6 text-primary" />
            <h1 className="text-4xl md:text-5xl mb-6">Frequently Asked Questions</h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Find answers to common questions about ASTBA, our courses, and membership
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          {faqs.map((category, index) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="mb-12"
            >
              <h2 className="text-2xl md:text-3xl mb-6 flex items-center gap-2">
                <span className="text-primary">#</span>
                {category.category}
              </h2>
              <Accordion type="single" collapsible className="space-y-4">
                {category.questions.map((faq, faqIndex) => (
                  <AccordionItem 
                    key={faqIndex} 
                    value={`item-${index}-${faqIndex}`}
                    className="border border-border rounded-lg px-6 data-[state=open]:bg-muted/50"
                  >
                    <AccordionTrigger className="hover:no-underline">
                      <span className="text-left pr-4">{faq.question}</span>
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="py-20 bg-muted">
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
                <div className="text-4xl mb-4">💬</div>
                <h2 className="text-2xl md:text-3xl mb-3">Still Have Questions?</h2>
                <p className="text-muted-foreground mb-6">
                  Can't find the answer you're looking for? Our team is here to help!
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <a 
                    href="/contact"
                    className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
                  >
                    Contact Us
                  </a>
                  <a 
                    href="mailto:contact@astba.tn"
                    className="inline-flex items-center justify-center px-6 py-3 border border-border rounded-md hover:bg-accent transition-colors"
                  >
                    Email Support
                  </a>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
