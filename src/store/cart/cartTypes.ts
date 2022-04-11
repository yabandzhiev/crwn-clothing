import { CategoryItem } from "../categories/categoryTypes";

export enum CART_ACTION_TYPES {
  SET_CART_OPEN = "cart/SET_CART_OPEN",
  SET_CART_ITEMS = "cart/SET_CART_ITEMS",
  CLEAR_CART = "cart/CLEAR_CART",
}

export type CartItem = CategoryItem & {
  quantity: number;
};
