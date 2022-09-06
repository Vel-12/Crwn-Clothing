import { combineReducers } from "redux";
import { userReducer } from "./user/userreducer";
import { categoriesReducer } from "./categories/categoriesreducer";
import { cartReducer } from "./cart/cartreducer";

export const rootReducer = combineReducers({
  user: userReducer,
  categories: categoriesReducer,
  cart: cartReducer,
});
