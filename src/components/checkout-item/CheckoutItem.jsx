import { useSelector, useDispatch } from "react-redux";

import { selectCartItems } from "../../store/cart/cartSelector.js";
import {
  addItemToCart,
  removeCartItemsByOne,
  clearCartItem,
} from "../../store/cart/cartAction.js";

import {
  CheckoutItemContainer,
  ImageContainer,
  BaseSpan,
  Quantity,
  Arrow,
  Value,
  RemoveButton,
} from "./CheckoutItem.styles.jsx";

const CheckoutItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  const removeHandler = () => dispatch(clearCartItem(cartItems, cartItem));
  const incrementItem = () => dispatch(addItemToCart(cartItems, cartItem));
  const decrementItem = () => dispatch(removeCartItemsByOne(cartItems, cartItem));

  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt={name} />
      </ImageContainer>
      <BaseSpan>{name}</BaseSpan>
      <Quantity>
        <Arrow onClick={decrementItem}>&#10094;</Arrow>
        <Value> {quantity}</Value>
        <Arrow onClick={incrementItem}>&#10095;</Arrow>
      </Quantity>
      <BaseSpan>${price}</BaseSpan>
      <RemoveButton onClick={removeHandler}>&#10005;</RemoveButton>
    </CheckoutItemContainer>
  );
};

export default CheckoutItem;
