import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, Check, BookOpen } from 'lucide-react';

const WorkExperience: React.FC = () => {
  return (
    <section id="work" className="py-20 bg-muted/10">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Work Experience</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Professional roles and responsibilities demonstrating hands-on experience in hardware support and React development.
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto space-y-8">

          {/* Teaching & Guide */}
          <motion.section
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="bg-card border border-border rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
          >
            <header className="flex items-center mb-4">
              <div className="p-2 bg-primary/10 text-primary rounded-md mr-3">
                <BookOpen size={20} />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-card-foreground">Teaching & Guide</h3>
                <p className="text-sm text-muted-foreground">2023 - Present</p>
              </div>
            </header>

            <div className="text-muted-foreground space-y-3">
              <p className="mb-2">Practical, hands-on teaching and student mentoring across the following areas:</p>
              <ul className="list-none space-y-2">
                <li className="flex items-start">
                  <Check size={16} className="text-primary mr-3 mt-1" />
                  <span>Computer Systems & IT Fundamentals</span>
                </li>
                <li className="flex items-start">
                  <Check size={16} className="text-primary mr-3 mt-1" />
                  <span>Office Software (Word, Excel, PowerPoint)</span>
                </li>
                <li className="flex items-start">
                  <Check size={16} className="text-primary mr-3 mt-1" />
                  <span>Web Development: HTML, CSS, JavaScript, Java and Python</span>
                </li>
              </ul>
            </div>
          </motion.section>

                    {/* React Developer */}
          <motion.article
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="bg-card border border-border rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
          >
            <header className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-primary/10 text-primary rounded-md">
                  <Briefcase size={20} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-card-foreground">React Developer</h3>
                  <p className="text-sm text-muted-foreground">Myday Thukywal Co.Ltd • 2025 - 2026</p>
                </div>
              </div>

              <div className="flex items-center mt-4 md:mt-0 text-muted-foreground">
                <Calendar size={14} className="mr-2" />
                <span className="text-sm">Frontend Development — React</span>
              </div>
            </header>

            <div className="text-muted-foreground space-y-3">
              <ul className="list-none space-y-2">
                <li className="flex items-start">
                  <Check size={16} className="text-primary mr-3 mt-1" />
                  <span>Built responsive, user-centric web applications using React.js with modular component architecture.</span>
                </li>
                <li className="flex items-start">
                  <Check size={16} className="text-primary mr-3 mt-1" />
                  <span>Managed application state efficiently to maintain performance and scalability.</span>
                </li>
                <li className="flex items-start">
                  <Check size={16} className="text-primary mr-3 mt-1" />
                  <span>Integrated and consumed REST APIs, ensuring smooth data communication and error handling.</span>
                </li>
                <li className="flex items-start">
                  <Check size={16} className="text-primary mr-3 mt-1" />
                  <span>Implemented client-side routing for dynamic single-page application behavior.</span>
                </li>
                <li className="flex items-start">
                  <Check size={16} className="text-primary mr-3 mt-1" />
                  <span>Optimized frontend performance through code splitting and efficient rendering practices.</span>
                </li>
                <li className="flex items-start">
                  <Check size={16} className="text-primary mr-3 mt-1" />
                  <span>Collaborated with designers and backend teams to deliver production-ready, scalable solutions.</span>
                </li>
              </ul>
            </div>
          </motion.article>


                    {/* Junior Graphic Designer & IT Support */}
          <motion.article
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="bg-card border border-border rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
          >
            <header className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-primary/10 text-primary rounded-md">
                  <Briefcase size={20} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-card-foreground">Junior Graphic Designer</h3>
                  <p className="text-sm text-muted-foreground">Yangon Shwe Hpar See Convenience Store • 6 months (2023)</p>
                </div>
              </div>

              <div className="flex items-center mt-4 md:mt-0 text-muted-foreground">
                <Calendar size={14} className="mr-2" />
                <span className="text-sm">Graphic Design & IT Support</span>
              </div>
            </header>

            <div className="text-muted-foreground space-y-3">
              <ul className="list-none space-y-2">
                <li className="flex items-start">
                  <Check size={16} className="text-primary mr-3 mt-1" />
                  <span>Created visually appealing designs for promotional materials, including flyers and banners.</span>
                </li>
                <li className="flex items-start">
                  <Check size={16} className="text-primary mr-3 mt-1" />
                  <span>Utilized design software such as Adobe Photoshop and Illustrator to produce high-quality graphics.</span>
                </li>
                <li className="flex items-start">
                  <Check size={16} className="text-primary mr-3 mt-1" />
                  <span>Provided IT support by troubleshooting hardware and software issues for store operations.</span>
                </li>
                <li className="flex items-start">
                  <Check size={16} className="text-primary mr-3 mt-1" />
                  <span>Assisted in maintaining the store's computer systems and ensuring smooth daily operations.</span>
                </li>
              </ul>
            </div>
          </motion.article>

          
          {/* Computer Hardware Intern */}
          <motion.article
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="bg-card border border-border rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
          >
            <header className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-primary/10 text-primary rounded-md">
                  <Briefcase size={20} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-card-foreground">Computer Hardware Intern</h3>
                  <p className="text-sm text-muted-foreground">Laptop For You • 3 months (2023)</p>
                </div>
              </div>

              <div className="flex items-center mt-4 md:mt-0 text-muted-foreground">
                <Calendar size={14} className="mr-2" />
                <span className="text-sm">Internship — Hardware Support</span>
              </div>
            </header>

            <div className="text-muted-foreground space-y-3">
              <ul className="list-none space-y-2">
                <li className="flex items-start">
                  <Check size={16} className="text-primary mr-3 mt-1" />
                  <span>Installed and configured operating systems, drivers, and application software.</span>
                </li>
                <li className="flex items-start">
                  <Check size={16} className="text-primary mr-3 mt-1" />
                  <span>Troubleshot and repaired computer hardware components and peripheral devices.</span>
                </li>
                <li className="flex items-start">
                  <Check size={16} className="text-primary mr-3 mt-1" />
                  <span>Assisted in assembling, upgrading, and maintaining laptop systems.</span>
                </li>
                <li className="flex items-start">
                  <Check size={16} className="text-primary mr-3 mt-1" />
                  <span>Identified and resolved common system performance and boot issues.</span>
                </li>
                <li className="flex items-start">
                  <Check size={16} className="text-primary mr-3 mt-1" />
                  <span>Supported end users with basic technical support and issue resolution.</span>
                </li>
              </ul>
            </div>
          </motion.article>






        </div>
      </div>
    </section>
  );
};

export default WorkExperience;