import React from 'react';
import { useFormContext } from 'react-hook-form';

import { AddressContainer, Card, Header, Title, ErrorAlert } from './styles';
import address from '../../../../assets/address.svg'
import Payment from './Payment';

const Address: React.FC = () => {
  const { register, formState: { errors } } = useFormContext()

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
            required: "Este campo é obrigatório!",
          })}
        />
        {/* {errors.cep?.message} */}

        <input
          id='street'
          placeholder='Rua'
          {...register('street')}
        />

        <div>
          <input
            id='number'
            placeholder='Número'
            type='number'
            min={1}
            {...register('number')}
          />
          <input
            id='complement'
            placeholder='Complemento'
            {...register('complement')}
          />
        </div>

        <div>
          <input
            id='district'
            placeholder='Bairro'
            {...register('district')}
          />
          <input
            id='city'
            placeholder='Cidade'
            {...register('city')}
          />
          <input
            id='uf'
            placeholder='UF'
            {...register('uf')}
          />
        </div>
      </Card>

      <Payment />
    </AddressContainer>
  );
}

export default Address;