import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
 
import Home from './Home';
 
import About from './About';
 
import Services from './Services';
import ServiceDetail from './ServiceDetail';
import Contact from './Contact';
import NotFound from './NotFound';


const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />}>
            <Route path=":serviceName" element={<ServiceDetail />} />
          </Route>
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
