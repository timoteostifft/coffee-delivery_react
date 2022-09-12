import Coffee from "../../interfaces/Coffee";
import Order from "../../interfaces/Order";

export enum ActionTypes {
  ADD_ITEM_TO_CART = 'ADD_NEW_ITEM_TO_CART',
  REMOVE_ITEM_FROM_CART = 'REMOVE_ITEM_FROM_CARD',
  DECREASE_ITEM_QUANTITY_FROM_CART = 'DECREASE_ITEM_QUANTITY_FROM_CART',
  CREATE_NEW_ORDER = 'CREATE_NEW_ORDER'
}

export function addItemToCartAction(item: Coffee) {
  return {
    type: ActionTypes.ADD_ITEM_TO_CART,
    payLoad: {
      item,
    }
  }
}

export function removeItemFromCartAction(name: string) {
  return {
    type: ActionTypes.REMOVE_ITEM_FROM_CART,
    payLoad: {
      name
    }
  }
}

export function decreaseItemQuantityFromCartAction(name: string) {
  return {
    type: ActionTypes.DECREASE_ITEM_QUANTITY_FROM_CART,
    payLoad: {
      name
    }
  }
}

export function createNewOrderAction(order: Order) {
  return {
    type: ActionTypes.CREATE_NEW_ORDER,
    payLoad: {
      order
    }
  }
}