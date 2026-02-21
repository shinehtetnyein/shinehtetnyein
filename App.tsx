import React from 'react';
import '@radix-ui/themes/styles.css';
import { Theme } from '@radix-ui/themes';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './src/pages/Home';
import NotFound from './src/pages/NotFound';
import WeDayDetails from './src/pages/WeDayDetails';
import HotelDetails from './src/pages/HotelDetails';
import SchoolDetails from './src/pages/SchoolDetails';
import POSDetails from './src/pages/POSDetails';

const App: React.FC = () => {
  return (
    <Theme appearance="inherit" radius="large" scaling="100%">
      <Router>
        <main className="min-h-screen font-sans">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects/weday" element={<WeDayDetails />} />
            <Route path="/projects/hotel" element={<HotelDetails />} />
            <Route path="/projects/school" element={<SchoolDetails />} />
            <Route path="/projects/pos" element={<POSDetails />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <ToastContainer
            position="top-right"
            autoClose={3000}
            newestOnTop
            closeOnClick
            pauseOnHover
          />
        </main>
      </Router>
    </Theme>
  );
}

export default App;