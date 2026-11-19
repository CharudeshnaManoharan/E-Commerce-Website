import {Routes, Route} from "react-router-dom";
import Home from "./Pages/Home/Home";
import Products from "./Pages/Products/Products";
import Cart from "./Pages/Cart/Cart";
import Wishlist from "./Pages/Wishlist/Wishlist";
import Orders from "./Pages/Orders/Orders";
import Dashboard from "./Pages/Dashboard/Dashboard"
import Login from "./Pages/Login/Login";
import Profile from"./Pages/Profile/Profile";
import Settings from "./Pages/Settings/Settings";
import HMDetails from "./Pages/Productdetails/Hm/HMDetails";
import ZaraDetails from "./Pages/Productdetails/Zara/ZaraDetails";
import AureliaDetails from "./Pages/Productdetails/Aure/AureliaDetails";


import Layout from "./Component/Layout";
import Checkout1 from "./Pages/Productdetails/Hm/Checkout1";
import Checkout2 from "./Pages/Productdetails/Hm/Checkout2";
import Checkout3 from "./Pages/Productdetails/Hm/Checkout3";

import Zarac1 from "./Pages/Productdetails/Zara/Zarac1";
import Zarac2 from "./Pages/Productdetails/Zara/Zarac2";
import Zarac3 from "./Pages/Productdetails/Zara/Zarac3";
function App(){
  return (
    <Routes>
      <Route path="/" element={<Login/>}/>

      <Route element={<Layout/>}>
      <Route path="/home"element={<Home/>}/>
      <Route path="/products" element={<Products/>}/>
       <Route path="/cart" element={<Cart/>}/>
       <Route path="/wishlist" element={<Wishlist/>}/>
       <Route path="/orders" element={<Orders/>}/>
       <Route path="/dashboard" element={<Dashboard/>}/>
       <Route path="/profile" element={<Profile/>}/>
       <Route path="/settings"element={<Settings/>}/>
       <Route path="/hmdetails"element={<HMDetails/>}/>
       <Route path="/zaradetails" element={<ZaraDetails/>}/>
       <Route path="/aureliadetails"element={<AureliaDetails/>}/>
       <Route path="/checkout1" element={<Checkout1/>}/>
       <Route path="/checkout2" element={<Checkout2/>}/>
        <Route path="/checkout3" element={<Checkout3/>}/>
        <Route path="/zarac1" element={<Zarac1/>}/>
       <Route path="/zarac2" element={<Zarac2/>}/>
       <Route path="/zarac3" element={<Zarac3/>}/>

     </Route>
    </Routes>

  );
}
export default App;