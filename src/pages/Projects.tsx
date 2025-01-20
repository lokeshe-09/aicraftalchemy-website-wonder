import { motion } from "framer-motion";

const Projects = () => {
  return (
    <div className="min-h-screen pt-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Projects</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our portfolio of successful AI implementations and digital
            transformations.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="glass-card p-6 rounded-lg"
            >
              <div className="aspect-video bg-secondary/20 rounded-lg mb-4" />
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-muted-foreground mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
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
  );
};

const projects = [
  {
    title: "AI-Powered Analytics Platform",
    description:
      "A comprehensive analytics solution using machine learning to provide predictive insights.",
    technologies: ["Python", "TensorFlow", "React", "AWS"],
  },
  {
    title: "Smart Process Automation",
    description:
      "Automated workflow system with AI-driven decision making capabilities.",
    technologies: ["Node.js", "Python", "Docker", "Azure"],
  },
  {
    title: "Intelligent Customer Service",
    description:
      "AI chatbot system with natural language processing for customer support.",
    technologies: ["NLP", "Python", "React", "GCP"],
  },
];

export default Projects;