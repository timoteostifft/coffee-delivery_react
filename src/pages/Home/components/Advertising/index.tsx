import React from 'react';

import { AdvertisingContainer } from './styles';
import coffee from '../../../../assets/coffee.svg';
import { HiShoppingCart as Cart } from 'react-icons/hi';
import { BsBoxSeam as Box } from 'react-icons/bs';
import { MdTimer as Timer } from 'react-icons/md';
import { CgCoffee as Coffee } from 'react-icons/cg';

const Advertising: React.FC = () => {
  return (
    <AdvertisingContainer>
      <div>
        <span>
          Encontre o café perfeito para qualquer hora do dia
        </span>
        <p>
          Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora
        </p>

        <section>
          <div>
            <Cart />
            <span>Compra simples e segura</span>
          </div>
          <div>
            <Box />
            <span>Embalagem mantém o café intacto</span>
          </div>
          <div>
            <Timer />
            <span>Entrega rápida e rastreada</span>
          </div>
          <div>
            <Coffee />
            <span>O café chega fresquinho até você</span>
          </div>
        </section>
      </div>
      <img src={coffee} alt="" />
    </AdvertisingContainer>
  );
}

export default Advertising;