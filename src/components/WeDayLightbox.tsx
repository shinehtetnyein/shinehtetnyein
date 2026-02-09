import React, { useEffect } from 'react';

type Props = {
  images: string[];
  captions?: string[];
  startIndex: number;
  onClose: () => void;
  onChange: (index: number) => void;
};

const WeDayLightbox: React.FC<Props> = ({ images, captions = [], startIndex, onClose, onChange }) => {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onChange((startIndex + 1) % images.length);
      if (e.key === 'ArrowLeft') onChange((startIndex - 1 + images.length) % images.length);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [images.length, onChange, onClose, startIndex]);

  const prev = () => onChange((startIndex - 1 + images.length) % images.length);
  const next = () => onChange((startIndex + 1) % images.length);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4">
      <button
        aria-label="Close"
        onClick={onClose}
        className="absolute top-6 right-6 text-white text-xl bg-black/40 rounded-full w-10 h-10 flex items-center justify-center"
      >
        ×
      </button>

      <button
        aria-label="Previous"
        onClick={prev}
        className="absolute left-6 text-white text-3xl p-2 bg-black/30 rounded-full hidden sm:flex items-center justify-center"
      >
        ‹
      </button>

      <div className="max-w-[90%] max-h-[85%] flex flex-col items-center">
        <img
          src={images[startIndex]}
          alt={captions[startIndex] || `screenshot ${startIndex + 1}`}
          className="max-w-full max-h-[80vh] object-contain rounded-md shadow-lg"
        />
        {captions[startIndex] && (
          <div className="mt-3 text-sm text-muted-foreground bg-card/30 px-3 py-2 rounded-md">
            {captions[startIndex]}
          </div>
        )}
      </div>

      <button
        aria-label="Next"
        onClick={next}
        className="absolute right-6 text-white text-3xl p-2 bg-black/30 rounded-full hidden sm:flex items-center justify-center"
      >
        ›
      </button>
    </div>
  );
};

export default WeDayLightbox;
