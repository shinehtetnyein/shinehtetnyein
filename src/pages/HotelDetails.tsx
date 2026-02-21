import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import img1 from '../assets/hotel/hotel1.jpeg';
import img2 from '../assets/hotel/hotel2.jpeg';
import img3 from '../assets/hotel/hotel3.jpeg';
import img4 from '../assets/hotel/hotel4.jpeg';
import WeDayLightbox from '../components/WeDayLightbox';

const HotelDetails: React.FC = () => {
  const images = [img1, img2, img3, img4];
  const captions = [
    'Hotel lobby with modern design and amenities.',
    'Luxurious suite with a stunning city view.',
    'Gourmet dining area with exquisite decor.',
    'Relaxing spa and wellness center facilities.'
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
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">Hotel Project — Details</h1>
          <p className="text-muted-foreground">Explore the luxurious features and amenities of our hotel project.</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8"
        >
          {images.map((src, i) => (
            <div key={i} className="flex flex-col items-center">
              <button onClick={() => setCurrent(i)} className="p-0">
                <img src={src} alt={`Hotel screenshot ${i + 1}`} className="w-full h-56 object-cover rounded-md shadow-sm hover:scale-105 transition-transform" />
              </button>
              <p className="mt-2 text-sm text-muted-foreground">{captions[i]}</p>
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
              <strong>Architectural Design:</strong> Modern and sustainable design principles ensuring comfort and luxury.
            </li>
            <li>
              <strong>Interior Features:</strong> Premium furnishings, smart room controls, and elegant decor.
            </li>
            <li>
              <strong>Amenities:</strong> State-of-the-art gym, rooftop pool, and conference facilities.
            </li>
            <li>
              <strong>Customer Experience:</strong> Personalized services, multilingual staff, and 24/7 support.
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

export default HotelDetails;