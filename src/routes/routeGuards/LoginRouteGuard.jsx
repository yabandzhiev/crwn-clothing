import { Navigate, Outlet } from "react-router-dom";

import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../store/user/userSelector";

export const LoginRouteGuard = () => {
  const currentUser = useSelector(selectCurrentUser);

  if (!currentUser) {
    return <Outlet />;
  } else {
    return <Navigate to="/" />;
  }
};
