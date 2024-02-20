// import logo from './logo.svg';
import "./App.css";
import AddFood from "./Components/Cafe/AddProduct";
import foodCard from "./Components/Cafe/foodCard";
import Login from "./Components/Home/login";
import NavbarAdmin from "./Components/Admin/NavbarAdmin";
import AdminRegister from "./Components/Admin/AdminRegister";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Admin } from "./Components/Admin/Admin";
import HomeNavbar from "./Components/Home/HomeNavbar";
import { Home } from "./Components/Home/Home";

import AllCategories from "./Components/Admin/AllCategories";
import AboutUs from "./Components/AboutUs/AboutUs";

import CustomerNavbar from "./Components/customer/CustomerNavbar";
import MyCart from "./Components/customer/MyCart";
import MyOrder from "./Components/customer/MyOrder";
import CafeNavbar from "./Components/Cafe/CafeNavbar";
import CafeOrder from "./Components/Cafe/CafeOrder";
import AllCafe from "./Components/Admin/AllCafe";
import CustomerLogin from "./Components/Home/CustomerLogin";
import CafeLogin from "./Components/Home/CafeLogin";
import AdminLogin from "./Components/Home/AdminLogin";
import AddCategory from "./Components/Admin/AddCategory";
import ContactUs from "./Components/ContactUs/ContactUs";
import HomePage from "./Components/Home/HomePage/HomePage";
import ViewMyItems from "./Components/Cafe/viewMyItem";
import CafeLogout from "./Components/Home/CafeLogout";
import RegistrationForm from "./Components/Home/RegistrationForm";
import AddressForm from "./Components/Home/AddressForm";
import CustomerDashboard from "./Components/customer/CustomerDashboard";
import ProductDetails from "./Components/Cafe/ProductDetails";
import Payment from "./Components/customer/Payment";

function App() {
  return (
    // <Login/>
    // <AddFood />
    // <foodCard/>

    // <Admin/>
    // <Home />
    // <Customer/>
    // <Cafe />
    // <BrowserRouter>
    //   <Routes>
    //     <Route path="/" element={<Home />} />
    //     <Route path="/admin" element={<Admin />} />
    //     <Route path="/customer" element={<Customer />} />
    //     <Route path="/cafe" element={<Cafe />} />
    //     <Route path="/login" element={<Login />} />
    //   </Routes>
    // </BrowserRouter>

    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<HomeNavbar />} /> */}
        <Route path="/" element={<HomePage />} />
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="/contactUs" element={<ContactUs />} />

        <Route path="/registrationForm" element={<RegistrationForm />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cafe/login" element={<CafeLogin />}/>
        <Route path="/product/details" element={<ProductDetails/>} />
      </Routes>

      <Routes>
        <Route path="/customer/dashboard" element={<CustomerDashboard/>} />
        <Route path="/myCart" element={<MyCart />} />
        <Route path="/myOrder" element={<MyOrder />} />
        <Route path="/AddressForm" element={<AddressForm />} />
        <Route path="/customer/payment" element={<Payment/>} />

      </Routes>
      <Routes>
        <Route path="/cafe/dashboard" element={<CafeNavbar />} />
        <Route path="/reastuarantOrder" element={<CafeOrder />} />
        <Route path="/addFood" element={<AddFood />} />
        <Route path="/viewMyItems" element={<ViewMyItems />} />
      </Routes>
      <Routes>
        <Route path="/admin/dashboard" element={<NavbarAdmin />} />
        <Route path="/addCategory" element={<AddCategory />} />

        <Route path="/allCatrgories" element={<AllCategories />} />
        <Route path="/allCafes" element={<AllCafe />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

// <BrowserRouter>
//   {/* Your router component should wrap all routes */}
//   <Routes>
//     <Route path="/" element={<Home />} />
//     <Route path="/admin" element={<Admin />} />
//     <Route path="/customer" element={<Customer />} />
//     <Route path="/cafe" element={<Cafe />} />
//     {/* Add more routes as needed */}
//   </Routes>
// </BrowserRouter>
