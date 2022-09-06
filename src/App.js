import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { CHECK_USER_SESSION } from "./store/user/useraction";

import Home from "./components/routes/home/home";
import Navigationbar from "./components/routes/navigationbar/navigationbar";
import { Routes, Route } from "react-router-dom";
import Authentication from "./components/routes/authentication/authentication";
import Shop from "./components/routes/shop/shop";
import Checkout from "./components/routes/checkout/checkout";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(CHECK_USER_SESSION());
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Navigationbar />}>
        <Route index element={<Home />} />
        {/*by default index is true that means path always matches */}
        <Route path="shop/*" element={<Shop />} />
        <Route path="auth" element={<Authentication />} />
        <Route path="checkout" element={<Checkout />} />
      </Route>
    </Routes>
  );
}

export default App;
