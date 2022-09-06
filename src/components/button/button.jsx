// default button

// inverted button

// google sign in button
import Spinner from "../spinner/spinner";
import "./button.scss";

const BUTTON_TYPES_CLASSES = {
  google: "google-sign-in",
  inverted: "inverted",
};

function Button({ children, isloading, buttonType, ...otherProps }) {
  return (
    <button
      className={`button-container ${BUTTON_TYPES_CLASSES[buttonType]}`}
      {...otherProps}
      disabled={isloading}
    >
      {isloading ? <Spinner /> : children}
    </button>
  );
}

export default Button;
