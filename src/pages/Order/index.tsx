import React from 'react';

import { OrderContainer } from './styles';
import { useForm } from 'react-hook-form';
import Address from './components/Address';
import Description from './components/Description';

const Order: React.FC = () => {
  const { register, handleSubmit, formState: { errors }, watch } = useForm()

  function handleCreateNewOrder(data: any) {
    console.log(data)
  }

  const CEP = watch('CEP')
  const isSubmitDisabled = false

  return (
    <OrderContainer>
      <form onSubmit={handleSubmit(handleCreateNewOrder)} action="">
        <Address />
        <Description />
        {/* {errors.CEP && "CEP inválido."} */}

        {/* <button type='submit' disabled={isSubmitDisabled}>
          OK
        </button> */}
      </form>
    </OrderContainer>
  );
}

export default Order;