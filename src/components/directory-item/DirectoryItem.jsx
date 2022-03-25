import { Link } from "react-router-dom";

import "./DirectoryItem.scss";

const DirectoryItem = ({ category }) => {
  const { imageUrl, title } = category;
  return (
    <Link className="directory-item-container" to={{ pathname: `/shop/${title}` }}>
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="body">
        <h2>{title}</h2>
        <p>Shop Now</p>
      </div>
    </Link>
  );
};

export default DirectoryItem;
