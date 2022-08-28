import React from 'react';

import { Header, PaymentContainer } from './styles';
import money from '../../../../assets/money.svg';
import credit_card from '../../../../assets/credit_card.svg';
import debit_card from '../../../../assets/debit_card.svg';
import cash from '../../../../assets/cash.svg';


const Payment: React.FC = () => {
  return (
    <PaymentContainer>
      <Header>
        <img src={money} alt="" />
        <div>
          <span>Pagamento</span>
          <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
        </div>
      </Header>

      <div>
        <button>
          <img src={credit_card} alt="" />
          <span>CARTÃO DE CRÉDITO</span>
        </button>
        <button>
          <img src={debit_card} alt="" />
          <span>CARTÃO DE DÉBITO</span>
        </button>
        <button>
          <img src={cash} alt="" />
          <span>DINHEIRO</span>
        </button>
      </div>
    </PaymentContainer>
  );
}

export default Payment;