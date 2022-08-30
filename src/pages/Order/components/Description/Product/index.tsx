import React, { useContext, useEffect, useState } from 'react';
import { CoffeeQuantity, ProductContainer } from './styles';
import { FaRegTrashAlt as Trash } from 'react-icons/fa'
import { toBRL } from '../../../../../utils/toBRL';
import { CartContext } from '../../../../../contexts/CartContext';

interface ProductProps {
  item: {
    name: string,
    image: string,
    price: number,
    quantity: number,
    description: string,
    categories: string[]
  }
}

const Product: React.FC<ProductProps> = ({ item }) => {
  const { removeItemFromCart, addItemToCart, decreaseItemQuantityFromCart } = useContext(CartContext)

  const price = toBRL(item.quantity * item.price)

  function handleIncrementItemQuantity() {
    const coffee = {
      ...item,
      quantity: 1
    }
    addItemToCart(coffee)
  }

  function handleDecreaseItemQuantity() {
    if (item.quantity > 1) {
      decreaseItemQuantityFromCart(item.name)
      return
    }
  }

  return (
    <ProductContainer>
      <img src={item.image} alt="" />
      <div>
        <h4>
          {item.name}
        </h4>
        <nav>
          <CoffeeQuantity>
            <button onClick={() => handleDecreaseItemQuantity()}>-</button>
            <span>{item.quantity}</span>
            <button onClick={() => handleIncrementItemQuantity()}>+</button>
          </CoffeeQuantity>
          <button onClick={() => removeItemFromCart(item.name)}>
            <Trash />
            REMOVER
          </button>
        </nav>
      </div>
      <span>
        {price}
      </span>
    </ProductContainer>
  );
}

export default Product;