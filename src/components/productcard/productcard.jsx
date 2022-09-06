import "./productcard.scss";
import Button from "../button/button";
import { addToCart } from "../../store/cart/cartaction";
import { useSelector, useDispatch } from "react-redux";
import { selectCartItems } from "../../store/cart/cartselector";
// import { useContext } from "react";
// import { CartContext } from "../../contexts/cartcontext";

const Productcard = ({ product }) => {
  const { name, imageUrl, price } = product;
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={`${name}`} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button
        onClick={() => dispatch(addToCart(cartItems, product))}
        buttonType="inverted"
      >
        Add to cart
      </Button>
    </div>
  );
};

export default Productcard;
