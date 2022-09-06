import { useSelector } from "react-redux";
import { Outlet, Link } from "react-router-dom";
import { Fragment } from "react";
import { ReactComponent as CrwnLogo } from "../../assets/083 crown.svg";

import { useDispatch } from "react-redux";
import { SIGN_OUT_START } from "../../../store/user/useraction";
import "./navigationbar.scss";
import CartIcon from "../../carticon/carticon";
import CartDropdown from "../../cartdropdown/cartdropdown";
import { selectIsCartOpen } from "../../../store/cart/cartselector";

function Navigationbar() {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.user.currentUser);

  const isCartOpen = useSelector(selectIsCartOpen);
  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <CrwnLogo className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>

          {currentUser ? (
            <span
              className="nav-link"
              onClick={() => dispatch(SIGN_OUT_START())}
            >
              SIGN OUT
            </span>
          ) : (
            <Link className="nav-link" to="/auth">
              SIGN IN
            </Link>
          )}
          <CartIcon />
        </div>
        {isCartOpen && <CartDropdown />}
      </div>
      <Outlet />
    </Fragment>
  );
}

export default Navigationbar;
