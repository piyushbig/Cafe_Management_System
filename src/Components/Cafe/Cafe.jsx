import { BrowserRouter, Route,Routes } from "react-router-dom";
import AddFood from "./AddFood";
import CafeNavbar from "./CafeNavbar";

export function Cafe(){

    return(
        <BrowserRouter>
        <CafeNavbar/>
            <Routes>
                <Route path="/addFood" element={<AddFood/>}/>
            </Routes>
        </BrowserRouter>
    )
}