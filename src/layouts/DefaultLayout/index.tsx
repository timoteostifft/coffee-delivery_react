import React from 'react';

import { LayoutContainer } from './styles'

import { Outlet } from 'react-router-dom';
import Header from '../../components/Header';

const DefaultLayout: React.FC = () => {
  return (
    <LayoutContainer>
      <Header />
      <Outlet />
    </LayoutContainer>
  );
}

export default DefaultLayout;