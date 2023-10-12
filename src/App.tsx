import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";

import Navigation from "./routes/navigation/navigation.component";
import Spinner from "./components/spinner/spinner.component";
import Template from "./components/template/Template";

import "./App.css";

const Shop = lazy(() => import("./routes/shop/shop.component"));
const Checkout = lazy(() => import("./routes/checkout/checkout.component"));
const Home = lazy(() => import("./routes/home/home.component"));

function App() {
  return (
    <Suspense fallback={<Spinner />}>
      <Template>
        <Routes>
          <Route path="/" element={<Navigation />}>
            <Route index element={<Home />} />
            <Route path="shop/*" element={<Shop />} />
            {/* <Route path="auth" element={<Authentication />} /> */}
            <Route path="checkout" element={<Checkout />} />
          </Route>
        </Routes>
      </Template>
    </Suspense>
  );
}

export default App;
