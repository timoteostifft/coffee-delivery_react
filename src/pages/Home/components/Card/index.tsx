import React from 'react';

import { CardContainer, CardFooter, CoffeeQuantity, CoffeeCategory } from './styles';
import { HiShoppingCart as Cart } from 'react-icons/hi';

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

  const amount = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(coffee.price);

  return (
    <CardContainer>
      <img src={coffee.image} alt="" />
      <section>
        {coffee.categories.map(category => {
          return (
            <CoffeeCategory>{category}</CoffeeCategory>
          )
        })}
      </section>

      <h4>{coffee.name}</h4>
      <p>{coffee.description}</p>

      <CardFooter>
        <span>{amount.slice(0, 2)}
          <strong>{amount.slice(3)}</strong>
        </span>
        <CoffeeQuantity>
          <button>-</button>
          <span>1</span>
          <button>+</button>
        </CoffeeQuantity>
        <button>
          <Cart />
        </button>
      </CardFooter>
    </CardContainer>
  );
}

export default Card;