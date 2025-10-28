// src/routing.jsx
import { Routes, Route } from "react-router-dom";
import Home from "../pages/home/home";
import Login from "../pages/login/login";
import Layout from "../components/layout/Layout";
import CustomizeTour from "../pages/customizeTour/CustomizeTour";
import SelectTour from "../pages/selectTour/SelectTour";
import ChooseTour from "../pages/chooseTour/ChooseTour";
import AboutTour from "../pages/aboutTour/AboutTour";
import Cart from "../pages/cart/Cart";

const RouterConfig = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} /><Route path="/login" element={<Login />} />
      <Route element={<Layout />}>
        
        <Route path="/customizeTour" element={<CustomizeTour />} />
        <Route path="/selectTour" element={<SelectTour />} />
        <Route path="/chooseTour" element={<ChooseTour />} />
        <Route path="/aboutTour" element={<AboutTour />} />
        <Route path="/cart" element={<Cart />} />
      </Route>
    </Routes>
  );
};

export default RouterConfig;