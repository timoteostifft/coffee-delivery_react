import { createContext, ReactNode, useReducer } from "react";
import Coffee from "../interfaces/Coffee";
import Order from "../interfaces/Order";
import { newOrderFormData } from "../pages/Order";
import { addItemToCartAction, createNewOrderAction, decreaseItemQuantityFromCartAction, removeItemFromCartAction } from "../reducers/cart/actions";
import { cartReducer } from "../reducers/cart/reducer";


interface CartContextType {
  cartItems: Coffee[]
  finalizedOrders: Order[]
  addItemToCart: (item: Coffee) => void
  removeItemFromCart: (name: string) => void
  decreaseItemQuantityFromCart: (name: string) => void
  createNewOrder: (data: any) => void
}

export const CartContext = createContext({} as CartContextType)

interface CartContextProviderProps {
  children: ReactNode
}

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartState, dispatch] = useReducer(cartReducer, {
    cartItems: [],
    finalizedOrders: []
  })

  const { cartItems, finalizedOrders } = cartState

  function addItemToCart(item: Coffee) {
    dispatch(addItemToCartAction(item))
  }

  function removeItemFromCart(name: string) {
    dispatch(removeItemFromCartAction(name))
  }

  function decreaseItemQuantityFromCart(name: string) {
    dispatch(decreaseItemQuantityFromCartAction(name))
  }

  function createNewOrder(data: newOrderFormData) {

    const { street, number, district, city, uf, payment } = data

    const order: Order = {
      items: cartItems,
      address: {
        street,
        number,
        district,
        city,
        uf
      },
      payment
    }

    const stateJSON = JSON.stringify(cartState)

    localStorage.setItem('coffee-delivery:cart-state-1.0.0', stateJSON)

    dispatch(createNewOrderAction(order))
  }

  return (
    <CartContext.Provider value={{
      cartItems,
      finalizedOrders,
      addItemToCart,
      removeItemFromCart,
      decreaseItemQuantityFromCart,
      createNewOrder
    }}>
      {children}
    </CartContext.Provider>
  )
}