import { Route, Routes } from "react-router-dom";
import Authentication from "./routes/auth/Authentication.jsx";

import Home from "./routes/home/Home.jsx";
import Navigation from "./routes/navigation/Navigation.jsx";
import Shop from "./routes/shop/Shop.jsx";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="auth" element={<Authentication />} />
      </Route>
    </Routes>
  );
};

export default App;
