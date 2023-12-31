import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../login/login";
import HomeNavbar from "./HomeNavbar";
import RegisterCafe from "./RegisterCafe";
import foodCard from "./foodCard";
import RegisterCustomer from "./RegistrationCustomer"


export function Home() {
  return (
    <>
    <BrowserRouter>
          <HomeNavbar />
          <Routes>
            <Route path="/register-cafe" element={<RegisterCafe/>} />
            <Route path="/register-customer" element={<RegisterCustomer/>} />
            
            <Route path="/login" element={<Login />} />
          </Routes>
        </BrowserRouter>
        <foodCard/>

    </>
    

  );
}
