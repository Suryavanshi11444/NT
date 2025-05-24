import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from '../layout/Layout';
import Home from '../views/Home';
import About from '../views/About';

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;