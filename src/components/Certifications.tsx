import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Award, X } from 'lucide-react';
import Lvl4 from '../assets/certificate/lvl4.jpeg';
import Lvl5 from '../assets/certificate/lvl5.jpeg';
import Lvl6 from '../assets/certificate/lvl6.jpeg';
import ReactImage from '../assets/certificate/react.jpeg';

interface Certification {
  id: number;
  title: string;
  issuer: string;
  date: string;
  image: string;
  description?: string;
}

const Certifications: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  // Add your certifications and degrees here
  const certifications: Certification[] = [
    {
      id: 1,
      title: "Bachelor of Science in Computing",
      issuer: "University of Greenwich",
      date: "2026",
      image: Lvl6,
      description: "Bachelor of science with First Class Honours degree in Computing from the University of Greenwich"
    },
    {
      id: 2,
      title: "Level 5 Diploma in Computing",
      issuer: "NCC Education",
      date: "2025",
      image: Lvl5,
      description: "Advanced diploma in Computing covering software engineering, databases, and web development"
    },
    {
      id: 3,
      title: "Level 4 Diploma in Computing",
      issuer: "NCC Education",
      date: "2024",
      image: Lvl4,
      description: "Diploma in Computing with a focus on software development and programming concepts"
    },
    {
      id: 4,
      title: "Professional React Course",
      issuer: "CODE LAB",
      date: "2024",
      image: ReactImage,
      description: "Professional certification in React development"
    }
  ];

  const next = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % certifications.length);
  };

  const prev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? certifications.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  if (certifications.length === 0) {
    return null;
  }

  return (
    <section id="certifications" className="py-20 bg-gradient-to-b from-muted/5 to-muted/10">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center mb-4">
            <Award className="text-primary mr-2" size={32} />
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Certifications & Degrees</h2>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Professional credentials and academic achievements
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          {/* Carousel Container */}
          <div className="relative bg-card border border-border rounded-xl overflow-hidden shadow-lg">
            {/* Image Carousel */}
            <div className="relative w-full overflow-hidden bg-muted/50">
              <div className="relative w-full min-h-[500px] md:min-h-[600px] flex items-center justify-center">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={cert.id}
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity: index === currentIndex ? 1 : 0,
                      visibility: index === currentIndex ? 'visible' : 'hidden',
                    }}
                    transition={{ duration: 0.5 }}
                    className="absolute inset-0"
                  >
                    <img
                      src={cert.image}
                      alt={cert.title}
                      onClick={() => setIsLightboxOpen(true)}
                      className="w-full h-auto object-contain cursor-pointer hover:opacity-90 transition-opacity relative z-10"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
                  </motion.div>
                ))}
              </div>

              {/* Navigation Buttons */}
              <button
                onClick={prev}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-primary/90 hover:bg-primary text-white p-2 rounded-full transition-all"
                aria-label="Previous certification"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={next}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-primary/90 hover:bg-primary text-white p-2 rounded-full transition-all"
                aria-label="Next certification"
              >
                <ChevronRight size={24} />
              </button>

              {/* Slide Counter */}
              <div className="absolute top-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
                {currentIndex + 1} / {certifications.length}
              </div>
            </div>

            {/* Content Section */}
            <div className="p-6 md:p-8">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  {certifications[currentIndex].title}
                </h3>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                  <p className="text-primary font-semibold">{certifications[currentIndex].issuer}</p>
                  <p className="text-muted-foreground text-sm">{certifications[currentIndex].date}</p>
                </div>
                {certifications[currentIndex].description && (
                  <p className="text-muted-foreground">
                    {certifications[currentIndex].description}
                  </p>
                )}
              </motion.div>
            </div>

            {/* Dot Navigation */}
            <div className="flex justify-center gap-2 p-4 bg-muted/5">
              {certifications.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`h-2 rounded-full transition-all ${
                    index === currentIndex
                      ? 'bg-primary w-8'
                      : 'bg-muted-foreground/30 w-2 hover:bg-muted-foreground/50'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </motion.div>

        {/* Grid View for Mobile */}
        {/* <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12"
        >
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              whileHover={{ y: -5 }}
              onClick={() => setCurrentIndex(index)}
              className={`p-4 rounded-lg border cursor-pointer transition-all ${
                index === currentIndex
                  ? 'border-primary bg-primary/5'
                  : 'border-border hover:border-primary/50'
              }`}
            >
              <h4 className="font-semibold text-foreground mb-1">{cert.title}</h4>
              <p className="text-sm text-muted-foreground">{cert.issuer}</p>
              <p className="text-xs text-muted-foreground mt-1">{cert.date}</p>
            </motion.div>
          ))}
        </motion.div> */}
      </div>

      {/* Lightbox Modal */}
      {isLightboxOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsLightboxOpen(false)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-4xl max-h-[90vh] flex flex-col items-center"
          >
            <button
              onClick={() => setIsLightboxOpen(false)}
              className="absolute -top-10 right-0 text-white hover:text-gray-300 transition-colors z-10"
              aria-label="Close lightbox"
            >
              <X size={32} />
            </button>

            <img
              src={certifications[currentIndex].image}
              alt={certifications[currentIndex].title}
              className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl"
            />

            <div className="mt-4 text-center text-white">
              <h3 className="text-xl font-semibold">{certifications[currentIndex].title}</h3>
              <p className="text-gray-300">{certifications[currentIndex].issuer}</p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

export default Certifications;
