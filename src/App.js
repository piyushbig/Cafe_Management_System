// import logo from './logo.svg';
import "./App.css";
import AddFood from "./Components/Cafe/AddFood";
import foodCard from "./Components/Cafe/foodCard";
import Login from "./Components/login/login";
import NavbarAdmin from "./Components/Admin/NavbarAdmin";
import AdminRegister from "./Components/Admin/AdminRegister";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Admin } from "./Components/Admin/Admin";
import HomeNavbar from "./Components/Home/HomeNavbar";
import { Home } from "./Components/Home/Home";
import { Customer } from "./Components/customer/Customer";
import { Cafe } from "./Components/Cafe/Cafe";

function App() {
  return (
    // <Login/>
    // <AddFood />
    // <foodCard/>

    // <Admin/>
    <Home />
    // <Customer/>
    // <Cafe />
  );
}

export default App;
