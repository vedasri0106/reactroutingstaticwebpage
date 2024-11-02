import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const Services = () => {
  return (
    <div>
      <h1>Our Services</h1>
      <nav>
        <ul>
          <li><NavLink to="design">Design</NavLink></li>
          <li><NavLink to="development">Development</NavLink></li>
          <li><NavLink to="data-analysis">Data Analysis</NavLink></li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
};

export default Services;

