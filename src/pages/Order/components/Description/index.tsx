import React from 'react';
import Product from '../Product';
import { DescriptionContainer, Card, Title, Selected, Info } from './styles';

const Description: React.FC = () => {
  return (
    <DescriptionContainer>
      <Title>
        Cafés selecionados
      </Title>

      <Card>
        <Selected>
          <Product />
          <Product />
          {/* <Product />
          <Product />
          <Product />
          <Product /> */}
        </Selected>
        <Info>
          <div>
            <span>
              Total de itens
            </span>
            <span>R$ 29,70</span>
          </div>
          <div>
            <span>
              Entrega
            </span>
            <span>R$ 3,50</span>
          </div>
          <div>
            <span>
              Total
            </span>
            <span>
              R$ 33,20
            </span>
          </div>
        </Info>

        <button>
          CONFIRMAR PEDIDO
        </button>
      </Card>
    </DescriptionContainer>
  );
}

export default Description;