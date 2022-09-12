import React, { useContext } from 'react';
import { CartContext } from '../../../../contexts/CartContext';
import { toBRL } from '../../../../utils/toBRL';
import Product from './Product';
import { DescriptionContainer, Card, Title, Selected, Info, Empty } from './styles';

const Description: React.FC = () => {
  const { cartItems } = useContext(CartContext)

  const deliveryPrice = 3.50

  const productsPrice = cartItems.reduce(
    (total, item) =>
      total + (item.price * item.quantity),
    0
  )

  const totalPrice = toBRL(productsPrice + deliveryPrice)

  return (
    <DescriptionContainer>
      <Title>
        Cafés selecionados
      </Title>

      <Card>
        {cartItems.length > 0
          ? <>
            <Selected>
              {cartItems.map(item => {
                return <Product key={item.name} item={item} />
              })}
            </Selected>
            <Info>
              <div>
                <span>
                  Total de itens
                </span>
                <span>{toBRL(productsPrice)}</span>
              </div>
              <div>
                <span>
                  Entrega
                </span>
                <span>{toBRL(deliveryPrice)}</span>
              </div>
              <div>
                <span>
                  Total
                </span>
                <span>
                  {totalPrice}
                </span>
              </div>
            </Info>
            <button type='submit'>
              CONFIRMAR PEDIDO
            </button>
          </>
          : <Empty>
            <h3>
              Ainda não há items no carrinho.
            </h3>
          </Empty>
        }
      </Card>
    </DescriptionContainer>
  );
}

export default Description;