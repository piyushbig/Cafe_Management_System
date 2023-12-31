

import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavbarAdmin from "./NavbarAdmin";
import AdminRegister from "./AdminRegister";
import  AllCafe  from "./AllCafe";
import AddCategories from "./AddCategory"

export function Admin(){
    return(
        <BrowserRouter>
        <NavbarAdmin/>
            <Routes>
                <Route path="/registerAdmin" element={<AdminRegister/>}/>
                <Route path="/addCategory" element={<AddCategories/>}/>
                <Route path="/registerAdmin" element={<AdminRegister/>}/>
                <Route path="/allCafes" element={<AllCafe/>}/>
                


                
            </Routes>
        </BrowserRouter>
    )
}