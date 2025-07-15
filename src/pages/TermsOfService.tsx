import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

const TermsOfService = () => {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <Card className="bg-white dark:bg-gray-800 shadow-lg">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-center mb-4">Terms of Service</CardTitle>
          <p className="text-gray-600 dark:text-gray-300 text-center">
            Effective Date: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </CardHeader>
        <CardContent className="space-y-6 text-gray-700 dark:text-gray-300">
          <section>
            <h2 className="text-xl font-semibold mb-2">1. Acceptance of Terms</h2>
            <p className="mb-4">
              By accessing or using the Veradia website and services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">2. Description of Service</h2>
            <p className="mb-4">
              Veradia provides a platform for [brief description of your services]. We reserve the right to modify or discontinue our services at any time without notice.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">3. User Accounts</h2>
            <p className="mb-2">When you create an account with us, you must provide accurate and complete information. You are responsible for:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Maintaining the confidentiality of your account credentials</li>
              <li>All activities that occur under your account</li>
              <li>Immediately notifying us of any unauthorized use of your account</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">4. User Conduct</h2>
            <p className="mb-2">You agree not to use our services to:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Violate any laws or regulations</li>
              <li>Infringe on intellectual property rights</li>
              <li>Transmit harmful or malicious code</li>
              <li>Interfere with the security of our services</li>
              <li>Harass or harm other users</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">5. Intellectual Property</h2>
            <p className="mb-4">
              All content included on our website, such as text, graphics, logos, and software, is the property of Veradia or its content suppliers and protected by copyright and other intellectual property laws.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">6. Limitation of Liability</h2>
            <p className="mb-4">
              In no event shall Veradia, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages resulting from your access to or use of our services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">7. Changes to Terms</h2>
            <p className="mb-4">
              We reserve the right to modify these terms at any time. We will provide notice of any changes by updating the "Effective Date" at the top of this page. Your continued use of our services after any changes constitutes acceptance of those changes.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">8. Contact Us</h2>
            <p>
              If you have any questions about these Terms of Service, please contact us at:
              <br />
              Email: <a href="mailto:legal@veradia.org" className="text-blue-600 dark:text-blue-400 hover:underline">legal@veradia.org</a>
            </p>
          </section>

          <div className="mt-8 pt-4 border-t border-gray-200 dark:border-gray-700">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              These Terms of Service were last updated on {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}.
            </p>
          </div>
        </CardContent>
      </Card>
      
      <div className="mt-8 text-center">
        <Link to="/" className="text-blue-600 dark:text-blue-400 hover:underline">
          ← Back to Home
        </Link>
      </div>
    </div>
  );
};

export default TermsOfService;
