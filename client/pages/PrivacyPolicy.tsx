import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white text-foreground">
      {/* Header */}
      <header className="border-b border-border/50 bg-white">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-3">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F804363ffbfb6459f87ae8cf9a76cb232%2F79e2a77dc9d84c9484e40b75d3829895?format=webp&width=800"
                alt="AutoBridge Logo"
                className="h-8 w-auto"
              />
              <span className="text-xl font-bold text-gray-900">AutoBridge</span>
            </Link>
            <Link to="/">
              <Button variant="outline" className="flex items-center space-x-2">
                <ArrowLeft className="w-4 h-4" />
                <span>Back to Home</span>
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-4 py-16">
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Privacy Policy
          </h1>
          <p className="text-lg text-muted-foreground">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </div>

        <Card className="bg-white border-0 shadow-lg rounded-3xl">
          <CardContent className="p-8 md:p-12">
            <div className="prose prose-lg max-w-none">
              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">1. Information We Collect</h2>
                <p className="mb-4">
                  We collect information you provide directly to us, such as when you:
                </p>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li>Sign up for our waitlist or newsletter</li>
                  <li>Contact us through our contact form</li>
                  <li>Use our services or interact with our platform</li>
                  <li>Communicate with us via email or other channels</li>
                </ul>
                <p className="mb-4">
                  The types of information we may collect include:
                </p>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li><strong>Contact Information:</strong> Name, email address, and any other information you choose to provide</li>
                  <li><strong>Usage Information:</strong> How you interact with our website and services</li>
                  <li><strong>Technical Information:</strong> IP address, browser type, device information, and cookies</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">2. How We Use Your Information</h2>
                <p className="mb-4">
                  We use the information we collect to:
                </p>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li>Provide, maintain, and improve our services</li>
                  <li>Process and respond to your requests and inquiries</li>
                  <li>Send you updates, newsletters, and marketing communications (with your consent)</li>
                  <li>Analyze usage patterns and trends to enhance user experience</li>
                  <li>Protect against fraud and ensure security</li>
                  <li>Comply with legal obligations</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">3. Information Sharing and Disclosure</h2>
                <p className="mb-4">
                  We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except in the following circumstances:
                </p>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li><strong>Service Providers:</strong> We may share information with trusted third-party service providers who assist us in operating our website and services</li>
                  <li><strong>Legal Requirements:</strong> We may disclose information if required by law or to protect our rights and safety</li>
                  <li><strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of assets, your information may be transferred</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">4. Data Security</h2>
                <p className="mb-4">
                  We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet or electronic storage is 100% secure.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">5. Cookies and Tracking Technologies</h2>
                <p className="mb-4">
                  We use cookies and similar tracking technologies to enhance your experience on our website. You can control cookie settings through your browser preferences.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">6. Your Rights and Choices</h2>
                <p className="mb-4">
                  Depending on your location, you may have certain rights regarding your personal information:
                </p>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li><strong>Access:</strong> Request access to your personal information</li>
                  <li><strong>Correction:</strong> Request correction of inaccurate information</li>
                  <li><strong>Deletion:</strong> Request deletion of your personal information</li>
                  <li><strong>Portability:</strong> Request a copy of your data in a portable format</li>
                  <li><strong>Opt-out:</strong> Unsubscribe from marketing communications</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">7. Children's Privacy</h2>
                <p className="mb-4">
                  Our services are not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">8. International Data Transfers</h2>
                <p className="mb-4">
                  Your information may be transferred to and processed in countries other than your own. We ensure appropriate safeguards are in place to protect your information.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">9. Changes to This Policy</h2>
                <p className="mb-4">
                  We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new policy on this page and updating the "Last updated" date.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">10. Contact Us</h2>
                <p className="mb-4">
                  If you have any questions about this Privacy Policy or our data practices, please contact us at:
                </p>
                <div className="bg-gray-50 rounded-xl p-6">
                  <p className="font-semibold">AutoBridge</p>
                  <p>Email: privacy@autobridge.com</p>
                  <p>Address: [Your Business Address]</p>
                </div>
              </section>
            </div>
          </CardContent>
        </Card>
      </main>

      {/* Footer */}
      <footer className="py-16 px-4 border-t border-border/50 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center gap-4 mb-6 md:mb-0">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F804363ffbfb6459f87ae8cf9a76cb232%2F79e2a77dc9d84c9484e40b75d3829895?format=webp&width=800"
                alt="AutoBridge Logo"
                className="h-8 w-auto"
              />
              <span className="text-sm text-muted-foreground">
                © 2025 AutoBridge. All rights reserved.
              </span>
            </div>

            <div className="flex gap-6 text-sm">
              <Link
                to="/privacy-policy"
                className="text-muted-foreground hover:text-autobridge-blue transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms-of-service"
                className="text-muted-foreground hover:text-autobridge-blue transition-colors"
              >
                Terms of Service
              </Link>
              <Link
                to="/"
                className="text-muted-foreground hover:text-autobridge-blue transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
} 