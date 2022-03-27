import { useContext } from "react";
import { Outlet } from "react-router-dom";

import CartIcon from "../../components/cart-icon/CartIcon.jsx";
import CartDropdown from "../../components/cart-dropdown/CartDropdown.jsx";

import { ReactComponent as CrownLogo } from "../../assets/crown.svg";

import { UserContext } from "../../contexts/UserContext.jsx";
import { CartContext } from "../../contexts/CartContext.jsx";

import { signOutUser } from "../../utils/firebase/firebase.js";

import {
  NavigationContainer,
  LogoContainerLink,
  NavLinks,
  NavLink,
} from "./Navigation.styles.jsx";

const Navigation = () => {
  const { currentUser, setCurrentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);

  const signOutHandler = async () => {
    await signOutUser();
    setCurrentUser(null);
  };

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
            <NavLink as="span" onClick={signOutHandler}>
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
