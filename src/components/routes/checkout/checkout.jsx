// import { useContext } from "react";
// import { CartContext } from "../../../contexts/cartcontext";
import { useSelector } from "react-redux";
import { selectCartItems } from "../../../store/cart/cartselector";
import { selectCartTotal } from "../../../store/cart/cartselector";
import "./checkout.scss";
import CheckoutItem from "../../checkoutitem/checkoutitem";
import Paymentform from "../../paymentform/paymentform";

function Checkout() {
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);

  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>

        <div className="header-block">
          <span>Description</span>
        </div>

        <div className="header-block">
          <span>Quantity</span>
        </div>

        <div className="header-block">
          <span>Price</span>
        </div>

        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((item) => (
        <CheckoutItem key={item.id} cartItem={item} />
      ))}
      <span className="total">Total: &#x20B9;{cartTotal}</span>

      <Paymentform />
    </div>
  );
}

export default Checkout;
