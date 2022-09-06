import "./preview.scss";
import Productcard from "../productcard/productcard";
import { Link } from "react-router-dom";

function Preview({ title, products }) {
  return (
    <div className="category-preview-container">
      <h2>
        <Link to={title} className="title">
          {title.toUpperCase()}
        </Link>
      </h2>
      <div className="preview">
        {products
          .filter((_, idx) => idx < 4)
          .map((product) => (
            <Productcard key={product.id} product={product} />
          ))}
      </div>
    </div>
  );
}
export default Preview;
