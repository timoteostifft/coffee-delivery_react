import { createContext, ReactNode, useReducer } from "react";
import Coffee from "../interfaces/Coffee";
import { addItemToCartAction } from "../reducers/cart/actions";
import { cartReducer } from "../reducers/cart/reducer";


interface CartContextType {
  cartItems: Coffee[]
  addItemToCart: (item: Coffee) => void
}

export const CartContext = createContext({} as CartContextType)

interface CartContextProviderProps {
  children: ReactNode
}

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartState, dispatch] = useReducer(cartReducer, {
    cartItems: []
  })

  const { cartItems } = cartState

  function addItemToCart(item: Coffee) {
    dispatch(addItemToCartAction(item))
  }

  return (
    <CartContext.Provider value={{
      cartItems,
      addItemToCart
    }}>
      {children}
    </CartContext.Provider>
  )
}