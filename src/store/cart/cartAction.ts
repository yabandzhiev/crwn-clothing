import { CategoryItem } from "../categories/categoryTypes";
import {
  createAction,
  withMatcher,
  Action,
  ActionWithPayload,
} from "../../utils/reducer/reducer";
import { CART_ACTION_TYPES, CartItem } from "./cartTypes";

//helper functions
const addCartItem = (cartItems: CartItem[], productToAdd: CategoryItem): CartItem[] => {
  const existingCartItem = cartItems.find((cartItem) => cartItem.id === productToAdd.id);

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const removeCartItemByOne = (
  cartItems: CartItem[],
  cartItemToRemove: CartItem
): CartItem[] => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToRemove.id
  );

  if (existingCartItem && existingCartItem.quantity === 1) {
    return cartItems.filter((item) => item.id !== cartItemToRemove.id);
  }

  return cartItems.map((cartItem) =>
    cartItem.id === cartItemToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};

const removeCartItem = (cartItems: CartItem[], cartItemToRemove: CartItem): CartItem[] =>
  cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);

export type SetCartOpen = ActionWithPayload<CART_ACTION_TYPES.SET_CART_OPEN, boolean>;

export type SetCartItems = ActionWithPayload<
  CART_ACTION_TYPES.SET_CART_ITEMS,
  CartItem[]
>;

export type SetClearCart = Action<CART_ACTION_TYPES.CLEAR_CART>;

export const setCartOpen = withMatcher(
  (bool: boolean): SetCartOpen => createAction(CART_ACTION_TYPES.SET_CART_OPEN, bool)
);

export const setCartItems = withMatcher(
  (cartItems: CartItem[]): SetCartItems =>
    createAction(CART_ACTION_TYPES.SET_CART_ITEMS, cartItems)
);

export const setClearCart = withMatcher(
  (): SetClearCart => createAction(CART_ACTION_TYPES.CLEAR_CART)
);

export const addItemToCart = (cartItems: CartItem[], productToAdd: CategoryItem) => {
  const newCartItems = addCartItem(cartItems, productToAdd);
  return setCartItems(newCartItems);
};

export const removeCartItemsByOne = (
  cartItems: CartItem[],
  cartItemToRemove: CartItem
) => {
  const newCartItems = removeCartItemByOne(cartItems, cartItemToRemove);
  return setCartItems(newCartItems);
};

export const clearCartItem = (cartItems: CartItem[], cartItemToRemove: CartItem) => {
  const newCartItems = removeCartItem(cartItems, cartItemToRemove);
  return setCartItems(newCartItems);
};

export const clearCart = () => createAction(CART_ACTION_TYPES.CLEAR_CART);
