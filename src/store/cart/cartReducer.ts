import { AnyAction } from "redux";

import { setCartOpen, setCartItems, setClearCart } from "./cartAction";

import { CartItem } from "./cartTypes";

export type CartState = {
  readonly isCartOpen: boolean;
  readonly cartItems: CartItem[];
};

export const CART_INITIAL_STATE: CartState = {
  isCartOpen: false,
  cartItems: [],
};

export const cartReducer = (state = CART_INITIAL_STATE, action: AnyAction): CartState => {
  if (setCartOpen.match(action)) {
    return { ...state, isCartOpen: action.payload };
  }
  if (setCartItems.match(action)) {
    return { ...state, cartItems: action.payload };
  }
  if (setClearCart.match(action)) {
    return { ...CART_INITIAL_STATE };
  }

  return state;
};
