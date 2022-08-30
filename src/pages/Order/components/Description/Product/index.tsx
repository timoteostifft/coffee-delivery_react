import React, { useContext, useState } from 'react';
import { CoffeeQuantity, ProductContainer } from './styles';
import { FaRegTrashAlt as Trash } from 'react-icons/fa'
import { toBRL } from '../../../../../utils/toBRL';
import { CartContext } from '../../../../../contexts/CartContext';

interface ProductProps {
  item: {
    name: string,
    image: string,
    price: number,
    quantity: number
  }
}

const Product: React.FC<ProductProps> = ({ item }) => {
  const [itemQuantity, setItemQuantity] = useState(item.quantity)

  const { removeItemFromCart } = useContext(CartContext)

  const price = toBRL(item.quantity * item.price)

  return (
    <ProductContainer>
      <img src={item.image} alt="" />
      <div>
        <h4>
          {item.name}
        </h4>
        <nav>
          <CoffeeQuantity>
            <button>-</button>
            <span>{itemQuantity}</span>
            <button>+</button>
          </CoffeeQuantity>
          <button onClick={() => removeItemFromCart(item.name)}>
            <Trash />
            REMOVER
          </button>
        </nav>
      </div>
      <span>
        {price}
      </span>
    </ProductContainer>
  );
}

export default Product;