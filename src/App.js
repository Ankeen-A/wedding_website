// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import RSVP from './pages/RSVP';
import Schedule from './pages/Schedule';
import FAQ from './pages/FAQ';
import Explore from './pages/Explore';


const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/RSVP" element={<RSVP />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/FAQ" element={<FAQ />} />
        <Route path="/Explore" element={<Explore />} />
      </Routes>
    </Router>
  );
};

export default App;
