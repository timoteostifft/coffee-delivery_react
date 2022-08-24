import React from 'react';

import { Routes, Route } from 'react-router-dom'
import DefaultLayout from './layouts/DefaultLayout';

import Home from './pages/Home'

const Router: React.FC = () => {
  return (
    <Routes>
      <Route path='/' element={<DefaultLayout />}>
        <Route path='/' element={<Home />} />
      </Route>
    </Routes>
  );
}

export default Router;