import { createContext, ReactNode, useReducer } from "react";
import Coffee from "../interfaces/Coffee";
import { addItemToCartAction, decreaseItemQuantityFromCartAction, removeItemFromCartAction } from "../reducers/cart/actions";
import { cartReducer } from "../reducers/cart/reducer";


interface CartContextType {
  cartItems: Coffee[]
  addItemToCart: (item: Coffee) => void
  removeItemFromCart: (name: string) => void
  decreaseItemQuantityFromCart: (name: string) => void
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

  function removeItemFromCart(name: string) {
    dispatch(removeItemFromCartAction(name))
  }

  function decreaseItemQuantityFromCart(name: string) {
    dispatch(decreaseItemQuantityFromCartAction(name))
  }

  return (
    <CartContext.Provider value={{
      cartItems,
      addItemToCart,
      removeItemFromCart,
      decreaseItemQuantityFromCart
    }}>
      {children}
    </CartContext.Provider>
  )
}