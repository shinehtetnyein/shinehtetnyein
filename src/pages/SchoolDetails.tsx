import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import img1 from '../assets/teacher/img1.png';
import img2 from '../assets/teacher/img2.png';
import img3 from '../assets/teacher/img3.png';
import img4 from '../assets/teacher/img4.png';
import img5 from '../assets/student/img3.png';
import img6 from '../assets/student/img4.png';
import WeDayLightbox from '../components/WeDayLightbox';

const SchoolDetails: React.FC = () => {
  const images = [img1, img2, img3, img4, img5, img6];
  const captions = [
    'Teacher conducting a class with interactive tools.',
    'Teacher preparing lesson plans and resources.',
    'Teacher mentoring students during a workshop.',
    'Teacher grading assignments and providing feedback.',
    'Student engaging in collaborative group work.',
    'Student presenting a project in the classroom.'
  ];

  const [current, setCurrent] = useState<number | null>(null);

  return (
    <section className="py-20 bg-background min-h-screen">
      <div className="container mx-auto px-4 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">School Management System — Details</h1>
          <p className="text-muted-foreground">Explore the features and functionalities of the School Management System, designed for teachers and students.</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8"
        >
          {images.map((src, i) => (
            <div key={i} className="flex flex-col items-center">
              <button onClick={() => setCurrent(i)} className="p-0">
                <img src={src} alt={`School Management screenshot ${i + 1}`} className="w-full h-48 object-cover rounded-md shadow-sm hover:scale-105 transition-transform" />
              </button>
              <p className="mt-2 text-sm text-muted-foreground text-center">{captions[i]}</p>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-card border border-border rounded-lg p-6"
        >
          <h2 className="text-xl font-semibold mb-4">Project Highlights</h2>

          <ul className="list-disc pl-5 space-y-3 text-muted-foreground">
            <li>
              <strong>Teacher Management:</strong> Tools for lesson planning, attendance tracking, and performance evaluation.
            </li>
            <li>
              <strong>Student Management:</strong> Features for academic records, attendance, and collaborative learning.
            </li>
            <li>
              <strong>User Management:</strong> Role-based access control for administrators, teachers, and students.
            </li>
            <li>
              <strong>Exam Management:</strong> Scheduling, grading, and result analysis for exams.
            </li>
            <li>
              <strong>Timetable Management:</strong> Automated timetable generation and conflict resolution.
            </li>
            <li>
              <strong>Course Management:</strong> Creation and organization of course materials and syllabi.
            </li>
            <li>
              <strong>Homework Management:</strong> Assignment distribution, submission tracking, and feedback.
            </li>
          </ul>

          <div className="mt-6">
            <Link to="/" className="inline-block px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90">Back to home</Link>
          </div>
        </motion.div>

        {current !== null && (
          <WeDayLightbox
            images={images}
            captions={captions}
            startIndex={current}
            onClose={() => setCurrent(null)}
            onChange={(idx) => setCurrent(idx)}
          />
        )}
      </div>
    </section>
  );
};

export default SchoolDetails;