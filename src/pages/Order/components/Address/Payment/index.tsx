import React from 'react';

import { Header, PaymentContainer, RadioButton, RadioButtons } from './styles';
import money from '../../../../../assets/money.svg';
import credit_card from '../../../../../assets/credit_card.svg';
import debit_card from '../../../../../assets/debit_card.svg';
import cash from '../../../../../assets/cash.svg';
import { useFormContext } from 'react-hook-form';


const Payment: React.FC = () => {
  const { register, formState: { errors }, watch } = useFormContext()

  let selectedRadioButton = watch('payment')

  return (
    <PaymentContainer>
      <Header>
        <img src={money} alt="" />
        <div>
          <span>Pagamento</span>
          <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
        </div>
      </Header>

      <RadioButtons>
        <RadioButton htmlFor="credit_card"
          background={selectedRadioButton === 'credit_card' ? 'hover' : 'default'}
          border={selectedRadioButton === 'credit_card' ? 'hover' : 'default'}>
          <img src={credit_card} alt="" />
          <span>CARTÃO DE CRÉDITO</span>
          <input {...register("payment")} type="radio" value="credit_card" id='credit_card' />
        </RadioButton>

        <RadioButton htmlFor="debit_card"
          background={selectedRadioButton === 'debit_card' ? 'hover' : 'default'}
          border={selectedRadioButton === 'debit_card' ? 'hover' : 'default'}>
          <img src={debit_card} alt="" />
          <span>CARTÃO DE DÉBITO</span>
          <input {...register("payment")} type="radio" value="debit_card" id='debit_card' />
        </RadioButton>

        <RadioButton htmlFor="cash"
          background={selectedRadioButton === 'cash' ? 'hover' : 'default'}
          border={selectedRadioButton === 'cash' ? 'hover' : 'default'}>
          <img src={cash} alt="" />
          <span>DINHEIRO</span>
          <input {...register("payment")} type="radio" value="cash" id='cash' />
        </RadioButton>
      </RadioButtons>
    </PaymentContainer>
  );
}

export default Payment;