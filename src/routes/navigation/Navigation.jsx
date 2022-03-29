import { useContext } from "react";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

import CartIcon from "../../components/cart-icon/CartIcon.jsx";
import CartDropdown from "../../components/cart-dropdown/CartDropdown.jsx";

import { ReactComponent as CrownLogo } from "../../assets/crown.svg";

import { CartContext } from "../../contexts/CartContext.jsx";

import { signOutUser } from "../../utils/firebase/firebase.js";

import { selectCurrentUser } from "../../store/user/userSelector.js";

import {
  NavigationContainer,
  LogoContainerLink,
  NavLinks,
  NavLink,
} from "./Navigation.styles.jsx";

const Navigation = () => {
  const currentUser = useSelector(selectCurrentUser);
  const { isCartOpen } = useContext(CartContext);

  return (
    <>
      <NavigationContainer>
        <LogoContainerLink to="/">
          <div>
            <CrownLogo className="logo" />
          </div>
        </LogoContainerLink>
        <NavLinks>
          <NavLink to="/shop">SHOP</NavLink>
          {currentUser ? (
            <NavLink as="span" onClick={signOutUser}>
              SIGN OUT
            </NavLink>
          ) : (
            <NavLink to="/auth">SIGN IN</NavLink>
          )}
          <CartIcon />
        </NavLinks>
        {isCartOpen && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
    </>
  );
};

export default Navigation;
