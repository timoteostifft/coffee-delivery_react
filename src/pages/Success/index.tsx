import React, { useContext, useEffect } from 'react';
import { Info, SuccessContainer } from './styles';

import delivery_man from '../../assets/delivery_man.svg'
import { MdPlace as Place, MdAttachMoney as Cash } from 'react-icons/md'
import { RiTimer2Fill as Timer } from 'react-icons/ri'
import { CartContext } from '../../contexts/CartContext';


const Success: React.FC = () => {

  const { finalizedOrders } = useContext(CartContext)

  const { address, items, payment } = finalizedOrders[finalizedOrders.length - 1]

  // useEffect(() => {
  //   console.log(finalizedOrders.length - 1)
  // }, [])

  return (
    <SuccessContainer>
      <section>
        <span>Uhu! Pedido confirmado</span>
        <p>Agora é só aguardar que logo o café chegará até você</p>
        <div>
          <div>
            <Info>
              <Place />
              <div>
                <span>Entrega em <strong> {address.street}, {address.number}</strong></span>
                <span>{address.district} - {address.city}, {address.uf}</span>
              </div>
            </Info>
            <Info>
              <Timer />
              <div>
                <span>Previsão de entrega</span>
                <strong>20 min - 30 min</strong>
              </div>
            </Info>
            <Info>
              <Cash />
              <div>
                <span>Pagamento na entrega</span>
                {payment === 'credit_card' && (
                  <strong>Cartão de Crédito</strong>
                )}
                {payment === 'debit_card' && (
                  <strong>Cartão de Débito</strong>
                )}
                {payment === 'cash' && (
                  <strong>Dinheiro</strong>
                )}
              </div>
            </Info>
          </div>
        </div>
      </section>
      <img src={delivery_man} alt="" />
    </SuccessContainer>
  );
}

export default Success;