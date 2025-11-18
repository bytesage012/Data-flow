import React, { useState, useEffect, useRef } from "react";
import {
  ArrowRight,
  Zap,
  BarChart3,
  Shield,
  Users,
  Check,
  Star,
  Play,
  Menu,
  X,
  Code,
  Database,
  Cloud,
  Lock,
  Globe,
  Workflow,
  Smartphone,
  Server,
  Eye,
  Download,
  FileText,
  BookOpen,
  HelpCircle,
  ShieldCheck,
  FileCode,
  BookMarked,
  Mail,
  Phone,
  MapPin,
  Search,
  MessageCircle,
  Github,
  Twitter,
  Linkedin,
  Calendar,
  User,
  Briefcase,
  FileQuestion,
  Users as UsersIcon,
  Wifi,
  WifiOff,
  HeartHandshake,
  Scale,
} from "lucide-react";

const ModernSaaSPage = () => {
  const [currentPage, setCurrentPage] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    password: "",
    message: "",
  });

  // Scroll to top whenever currentPage changes
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "auto", // You can use 'auto' for instant scroll
    });
  }, [currentPage]); // This effect runs every time currentPage changes

  // Close mobile menu when page changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [currentPage]);

  // Mock data for features
  const features = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Lightning Fast",
      description:
        "Process millions of data points in real-time with our optimized engine",
      stats: "99.9% Uptime",
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Advanced Analytics",
      description:
        "Deep insights with machine learning powered data visualization",
      stats: "50+ Metrics",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Enterprise Security",
      description:
        "Military-grade encryption and compliance with global standards",
      stats: "SOC2 Certified",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Team Collaboration",
      description: "Seamless workflow integration for distributed teams",
      stats: "Unlimited Members",
    },
  ];

  // Mock data for pricing
  const pricingPlans = [
    {
      name: "Starter",
      price: "$29",
      period: "/month",
      features: [
        "Up to 10,000 records",
        "Basic analytics",
        "Email support",
        "1 team member",
      ],
      popular: false,
    },
    {
      name: "Professional",
      price: "$79",
      period: "/month",
      features: [
        "Up to 100,000 records",
        "Advanced analytics",
        "Priority support",
        "10 team members",
        "API access",
      ],
      popular: true,
    },
    {
      name: "Enterprise",
      price: "$199",
      period: "/month",
      features: [
        "Unlimited records",
        "Custom analytics",
        "24/7 dedicated support",
        "Unlimited team members",
        "White-label solution",
      ],
      popular: false,
    },
  ];

  // Animation effect for hero section
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % features.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  // Navigation handler that sets page and ensures scroll to top
  const navigateToPage = (page) => {
    setCurrentPage(page);
    // The useEffect above will handle scrolling to top
  };

  // Render different pages based on currentPage state
  const renderPage = () => {
    switch (currentPage) {
      case "start-free-trial":
        return (
          <StartFreeTrialPage
            formData={formData}
            onChange={handleInputChange}
            onSubmit={handleSubmit}
          />
        );
      case "watch-demo":
        return <WatchDemoPage />;
      case "product":
        return <ProductPage />;
      case "features":
        return <FeaturesPage features={features} />;
      case "pricing":
        return <PricingPage plans={pricingPlans} />;
      case "company":
        return <CompanyPage />;
      case "sign-in":
        return (
          <SignInPage
            formData={formData}
            onChange={handleInputChange}
            onSubmit={handleSubmit}
          />
        );
      case "documentation":
        return <DocumentationPage />;
      case "help-center":
        return <HelpCenterPage />;
      case "community":
        return <CommunityPage />;
      case "api-docs":
        return <APIDocsPage />;
      case "status":
        return <StatusPage />;
      case "careers":
        return <CareersPage />;
      case "contact":
        return (
          <ContactPage
            formData={formData}
            onChange={handleInputChange}
            onSubmit={handleSubmit}
          />
        );
      case "blog":
        return <BlogPage />;
      case "privacy-policy":
        return <PrivacyPolicyPage />;
      case "terms-of-service":
        return <TermsOfServicePage />;
      case "security":
        return <SecurityPage />;
      case "compliance":
        return <CompliancePage />;
      default:
        return (
          <HomePage
            features={features}
            pricingPlans={pricingPlans}
            activeFeature={activeFeature}
            setActiveFeature={setActiveFeature}
          />
        );
    }
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white font-inter">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-[#0A0A0A]/80 backdrop-blur-xl z-50 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div
              className="flex items-center cursor-pointer"
              onClick={() => setCurrentPage("home")}
            >
              <div className="text-2xl font-sora font-extrabold bg-gradient-to-r from-[#2563EB] to-[#7C3AED] bg-clip-text text-transparent">
                DataFlow
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {[
                { key: "product", label: "Product" },
                { key: "features", label: "Features" },
                { key: "pricing", label: "Pricing" },
                { key: "company", label: "Company" },
                { key: "documentation", label: "Docs" },
              ].map((item) => (
                <button
                  key={item.key}
                  onClick={() => setCurrentPage(item.key)}
                  className="text-gray-300 hover:text-white transition-colors duration-200 font-medium text-sm"
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="hidden md:flex items-center space-x-4">
              <button
                onClick={() => setCurrentPage("sign-in")}
                className="text-gray-300 hover:text-white transition-colors duration-200 text-sm font-medium"
              >
                Sign In
              </button>
              <button
                onClick={() => setCurrentPage("start-free-trial")}
                className="bg-gradient-to-r from-[#2563EB] to-[#7C3AED] text-white px-6 py-2 rounded-sm text-sm font-medium hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-200"
              >
                Get Started
              </button>
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-[#0A0A0A] border-t border-white/10">
            <div className="px-4 py-4 space-y-4">
              {[
                { key: "product", label: "Product" },
                { key: "features", label: "Features" },
                { key: "pricing", label: "Pricing" },
                { key: "company", label: "Company" },
                { key: "documentation", label: "Documentation" },
              ].map((item) => (
                <button
                  key={item.key}
                  onClick={() => {
                    setCurrentPage(item.key);
                    setIsMenuOpen(false);
                  }}
                  className="block w-full text-left text-gray-300 hover:text-white transition-colors duration-200 font-medium"
                >
                  {item.label}
                </button>
              ))}
              <div className="pt-4 space-y-3 border-t border-white/10">
                <button
                  onClick={() => {
                    setCurrentPage("sign-in");
                    setIsMenuOpen(false);
                  }}
                  className="block w-full text-center text-gray-300 hover:text-white transition-colors duration-200 font-medium"
                >
                  Sign In
                </button>
                <button
                  onClick={() => {
                    setCurrentPage("start-free-trial");
                    setIsMenuOpen(false);
                  }}
                  className="block w-full bg-gradient-to-r from-[#2563EB] to-[#7C3AED] text-white px-6 py-3 rounded-sm font-medium"
                >
                  Get Started
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="pt-16">{renderPage()}</main>

      {/* Footer */}
      <Footer setCurrentPage={setCurrentPage} />
    </div>
  );
};

// Home Page Component (existing - kept for reference)
const HomePage = ({
  features,
  pricingPlans,
  activeFeature,
  setActiveFeature,
}) => (
  <>
    {/* Hero Section */}
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#2563EB]/10 via-[#7C3AED]/10 to-[#00F2FE]/10 opacity-50"></div>

      <div className="max-w-7xl mx-auto text-center relative z-10">
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-[#2563EB]/10 border border-[#2563EB]/20 text-[#00F2FE] text-sm font-medium">
            <Star className="w-4 h-4 mr-2 fill-current" />
            Trusted by 10,000+ data teams worldwide
          </div>
        </div>

        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-sora font-extrabold mb-6 leading-tight">
          Transform Your
          <span className="bg-gradient-to-r from-[#2563EB] via-[#7C3AED] to-[#00F2FE] bg-clip-text text-transparent block">
            Data Strategy
          </span>
        </h1>

        <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed">
          The intelligent data platform that helps growing companies make sense
          of their data with AI-powered insights and real-time analytics.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <button
            onClick={() => (window.currentPage = "start-free-trial")}
            className="bg-gradient-to-r from-[#2563EB] to-[#7C3AED] text-white px-8 py-4 rounded-sm text-lg font-semibold hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-200 flex items-center group"
          >
            Start Free Trial
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
          </button>
          <button
            onClick={() => (window.currentPage = "watch-demo")}
            className="border border-white/20 text-white px-8 py-4 rounded-sm text-lg font-semibold hover:bg-white/5 transition-all duration-200 flex items-center group"
          >
            <Play className="w-5 h-5 mr-2" />
            Watch Demo
          </button>
        </div>

        {/* Animated feature showcase */}
        <div className="max-w-4xl mx-auto bg-black/40 border border-white/10 rounded-sm p-8 backdrop-blur-sm">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`text-center p-4 transition-all duration-500 ${
                  activeFeature === index
                    ? "bg-gradient-to-b from-[#2563EB]/20 to-[#7C3AED]/20 border border-[#00F2FE]/30"
                    : "opacity-60"
                }`}
              >
                <div className="flex justify-center mb-3">
                  <div
                    className={`p-3 rounded-sm ${
                      activeFeature === index
                        ? "text-[#00F2FE]"
                        : "text-gray-400"
                    }`}
                  >
                    {feature.icon}
                  </div>
                </div>
                <div
                  className={`text-sm font-semibold mb-1 ${
                    activeFeature === index ? "text-white" : "text-gray-400"
                  }`}
                >
                  {feature.title}
                </div>
                <div className="text-xs text-[#00F2FE] font-medium">
                  {feature.stats}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

    {/* Features Grid */}
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-sora font-extrabold mb-4">
            Built for <span className="text-[#00F2FE]">Modern Teams</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Everything you need to transform raw data into actionable business
            intelligence
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Real-time Data Processing",
              description:
                "Process streaming data with sub-second latency and automatic scaling",
              icon: <Zap className="w-8 h-8" />,
            },
            {
              title: "AI-Powered Insights",
              description:
                "Machine learning algorithms that surface hidden patterns and opportunities",
              icon: <BarChart3 className="w-8 h-8" />,
            },
            {
              title: "Enterprise Security",
              description:
                "End-to-end encryption with zero-trust architecture and compliance controls",
              icon: <Shield className="w-8 h-8" />,
            },
            {
              title: "Team Collaboration",
              description:
                "Share insights, create dashboards, and collaborate in real-time",
              icon: <Users className="w-8 h-8" />,
            },
            {
              title: "Custom Workflows",
              description:
                "Build automated data pipelines with our visual workflow builder",
              icon: <ArrowRight className="w-8 h-8" />,
            },
            {
              title: "Global Infrastructure",
              description:
                "Deploy across multiple regions with automatic failover and backup",
              icon: <Star className="w-8 h-8" />,
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="bg-gradient-to-b from-white/5 to-transparent border border-white/10 rounded-sm p-6 hover:border-[#00F2FE]/30 transition-all duration-300 group"
            >
              <div className="text-[#00F2FE] mb-4 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-sora font-semibold mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Pricing Section */}
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-sora font-extrabold mb-4">
            Simple, <span className="text-[#00F2FE]">Transparent</span> Pricing
          </h2>
          <p className="text-gray-400 text-lg">
            Start free, scale as you grow. No hidden fees.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className={`relative border rounded-sm p-8 transition-all duration-300 ${
                plan.popular
                  ? "border-[#00F2FE] bg-gradient-to-b from-[#00F2FE]/10 to-transparent scale-105"
                  : "border-white/10 bg-gradient-to-b from-white/5 to-transparent"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-[#00F2FE] text-black px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </div>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-sora font-semibold mb-4">
                  {plan.name}
                </h3>
                <div className="flex items-baseline justify-center mb-2">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-gray-400 ml-2">{plan.period}</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <Check className="w-5 h-5 text-[#00F2FE] mr-3 flex-shrink-0" />
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>

              <button className="w-full py-3 rounded-sm font-semibold transition-all duration-200 bg-gradient-to-r from-[#2563EB] to-[#7C3AED] text-white hover:shadow-lg hover:shadow-blue-500/25">
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* CTA Section */}
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-[#2563EB]/10 via-[#7C3AED]/10 to-[#00F2FE]/10">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-sora font-extrabold mb-6">
          Ready to Transform Your Data Strategy?
        </h2>
        <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
          Join thousands of companies that use DataFlow to make data-driven
          decisions and accelerate growth.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-gradient-to-r from-[#2563EB] to-[#7C3AED] text-white px-8 py-4 rounded-sm text-lg font-semibold hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-200">
            Start Free Trial
          </button>
          <button className="border border-white/20 text-white px-8 py-4 rounded-sm text-lg font-semibold hover:bg-white/5 transition-all duration-200">
            Schedule a Demo
          </button>
        </div>
      </div>
    </section>
  </>
);

// Start Free Trial Page (existing)
const StartFreeTrialPage = ({ formData, onChange, onSubmit }) => (
  <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
    <div className="max-w-md mx-auto">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-sora font-extrabold mb-4">
          Start Your <span className="text-[#00F2FE]">Free Trial</span>
        </h1>
        <p className="text-gray-400">
          Get started with DataFlow today. No credit card required.
        </p>
      </div>

      <form
        onSubmit={onSubmit}
        className="bg-black/40 border border-white/10 rounded-sm p-8 backdrop-blur-sm"
      >
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={onChange}
              className="w-full bg-white/5 border border-white/10 rounded-sm px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-[#00F2FE] transition-colors duration-200"
              placeholder="Enter your full name"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Work Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={onChange}
              className="w-full bg-white/5 border border-white/10 rounded-sm px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-[#00F2FE] transition-colors duration-200"
              placeholder="Enter your work email"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Company
            </label>
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={onChange}
              className="w-full bg-white/5 border border-white/10 rounded-sm px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-[#00F2FE] transition-colors duration-200"
              placeholder="Enter your company name"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={onChange}
              className="w-full bg-white/5 border border-white/10 rounded-sm px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-[#00F2FE] transition-colors duration-200"
              placeholder="Create a password"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-[#2563EB] to-[#7C3AED] text-white py-4 rounded-sm font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-200"
          >
            Start Free Trial
          </button>

          <p className="text-center text-gray-400 text-sm">
            By signing up, you agree to our{" "}
            <a href="#" className="text-[#00F2FE] hover:underline">
              Terms of Service
            </a>{" "}
            and{" "}
            <a href="#" className="text-[#00F2FE] hover:underline">
              Privacy Policy
            </a>
          </p>
        </div>
      </form>
    </div>
  </section>
);

// Watch Demo Page (existing)
const WatchDemoPage = () => (
  <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-sora font-extrabold mb-4">
          See DataFlow <span className="text-[#00F2FE]">in Action</span>
        </h1>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          Watch how DataFlow transforms raw data into actionable insights in
          minutes.
        </p>
      </div>

      {/* Video Placeholder */}
      <div className="bg-black/40 border border-white/10 rounded-sm p-8 backdrop-blur-sm">
        <div className="aspect-video bg-gradient-to-br from-[#2563EB]/20 to-[#7C3AED]/20 rounded-sm flex items-center justify-center">
          <div className="text-center">
            <div className="w-20 h-20 bg-[#00F2FE] rounded-full flex items-center justify-center mx-auto mb-4">
              <Play className="w-8 h-8 text-black ml-1" />
            </div>
            <p className="text-gray-400">DataFlow Platform Demo</p>
            <p className="text-sm text-gray-500">(15:23)</p>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mt-12">
        {[
          {
            title: "Easy Setup",
            description:
              "Get started in minutes with our intuitive setup wizard",
          },
          {
            title: "Powerful Analytics",
            description: "See how AI-powered insights drive business decisions",
          },
          {
            title: "Team Collaboration",
            description: "Watch teams collaborate seamlessly on data projects",
          },
        ].map((item, index) => (
          <div key={index} className="text-center">
            <h3 className="text-lg font-semibold mb-2 text-[#00F2FE]">
              {item.title}
            </h3>
            <p className="text-gray-400 text-sm">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// Product Page (existing)
const ProductPage = () => (
  <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-sora font-extrabold mb-6">
          The Complete <span className="text-[#00F2FE]">Data Platform</span>
        </h1>
        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
          Everything you need to collect, process, analyze, and act on your data
          in one unified platform.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-16 mb-20">
        {[
          {
            icon: <Database className="w-12 h-12" />,
            title: "Data Integration",
            description:
              "Connect to 100+ data sources including databases, APIs, and cloud services",
            features: [
              "Real-time sync",
              "Automated ETL",
              "Data validation",
              "API management",
            ],
          },
          {
            icon: <BarChart3 className="w-12 h-12" />,
            title: "Advanced Analytics",
            description:
              "AI-powered insights with customizable dashboards and reporting",
            features: [
              "Machine learning",
              "Predictive analytics",
              "Custom metrics",
              "Export reports",
            ],
          },
          {
            icon: <Workflow className="w-12 h-12" />,
            title: "Workflow Automation",
            description:
              "Build automated data pipelines with our visual workflow builder",
            features: [
              "Drag & drop",
              "Conditional logic",
              "Scheduling",
              "Error handling",
            ],
          },
          {
            icon: <ShieldCheck className="w-12 h-12" />,
            title: "Security & Compliance",
            description:
              "Enterprise-grade security with compliance for global standards",
            features: [
              "GDPR compliant",
              "SOC2 certified",
              "End-to-end encryption",
              "Audit logs",
            ],
          },
        ].map((feature, index) => (
          <div
            key={index}
            className="bg-black/40 border border-white/10 rounded-sm p-8 backdrop-blur-sm hover:border-[#00F2FE]/30 transition-all duration-300"
          >
            <div className="text-[#00F2FE] mb-6">{feature.icon}</div>
            <h3 className="text-2xl font-sora font-semibold mb-4">
              {feature.title}
            </h3>
            <p className="text-gray-400 mb-6 leading-relaxed">
              {feature.description}
            </p>
            <ul className="space-y-2">
              {feature.features.map((item, itemIndex) => (
                <li key={itemIndex} className="flex items-center text-gray-300">
                  <Check className="w-4 h-4 text-[#00F2FE] mr-3 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// Features Page (existing)
const FeaturesPage = ({ features }) => (
  <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-sora font-extrabold mb-6">
          Powerful <span className="text-[#00F2FE]">Features</span>
        </h1>
        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
          Discover how DataFlow's features work together to give you complete
          control over your data.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-black/40 border border-white/10 rounded-sm p-6 text-center hover:border-[#00F2FE]/30 transition-all duration-300"
          >
            <div className="text-[#00F2FE] mb-4 flex justify-center">
              {feature.icon}
            </div>
            <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-400 text-sm mb-3">{feature.description}</p>
            <div className="text-[#00F2FE] text-sm font-medium">
              {feature.stats}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// Pricing Page (existing)
const PricingPage = ({ plans }) => (
  <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-sora font-extrabold mb-6">
          Simple, <span className="text-[#00F2FE]">Transparent</span> Pricing
        </h1>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          Choose the plan that works best for your team. All plans include a
          14-day free trial.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`relative border rounded-sm p-8 transition-all duration-300 ${
              plan.popular
                ? "border-[#00F2FE] bg-gradient-to-b from-[#00F2FE]/10 to-transparent scale-105"
                : "border-white/10 bg-gradient-to-b from-white/5 to-transparent"
            }`}
          >
            {plan.popular && (
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <div className="bg-[#00F2FE] text-black px-4 py-1 rounded-full text-sm font-semibold">
                  Most Popular
                </div>
              </div>
            )}

            <div className="text-center mb-8">
              <h3 className="text-2xl font-sora font-semibold mb-4">
                {plan.name}
              </h3>
              <div className="flex items-baseline justify-center mb-2">
                <span className="text-4xl font-bold">{plan.price}</span>
                <span className="text-gray-400 ml-2">{plan.period}</span>
              </div>
            </div>

            <ul className="space-y-4 mb-8">
              {plan.features.map((feature, featureIndex) => (
                <li key={featureIndex} className="flex items-center">
                  <Check className="w-5 h-5 text-[#00F2FE] mr-3 flex-shrink-0" />
                  <span className="text-gray-300">{feature}</span>
                </li>
              ))}
            </ul>

            <button className="w-full py-3 rounded-sm font-semibold transition-all duration-200 bg-gradient-to-r from-[#2563EB] to-[#7C3AED] text-white hover:shadow-lg hover:shadow-blue-500/25">
              Start Free Trial
            </button>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// Company Page (existing)
const CompanyPage = () => (
  <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-sora font-extrabold mb-6">
          About <span className="text-[#00F2FE]">DataFlow</span>
        </h1>
        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
          We're on a mission to democratize data analytics and make powerful
          insights accessible to every business.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mb-16">
        {[
          { value: "10K+", label: "Active Users" },
          { value: "50+", label: "Countries" },
          { value: "99.9%", label: "Uptime" },
        ].map((stat, index) => (
          <div key={index} className="text-center">
            <div className="text-3xl font-bold text-[#00F2FE] mb-2">
              {stat.value}
            </div>
            <div className="text-gray-400 text-sm">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// Sign In Page (existing)
const SignInPage = ({ formData, onChange, onSubmit }) => (
  <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
    <div className="max-w-md mx-auto">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-sora font-extrabold mb-4">
          Welcome <span className="text-[#00F2FE]">Back</span>
        </h1>
        <p className="text-gray-400">Sign in to your DataFlow account</p>
      </div>

      <form
        onSubmit={onSubmit}
        className="bg-black/40 border border-white/10 rounded-sm p-8 backdrop-blur-sm"
      >
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={onChange}
              className="w-full bg-white/5 border border-white/10 rounded-sm px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-[#00F2FE] transition-colors duration-200"
              placeholder="Enter your email"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={onChange}
              className="w-full bg-white/5 border border-white/10 rounded-sm px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-[#00F2FE] transition-colors duration-200"
              placeholder="Enter your password"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-[#2563EB] to-[#7C3AED] text-white py-4 rounded-sm font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-200"
          >
            Sign In
          </button>
        </div>
      </form>
    </div>
  </section>
);

// NEW PAGES START HERE

// Documentation Page
const DocumentationPage = () => (
  <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-sora font-extrabold mb-6">
          <span className="text-[#00F2FE]">Documentation</span>
        </h1>
        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
          Comprehensive guides and references to help you get the most out of
          DataFlow.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          {
            icon: <BookOpen className="w-8 h-8" />,
            title: "Getting Started",
            description: "Learn the basics and set up your first data pipeline",
            link: "#",
          },
          {
            icon: <FileCode className="w-8 h-8" />,
            title: "API Reference",
            description: "Complete API documentation with code examples",
            link: "#",
          },
          {
            icon: <Workflow className="w-8 h-8" />,
            title: "Workflows",
            description: "Build automated data processing workflows",
            link: "#",
          },
          {
            icon: <BarChart3 className="w-8 h-8" />,
            title: "Analytics",
            description: "Create dashboards and generate insights",
            link: "#",
          },
          {
            icon: <Shield className="w-8 h-8" />,
            title: "Security Guide",
            description: "Best practices for securing your data",
            link: "#",
          },
          {
            icon: <Users className="w-8 h-8" />,
            title: "Team Collaboration",
            description: "Work together with your team effectively",
            link: "#",
          },
        ].map((doc, index) => (
          <a key={index} href={doc.link} className="block">
            <div className="bg-black/40 border border-white/10 rounded-sm p-6 hover:border-[#00F2FE]/30 transition-all duration-300 group h-full">
              <div className="text-[#00F2FE] mb-4">{doc.icon}</div>
              <h3 className="text-xl font-sora font-semibold mb-3">
                {doc.title}
              </h3>
              <p className="text-gray-400">{doc.description}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  </section>
);

// Help Center Page
const HelpCenterPage = () => (
  <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-sora font-extrabold mb-6">
          Help <span className="text-[#00F2FE]">Center</span>
        </h1>
        <p className="text-xl text-gray-400">
          Find answers to common questions and get support.
        </p>
      </div>

      {/* Search Bar */}
      <div className="mb-12">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search for help articles..."
            className="w-full bg-white/5 border border-white/10 rounded-sm px-12 py-4 text-white placeholder-gray-400 focus:outline-none focus:border-[#00F2FE] transition-colors duration-200"
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {[
          {
            icon: <FileQuestion className="w-6 h-6" />,
            title: "Getting Started",
            questions: [
              "How do I create my first pipeline?",
              "What data sources are supported?",
              "How to set up team members?",
            ],
          },
          {
            icon: <BarChart3 className="w-6 h-6" />,
            title: "Analytics & Reports",
            questions: [
              "Creating custom dashboards",
              "Setting up automated reports",
              "Understanding metrics",
            ],
          },
          {
            icon: <Workflow className="w-6 h-6" />,
            title: "Workflows",
            questions: [
              "Automating data processing",
              "Conditional logic in workflows",
              "Error handling",
            ],
          },
          {
            icon: <Shield className="w-6 h-6" />,
            title: "Security & Access",
            questions: [
              "Setting up permissions",
              "Two-factor authentication",
              "Data encryption",
            ],
          },
        ].map((category, index) => (
          <div
            key={index}
            className="bg-black/40 border border-white/10 rounded-sm p-6"
          >
            <div className="flex items-center mb-4">
              <div className="text-[#00F2FE] mr-3">{category.icon}</div>
              <h3 className="text-lg font-semibold">{category.title}</h3>
            </div>
            <ul className="space-y-2">
              {category.questions.map((question, qIndex) => (
                <li key={qIndex}>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {question}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// Community Page
const CommunityPage = () => (
  <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-sora font-extrabold mb-6">
          <span className="text-[#00F2FE]">Community</span>
        </h1>
        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
          Join thousands of developers and data professionals building with
          DataFlow.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
        {[
          {
            icon: <Github className="w-8 h-8" />,
            name: "GitHub",
            members: "2.5k+ Stars",
            description: "Open source projects",
          },
          {
            icon: <MessageCircle className="w-8 h-8" />,
            name: "Discord",
            members: "5k+ Members",
            description: "Real-time chat",
          },
          {
            icon: <UsersIcon className="w-8 h-8" />,
            name: "Forums",
            members: "10k+ Posts",
            description: "Q&A discussions",
          },
          {
            icon: <Twitter className="w-8 h-8" />,
            name: "Twitter",
            members: "15k+ Followers",
            description: "Latest updates",
          },
        ].map((platform, index) => (
          <a key={index} href="#" className="block">
            <div className="bg-black/40 border border-white/10 rounded-sm p-6 text-center hover:border-[#00F2FE]/30 transition-all duration-300 group">
              <div className="text-[#00F2FE] mb-4 flex justify-center">
                {platform.icon}
              </div>
              <h3 className="font-semibold mb-2">{platform.name}</h3>
              <p className="text-[#00F2FE] text-sm mb-1">{platform.members}</p>
              <p className="text-gray-400 text-sm">{platform.description}</p>
            </div>
          </a>
        ))}
      </div>

      {/* Community Events */}
      <div className="bg-gradient-to-r from-[#2563EB]/10 to-[#7C3AED]/10 border border-[#00F2FE]/20 rounded-sm p-8">
        <h2 className="text-2xl font-sora font-semibold mb-6 text-center">
          Upcoming Events
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              title: "DataFlow Summit 2024",
              date: "March 15, 2024",
              type: "Virtual Conference",
            },
            {
              title: "API Workshop",
              date: "February 28, 2024",
              type: "Live Coding Session",
            },
          ].map((event, index) => (
            <div key={index} className="bg-black/40 rounded-sm p-4">
              <div className="flex items-center mb-3">
                <Calendar className="w-5 h-5 text-[#00F2FE] mr-2" />
                <span className="text-sm text-gray-400">{event.date}</span>
              </div>
              <h3 className="font-semibold mb-1">{event.title}</h3>
              <p className="text-gray-400 text-sm">{event.type}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

// API Docs Page
const APIDocsPage = () => (
  <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-sora font-extrabold mb-6">
          API <span className="text-[#00F2FE]">Documentation</span>
        </h1>
        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
          Complete reference for DataFlow's REST API with interactive examples.
        </p>
      </div>

      <div className="grid lg:grid-cols-4 gap-8">
        {/* Sidebar */}
        <div className="lg:col-span-1">
          <div className="bg-black/40 border border-white/10 rounded-sm p-6 sticky top-32">
            <h3 className="font-semibold mb-4">API Endpoints</h3>
            <nav className="space-y-2">
              {[
                "Authentication",
                "Data Sources",
                "Pipelines",
                "Analytics",
                "Teams",
                "Webhooks",
              ].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="block text-gray-400 hover:text-white transition-colors duration-200 text-sm py-1"
                >
                  {item}
                </a>
              ))}
            </nav>
          </div>
        </div>

        {/* Main Content */}
        <div className="lg:col-span-3">
          <div className="bg-black/40 border border-white/10 rounded-sm p-8">
            <h2 className="text-2xl font-sora font-semibold mb-6">
              Getting Started
            </h2>

            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-4">Authentication</h3>
              <div className="bg-black rounded-sm p-4 mb-4">
                <code className="text-sm text-gray-300">
                  curl -X GET "https://api.dataflow.com/v1/data-sources" \<br />
                  &nbsp;&nbsp;-H "Authorization: Bearer YOUR_API_KEY"
                </code>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                { title: "Base URL", value: "https://api.dataflow.com/v1" },
                { title: "Rate Limit", value: "1000 requests/hour" },
                { title: "Format", value: "JSON" },
                { title: "Authentication", value: "Bearer Token" },
              ].map((item, index) => (
                <div
                  key={index}
                  className="border border-white/10 rounded-sm p-4"
                >
                  <h4 className="text-sm text-gray-400 mb-1">{item.title}</h4>
                  <p className="font-medium">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

// Status Page
const StatusPage = () => (
  <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-sora font-extrabold mb-6">
          System <span className="text-[#00F2FE]">Status</span>
        </h1>
        <p className="text-xl text-gray-400">
          Real-time information about DataFlow's services and performance.
        </p>
      </div>

      {/* Status Overview */}
      <div className="bg-black/40 border border-white/10 rounded-sm p-8 mb-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-sora font-semibold">
            All Systems Operational
          </h2>
          <div className="flex items-center text-green-400">
            <Wifi className="w-5 h-5 mr-2" />
            <span>100% Uptime</span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {[
            { service: "API", status: "Operational", latency: "45ms" },
            {
              service: "Data Processing",
              status: "Operational",
              latency: "120ms",
            },
            { service: "Analytics", status: "Operational", latency: "85ms" },
            { service: "Dashboard", status: "Operational", latency: "60ms" },
          ].map((system, index) => (
            <div key={index} className="border border-white/10 rounded-sm p-4">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-semibold">{system.service}</h3>
                <div className="flex items-center text-green-400">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
                  {system.status}
                </div>
              </div>
              <p className="text-gray-400 text-sm">
                Avg. latency: {system.latency}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Incident History */}
      <div className="bg-black/40 border border-white/10 rounded-sm p-8">
        <h2 className="text-2xl font-sora font-semibold mb-6">
          Recent Incidents
        </h2>
        <div className="space-y-4">
          {[
            {
              date: "2024-01-15",
              service: "API",
              status: "Resolved",
              duration: "15m",
            },
            {
              date: "2024-01-10",
              service: "Dashboard",
              status: "Resolved",
              duration: "8m",
            },
          ].map((incident, index) => (
            <div
              key={index}
              className="flex items-center justify-between py-3 border-b border-white/10 last:border-b-0"
            >
              <div>
                <h3 className="font-semibold">{incident.service}</h3>
                <p className="text-gray-400 text-sm">{incident.date}</p>
              </div>
              <div className="text-right">
                <span className="text-green-400 text-sm">
                  {incident.status}
                </span>
                <p className="text-gray-400 text-sm">{incident.duration}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

// Careers Page
const CareersPage = () => (
  <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-sora font-extrabold mb-6">
          <span className="text-[#00F2FE]">Careers</span> at DataFlow
        </h1>
        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
          Join our mission to democratize data analytics and build the future of
          data platforms.
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8 mb-16">
        {[
          {
            title: "Senior Backend Engineer",
            department: "Engineering",
            location: "Remote",
            type: "Full-time",
          },
          {
            title: "Data Scientist",
            department: "Research",
            location: "San Francisco",
            type: "Full-time",
          },
          {
            title: "Product Designer",
            department: "Design",
            location: "Remote",
            type: "Full-time",
          },
          {
            title: "DevOps Engineer",
            department: "Infrastructure",
            location: "New York",
            type: "Full-time",
          },
          {
            title: "Frontend Developer",
            department: "Engineering",
            location: "Remote",
            type: "Full-time",
          },
          {
            title: "Customer Success Manager",
            department: "Sales",
            location: "Remote",
            type: "Full-time",
          },
        ].map((job, index) => (
          <div
            key={index}
            className="bg-black/40 border border-white/10 rounded-sm p-6 hover:border-[#00F2FE]/30 transition-all duration-300 group"
          >
            <h3 className="text-xl font-sora font-semibold mb-3">
              {job.title}
            </h3>
            <div className="space-y-2 mb-4">
              <div className="flex items-center text-gray-400 text-sm">
                <Briefcase className="w-4 h-4 mr-2" />
                {job.department}
              </div>
              <div className="flex items-center text-gray-400 text-sm">
                <MapPin className="w-4 h-4 mr-2" />
                {job.location}
              </div>
              <div className="flex items-center text-gray-400 text-sm">
                <User className="w-4 h-4 mr-2" />
                {job.type}
              </div>
            </div>
            <button className="w-full bg-gradient-to-r from-[#2563EB] to-[#7C3AED] text-white py-2 rounded-sm font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-200">
              Apply Now
            </button>
          </div>
        ))}
      </div>

      {/* Benefits Section */}
      <div className="bg-gradient-to-r from-[#2563EB]/10 to-[#7C3AED]/10 border border-[#00F2FE]/20 rounded-sm p-8">
        <h2 className="text-2xl font-sora font-semibold mb-8 text-center">
          Why Join DataFlow?
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: "💻",
              title: "Remote First",
              description: "Work from anywhere in the world",
            },
            {
              icon: "📈",
              title: "Equity",
              description: "Share in our success",
            },
            {
              icon: "🏥",
              title: "Health Care",
              description: "Comprehensive medical coverage",
            },
            {
              icon: "🎓",
              title: "Learning",
              description: "Annual learning budget",
            },
          ].map((benefit, index) => (
            <div key={index} className="text-center">
              <div className="text-2xl mb-3">{benefit.icon}</div>
              <h3 className="font-semibold mb-2">{benefit.title}</h3>
              <p className="text-gray-400 text-sm">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

// Contact Page
const ContactPage = ({ formData, onChange, onSubmit }) => (
  <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-sora font-extrabold mb-6">
          Get in <span className="text-[#00F2FE]">Touch</span>
        </h1>
        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
          Have questions? We'd love to hear from you. Send us a message and
          we'll respond as soon as possible.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12">
        {/* Contact Form */}
        <div className="bg-black/40 border border-white/10 rounded-sm p-8 backdrop-blur-sm">
          <form onSubmit={onSubmit}>
            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    className="w-full bg-white/5 border border-white/10 rounded-sm px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-[#00F2FE] transition-colors duration-200"
                    placeholder="Enter your first name"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    className="w-full bg-white/5 border border-white/10 rounded-sm px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-[#00F2FE] transition-colors duration-200"
                    placeholder="Enter your last name"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  className="w-full bg-white/5 border border-white/10 rounded-sm px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-[#00F2FE] transition-colors duration-200"
                  placeholder="Enter your email"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Company
                </label>
                <input
                  type="text"
                  name="company"
                  className="w-full bg-white/5 border border-white/10 rounded-sm px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-[#00F2FE] transition-colors duration-200"
                  placeholder="Enter your company name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  rows="6"
                  className="w-full bg-white/5 border border-white/10 rounded-sm px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-[#00F2FE] transition-colors duration-200 resize-none"
                  placeholder="How can we help you?"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-[#2563EB] to-[#7C3AED] text-white py-4 rounded-sm font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-200"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>

        {/* Contact Information */}
        <div>
          <div className="space-y-6">
            {[
              {
                icon: <Mail className="w-6 h-6" />,
                title: "Email",
                content: "hello@dataflow.com",
                description: "Send us an email anytime",
              },
              {
                icon: <Phone className="w-6 h-6" />,
                title: "Phone",
                content: "+1 (555) 123-4567",
                description: "Mon-Fri from 8am to 6pm",
              },
              {
                icon: <MapPin className="w-6 h-6" />,
                title: "Office",
                content: "San Francisco, CA",
                description: "Visit our headquarters",
              },
            ].map((contact, index) => (
              <div
                key={index}
                className="bg-black/40 border border-white/10 rounded-sm p-6"
              >
                <div className="flex items-start">
                  <div className="text-[#00F2FE] mr-4 mt-1">{contact.icon}</div>
                  <div>
                    <h3 className="font-semibold mb-1">{contact.title}</h3>
                    <p className="text-gray-300 mb-1">{contact.content}</p>
                    <p className="text-gray-400 text-sm">
                      {contact.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Social Links */}
          <div className="bg-gradient-to-r from-[#2563EB]/10 to-[#7C3AED]/10 border border-[#00F2FE]/20 rounded-sm p-6 mt-6">
            <h3 className="font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              {[
                { icon: <Twitter className="w-5 h-5" />, name: "Twitter" },
                { icon: <Linkedin className="w-5 h-5" />, name: "LinkedIn" },
                { icon: <Github className="w-5 h-5" />, name: "GitHub" },
              ].map((social, index) => (
                <a
                  key={index}
                  href="#"
                  className="text-gray-400 hover:text-[#00F2FE] transition-colors duration-200"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

// Blog Page
const BlogPage = () => (
  <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-sora font-extrabold mb-6">
          DataFlow <span className="text-[#00F2FE]">Blog</span>
        </h1>
        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
          Insights, tutorials, and updates from the DataFlow team.
        </p>
      </div>

      {/* Featured Post */}
      <div className="bg-black/40 border border-white/10 rounded-sm p-8 mb-12 hover:border-[#00F2FE]/30 transition-all duration-300">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div>
            <span className="inline-block bg-[#00F2FE] text-black px-3 py-1 rounded-full text-sm font-semibold mb-4">
              Featured
            </span>
            <h2 className="text-3xl font-sora font-semibold mb-4">
              Building Real-time Data Pipelines at Scale
            </h2>
            <p className="text-gray-400 mb-6">
              Learn how we process millions of events per second while
              maintaining data consistency and low latency.
            </p>
            <div className="flex items-center text-gray-400 text-sm">
              <span>January 15, 2024</span>
              <span className="mx-2">•</span>
              <span>10 min read</span>
            </div>
          </div>
          <div className="bg-gradient-to-br from-[#2563EB]/20 to-[#7C3AED]/20 rounded-sm aspect-video flex items-center justify-center">
            <div className="text-center">
              <FileText className="w-12 h-12 text-[#00F2FE] mx-auto mb-2" />
              <p className="text-gray-400">Featured Post</p>
            </div>
          </div>
        </div>
      </div>

      {/* Blog Posts Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          {
            title: "Introduction to Data Streaming",
            excerpt:
              "Understanding the fundamentals of real-time data processing.",
            date: "2024-01-10",
            readTime: "8 min",
          },
          {
            title: "Machine Learning with DataFlow",
            excerpt: "How to build and deploy ML models using our platform.",
            date: "2024-01-08",
            readTime: "12 min",
          },
          {
            title: "Security Best Practices",
            excerpt: "Ensuring your data remains secure and compliant.",
            date: "2024-01-05",
            readTime: "6 min",
          },
          {
            title: "Team Collaboration Features",
            excerpt: "Maximizing productivity with collaborative tools.",
            date: "2024-01-03",
            readTime: "5 min",
          },
          {
            title: "API Versioning Strategy",
            excerpt: "How we maintain backward compatibility.",
            date: "2024-01-01",
            readTime: "7 min",
          },
          {
            title: "Cost Optimization Tips",
            excerpt: "Reducing your data processing costs effectively.",
            date: "2023-12-28",
            readTime: "9 min",
          },
        ].map((post, index) => (
          <article
            key={index}
            className="bg-black/40 border border-white/10 rounded-sm p-6 hover:border-[#00F2FE]/30 transition-all duration-300 group"
          >
            <div className="bg-gradient-to-br from-[#2563EB]/10 to-[#7C3AED]/10 rounded-sm aspect-video flex items-center justify-center mb-4">
              <FileText className="w-8 h-8 text-[#00F2FE]" />
            </div>
            <h3 className="text-xl font-sora font-semibold mb-3 group-hover:text-[#00F2FE] transition-colors duration-200">
              {post.title}
            </h3>
            <p className="text-gray-400 text-sm mb-4">{post.excerpt}</p>
            <div className="flex items-center justify-between text-gray-400 text-sm">
              <span>{post.date}</span>
              <span>{post.readTime} read</span>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

// Privacy Policy Page
const PrivacyPolicyPage = () => (
  <LegalPage
    title="Privacy Policy"
    description="How we collect, use, and protect your personal information."
  />
);

// Terms of Service Page
const TermsOfServicePage = () => (
  <LegalPage
    title="Terms of Service"
    description="The rules and guidelines for using DataFlow services."
  />
);

// Security Page
const SecurityPage = () => (
  <LegalPage
    title="Security"
    description="Our commitment to protecting your data and maintaining security standards."
  />
);

// Compliance Page
const CompliancePage = () => (
  <LegalPage
    title="Compliance"
    description="How we meet industry standards and regulatory requirements."
  />
);

// Generic Legal Page Component
const LegalPage = ({ title, description }) => (
  <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-sora font-extrabold mb-6">{title}</h1>
        <p className="text-xl text-gray-400">{description}</p>
      </div>

      <div className="bg-black/40 border border-white/10 rounded-sm p-8 backdrop-blur-sm">
        <div className="prose prose-invert max-w-none">
          <h2>1. Introduction</h2>
          <p className="text-gray-400 mb-6">
            Welcome to DataFlow. We are committed to protecting your privacy and
            ensuring the security of your personal information. This policy
            outlines how we collect, use, and safeguard your data.
          </p>

          <h2>2. Information We Collect</h2>
          <p className="text-gray-400 mb-6">
            We collect information that you provide directly to us, such as when
            you create an account, use our services, or contact us for support.
            This may include:
          </p>
          <ul className="text-gray-400 mb-6 list-disc list-inside space-y-2">
            <li>Account information (name, email address, company)</li>
            <li>Payment and billing information</li>
            <li>Usage data and analytics</li>
            <li>Communication records</li>
          </ul>

          <h2>3. How We Use Your Information</h2>
          <p className="text-gray-400 mb-6">
            We use the information we collect to provide, maintain, and improve
            our services, including:
          </p>
          <ul className="text-gray-400 mb-6 list-disc list-inside space-y-2">
            <li>Providing and personalizing our services</li>
            <li>Processing transactions and sending related information</li>
            <li>Responding to your comments and questions</li>
            <li>Developing new products and services</li>
            <li>Ensuring security and preventing fraud</li>
          </ul>

          <h2>4. Data Security</h2>
          <p className="text-gray-400 mb-6">
            We implement appropriate technical and organizational security
            measures to protect your personal information against unauthorized
            access, alteration, disclosure, or destruction.
          </p>

          <h2>5. Data Retention</h2>
          <p className="text-gray-400 mb-6">
            We retain personal information for as long as necessary to fulfill
            the purposes outlined in this policy, unless a longer retention
            period is required or permitted by law.
          </p>

          <h2>6. Your Rights</h2>
          <p className="text-gray-400 mb-6">
            You have the right to access, correct, or delete your personal
            information. You may also have the right to restrict or object to
            certain processing activities.
          </p>

          <h2>7. Contact Us</h2>
          <p className="text-gray-400">
            If you have any questions about this policy or our data practices,
            please contact us at privacy@dataflow.com.
          </p>
        </div>
      </div>
    </div>
  </section>
);

// Footer Component
const Footer = ({ setCurrentPage }) => (
  <footer className="bg-black border-t border-white/10 py-12 px-4 sm:px-6 lg:px-8">
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
        <div className="col-span-2">
          <div className="text-2xl font-sora font-extrabold bg-gradient-to-r from-[#2563EB] to-[#7C3AED] bg-clip-text text-transparent mb-4">
            DataFlow
          </div>
          <p className="text-gray-400 text-sm leading-relaxed max-w-md">
            The intelligent data platform for modern businesses. Transform your
            data into actionable insights with AI-powered analytics.
          </p>
        </div>

        {[
          {
            title: "Product",
            links: [
              { label: "Features", action: () => setCurrentPage("features") },
              {
                label: "Integrations",
                action: () => setCurrentPage("product"),
              },
              { label: "Pricing", action: () => setCurrentPage("pricing") },
              {
                label: "Documentation",
                action: () => setCurrentPage("documentation"),
              },
            ],
          },
          {
            title: "Company",
            links: [
              { label: "About", action: () => setCurrentPage("company") },
              { label: "Careers", action: () => setCurrentPage("careers") },
              { label: "Contact", action: () => setCurrentPage("contact") },
              { label: "Blog", action: () => setCurrentPage("blog") },
            ],
          },
          {
            title: "Resources",
            links: [
              {
                label: "Help Center",
                action: () => setCurrentPage("help-center"),
              },
              { label: "Community", action: () => setCurrentPage("community") },
              { label: "API Docs", action: () => setCurrentPage("api-docs") },
              { label: "Status", action: () => setCurrentPage("status") },
            ],
          },
          {
            title: "Legal",
            links: [
              {
                label: "Privacy Policy",
                action: () => setCurrentPage("privacy-policy"),
              },
              {
                label: "Terms of Service",
                action: () => setCurrentPage("terms-of-service"),
              },
              { label: "Security", action: () => setCurrentPage("security") },
              {
                label: "Compliance",
                action: () => setCurrentPage("compliance"),
              },
            ],
          },
        ].map((category, index) => (
          <div key={category.title}>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              {category.title}
            </h4>
            <ul className="space-y-2 text-sm">
              {category.links.map((link, linkIndex) => (
                <li key={linkIndex}>
                  <button
                    onClick={link.action}
                    className="text-gray-400 hover:text-white transition-colors duration-200 text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-white/10 mt-12 pt-8 text-center text-gray-400 text-sm">
        <p>&copy; 2024 DataFlow. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

export default ModernSaaSPage;