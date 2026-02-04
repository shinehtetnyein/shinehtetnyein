import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar } from 'lucide-react';

const Education = () => {
  const educationData = [
    {
      degree: "Bachelor of Computing",
      institution: "Greenwich University",
      period: "2024 - 2025",
      description: "Focused on core areas of computing including software development, databases, web technologies, and system analysis.",
      gpa: ""
    },
    {
      degree: "NCC Level 4 & 5 Diploma in Computing",
      institution: "MST College",
      period: "2022 - 2024",
      description: "Completed foundation and advanced diploma studies covering programming fundamentals, computer systems, networking, and application development.",
      gpa: ""
    }
  ];

  return (
    <section id="education" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Education
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Academic qualifications and training that supported my development as a web developer.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative pl-8 pb-12 last:pb-0"
            >
              {/* Timeline line */}
              {index < educationData.length - 1 && (
                <div className="absolute left-4 top-12 w-0.5 h-full bg-border"></div>
              )}
              
              {/* Timeline dot */}
              <div className="absolute left-2 top-2 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-sm"></div>

              <div className="bg-card border border-border rounded-lg p-6 ml-4 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div className="flex items-center mb-2 md:mb-0">
                    <GraduationCap className="text-primary mr-2" size={20} />
                    <h3 className="text-xl font-semibold text-card-foreground">
                      {edu.degree}
                    </h3>
                  </div>
                  <div className="flex items-center text-muted-foreground">
                    <Calendar size={16} className="mr-1" />
                    <span className="text-sm">{edu.period}</span>
                  </div>
                </div>

                <h4 className="text-lg font-medium text-primary mb-2">
                  {edu.institution}
                </h4>
                
                <p className="text-muted-foreground mb-3">
                  {edu.description}
                </p>

                {edu.gpa && (
                  <div className="flex items-center">
                    <span className="text-sm font-medium text-foreground">
                      GPA: {edu.gpa}
                    </span>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;