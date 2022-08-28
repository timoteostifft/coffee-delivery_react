import React from 'react';
import { useForm } from 'react-hook-form';

import { AddressContainer, Card, Header, Title } from './styles';
import address from '../../../../assets/address.svg'
import Payment from '../Payment';

const Address: React.FC = () => {
  const { register, handleSubmit, formState: { errors }, watch } = useForm()

  return (
    <AddressContainer>
      <Title>
        Complete seu pedido
      </Title>

      <Card>
        <Header>
          <img src={address} alt="" />
          <div>
            <span>Endereço de Entrega</span>
            <p>Informe o endereço onde deseja receber seu pedido</p>
          </div>
        </Header>

        <input
          id='cep'
          placeholder='CEP'
          {...register('cep', {
            required: true,
            maxLength: 8,
            minLength: 8
          })}
        />

        <input
          id='street'
          placeholder='Rua'
          {...register('street', {
            required: true,
          })}
        />

        <div>
          <input
            id='number'
            placeholder='Número'
            {...register('street', {
              required: true,
              maxLength: 4
            })}
          />
          <input
            id='complement'
            placeholder='Complemento'
            {...register('complement', {
              required: false,
            })}
          />
        </div>

        <div>
          <input
            id='district'
            placeholder='Bairro'
            {...register('district', {
              required: true,
            })}
          />
          <input
            id='city'
            placeholder='Cidade'
            {...register('city', {
              required: true,
            })}
          />
          <input
            id='uf'
            placeholder='UF'
            {...register('uf', {
              required: true,
              maxLength: 2,
              minLength: 2
            })}
          />
        </div>
      </Card>

      <Payment />
    </AddressContainer>
  );
}

export default Address;