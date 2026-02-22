import React from 'react';
import { motion } from 'framer-motion';
import { Code, Users, Lightbulb, MessageCircle, Target, Clock } from 'lucide-react';

const Skills = () => {
  const programmingLanguages = [
    { name: 'HTML/CSS', level: 80 },
    { name: 'JavaScript', level: 80 },
    { name: 'React', level: 80 },
    { name: 'PHP', level: 80 },
    { name: 'Laravel', level: 80 },
    { name: 'Git & Github', level: 80 },
    { name: 'MySQL', level: 80 },
    { name: 'Node.js', level: 50 },
    { name: 'Python', level: 50 },
    { name: 'Java', level: 50 },
    { name: 'TypeScript', level: 60 },

  ];

  const softSkills = [
    {
      icon: <Users size={24} />,
      title: 'Team Collaboration',
      description: 'Excellent at working in cross-functional teams and fostering collaborative environments.'
    },
    {
      icon: <MessageCircle size={24} />,
      title: 'Communication',
      description: 'Strong verbal and written communication skills with stakeholders at all levels.'
    },
    {
      icon: <Lightbulb size={24} />,
      title: 'Problem Solving',
      description: 'Creative approach to complex technical challenges with analytical thinking.'
    },
    {
      icon: <Target size={24} />,
      title: 'Goal-Oriented',
      description: 'Focused on delivering results and meeting project objectives efficiently.'
    },
    {
      icon: <Clock size={24} />,
      title: 'Time Management',
      description: 'Excellent at prioritizing tasks and managing multiple projects simultaneously.'
    }
  ];

  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Skills & Expertise
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my technical proficiencies and soft skills.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Programming Languages */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center mb-8">
              <Code className="text-primary mr-3" size={28} />
              <h3 className="text-2xl font-bold text-foreground">
                Programming Languages & Technologies
              </h3>
            </div>

            <div className="space-y-6">
              {programmingLanguages.map((skill, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-foreground">{skill.name}</span>
                    <span className="text-sm text-muted-foreground">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-border rounded-full h-2">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="bg-primary h-2 rounded-full"
                    ></motion.div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Soft Skills */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center mb-8">
              <Users className="text-primary mr-3" size={28} />
              <h3 className="text-2xl font-bold text-foreground">
                Soft Skills
              </h3>
            </div>

            <div className="space-y-6">
              {softSkills.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-card border border-border rounded-lg p-6 hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start space-x-4">
                    <div className="text-primary mt-1">
                      {skill.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-card-foreground mb-2">
                        {skill.title}
                      </h4>
                      <p className="text-muted-foreground text-sm">
                        {skill.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;