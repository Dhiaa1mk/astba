import { motion } from 'motion/react';
import { FileText } from 'lucide-react';

export default function TermsOfService() {
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
            <FileText className="h-16 w-16 mx-auto mb-6 text-primary" />
            <h1 className="text-4xl md:text-5xl mb-6">Terms of Service</h1>
            <p className="text-lg text-muted-foreground">
              Last updated: March 16, 2026
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="prose prose-slate dark:prose-invert max-w-none"
          >
            <div className="space-y-8">
              <section>
                <h2 className="text-2xl mb-4">1. Acceptance of Terms</h2>
                <p className="text-muted-foreground">
                  By accessing and using the services provided by ASTBA (Association Science and Technology Ben Arous), you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl mb-4">2. Description of Services</h2>
                <p className="text-muted-foreground">
                  ASTBA provides educational services including but not limited to courses, workshops, training programs, and events in the fields of science and technology. We reserve the right to modify, suspend, or discontinue any aspect of our services at any time.
                </p>
              </section>

              <section>
                <h2 className="text-2xl mb-4">3. Membership and Registration</h2>
                <p className="text-muted-foreground mb-3">
                  To access certain features of our services, you may be required to register for an account. You agree to:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>Provide accurate, current, and complete information</li>
                  <li>Maintain and update your information to keep it accurate</li>
                  <li>Maintain the security of your account credentials</li>
                  <li>Notify us immediately of any unauthorized use of your account</li>
                  <li>Be responsible for all activities that occur under your account</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl mb-4">4. Payment and Billing</h2>
                <p className="text-muted-foreground mb-3">
                  By purchasing a membership or enrolling in a paid course, you agree to:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>Pay all fees associated with your selected plan or course</li>
                  <li>Provide valid payment information</li>
                  <li>Authorize recurring charges for subscription-based services</li>
                  <li>Accept that all fees are non-refundable except as stated in our refund policy</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl mb-4">5. Refund Policy</h2>
                <p className="text-muted-foreground">
                  We offer a 7-day money-back guarantee for new members. Refund requests must be submitted within 7 days of initial purchase. Course fees may be refunded if requested at least 48 hours before the course start date.
                </p>
              </section>

              <section>
                <h2 className="text-2xl mb-4">6. User Conduct</h2>
                <p className="text-muted-foreground mb-3">
                  You agree not to:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>Violate any applicable laws or regulations</li>
                  <li>Share course materials or content without permission</li>
                  <li>Harass, intimidate, or harm other users or instructors</li>
                  <li>Use our services for any illegal or unauthorized purpose</li>
                  <li>Attempt to gain unauthorized access to our systems</li>
                  <li>Share your account credentials with others</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl mb-4">7. Intellectual Property</h2>
                <p className="text-muted-foreground">
                  All content, materials, and resources provided through ASTBA services are protected by copyright and other intellectual property laws. You may not reproduce, distribute, or create derivative works without our express written permission.
                </p>
              </section>

              <section>
                <h2 className="text-2xl mb-4">8. User-Generated Content</h2>
                <p className="text-muted-foreground">
                  By submitting content (such as projects, comments, or forum posts), you grant ASTBA a non-exclusive, worldwide, royalty-free license to use, reproduce, and display such content for educational purposes.
                </p>
              </section>

              <section>
                <h2 className="text-2xl mb-4">9. Disclaimers</h2>
                <p className="text-muted-foreground">
                  Our services are provided "as is" without warranties of any kind. While we strive for accuracy and quality, we do not guarantee that our services will be uninterrupted, error-free, or meet your specific requirements.
                </p>
              </section>

              <section>
                <h2 className="text-2xl mb-4">10. Limitation of Liability</h2>
                <p className="text-muted-foreground">
                  ASTBA shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of our services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl mb-4">11. Termination</h2>
                <p className="text-muted-foreground">
                  We reserve the right to terminate or suspend your account and access to our services at our discretion, without notice, for conduct that we believe violates these Terms of Service or is harmful to other users, us, or third parties.
                </p>
              </section>

              <section>
                <h2 className="text-2xl mb-4">12. Changes to Terms</h2>
                <p className="text-muted-foreground">
                  We may update these Terms of Service from time to time. Continued use of our services after changes indicates your acceptance of the updated terms.
                </p>
              </section>

              <section>
                <h2 className="text-2xl mb-4">13. Governing Law</h2>
                <p className="text-muted-foreground">
                  These Terms of Service shall be governed by and construed in accordance with the laws of Tunisia.
                </p>
              </section>

              <section>
                <h2 className="text-2xl mb-4">14. Contact Information</h2>
                <p className="text-muted-foreground">
                  If you have any questions about these Terms of Service, please contact us at:
                </p>
                <div className="mt-3 text-muted-foreground">
                  <p>Email: legal@astba.tn</p>
                  <p>Phone: +216 12 345 678</p>
                  <p>Address: ASTBA Center, Ben Arous, Tunisia</p>
                </div>
              </section>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
