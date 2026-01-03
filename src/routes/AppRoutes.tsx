import { Routes, Route, BrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Default from "../pages/Default/Default";
import HomePage from "../pages/HomePage/HomePage";
import ECommerce from "../pages/ECommerce/ECommerce";
import Orders from "../pages/Default/Orders/Orders";

export default function AppRoutes() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="default" element={<Default />} />
            <Route path="/default/orders" element={<Orders />} />
            <Route path="ecommerce" element={<ECommerce />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
