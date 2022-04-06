import { useSelector, useDispatch } from "react-redux";

import { selectCartItems, selectCartTotal } from "../../store/cart/cartSelector.js";
import CheckoutItem from "../../components/checkout-item/CheckoutItem.jsx";
import PaymentForm from "../../components/payment-form/PaymentForm.jsx";

import { clearCart } from "../../store/cart/cartAction.js";

import {
  CheckoutContainer,
  CheckoutHeader,
  HeaderBlock,
  Total,
  ClearCart,
} from "./Checkout.styles.jsx";

const Checkout = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);
  const clearCartHandler = () => dispatch(clearCart());

  return (
    <CheckoutContainer>
      <CheckoutHeader>
        <HeaderBlock>
          <span>Product</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Description</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Quantity</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Price</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Remove</span>
        </HeaderBlock>
      </CheckoutHeader>
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <ClearCart onClick={clearCartHandler}>Clear Cart</ClearCart>
      <Total>Total: ${cartTotal}</Total>
      <PaymentForm />
    </CheckoutContainer>
  );
};

export default Checkout;
