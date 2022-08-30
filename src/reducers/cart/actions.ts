import Coffee from "../../interfaces/Coffee";

export enum ActionTypes {
  ADD_ITEM_TO_CART = 'ADD_NEW_ITEM_TO_CART'
}

export function addItemToCartAction(item: Coffee) {
  return {
    type: ActionTypes.ADD_ITEM_TO_CART,
    payLoad: {
      item,
    }
  }
}