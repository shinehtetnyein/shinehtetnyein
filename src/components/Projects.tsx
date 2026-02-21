import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Calendar, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import PlanncoImage from "../assets/plannco.png";
import MovieImage from "../assets/movie.png";
import HospitalImage from "../assets/hospital.png";
import HotelImage from "../assets/hotel/hotel3.jpeg"
import PosImage from "../assets/pos/img4.png";
const Projects = () => {
  const projects = [
    {
      title: "Plannco Home Decoration",
      description: "Designed a responsive and user-friendly home decoration website using semantic HTML, modern CSS best practices, and JavaScript, implementing interactive features, dynamic UI elements, and a mobile-first responsive layout.",
      image: PlanncoImage,
      technologies: ["HTML", "CSS", "JavaScript"],
      liveUrl: "https://shinehtetnyein.github.io/plannco/",
      githubUrl: "#",
      duration: "",
      teamSize: "",
      role: "Frontend Developer"
    },
    {
      title: "Mention Hospital",
      description: "Designed and developed a responsive hospital website using HTML, CSS, and JavaScript, featuring intuitive navigation, interactive components, and mobile-first design. ",
      image: HospitalImage,
      technologies: ["HTML", "CSS", "JavaScript"],
      liveUrl: "https://shinehtetnyein.github.io/hospital_pj/",
      githubUrl: "#",
      duration: "",
      teamSize: "",
      role: "Frontend Developer"
    },
    {
      title: "Movies Project (React JS)",
      description: "Built a responsive React application with reusable functional components, state management using hooks, and integration with movie data APIs for search and filtering.",
      image: MovieImage,
      technologies: ["React", "Redux", "JavaScript", "REST API"],
      liveUrl: "https://github.com/shinehtetnyein/movie_project",
      githubUrl: "#",
      duration: "",
      teamSize: "",
      role: "Frontend Developer"
    },
    {
      title: "We Day Social Commerce Admin Panel (React JS)",
      description: "Developed an admin panel for a social commerce platform with reusable admin components, state management, protected routes, and dashboard visualizations to improve admin workflows.",
      image: "https://images.unsplash.com/photo-1559526324-593bc073d938?w=800&h=400&fit=crop",
      technologies: ["React", "JavaScript"],
      liveUrl: "#",
      githubUrl: "#",
      detailsUrl: "/projects/weday",
      duration: "",
      teamSize: "",
      role: "Frontend Developer"
    },
    {
      title: "Hotel Booking Management System (PHP & Laravel)",
      description: "Built booking logic with check-in/check-out validation, room availability management, and an admin dashboard for managing reservations using Laravel.",
      image: HotelImage,
      technologies: ["PHP", "Laravel", "MySQL"],
      liveUrl: "#",
      githubUrl: "#",
      detailsUrl: "/projects/hotel",
      duration: "",
      teamSize: "",
      role: "Backend Developer"
    },
    {
      title: "School Management System (Vue JS & Laravel)",
      description: "Developed frontend components using Vue.js and RESTful APIs using Laravel for student, teacher, and class management including attendance and academic records.",
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&h=400&fit=crop",
      technologies: ["Vue.js", "Laravel", "MySQL"],
      liveUrl: "#",
      githubUrl: "#",
      detailsUrl: "/projects/school",
      duration: "",
      teamSize: "",
      role: "Frontend / API Integration"
    },
    {
      title: "POS System (PHP)",
      description: "Implemented sales transaction and billing functionality with inventory and stock management and reporting features using PHP and MySQL.",
      image: PosImage,
      technologies: ["PHP", "MySQL"],
      liveUrl: "#",
      githubUrl: "#",
      detailsUrl: "/projects/pos",
      duration: "",
      teamSize: "",
      role: "Backend Developer"
    },
    {
      title: "Hiking App (Kotlin & React Native)",
      description: "Developed a cross-platform mobile app with React Native and integrated Android-specific features using Kotlin, including user authentication and activity tracking.",
      image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&h=400&fit=crop",
      technologies: ["React Native", "Kotlin"],
      liveUrl: "https://github.com/shinehtetnyein/m_hike",
      githubUrl: "#",
      duration: "",
      teamSize: "",
      role: "Mobile Developer"
    },
    {
      title: "Homeless UI Design (Axure)",
      description: "Created wireframes and interactive prototypes with Axure, focusing on user-centered navigation flows, accessibility, and iterative UI improvements.",
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=400&fit=crop",
      technologies: ["Axure", "UI/UX"],
      liveUrl: "https://ig7bih.axshare.com/?g=4",
      githubUrl: "#",
      duration: "",
      teamSize: "",
      role: "UI/UX Designer"
    },
  ];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Project Experience
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of projects developed during training and professional work.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.12 }}
              viewport={{ once: true }}
              className="bg-card border border-border rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={`${project.title} project screenshot`}
                  className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-card-foreground mb-3">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>

                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-md font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="space-y-2 mb-6 text-sm text-muted-foreground">
                  {project.duration && (
                    <div className="flex items-center">
                      <Calendar size={14} className="mr-2" />
                      <span>Duration: {project.duration}</span>
                    </div>
                  )}
                  {project.teamSize && (
                    <div className="flex items-center">
                      <Users size={14} className="mr-2" />
                      <span>Team: {project.teamSize}</span>
                    </div>
                  )}
                  {project.role && (
                    <div>
                      <span className="font-medium">Role: {project.role}</span>
                    </div>
                  )}
                </div>

                <div className="flex space-x-4">
                  {project.detailsUrl ? (
                    <Link
                      to={project.detailsUrl}
                      className="flex items-center px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors text-sm font-medium focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                    >
                      <ExternalLink size={16} className="mr-2" />
                      View Details
                    </Link>
                  ) : (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors text-sm font-medium focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                    >
                      <ExternalLink size={16} className="mr-2" />
                      View Details
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;