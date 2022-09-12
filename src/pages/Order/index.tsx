import React, { useContext, useEffect } from 'react';

import { OrderContainer } from './styles';
import { useForm, FormProvider } from 'react-hook-form';
import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import Address from './components/Address';
import Description from './components/Description';
import { CartContext } from '../../contexts/CartContext';
import { useNavigate } from 'react-router-dom';

const newOrderFormValidationSchema = zod.object({
  cep: zod.string().min(1, { message: 'Preencha este campo!' }).length(8, { message: 'Informe um CEP válido.' }),
  street: zod.string().min(1, { message: 'Preencha este campo!' }),
  number: zod.string().min(1, { message: 'Preencha este campo!' }),
  complement: zod.string().min(1, { message: 'Preencha este campo!' }),
  district: zod.string().min(1, { message: 'Preencha este campo!' }),
  city: zod.string().min(1, { message: 'Preencha este campo!' }),
  uf: zod.string().min(1, { message: 'Preencha este campo!' }).length(2, { message: 'Informe um UF válido.' }),
  payment: zod.string().min(1, { message: 'Preencha este campo!' }),
})

export type newOrderFormData = zod.infer<typeof newOrderFormValidationSchema>

const Order: React.FC = () => {
  const { createNewOrder, finalizedOrders, cartItems } = useContext(CartContext)

  const newOrderForm = useForm<newOrderFormData>({
    resolver: zodResolver(newOrderFormValidationSchema),
    defaultValues: {
      cep: '',
      street: '',
      number: '0',
      complement: '',
      district: '',
      city: '',
      uf: '',
      payment: ''
    }
  })

  useEffect(() => {
    console.log(finalizedOrders)
  }, [])

  const { handleSubmit, reset } = newOrderForm

  const navigate = useNavigate()

  const navigateToSuccess = () => {
    navigate('/success')
  }

  function handleCreateNewOrder(data: newOrderFormData) {
    createNewOrder(data)
    reset()
    navigateToSuccess()
  }

  return (
    <OrderContainer>
      <form onSubmit={handleSubmit(handleCreateNewOrder)} action="">
        <FormProvider {...newOrderForm}>
          <Address />
          <Description />
        </FormProvider>
      </form>
    </OrderContainer>
  );
}

export default Order;