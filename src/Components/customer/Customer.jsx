import { BrowserRouter, Route,Routes } from "react-router-dom";
import CustomerNavbar from "./CustomerNavbar";
import MyCart from "./MyCart";
import MyOrder from "./MyOrder";


export function Customer(){

    return(
        <BrowserRouter>
        <CustomerNavbar/>
        
            <Routes>
                <Route path="/myCart" element={<MyCart />}/>
                <Route path="/myOrder" element={<MyOrder />}/>
            </Routes>
        </BrowserRouter>
    )
}