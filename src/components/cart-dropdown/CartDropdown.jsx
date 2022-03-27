import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { CartContext } from "../../contexts/CartContext.jsx";

import CartItem from "../cart-item/CartItem.jsx";

import {
  CartDropdownContainer,
  EmptyMessage,
  CartItems,
  CartButton,
} from "./CartDropdown.styles.jsx";

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();

  const goToCheckoutHandler = () => {
    navigate("/checkout");
  };
  return (
    <CartDropdownContainer>
      <CartItems>
        {cartItems.length ? (
          cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)
        ) : (
          <EmptyMessage>Your cart is empty</EmptyMessage>
        )}
      </CartItems>
      <CartButton onClick={goToCheckoutHandler}>GO TO CHECKOUT</CartButton>
    </CartDropdownContainer>
  );
};

export default CartDropdown;
