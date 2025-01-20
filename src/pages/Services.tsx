import { motion } from "framer-motion";

const Services = () => {
  return (
    <div className="min-h-screen pt-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We offer a comprehensive range of AI-powered solutions to help your
            business thrive in the digital era.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="glass-card p-6 rounded-lg"
            >
              <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
              <p className="text-muted-foreground mb-4">{service.description}</p>
              <ul className="list-disc list-inside text-muted-foreground">
                {service.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

const services = [
  {
    title: "AI Integration",
    description: "Seamlessly integrate AI solutions into your existing workflows.",
    features: [
      "Custom AI Model Development",
      "Process Automation",
      "Intelligent Analytics",
    ],
  },
  {
    title: "Digital Transformation",
    description: "Transform your business with cutting-edge digital solutions.",
    features: [
      "Business Process Optimization",
      "Legacy System Modernization",
      "Cloud Migration",
    ],
  },
  {
    title: "Consulting Services",
    description: "Expert guidance for your technological advancement.",
    features: [
      "Technology Strategy",
      "AI Readiness Assessment",
      "Implementation Planning",
    ],
  },
];

export default Services;