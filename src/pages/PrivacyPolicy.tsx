import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

const PrivacyPolicy = () => {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <Card className="bg-white dark:bg-gray-800 shadow-lg">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-center mb-4">Privacy Policy</CardTitle>
          <p className="text-gray-600 dark:text-gray-300 text-center">
            Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </CardHeader>
        <CardContent className="space-y-6 text-gray-700 dark:text-gray-300">
          <section>
            <h2 className="text-xl font-semibold mb-2">1. Introduction</h2>
            <p className="mb-4">
              Welcome to Veradia. We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you about how we look after your personal data when you visit our website and tell you about your privacy rights.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">2. Information We Collect</h2>
            <p className="mb-2">We may collect, use, store, and transfer different kinds of personal data about you, including:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Identity Data (name, username, or similar identifier)</li>
              <li>Contact Data (email address, phone number)</li>
              <li>Technical Data (IP address, browser type, location, etc.)</li>
              <li>Usage Data (how you use our website and services)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">3. How We Use Your Data</h2>
            <p className="mb-4">
              We will only use your personal data when the law allows us to. Most commonly, we will use your personal data to:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Provide and maintain our services</li>
              <li>Notify you about changes to our services</li>
              <li>Allow you to participate in interactive features</li>
              <li>Provide customer support</li>
              <li>Gather analysis or valuable information</li>
              <li>Monitor the usage of our services</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">4. Data Security</h2>
            <p className="mb-4">
              We have implemented appropriate security measures to prevent your personal data from being accidentally lost, used, or accessed in an unauthorized way. We limit access to your personal data to those employees, agents, contractors, and other third parties who have a business need to know.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">5. Your Legal Rights</h2>
            <p className="mb-4">
              Under certain circumstances, you have rights under data protection laws in relation to your personal data, including the right to:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Request access to your personal data</li>
              <li>Request correction of your personal data</li>
              <li>Request erasure of your personal data</li>
              <li>Object to processing of your personal data</li>
              <li>Request restriction of processing your personal data</li>
              <li>Request transfer of your personal data</li>
              <li>Withdraw consent</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">6. Contact Us</h2>
            <p className="mb-4">
              If you have any questions about this Privacy Policy, please contact us at:
            </p>
            <p>
              Email: <a href="mailto:privacy@veradia.org" className="text-blue-600 dark:text-blue-400 hover:underline">privacy@veradia.org</a>
            </p>
          </section>

          <div className="mt-8 pt-4 border-t border-gray-200 dark:border-gray-700">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              This Privacy Policy was last updated on {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}.
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

export default PrivacyPolicy;
