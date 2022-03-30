import { useSelector, useDispatch } from "react-redux";

import { selectCartOpen, selectCartCount } from "../../store/cart/cartSelector.js";
import { setCartOpen } from "../../store/cart/cartAction.js";

import {
  CartIconContainer,
  ShoppingIconContainer,
  ItemCount,
} from "./CartIcon.styles.jsx";

const CartIcon = () => {
  const dispatch = useDispatch();
  const isCartOpen = useSelector(selectCartOpen);
  const cartCount = useSelector(selectCartCount);

  const toggleIsCartOpen = () => dispatch(setCartOpen(!isCartOpen));

  return (
    <CartIconContainer onClick={toggleIsCartOpen}>
      <ShoppingIconContainer />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
