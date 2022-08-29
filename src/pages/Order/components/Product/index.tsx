import React from 'react';
import { CoffeeQuantity, ProductContainer } from './styles';
import { FaRegTrashAlt as Trash } from 'react-icons/fa'

import base from '../../../../assets/coffees/arabe.svg'

const Product: React.FC = () => {
  return (
    <ProductContainer>
      <img src={base} alt="" />
      <div>
        <h4>
          Expresso Tradicional
        </h4>
        <nav>
          <CoffeeQuantity>
            <button>-</button>
            <span>1</span>
            <button>+</button>
          </CoffeeQuantity>
          <button>
            <Trash />
            REMOVER
          </button>
        </nav>
      </div>
      <span>
        R$ 9,90
      </span>
    </ProductContainer>
  );
}

export default Product;