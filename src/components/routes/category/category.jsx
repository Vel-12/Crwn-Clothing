import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  selectcategoriesMap,
  selectcatgoriesIsLoading,
} from "../../../store/categories/categoriesselector";
import { Fragment } from "react";
import Productcard from "../../productcard/productcard";
import Spinner from "../../spinner/spinner";
import "./category.scss";

function Category() {
  const { category } = useParams();
  const isLoading = useSelector(selectcatgoriesIsLoading);
  const categoriesMap = useSelector(selectcategoriesMap);
  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <Fragment>
      <h2 className="category-title">{category.toUpperCase()}</h2>
      {isLoading ? (
        <Spinner />
      ) : (
        <div className="category-container">
          {products &&
            products.map((product) => (
              <Productcard key={product.id} product={product} />
            ))}
        </div>
      )}
    </Fragment>
  );
}

export default Category;
