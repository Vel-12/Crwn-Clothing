import "./checkoutitem.scss";
import {
  clearCart,
  addToCart,
  removeFromCart,
} from "../../store/cart/cartaction";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { selectCartItems } from "../../store/cart/cartselector";
// import { useContext } from "react";
// import { CartContext } from "../../contexts/cartcontext";

function CheckoutItem({ cartItem }) {
  const cartItems = useSelector(selectCartItems);
  const { name, imageUrl, price, quantity } = cartItem;
  const dispatch = useDispatch();
  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={name} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div
          onClick={() => dispatch(removeFromCart(cartItems, cartItem))}
          className="arrow"
        >
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div
          onClick={() => dispatch(addToCart(cartItems, cartItem))}
          className="arrow"
        >
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <div
        onClick={() => dispatch(clearCart(cartItems, cartItem))}
        className="remove-button"
      >
        &#10005;
      </div>
    </div>
  );
}

export default CheckoutItem;
