import { motion } from "framer-motion";
import { Brain, Code, Database, Cloud, Bot, ChartBar } from "lucide-react";
import Footer from "../components/Footer";

const Skills = () => {
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Expertise</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We combine cutting-edge technologies with deep expertise to deliver
              exceptional solutions that drive innovation and growth.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="glass-card p-8 rounded-lg hover:shadow-lg transition-all"
              >
                <div className="bg-primary/10 p-4 rounded-full w-fit mb-6">
                  <skill.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-4">{skill.name}</h3>
                <p className="text-muted-foreground">{skill.description}</p>
                <div className="mt-6 space-y-2">
                  {skill.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm mr-2 mb-2"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

const skills = [
  {
    name: "Deep Learning & Neural Networks",
    description: "Expertise in developing and implementing sophisticated neural networks for complex problem-solving and pattern recognition.",
    icon: Brain,
    technologies: ["TensorFlow", "PyTorch", "Keras", "Neural Networks"],
  },
  {
    name: "Natural Language Processing",
    description: "Advanced capabilities in processing and analyzing human language, enabling intelligent text analysis and generation.",
    icon: Bot,
    technologies: ["BERT", "GPT", "NLP", "Text Analytics"],
  },
  {
    name: "Computer Vision",
    description: "Implementing cutting-edge visual recognition systems for image and video analysis applications.",
    icon: ChartBar,
    technologies: ["OpenCV", "Image Processing", "Object Detection", "Face Recognition"],
  },
  {
    name: "Full Stack Development",
    description: "End-to-end development capabilities for building robust and scalable applications.",
    icon: Code,
    technologies: ["React", "Node.js", "Python", "TypeScript"],
  },
  {
    name: "Cloud Architecture",
    description: "Designing and implementing scalable cloud solutions for optimal performance and reliability.",
    icon: Cloud,
    technologies: ["AWS", "Azure", "GCP", "Kubernetes"],
  },
  {
    name: "Data Engineering",
    description: "Building robust data pipelines and infrastructure for efficient data processing and analysis.",
    icon: Database,
    technologies: ["SQL", "NoSQL", "ETL", "Big Data"],
  },
];

export default Skills;
