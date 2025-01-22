import { motion } from "framer-motion";
import { Brain, Cpu, Code, LineChart, Rocket, Shield } from "lucide-react";
import Footer from "../components/Footer";

const Services = () => {
  return (
    <div className="min-h-screen">
      <div className="pt-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Empowering businesses through cutting-edge AI solutions and innovative
              technological integration. We transform ideas into reality.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="glass-card p-8 rounded-lg hover:shadow-lg transition-all"
              >
                <div className="bg-primary/10 p-4 rounded-full w-fit mb-6">
                  <service.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                <p className="text-muted-foreground mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

const services = [
  {
    title: "AI Integration & Development",
    description: "Harness the power of artificial intelligence to transform your business operations and decision-making processes.",
    icon: Brain,
    features: [
      "Custom AI Model Development",
      "Machine Learning Solutions",
      "Natural Language Processing",
      "Computer Vision Systems",
    ],
  },
  {
    title: "Digital Transformation",
    description: "Modernize your business with comprehensive digital solutions that drive growth and efficiency.",
    icon: Rocket,
    features: [
      "Business Process Automation",
      "Legacy System Modernization",
      "Cloud Migration Services",
      "Digital Strategy Consulting",
    ],
  },
  {
    title: "Advanced Analytics",
    description: "Turn your data into actionable insights with our advanced analytics solutions.",
    icon: LineChart,
    features: [
      "Predictive Analytics",
      "Business Intelligence",
      "Data Visualization",
      "Real-time Analytics",
    ],
  },
  {
    title: "Custom Software Development",
    description: "Build scalable, secure, and efficient software solutions tailored to your needs.",
    icon: Code,
    features: [
      "Web Applications",
      "Mobile Applications",
      "API Development",
      "Enterprise Solutions",
    ],
  },
  {
    title: "AI Infrastructure",
    description: "Set up and maintain robust AI infrastructure for sustainable growth.",
    icon: Cpu,
    features: [
      "Cloud AI Platform Setup",
      "AI Pipeline Development",
      "Model Deployment",
      "Performance Optimization",
    ],
  },
  {
    title: "AI Security & Compliance",
    description: "Ensure your AI systems are secure, ethical, and compliant with regulations.",
    icon: Shield,
    features: [
      "AI Security Audits",
      "Compliance Management",
      "Ethics Guidelines",
      "Risk Assessment",
    ],
  },
];

export default Services;