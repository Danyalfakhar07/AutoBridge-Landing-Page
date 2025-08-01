import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { submitWishlistEmail, submitContactForm } from "../../shared/api";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Zap,
  Brain,
  Globe,
  Database,
  Workflow,
  Sparkles,
  CheckCircle,
  Mail,
  MessageCircle,
  FileText,
  Calendar,
  CreditCard,
  Trello,
  Clock,
  Target,
  Shield,
  X,
  Bell,
  Rocket,
} from "lucide-react";

export default function Index() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showWishlistModal, setShowWishlistModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  
  // Contact form state
  const [contactName, setContactName] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [contactMessage, setContactMessage] = useState("");
  const [isContactSubmitted, setIsContactSubmitted] = useState(false);
  const [isContactLoading, setIsContactLoading] = useState(false);

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (email && !isLoading) {
      setIsLoading(true);
      try {
        const result = await submitWishlistEmail(email, 'form');
        setIsSubmitted(true);
        setToastMessage(result.isNew ? "🎉 Thanks! You're on the waitlist!" : "📧 You're already on our list!");
        setTimeout(() => {
          setIsSubmitted(false);
          setToastMessage("");
        }, 3000);
        setEmail("");
      } catch (error) {
        setToastMessage("❌ Something went wrong. Please try again.");
        setTimeout(() => setToastMessage(""), 3000);
      } finally {
        setIsLoading(false);
      }
    }
  };

  const handleWishlistSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (email && !isLoading) {
      setIsLoading(true);
      try {
        const result = await submitWishlistEmail(email, 'popup');
        setIsSubmitted(true);
        setTimeout(() => {
          setIsSubmitted(false);
          setShowWishlistModal(false);
        }, 2000);
        setEmail("");
      } catch (error) {
        console.error('Error submitting wishlist:', error);
      } finally {
        setIsLoading(false);
      }
    }
  };

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (contactName && contactEmail && contactMessage && !isContactLoading) {
      setIsContactLoading(true);
      try {
        await submitContactForm(contactName, contactEmail, contactMessage);
        setIsContactSubmitted(true);
        setToastMessage("✅ Message sent successfully! We'll get back to you soon.");
        setTimeout(() => {
          setIsContactSubmitted(false);
          setToastMessage("");
        }, 3000);
        setContactName("");
        setContactEmail("");
        setContactMessage("");
      } catch (error) {
        setToastMessage("❌ Failed to send message. Please try again.");
        setTimeout(() => setToastMessage(""), 3000);
      } finally {
        setIsContactLoading(false);
      }
    }
  };

  return (
    <div className="min-h-screen bg-white text-foreground">
      {/* Toast Message */}
      {toastMessage && (
        <div className="fixed top-4 right-4 z-50 bg-white border border-gray-200 rounded-lg shadow-lg px-6 py-4 max-w-sm">
          <p className="text-sm text-gray-800">{toastMessage}</p>
        </div>
      )}

      {/* Wishlist Modal */}
      {showWishlistModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="relative w-full max-w-md">
            {/* Modal Card */}
            <Card className="bg-white/95 backdrop-blur-xl border-0 shadow-2xl rounded-3xl overflow-hidden relative">
              {/* Glowing border effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-autobridge-blue via-autobridge-green to-autobridge-blue rounded-3xl opacity-20 blur-sm"></div>
              <div className="relative bg-white rounded-3xl">
                <CardContent className="p-8">
                  {/* Dismiss Button */}
                  <button
                    onClick={() => setShowWishlistModal(false)}
                    className="absolute top-4 right-4 w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-all duration-200 group"
                  >
                    <X className="w-4 h-4 text-gray-600 group-hover:text-gray-800" />
                  </button>

                  {/* Header */}
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-autobridge-blue to-autobridge-green rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                      <Rocket className="w-8 h-8 text-white" />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">
                      🚀 Be the First to Try AutoBridge
                    </h2>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      We're building the future of automation. Join the wishlist and get early access to our AI-powered platform that connects your favorite tools like Gmail, Slack, Notion, and more into custom workflows.
                    </p>
                  </div>

                  {/* Integration Icons */}
                  <div className="flex justify-center gap-3 mb-6">
                    {[
                      { name: "Gmail", src: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/gmail.svg", filter: "invert(14%) sepia(93%) saturate(7434%) hue-rotate(3deg) brightness(97%) contrast(99%)" },
                      { name: "Slack", src: "https://cdn.builder.io/api/v1/image/assets%2F804363ffbfb6459f87ae8cf9a76cb232%2F7d28cf2e5ec24f19a8a80563d468c2dd?format=webp&width=800" },
                      { name: "Notion", src: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/notion.svg", filter: "invert(0%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(0%) contrast(100%)" },
                      { name: "Zapier", src: "https://cdn.builder.io/api/v1/image/assets%2F804363ffbfb6459f87ae8cf9a76cb232%2Fda8fc00737ed472ea48b9f0870f8450b?format=webp&width=800" },
                    ].map((icon, index) => (
                      <div key={index} className="w-8 h-8 bg-gray-50 rounded-lg flex items-center justify-center">
                        <img
                          src={icon.src}
                          alt={icon.name}
                          className="w-5 h-5"
                          style={icon.filter ? { filter: icon.filter } : {}}
                        />
                      </div>
                    ))}
                  </div>

                  {/* Email Form */}
                  <form onSubmit={handleWishlistSubmit} className="space-y-4">
                    <div className="relative">
                      <Input
                        type="email"
                        placeholder="Enter your email..."
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full h-12 bg-gray-50 border-gray-200 focus:border-autobridge-blue focus:ring-2 focus:ring-autobridge-blue/20 transition-all duration-300 rounded-xl text-base"
                        required
                        disabled={isLoading}
                      />
                    </div>
                    
                    <Button
                      type="submit"
                      disabled={isLoading}
                      className="w-full h-12 bg-gradient-to-r from-autobridge-blue to-autobridge-green hover:shadow-lg hover:shadow-autobridge-green/25 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitted ? (
                        <>
                          <CheckCircle className="w-5 h-5 mr-2" />
                          Thanks! You're on the list! 🎉
                        </>
                      ) : (
                        <>
                          {isLoading ? "Saving..." : "Join Wishlist"}
                          {!isLoading && <ArrowRight className="w-5 h-5 ml-2" />}
                        </>
                      )}
                    </Button>
                  </form>

                  {/* Footer */}
                  <p className="text-center text-sm text-gray-500 mt-4">
                    You'll be the first to know when we launch
                  </p>
                </CardContent>
              </div>
            </Card>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 bg-autobridge-subtle">
        {/* Floating Company Logos */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Gmail - Top left area */}
          <div className="absolute top-16 left-12 md:top-20 md:left-16 animate-float">
            <Card className="w-20 h-20 bg-white shadow-card border-border/50 rounded-2xl">
              <CardContent className="p-0 flex items-center justify-center h-full">
                <img
                  src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/gmail.svg"
                  alt="Gmail"
                  className="w-10 h-10"
                  style={{
                    filter:
                      "invert(14%) sepia(93%) saturate(7434%) hue-rotate(3deg) brightness(97%) contrast(99%)",
                  }}
                />
              </CardContent>
            </Card>
          </div>

          {/* Telegram - Top right area */}
          <div className="absolute top-24 right-16 md:top-28 md:right-20 animate-float-delayed">
            <Card className="w-20 h-20 bg-white shadow-card border-border/50 rounded-2xl">
              <CardContent className="p-0 flex items-center justify-center h-full">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F804363ffbfb6459f87ae8cf9a76cb232%2F86723ff6784e4405bc7ab94aa8446851?format=webp&width=800"
                  alt="Telegram"
                  className="w-12 h-12"
                />
              </CardContent>
            </Card>
          </div>

          {/* Notion - Left side middle */}
          <div className="absolute top-1/3 left-6 md:top-2/5 md:left-8 transform -translate-y-1/2 animate-float">
            <Card className="w-20 h-20 bg-white shadow-card border-border/50 rounded-2xl">
              <CardContent className="p-0 flex items-center justify-center h-full">
                <img
                  src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/notion.svg"
                  alt="Notion"
                  className="w-10 h-10"
                  style={{
                    filter:
                      "invert(0%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(0%) contrast(100%)",
                  }}
                />
              </CardContent>
            </Card>
          </div>

          {/* Discord - Right side middle */}
          <div className="absolute top-2/3 right-8 md:top-3/5 md:right-10 transform -translate-y-1/2 animate-float-delayed">
            <Card className="w-20 h-20 bg-white shadow-card border-border/50 rounded-2xl">
              <CardContent className="p-0 flex items-center justify-center h-full">
                <img
                  src="/discord_symbol.svg.png"
                  alt="Discord"
                  className="w-12 h-12"
                />
              </CardContent>
            </Card>
          </div>

          {/* Slack - Bottom left area */}
          <div className="absolute bottom-20 left-20 md:bottom-24 md:left-24 animate-float">
            <Card className="w-20 h-20 bg-white shadow-card border-border/50 rounded-2xl">
              <CardContent className="p-0 flex items-center justify-center h-full">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F804363ffbfb6459f87ae8cf9a76cb232%2F7d28cf2e5ec24f19a8a80563d468c2dd?format=webp&width=800"
                  alt="Slack"
                  className="w-12 h-12"
                />
              </CardContent>
            </Card>
          </div>

          {/* Stripe - Bottom right area */}
          <div className="absolute bottom-16 right-12 md:bottom-20 md:right-16 animate-float-delayed">
            <Card className="w-20 h-20 bg-white shadow-card border-border/50 rounded-2xl">
              <CardContent className="p-0 flex items-center justify-center h-full">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F804363ffbfb6459f87ae8cf9a76cb232%2F59c1fb99588b42ceb0a106d32782f7ed?format=webp&width=800"
                  alt="Stripe"
                  className="w-12 h-12"
                />
              </CardContent>
            </Card>
          </div>

          {/* Airtable - Center left area */}
          <div className="absolute top-1/2 left-16 md:top-1/2 md:left-20 transform -translate-y-1/2 animate-float">
            <Card className="w-20 h-20 bg-white shadow-card border-border/50 rounded-2xl">
              <CardContent className="p-0 flex items-center justify-center h-full">
                <img
                  src="/airtable_symbol.svg.png"
                  alt="Airtable"
                  className="w-12 h-12"
                />
              </CardContent>
            </Card>
          </div>

          {/* Zapier - Center right area */}
          <div className="absolute top-1/2 right-16 md:top-1/2 md:right-20 transform -translate-y-1/2 animate-float-delayed">
            <Card className="w-20 h-20 bg-white shadow-card border-border/50 rounded-2xl">
              <CardContent className="p-0 flex items-center justify-center h-full">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F804363ffbfb6459f87ae8cf9a76cb232%2Fda8fc00737ed472ea48b9f0870f8450b?format=webp&width=800"
                  alt="Zapier"
                  className="w-12 h-12"
                />
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="relative z-10 text-center max-w-5xl mx-auto">
          {/* Logo */}
          <div className="mb-8 flex justify-center">
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2F804363ffbfb6459f87ae8cf9a76cb232%2F79e2a77dc9d84c9484e40b75d3829895?format=webp&width=800"
              alt="AutoBridge Logo"
              className="h-16 w-auto"
            />
          </div>

          {/* Badge */}
          <Badge className="mb-8 bg-autobridge-blue/10 text-autobridge-blue border-autobridge-blue/20 hover:bg-autobridge-blue/20 transition-all duration-300 px-4 py-2">
            <Sparkles className="w-4 h-4 mr-2" />
            MVP Launching Soon
          </Badge>

          {/* Headlines */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="bg-autobridge-gradient bg-clip-text text-transparent">
              Connect Everything
            </span>
            <br />
            <span className="text-foreground">Automate Anything</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            AutoBridge lets you connect tools like Gmail, Slack, Notion, and
            more into powerful backend workflows, without writing a single line
            of code.
          </p>

          {/* CTA Button */}
          <Button
            size="lg"
            onClick={() => setShowWishlistModal(true)}
            className="bg-autobridge-gradient hover:shadow-autobridge-green-glow text-white font-semibold text-lg px-8 py-6 transition-all duration-300 transform hover:scale-105"
          >
            Join the Wishlist
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-24 px-4 bg-gradient-to-b from-white to-gray-50/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-32">
            <Badge className="mb-6 bg-autobridge-blue/10 text-autobridge-blue border-autobridge-blue/20 px-4 py-2">
              <Zap className="w-4 h-4 mr-2" />
              Simple 3-Step Process
            </Badge>
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              How{" "}
              <span className="bg-autobridge-gradient bg-clip-text text-transparent">
                AutoBridge
              </span>{" "}
              Works
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Transform your workflow in three simple steps with AI-powered automation
            </p>
          </div>

          {/* Process Flow */}
          <div className="relative">
            {/* Connection Line */}
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-autobridge-blue via-autobridge-green to-autobridge-blue transform -translate-y-1/2 z-0"></div>
            
            <div className="grid md:grid-cols-3 gap-8 md:gap-12 relative z-10">
              {[
                {
                  icon: <Database className="w-8 h-8" />,
                  title: "Collect",
                  description:
                    "Connect your favorite tools and capture data through forms, triggers, or API integrations.",
                  step: "01",
                  color: "autobridge-blue",
                  gradient: "from-autobridge-blue to-blue-600",
                  features: ["Form Submissions", "API Triggers", "Real-time Events"]
                },
                {
                  icon: <Brain className="w-8 h-8" />,
                  title: "Generate",
                  description:
                    "Our AI intelligently processes your data and creates powerful, customized automation workflows.",
                  step: "02",
                  color: "autobridge-green",
                  gradient: "from-autobridge-green to-green-600",
                  features: ["Smart Processing", "Custom Workflows", "AI Optimization"]
                },
                {
                  icon: <Workflow className="w-8 h-8" />,
                  title: "Deploy",
                  description:
                    "Launch your automation instantly with full control and monitoring capabilities.",
                  step: "03",
                  color: "autobridge-blue",
                  gradient: "from-autobridge-blue to-purple-600",
                  features: ["Instant Launch", "Full Control", "Real-time Monitoring"]
                },
              ].map((item, index) => (
                <div key={index} className="relative group">
                  {/* Step Number Badge */}
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
                    <div className={`w-12 h-12 bg-gradient-to-r ${item.gradient} rounded-full flex items-center justify-center shadow-lg border-4 border-white`}>
                      <span className="text-white font-bold text-lg">{item.step}</span>
                    </div>
                  </div>

                  {/* Main Card */}
                  <Card className="border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-white/80 backdrop-blur-sm group-hover:bg-white">
                    <CardContent className="p-8 text-center">
                      {/* Icon Container */}
                      <div className={`w-16 h-16 bg-gradient-to-r ${item.gradient} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-all duration-300`}>
                        <div className="text-white">
                          {item.icon}
                        </div>
                      </div>

                      {/* Title */}
                      <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-autobridge-blue transition-colors duration-300">
                        {item.title}
                      </h3>

                      {/* Description */}
                      <p className="text-muted-foreground leading-relaxed mb-6">
                        {item.description}
                      </p>

                      {/* Features List */}
                      <div className="space-y-2">
                        {item.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center justify-center text-sm text-muted-foreground">
                            <CheckCircle className="w-4 h-4 mr-2 text-autobridge-green" />
                            {feature}
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>

            {/* Bottom CTA */}
            <div className="text-center mt-16">
              <Button
                size="lg"
                onClick={() => setShowWishlistModal(true)}
                className="bg-autobridge-gradient hover:shadow-autobridge-green-glow text-white font-semibold text-lg px-8 py-6 transition-all duration-300 transform hover:scale-105"
              >
                Start Building Today
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why AutoBridge Section */}
      <section className="py-24 px-4 bg-gradient-to-br from-gray-50 via-white to-autobridge-subtle">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-32 items-center">
            {/* Left Side - Content */}
            <div className="space-y-8">
              <div>
                <Badge className="mb-6 bg-autobridge-blue/10 text-autobridge-blue border-autobridge-blue/20 px-4 py-2">
                  <Rocket className="w-4 h-4 mr-2" />
                  Why Choose AutoBridge
                </Badge>
                <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                  Why{" "}
                  <span className="bg-autobridge-gradient bg-clip-text text-transparent">
                    Build
                  </span>{" "}
                  with AutoBridge?
                </h2>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  The most powerful agent building platform for modern businesses, designed to transform how you work.
                </p>
              </div>

              {/* Benefits List */}
              <div className="space-y-6">
                {[
                  {
                    icon: <Clock className="w-5 h-5" />,
                    title: "Save Hours Every Week",
                    description: "Eliminate repetitive tasks and focus on strategic work that drives real business value.",
                    stat: "10+ hours saved weekly"
                  },
                  {
                    icon: <Brain className="w-5 h-5" />,
                    title: "AI-Powered Intelligence",
                    description: "Advanced machine learning algorithms that understand context and make smart decisions.",
                    stat: "95% accuracy rate"
                  },
                  {
                    icon: <Target className="w-5 h-5" />,
                    title: "100+ Integrations",
                    description: "Connect with all your favorite tools and services in one unified, powerful platform.",
                    stat: "150+ tools supported"
                  }
                ].map((item, index) => (
                  <div key={index} className="group">
                    <div className="flex items-start space-x-3 p-4 rounded-xl hover:bg-white/60 transition-all duration-300 group-hover:shadow-lg">
                      <div className="flex-shrink-0">
                        <div className="w-10 h-10 bg-gradient-to-r from-autobridge-blue to-autobridge-green rounded-lg flex items-center justify-center group-hover:scale-110 transition-all duration-300">
                          <div className="text-white">
                            {item.icon}
                          </div>
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="text-lg font-semibold text-gray-900 group-hover:text-autobridge-blue transition-colors duration-300">
                            {item.title}
                          </h3>
                          <span className="text-xs font-medium text-autobridge-green bg-autobridge-green/10 px-2 py-1 rounded-full">
                            {item.stat}
                          </span>
                        </div>
                        <p className="text-muted-foreground leading-relaxed text-sm">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

            </div>

                         {/* Right Side - Animated Visual */}
             <div className="relative flex items-center justify-center">
               {/* Floating Platform Mockup */}
               <div className="relative scale-110">
                 {/* Main Platform Card */}
                 <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-2xl rounded-3xl p-8 relative z-10">
                   <div className="space-y-6">
                     {/* Header */}
                     <div className="flex items-center justify-between">
                       <div className="flex items-center space-x-3">
                         <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                         <div className="w-3 h-3 bg-yellow-500 rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
                         <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
                       </div>
                       <div className="text-sm text-muted-foreground">AutoBridge Platform</div>
                     </div>

                     {/* Navigation Tabs */}
                     <div className="flex space-x-2">
                       {['Dashboard', 'Workflows', 'Integrations', 'Analytics'].map((tab, index) => (
                         <div key={tab} className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                           index === 0 ? 'bg-autobridge-blue/10 text-autobridge-blue' : 'text-muted-foreground hover:text-gray-900'
                         }`}>
                           {tab}
                         </div>
                       ))}
                     </div>

                     {/* Content Area */}
                     <div className="space-y-5">
                       {/* Stats Row */}
                       <div className="grid grid-cols-3 gap-4">
                         {[
                           { label: 'Active Workflows', value: '24', color: 'autobridge-blue' },
                           { label: 'Integrations', value: '12', color: 'autobridge-green' },
                           { label: 'Time Saved', value: '8.5h', color: 'purple-600' }
                         ].map((stat, index) => (
                           <div key={index} className="bg-gray-50 rounded-xl p-4 text-center">
                             <div className={`text-2xl font-bold text-${stat.color} mb-1`}>{stat.value}</div>
                             <div className="text-xs text-muted-foreground">{stat.label}</div>
                           </div>
                         ))}
                       </div>

                       {/* Recent Activity */}
                       <div className="space-y-3">
                         <h4 className="text-sm font-semibold text-gray-900">Recent Activity</h4>
                         {[
                           { action: 'Gmail trigger activated', time: '2 min ago', status: 'success' },
                           { action: 'Slack notification sent', time: '5 min ago', status: 'success' },
                           { action: 'Notion page updated', time: '8 min ago', status: 'processing' }
                         ].map((activity, index) => (
                           <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                             <div className="flex items-center space-x-3">
                               <div className={`w-2 h-2 rounded-full ${
                                 activity.status === 'success' ? 'bg-green-500' : 'bg-yellow-500 animate-pulse'
                               }`}></div>
                               <span className="text-sm text-gray-700">{activity.action}</span>
                             </div>
                             <span className="text-xs text-muted-foreground">{activity.time}</span>
                           </div>
                         ))}
                       </div>
                     </div>
                   </div>
                 </Card>

                 {/* Floating Elements */}
                 <div className="absolute -top-6 -right-6 animate-bounce" style={{animationDelay: '0.5s'}}>
                   <div className="w-20 h-20 bg-gradient-to-r from-autobridge-green to-green-500 rounded-2xl flex items-center justify-center shadow-lg">
                     <CheckCircle className="w-10 h-10 text-white" />
                   </div>
                 </div>

                 <div className="absolute -bottom-6 -left-6 animate-bounce" style={{animationDelay: '1s'}}>
                   <div className="w-16 h-16 bg-gradient-to-r from-autobridge-blue to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                     <Zap className="w-8 h-8 text-white" />
                   </div>
                 </div>

                 <div className="absolute top-1/2 -right-8 animate-pulse">
                   <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center shadow-lg">
                     <Brain className="w-5 h-5 text-white" />
                   </div>
                 </div>
               </div>
             </div>
          </div>

          {/* Centered CTA Button */}
          <div className="text-center mt-16">
            <Button
              size="lg"
              onClick={() => setShowWishlistModal(true)}
              className="bg-autobridge-gradient hover:shadow-autobridge-green-glow text-white font-semibold text-lg px-8 py-6 transition-all duration-300 transform hover:scale-105"
            >
              Start Building Today
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* We're Building Section */}
      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            We're{" "}
            <span className="bg-autobridge-gradient bg-clip-text text-transparent">
              building
            </span>{" "}
            something big.
          </h2>
          <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
            AutoBridge is still under construction — but we're opening our doors
            to early believers. Want to be the first to experience the future of
            AI automation?
          </p>

          {/* Interface Preview */}
          <div className="mb-12">
            <Card className="bg-gray-50 border-0 shadow-card rounded-3xl p-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                {[
                  {
                    name: "Agent Builder",
                    icon: <Brain className="w-6 h-6" />,
                  },
                  { name: "Workflows", icon: <Workflow className="w-6 h-6" /> },
                  { name: "Integrations", icon: <Globe className="w-6 h-6" /> },
                  { name: "Analytics", icon: <Zap className="w-6 h-6" /> },
                ].map((item) => (
                  <Card
                    key={item.name}
                    className="bg-white border border-gray-200 rounded-2xl p-6 h-24 flex flex-col items-center justify-center shadow-sm hover:shadow-card transition-all duration-300"
                  >
                    <div className="text-autobridge-blue mb-2">{item.icon}</div>
                    <span className="text-sm font-medium text-muted-foreground">
                      {item.name}
                    </span>
                  </Card>
                ))}
              </div>
              <p className="text-sm text-muted-foreground">
                Preview of AutoBridge platform interface
              </p>
            </Card>
          </div>

          <Button
            size="lg"
            onClick={() => setShowWishlistModal(true)}
            className="bg-autobridge-gradient hover:shadow-autobridge-green-glow text-white font-semibold text-lg px-8 py-6 transition-all duration-300 transform hover:scale-105"
          >
            Join the Wishlist
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </section>

      {/* Email Collection Section */}
      <section className="py-24 px-4 bg-autobridge-subtle">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Be the{" "}
            <span className="bg-autobridge-gradient bg-clip-text text-transparent">
              First
            </span>{" "}
            to Know
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join our waitlist and get early access when we launch. No spam, just
            updates.
          </p>

          <Card className="bg-white border-0 shadow-card rounded-3xl p-8">
            <form
              onSubmit={handleEmailSubmit}
              className="flex flex-col sm:flex-row gap-4 mb-4"
            >
              <Input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 bg-gray-50 border-gray-200 focus:border-autobridge-blue transition-all duration-300 h-12 text-base rounded-xl"
                required
                disabled={isLoading}
              />
              <Button
                type="submit"
                size="lg"
                disabled={isLoading}
                className="bg-autobridge-gradient hover:shadow-autobridge-green-glow text-white font-semibold h-12 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitted ? "Added!" : "Join Waitlist"}
              </Button>
            </form>

            <p className="text-sm text-muted-foreground">
              🔒 We respect your privacy. Unsubscribe at any time.
            </p>
          </Card>
        </div>
      </section>

      {/* Contact Us Section */}
      <section className="py-24 px-4 bg-gradient-to-br from-gray-50 via-white to-autobridge-subtle">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <Badge className="mb-6 bg-autobridge-blue/10 text-autobridge-blue border-autobridge-blue/20 px-4 py-2">
              <MessageCircle className="w-4 h-4 mr-2" />
              Get in Touch
            </Badge>
            <h2 className="text-xl md:text-6xl font-bold mb-6">
              Let's{" "}
              <span className="bg-autobridge-gradient bg-clip-text text-transparent">
                Connect
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Have questions about AutoBridge? Want to discuss potential partnerships? 
              We'd love to hear from you.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-32 items-start">
            {/* Contact Info - Left Aligned */}
            <div className="space-y-10 lg:text-left">
              <div>
                <h3 className="text-4xl md:text-5xl font-bold mb-8 text-gray-900 leading-tight">
                  Ready to Transform Your Workflow?
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-10 text-xl">
                  AutoBridge is revolutionizing how businesses automate their processes. 
                  Whether you're looking to integrate new tools or optimize existing workflows, 
                  we're here to help you succeed.
                </p>
              </div>

              <div className="space-y-8">
                <div className="flex items-start space-x-5">
                  <div className="w-14 h-14 bg-gradient-to-r from-autobridge-blue to-autobridge-green rounded-2xl flex items-center justify-center shadow-lg">
                    <Mail className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Email Us</h4>
                    <p className="text-muted-foreground text-lg">hello@autobridge.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-5">
                  <div className="w-14 h-14 bg-gradient-to-r from-autobridge-blue to-autobridge-green rounded-2xl flex items-center justify-center shadow-lg">
                    <Clock className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Response Time</h4>
                    <p className="text-muted-foreground text-lg">Within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start space-x-5">
                  <div className="w-14 h-14 bg-gradient-to-r from-autobridge-blue to-autobridge-green rounded-2xl flex items-center justify-center shadow-lg">
                    <Globe className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Global Support</h4>
                    <p className="text-muted-foreground text-lg">Available worldwide</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form - Right Aligned */}
            <div className="lg:flex lg:justify-end">
              <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-2xl rounded-3xl p-10 w-full lg:w-[600px]">
                              <form onSubmit={handleContactSubmit} className="space-y-8">
                  <div>
                    <label htmlFor="name" className="block text-lg font-semibold text-gray-700 mb-3">
                      Full Name *
                    </label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="Enter your full name"
                      value={contactName}
                      onChange={(e) => setContactName(e.target.value)}
                      className="w-full bg-gray-50 border-gray-200 focus:border-autobridge-blue focus:ring-2 focus:ring-autobridge-blue/20 transition-all duration-300 h-14 text-lg rounded-xl"
                      required
                      disabled={isContactLoading}
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-lg font-semibold text-gray-700 mb-3">
                      Email Address *
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter your email address"
                      value={contactEmail}
                      onChange={(e) => setContactEmail(e.target.value)}
                      className="w-full bg-gray-50 border-gray-200 focus:border-autobridge-blue focus:ring-2 focus:ring-autobridge-blue/20 transition-all duration-300 h-14 text-lg rounded-xl"
                      required
                      disabled={isContactLoading}
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-lg font-semibold text-gray-700 mb-3">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      placeholder="Tell us about your project or question..."
                      value={contactMessage}
                      onChange={(e) => setContactMessage(e.target.value)}
                      className="w-full bg-gray-50 border border-gray-200 focus:border-autobridge-blue focus:ring-2 focus:ring-autobridge-blue/20 transition-all duration-300 rounded-xl p-5 text-lg resize-none"
                      rows={6}
                      required
                      disabled={isContactLoading}
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isContactLoading}
                    className="w-full bg-autobridge-gradient hover:shadow-autobridge-green-glow text-white font-semibold h-14 text-lg rounded-xl transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isContactSubmitted ? (
                      <>
                        <CheckCircle className="w-6 h-6 mr-3" />
                        Message Sent! 🎉
                      </>
                    ) : (
                      <>
                        {isContactLoading ? "Sending..." : "Send Message"}
                        {!isContactLoading && <ArrowRight className="w-6 h-6 ml-3" />}
                      </>
                    )}
                  </Button>

                  <p className="text-base text-muted-foreground text-center">
                    🔒 Your information is secure and will only be used to respond to your inquiry.
                  </p>
                </form>
            </Card>
            </div>
          </div>
        </div>
      </section>

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
                to="/#contact"
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
