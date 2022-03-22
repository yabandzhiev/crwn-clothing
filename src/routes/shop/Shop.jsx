import { useContext } from "react";

import { ProductsContext } from "../../contexts/ProductsContext.jsx";
import ProductCard from "../../components/product-card/ProductCard.jsx";

import "./Shop.scss";

const Shop = () => {
  const { products } = useContext(ProductsContext);
  return (
    <div className="products-container">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Shop;
