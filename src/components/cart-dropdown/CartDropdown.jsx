import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import { selectCartItems } from "../../store/cart/cartSelector.js";
import CartItem from "../cart-item/CartItem.jsx";

import {
  CartDropdownContainer,
  EmptyMessage,
  CartItems,
  CartButton,
} from "./CartDropdown.styles.jsx";

const CartDropdown = () => {
  const cartItems = useSelector(selectCartItems);
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
