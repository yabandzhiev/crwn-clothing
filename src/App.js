import { Route, Routes } from "react-router-dom";
import SignIn from "./routes/auth/SignIn.jsx";

import Home from "./routes/home/Home.jsx";
import Navigation from "./routes/navigation/Navigation.jsx";

const Shop = () => {
  return <h1>I am the shop page</h1>;
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="sign-in" element={<SignIn />} />
      </Route>
    </Routes>
  );
};

export default App;
