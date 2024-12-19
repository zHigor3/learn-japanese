import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import NotFound from './pages/NotFound/NotFound';
import Layout from './components/Layout/Layout';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout><Home /></Layout>} />
        <Route path="/about" element={<Layout><About /></Layout>} />
        <Route path="*" element={<Layout><NotFound /></Layout>} />
      </Routes>
    </Router>
  );
};

export default App;
