import { useContext } from "react";

import { CartContext } from "../../contexts/CartContext.jsx";

import "./CheckoutItem.scss";

const CheckoutItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;

  const { addItemToCart, removeCartItemsByOne, clearCartItem } = useContext(CartContext);

  const removeHandler = () => clearCartItem(cartItem);
  const incrementItem = () => addItemToCart(cartItem);
  const decrementItem = () => removeCartItemsByOne(cartItem);

  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={name} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={decrementItem}>
          &#10094;
        </div>
        <span className="value"> {quantity}</span>
        <div className="arrow" onClick={incrementItem}>
          &#10095;
        </div>
      </span>
      <span className="price">${price}</span>
      <div className="remove-button" onClick={removeHandler}>
        &#10005;
      </div>
    </div>
  );
};

export default CheckoutItem;
