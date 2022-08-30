import { produce } from 'immer';
import Coffee from '../../interfaces/Coffee';

import { ActionTypes } from './actions';

interface CartState {
  cartItems: Coffee[]
}

interface ActionInterface {
  type: string,
  payLoad: {
    item: Coffee
  }
}

export function cartReducer(state: CartState, action: ActionInterface) {
  switch (action.type) {
    case ActionTypes.ADD_ITEM_TO_CART:
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

    default:
      return state
  }
}