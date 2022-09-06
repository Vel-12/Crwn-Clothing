import { useEffect } from "react";
import { FETCH_CATEGORIES_START } from "../../../store/categories/categoriesaction";
import { useDispatch } from "react-redux/es/exports";
import { Routes, Route } from "react-router-dom";
import "./shop.scss";
import Categoriespreview from "../categoriespreview/categoriespreview";
import Category from "../category/category";

function Shop() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(FETCH_CATEGORIES_START());
  }, []);

  return (
    <Routes>
      <Route index element={<Categoriespreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
}

export default Shop;
