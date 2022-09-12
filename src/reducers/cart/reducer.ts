import { produce } from 'immer';
import Coffee from '../../interfaces/Coffee';
import Order from '../../interfaces/Order';

import { ActionTypes } from './actions';

interface CartState {
  cartItems: Coffee[]
  finalizedOrders: Order[]
}

interface ActionInterface {
  type: string,
  payLoad: {
    item: Coffee | string
  }
}

export function cartReducer(state: CartState, action: any | ActionInterface) {
  switch (action.type) {
    case ActionTypes.ADD_ITEM_TO_CART: {
      const itemIndex = state.cartItems.findIndex(item => {
        return item.name === action.payLoad.item.name
      })

      if (itemIndex < 0) {
        return produce(state, draft => {
          draft.cartItems.push(action.payLoad.item)
        })
      }

      const currentItemQuantity = state.cartItems[itemIndex].quantity

      return produce(state, draft => {
        draft.cartItems[itemIndex].quantity = currentItemQuantity + action.payLoad.item.quantity
      })
    }

    case ActionTypes.REMOVE_ITEM_FROM_CART: {
      const itemIndex = state.cartItems.findIndex(item => item.name === action.payLoad.name)

      return produce(state, draft => {
        draft.cartItems.splice(itemIndex, 1)
      })
    }

    case ActionTypes.DECREASE_ITEM_QUANTITY_FROM_CART: {
      const itemIndex = state.cartItems.findIndex(item => item.name === action.payLoad.name)

      if (itemIndex != -1) {
        return produce(state, draft => {
          draft.cartItems[itemIndex].quantity = state.cartItems[itemIndex].quantity - 1
        })
      }
      return state
    }

    case ActionTypes.CREATE_NEW_ORDER: {
      return produce(state, draft => {
        draft.finalizedOrders.push(action.payLoad.order)
        draft.cartItems = []
      })
    }

    default:
      return state
  }
}