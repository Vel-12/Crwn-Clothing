import "./cartdropdown.scss";
import Button from "../button/button";
import CartItem from "../cartitem/cartitem";
// import { useContext } from "react";
// import { CartContext } from "../../contexts/cartcontext";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCartItems } from "../../store/cart/cartselector";

function CartDropdown() {
  const  cartItems  = useSelector(selectCartItems)
  const navigate = useNavigate();

  const goToCheckout = () => {
    navigate("/checkout");
  };

  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((item) => (
          <CartItem key={item.id} cartItem={item} />
        ))}
      </div>
      <Button onClick={goToCheckout} type="button">
        go to checkout
      </Button>
    </div>
  );
}

export default CartDropdown;
