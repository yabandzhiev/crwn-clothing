import { useSelector, useDispatch } from "react-redux";

import { selectCartItems, selectCartTotal } from "../../store/cart/cartSelector";
import CheckoutItem from "../../components/checkout-item/CheckoutItem";
import PaymentForm from "../../components/payment-form/PaymentForm";
import { BUTTON_TYPE_CLASSES } from "../../components/button/Button";

import { clearCart } from "../../store/cart/cartAction";

import {
  CheckoutContainer,
  CheckoutHeader,
  HeaderBlock,
  Total,
  ClearCart,
} from "./Checkout.styles";

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
      {cartItems.length > 0 ? (
        <ClearCart buttonType={BUTTON_TYPE_CLASSES.inverted} onClick={clearCartHandler}>
          Clear Cart
        </ClearCart>
      ) : (
        ""
      )}
      <Total>Total: ${cartTotal}</Total>
      <PaymentForm />
    </CheckoutContainer>
  );
};

export default Checkout;
