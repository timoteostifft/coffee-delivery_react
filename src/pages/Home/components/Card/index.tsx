import React, { useContext, useState } from 'react';

import { CardContainer, CardFooter, CoffeeQuantity, CoffeeCategory } from './styles';
import { HiShoppingCart as Cart } from 'react-icons/hi';
import { CartContext } from '../../../../contexts/CartContext';
import { toBRL } from '../../../../utils/toBRL';

interface CardProps {
  coffee: {
    name: string;
    description: string;
    categories: string[];
    image: string;
    price: number;
  }
}

const Card: React.FC<CardProps> = ({ coffee }: CardProps) => {

  const { addItemToCart } = useContext(CartContext)

  const price = toBRL(coffee.price)

  const [quantity, setQuantity] = useState(1)

  function increaseQuantity() {
    setQuantity(state => {
      return state + 1
    })
  }

  function decreaseQuantity() {
    if (quantity > 1) {
      setQuantity(state => {
        return state - 1
      })
    }
  }

  function handleAddNewItemToCart() {
    const item = {
      ...coffee,
      quantity
    }
    addItemToCart(item)
    setQuantity(1)
  }

  return (
    <CardContainer>
      <img src={coffee.image} alt="" />
      <section>
        {coffee.categories.map(category => {
          return (
            <CoffeeCategory key={category}>{category}</CoffeeCategory>
          )
        })}
      </section>

      <h4>{coffee.name}</h4>
      <p>{coffee.description}</p>

      <CardFooter>
        <span>{price.slice(0, 2)}
          <strong>{price.slice(3)}</strong>
        </span>
        <CoffeeQuantity>
          <button onClick={() => decreaseQuantity()}>-</button>
          <span>{quantity}</span>
          <button onClick={() => increaseQuantity()}>+</button>
        </CoffeeQuantity>
        <button onClick={() => handleAddNewItemToCart()}>
          <Cart />
        </button>
      </CardFooter>
    </CardContainer>
  );
}

export default Card;