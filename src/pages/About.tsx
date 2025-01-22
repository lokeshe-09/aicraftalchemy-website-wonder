import { motion } from "framer-motion";
import Footer from "../components/Footer";

const About = () => {
  return (
    <div className="min-h-screen">
      <div className="pt-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Us</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We are a cutting-edge technology company specializing in AI integration
              and innovative solutions.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12"
          >
            <div className="glass-card p-6 rounded-lg">
              <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
              <p className="text-muted-foreground">
                To empower businesses through innovative AI solutions and creative
                technological integration, driving growth and efficiency in the
                digital age.
              </p>
            </div>
            <div className="glass-card p-6 rounded-lg">
              <h2 className="text-2xl font-semibold mb-4">Our Vision</h2>
              <p className="text-muted-foreground">
                To be the leading force in AI-driven digital transformation,
                creating solutions that bridge the gap between human creativity
                and artificial intelligence.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
