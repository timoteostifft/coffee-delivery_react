import React from 'react';

import { HeaderContainer } from './styles';
import logo from '../../assets/logo.svg';
import { NavLink } from 'react-router-dom';
import cart from '../../assets/cart.svg';
import locale from '../../assets/locale.svg';

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <img src={logo} alt="" />

      <nav>
        <NavLink to='/' title='Carrinho'>
          <img src={locale} />
          <span>Porto Alegre, RS</span>
        </NavLink>
        <NavLink to='/' title='Carrinho'>
          <img src={cart} />
        </NavLink>
      </nav>
    </HeaderContainer>
  );
}

export default Header;