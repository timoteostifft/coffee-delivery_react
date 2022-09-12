import React from 'react';

import { Routes, Route } from 'react-router-dom'
import DefaultLayout from './layouts/DefaultLayout';

import Home from './pages/Home'
import Order from './pages/Order';
import Success from './pages/Success';

const Router: React.FC = () => {
  return (
    <Routes>
      <Route path='/' element={<DefaultLayout />}>
        <Route path='/' element={<Home />} />
        <Route path='/order' element={<Order />} />
        <Route path='/success' element={<Success />} />
      </Route>
    </Routes>
  );
}

export default Router;