import ProductCard from "../product-card/ProductCard.jsx";

import {
  CategoryPreviewContainer,
  CategoryTitleLink,
  Preview,
} from "./CategoryPreview.styles.jsx";

const CategoryPreview = ({ title, products }) => {
  return (
    <CategoryPreviewContainer>
      <h2>
        <CategoryTitleLink to={title}>{title.toUpperCase()}</CategoryTitleLink>
      </h2>
      <Preview>
        {products
          .filter((_, idx) => idx < 4)
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </Preview>
    </CategoryPreviewContainer>
  );
};

export default CategoryPreview;
