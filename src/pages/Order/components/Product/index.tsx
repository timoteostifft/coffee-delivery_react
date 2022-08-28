import React from 'react';
import { ProductContainer } from './styles';

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
          <button>DIFERENTE</button>
          <button>REMOVER</button>
        </nav>
      </div>
      <span>
        R$ 9,90
      </span>
    </ProductContainer>
  );
}

export default Product;