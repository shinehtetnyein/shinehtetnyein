import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import img1 from '../assets/weday/1.png';
import img2 from '../assets/weday/2.png';
import img3 from '../assets/weday/3.png';
import img4 from '../assets/weday/4.png';
import WeDayLightbox from '../components/WeDayLightbox';

const WeDayDetails: React.FC = () => {
  const images = [img1, img2, img3, img4];
  const captions = [
    'Dashboard overview with sales and user metrics.',
    'Product management panel showing edit flows and validations.',
    'Order detail view with status updates and admin actions.',
    'User management and role controls with search and filters.'
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
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">We Day Social — Project Details</h1>
          <p className="text-muted-foreground">Admin panel & social commerce features — screenshots and role details.</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8"
        >
          {images.map((src, i) => (
            <button key={i} onClick={() => setCurrent(i)} className="p-0">
              <img src={src} alt={`We Day screenshot ${i + 1}`} className="w-full h-56 object-cover rounded-md shadow-sm hover:scale-105 transition-transform" />
            </button>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-card border border-border rounded-lg p-6"
        >
          <h2 className="text-xl font-semibold mb-4">My Role & Experience</h2>

          <ul className="list-disc pl-5 space-y-3 text-muted-foreground">
            <li>
              <strong>Frontend Developer (React):</strong> Built modular, reusable components, used hooks for state and effects, implemented client-side routing, and ensured responsive behavior across breakpoints.
            </li>
            <li>
              <strong>Backend Communication:</strong> Integrated REST endpoints, handled token-based authentication, implemented protected routes and graceful error handling for network failures.
            </li>
            <li>
              <strong>UI/UX Implementation:</strong> Translated wireframes into pixel-accurate UI, implemented loading states and micro-interactions, and followed accessibility best practices (semantic HTML, focus management).
            </li>
            <li>
              <strong>Collaboration & Process:</strong> Participated in backlog grooming, pair programming and code reviews, coordinated API contracts with backend engineers, and iterated on designs with product and designers.
            </li>
            <li>
              <strong>Quality & Performance:</strong> Wrote unit/integration-friendly components, optimized image assets, and added lazy-loading where appropriate to improve perceived performance.
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

export default WeDayDetails;
