import { useContext } from "react";

import { CartContext } from "../../contexts/CartContext.jsx";

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

  const { addItemToCart, removeCartItemsByOne, clearCartItem } = useContext(CartContext);

  const removeHandler = () => clearCartItem(cartItem);
  const incrementItem = () => addItemToCart(cartItem);
  const decrementItem = () => removeCartItemsByOne(cartItem);

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
