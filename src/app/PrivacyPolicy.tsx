import { motion } from 'motion/react';
import { Shield } from 'lucide-react';

export default function PrivacyPolicy() {
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
            <Shield className="h-16 w-16 mx-auto mb-6 text-primary" />
            <h1 className="text-4xl md:text-5xl mb-6">Privacy Policy</h1>
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
                <h2 className="text-2xl mb-4">1. Introduction</h2>
                <p className="text-muted-foreground">
                  ASTBA (Association Science and Technology Ben Arous) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl mb-4">2. Information We Collect</h2>
                <p className="text-muted-foreground mb-3">
                  We collect information that you provide directly to us, including:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>Name, email address, and contact information</li>
                  <li>Account credentials and profile information</li>
                  <li>Course enrollment and progress data</li>
                  <li>Payment and billing information</li>
                  <li>Communications with our support team</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl mb-4">3. How We Use Your Information</h2>
                <p className="text-muted-foreground mb-3">
                  We use the information we collect to:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>Provide, maintain, and improve our services</li>
                  <li>Process your transactions and manage your membership</li>
                  <li>Send you course updates and educational content</li>
                  <li>Respond to your inquiries and provide customer support</li>
                  <li>Send you marketing communications (with your consent)</li>
                  <li>Monitor and analyze usage patterns to improve our services</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl mb-4">4. Information Sharing</h2>
                <p className="text-muted-foreground">
                  We do not sell, trade, or rent your personal information to third parties. We may share your information with:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2 mt-3">
                  <li>Service providers who assist in operating our services</li>
                  <li>Legal authorities when required by law</li>
                  <li>Other users (only the information you choose to make public)</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl mb-4">5. Data Security</h2>
                <p className="text-muted-foreground">
                  We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet is 100% secure.
                </p>
              </section>

              <section>
                <h2 className="text-2xl mb-4">6. Your Rights</h2>
                <p className="text-muted-foreground mb-3">
                  You have the right to:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>Access and receive a copy of your personal data</li>
                  <li>Correct inaccurate or incomplete information</li>
                  <li>Request deletion of your personal data</li>
                  <li>Opt-out of marketing communications</li>
                  <li>Withdraw your consent at any time</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl mb-4">7. Cookies</h2>
                <p className="text-muted-foreground">
                  We use cookies and similar tracking technologies to enhance your experience, analyze usage, and provide personalized content. You can control cookies through your browser settings.
                </p>
              </section>

              <section>
                <h2 className="text-2xl mb-4">8. Children's Privacy</h2>
                <p className="text-muted-foreground">
                  Our services are not directed to children under 13. If we become aware that we have collected personal information from a child under 13, we will take steps to delete such information.
                </p>
              </section>

              <section>
                <h2 className="text-2xl mb-4">9. Changes to This Policy</h2>
                <p className="text-muted-foreground">
                  We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
                </p>
              </section>

              <section>
                <h2 className="text-2xl mb-4">10. Contact Us</h2>
                <p className="text-muted-foreground">
                  If you have any questions about this Privacy Policy, please contact us at:
                </p>
                <div className="mt-3 text-muted-foreground">
                  <p>Email: privacy@astba.tn</p>
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
