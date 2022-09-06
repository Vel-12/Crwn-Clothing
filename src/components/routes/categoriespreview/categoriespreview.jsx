import { Fragment } from "react";
import { useSelector } from "react-redux";
import { selectcategoriesMap } from "../../../store/categories/categoriesselector";
import Spinner from "../../spinner/spinner";
import { selectcatgoriesIsLoading } from "../../../store/categories/categoriesselector";
import Preview from "../../preview/preview";

function Categoriespreview() {
  const categoriesMap = useSelector(selectcategoriesMap);
  const isLoading = useSelector(selectcatgoriesIsLoading);

  return (
    <Fragment>
      {isLoading ? (
        <Spinner />
      ) : (
        Object.keys(categoriesMap).map((title) => {
          const products = categoriesMap[title];
          return <Preview key={title} title={title} products={products} />;
        })
      )}
    </Fragment>
  );
}

export default Categoriespreview;
