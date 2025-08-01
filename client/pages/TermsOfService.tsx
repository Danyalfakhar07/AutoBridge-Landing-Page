import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

export default function TermsOfService() {
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
            Terms of Service
          </h1>
          <p className="text-lg text-muted-foreground">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </div>

        <Card className="bg-white border-0 shadow-lg rounded-3xl">
          <CardContent className="p-8 md:p-12">
            <div className="prose prose-lg max-w-none">
              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">1. Acceptance of Terms</h2>
                <p className="mb-4">
                  By accessing and using AutoBridge's website and services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">2. Description of Service</h2>
                <p className="mb-4">
                  AutoBridge provides AI-powered workflow automation services that allow users to connect various tools and create automated processes. Our services include:
                </p>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li>Workflow automation and integration services</li>
                  <li>AI-powered process optimization</li>
                  <li>Third-party tool integrations</li>
                  <li>Analytics and reporting features</li>
                  <li>Customer support and documentation</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">3. User Accounts and Registration</h2>
                <p className="mb-4">
                  To access certain features of our service, you may be required to create an account. You agree to:
                </p>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li>Provide accurate, current, and complete information during registration</li>
                  <li>Maintain and promptly update your account information</li>
                  <li>Maintain the security of your account credentials</li>
                  <li>Accept responsibility for all activities under your account</li>
                  <li>Notify us immediately of any unauthorized use of your account</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">4. Acceptable Use Policy</h2>
                <p className="mb-4">
                  You agree not to use our services to:
                </p>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li>Violate any applicable laws or regulations</li>
                  <li>Infringe upon the rights of others</li>
                  <li>Transmit harmful, offensive, or inappropriate content</li>
                  <li>Attempt to gain unauthorized access to our systems</li>
                  <li>Interfere with or disrupt our services</li>
                  <li>Use our services for any illegal or unauthorized purpose</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">5. Intellectual Property Rights</h2>
                <p className="mb-4">
                  The service and its original content, features, and functionality are and will remain the exclusive property of AutoBridge and its licensors. The service is protected by copyright, trademark, and other laws.
                </p>
                <p className="mb-4">
                  You retain ownership of any content you create using our services, but you grant us a license to use, store, and process your content to provide our services.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">6. Privacy and Data Protection</h2>
                <p className="mb-4">
                  Your privacy is important to us. Please review our Privacy Policy, which also governs your use of the service, to understand our practices regarding the collection and use of your personal information.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">7. Service Availability and Modifications</h2>
                <p className="mb-4">
                  We strive to provide reliable service but cannot guarantee uninterrupted access. We may:
                </p>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li>Modify or discontinue features at any time</li>
                  <li>Perform maintenance that may temporarily affect service availability</li>
                  <li>Update our services to improve functionality and security</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">8. Limitation of Liability</h2>
                <p className="mb-4">
                  To the maximum extent permitted by law, AutoBridge shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your use of the service.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">9. Disclaimer of Warranties</h2>
                <p className="mb-4">
                  The service is provided on an "AS IS" and "AS AVAILABLE" basis. AutoBridge makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties, including without limitation, implied warranties of merchantability or fitness for a particular purpose.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">10. Indemnification</h2>
                <p className="mb-4">
                  You agree to defend, indemnify, and hold harmless AutoBridge and its affiliates from and against any claims, damages, obligations, losses, liabilities, costs, or debt arising from your use of the service or violation of these terms.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">11. Termination</h2>
                <p className="mb-4">
                  We may terminate or suspend your account and access to our services immediately, without prior notice, for any reason, including breach of these Terms of Service.
                </p>
                <p className="mb-4">
                  Upon termination, your right to use the service will cease immediately, and we may delete your account and data.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">12. Governing Law</h2>
                <p className="mb-4">
                  These Terms shall be interpreted and governed by the laws of [Your Jurisdiction], without regard to its conflict of law provisions.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">13. Changes to Terms</h2>
                <p className="mb-4">
                  We reserve the right to modify these terms at any time. We will notify users of any material changes by posting the new terms on this page and updating the "Last updated" date.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">14. Contact Information</h2>
                <p className="mb-4">
                  If you have any questions about these Terms of Service, please contact us at:
                </p>
                <div className="bg-gray-50 rounded-xl p-6">
                  <p className="font-semibold">AutoBridge</p>
                  <p>Email: legal@autobridge.com</p>
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