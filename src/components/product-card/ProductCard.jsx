import { useDispatch, useSelector } from "react-redux";

import { selectCartItems } from "../../store/cart/cartSelector.js";
import { addItemToCart } from "../../store/cart/cartAction.js";

import Button, { BUTTON_TYPE_CLASSES } from "../button/Button.jsx";

import { ProductCardContainer, Footer, Name, Price } from "./ProductCard.styles.jsx";

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  const addProductToCart = () => dispatch(addItemToCart(cartItems, product));

  return (
    <ProductCardContainer>
      <img src={imageUrl} alt={`${name}`} />
      <Footer>
        <Name>{name}</Name>
        <Price>{price}</Price>
      </Footer>
      <Button buttonType={BUTTON_TYPE_CLASSES.inverted} onClick={addProductToCart}>
        Add to cart
      </Button>
    </ProductCardContainer>
  );
};

export default ProductCard;
