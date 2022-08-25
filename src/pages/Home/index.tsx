import React from 'react';

import { CardsContainer, HomeContainer } from './styles';
import Advertising from './components/Advertising';
import Card from './components/Card';
import { fetchCoffeeTypes } from '../../library/fetchCoffeeTypes';

const arrayOfProducts = fetchCoffeeTypes();

const Home: React.FC = () => {
  return (
    <HomeContainer>
      <Advertising />

      <h2>Nossos Cafés</h2>
      <CardsContainer>
        {arrayOfProducts.map(coffee => {
          return (
            <Card coffee={coffee} key={coffee.name} />
          )
        })}
        {/* <Card name='Expresso Tradicional' /> */}
      </CardsContainer>
    </HomeContainer>
  );
}

export default Home;