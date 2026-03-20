import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Phone, Banknote } from 'lucide-react';
import profile_image from '../assets/profile_image.jpg';
const Banner = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-muted">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <div>
              <img
                src={profile_image}
                alt="Professional headshot of Shine Htet Nyein"
                className="w-52 h-52 rounded-2xl mx-auto mb-6 border-4 border-primary/20"
              />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-2">
              Sa Shine Htet Nyein
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-4">
              Web Developer
            </p>

            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-6 text-justify">
              I am a web developer with a strong passion for both front-end and back-end development, specializing in PHP, Laravel, and MySQL. I also have intermediate experience with JavaScript and React. And then, I am familiar with the version control system, GitHub. I am eager to apply my skills in a real-world setting, collaborate with experienced developers, and contribute to building efficient and scalable web applications. I am eager to further enhance my expertise and gain hands-on experience in web development. I am actively seeking an opportunity to apply my skills in web development.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground mb-6">
              <div className="flex items-center space-x-2">
                <Phone size={16} />
                <span>09-978 868 561</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail size={16} />
                <a href="mailto:shinehtetnyein05@gmail.com" className="hover:text-primary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2">
                  shinehtetnyein05@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Banknote size={16} />
                <span>Expected Salary: 800,000 MMK</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center space-x-6 mb-8"
          >
            <a
              href="https://github.com/shinehtetnyein"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
              aria-label="GitHub Profile"
            >
              <Github size={20} />
            </a>
            <a
              href="mailto:shinehtetnyein05@gmail.com"
              className="p-3 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
              aria-label="Email Contact"
            >
              <Mail size={20} />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <a
              href="#contact"
              className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
            >
              Get In Touch
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Banner;