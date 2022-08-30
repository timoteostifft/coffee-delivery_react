import { produce } from 'immer';
import Coffee from '../../interfaces/Coffee';

import { ActionTypes } from './actions';

interface CartState {
  cartItems: Coffee[]
}

// interface ActionInterface {
//   type: string,
//   payLoad: {
//     item: Coffee | string
//   }
// }

export function cartReducer(state: CartState, action: any) {
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

    default:
      return state
  }
}