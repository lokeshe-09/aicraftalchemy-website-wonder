import { motion } from "framer-motion";

const Skills = () => {
  return (
    <div className="min-h-screen pt-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Skills</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We possess a diverse range of technical expertise and industry
            knowledge to deliver exceptional results.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="glass-card p-6 rounded-lg"
            >
              <h2 className="text-2xl font-semibold mb-6">{category.title}</h2>
              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-primary">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-secondary/20 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="bg-primary h-2 rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

const skillCategories = [
  {
    title: "AI & Machine Learning",
    skills: [
      { name: "Deep Learning", level: 90 },
      { name: "Natural Language Processing", level: 85 },
      { name: "Computer Vision", level: 80 },
      { name: "Predictive Analytics", level: 95 },
    ],
  },
  {
    title: "Development & Integration",
    skills: [
      { name: "Full Stack Development", level: 90 },
      { name: "Cloud Architecture", level: 85 },
      { name: "API Integration", level: 95 },
      { name: "DevOps", level: 80 },
    ],
  },
];

export default Skills;