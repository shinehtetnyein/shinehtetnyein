import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import img1 from '../assets/pos/img1.png';
import img2 from '../assets/pos/img2.png';
import img3 from '../assets/pos/img3.png';
import img4 from '../assets/pos/img4.png';
import img5 from '../assets/pos/img5.png';
import img6 from '../assets/pos/img6.png';
import WeDayLightbox from '../components/WeDayLightbox';

const POSDetails: React.FC = () => {
  const images = [img1, img2, img3, img4, img5, img6];
  const captions = [
    'POS system dashboard overview.',
    'Sales transaction interface.',
    'Inventory management screen.',
    'Billing and receipt generation.',
    'Stock tracking and alerts.',
    'Detailed sales reports and analytics.'
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
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">POS System — Details</h1>
          <p className="text-muted-foreground">Explore the features and functionalities of the POS system, designed for efficient sales and inventory management.</p>
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
                <img src={src} alt={`POS screenshot ${i + 1}`} className="w-full h-48 object-cover rounded-md shadow-sm hover:scale-105 transition-transform" />
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
              <strong>Sales Management:</strong> Streamlined sales transactions with receipt generation.
            </li>
            <li>
              <strong>Inventory Tracking:</strong> Real-time stock updates and low-stock alerts.
            </li>
            <li>
              <strong>Reporting:</strong> Detailed sales analytics and performance reports.
            </li>
            <li>
              <strong>User Roles:</strong> Role-based access for cashiers, managers, and admins.
            </li>
            <li>
              <strong>Integration:</strong> Support for barcode scanners and receipt printers.
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

export default POSDetails;