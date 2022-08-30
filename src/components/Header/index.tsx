import React, { useContext } from 'react';

import { HeaderContainer } from './styles';
import logo from '../../assets/logo.svg';
import { NavLink } from 'react-router-dom';
import cart from '../../assets/cart.svg';
import locale from '../../assets/locale.svg';
import { CartContext } from '../../contexts/CartContext';

const Header: React.FC = () => {

  const { cartItems } = useContext(CartContext)

  const cartItemsQuantity = cartItems.reduce((
    total, item
  ) => total + item.quantity, 0)

  return (
    <HeaderContainer>
      <NavLink to='/' title='Carrinho'>
        <img src={logo} alt="" />
      </NavLink>

      <nav>
        {cartItemsQuantity > 0 && (
          <span>
            {cartItemsQuantity}
          </span>
        )}
        <NavLink to='/' title='Carrinho'>
          <img src={locale} />
          <span>Porto Alegre, RS</span>
        </NavLink>
        <NavLink to='/order' title='Carrinho'>
          <img src={cart} />
        </NavLink>
      </nav>
    </HeaderContainer>
  );
}

export default Header;