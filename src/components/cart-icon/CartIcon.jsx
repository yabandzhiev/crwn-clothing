import { useContext } from "react";

import { CartContext } from "../../contexts/CartContext.jsx";

import {
  CartIconContainer,
  ShoppingIconContainer,
  ItemCount,
} from "./CartIcon.styles.jsx";

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);
  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);

  return (
    <CartIconContainer onClick={toggleIsCartOpen}>
      <ShoppingIconContainer />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
