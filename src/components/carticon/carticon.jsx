import "./carticon.scss";
import { ReactComponent as ShoppingIcon } from "../assets/111 shopping-bag.svg";
import { setIsCartOpen } from "../../store/cart/cartaction";
import {
  selectCartCount,
  selectIsCartOpen,
} from "../../store/cart/cartselector";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
// import { useContext } from "react";
// import { CartContext } from "../../contexts/cartcontext";

function CartIcon() {
  const dispatch = useDispatch();
  const isCartOpen = useSelector(selectIsCartOpen);
  const cartCount = useSelector(selectCartCount);

  return (
    <div
      className="cart-icon-container"
      onClick={() => dispatch(setIsCartOpen(!isCartOpen))}
    >
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{cartCount}</span>
    </div>
  );
}

export default CartIcon;
