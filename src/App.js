import { useEffect, lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { useDispatch } from "react-redux";

import { checkUserSession } from "./store/user/userActions";
import Spinner from "./components/spinner/Spinner";
import { LoginRouteGuard } from "./routes/routeGuards/LoginRouteGuard";

const Home = lazy(() => import("./routes/home/Home"));
const Authentication = lazy(() => import("./routes/auth/Authentication"));
const Navigation = lazy(() => import("./routes/navigation/Navigation"));
const Shop = lazy(() => import("./routes/shop/Shop"));
const Checkout = lazy(() => import("./routes/checkout/Checkout"));

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(checkUserSession());
  }, [dispatch]);

  return (
    <Suspense fallback={<Spinner />}>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="shop/*" element={<Shop />} />
          <Route element={<LoginRouteGuard />}>
            <Route path="auth" element={<Authentication />} />
          </Route>
          <Route path="checkout" element={<Checkout />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default App;
