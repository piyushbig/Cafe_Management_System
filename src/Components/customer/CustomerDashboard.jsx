import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './Styles/CustomerNavbar.css';
import axios from 'axios';
import { logout } from '../login/Auth';
import ProductCard from '../Home/HomePage/Cards/ProductCard';
import CustomerNavbar from './CustomerNavbar';
const CustomerDashboard = () => {
  const[category,setcategory]=useState([]);

  useEffect(()=>{

    axios.get(`http://localhost:8086/category/fetch`).then((response => {
            setcategory(response.data);
        }))
      
   },[])

   const handleClick=()=>{
    logout();
   }



  return (

    <>
     
    <CustomerNavbar/>
    <ProductCard/>
    </>
  );
};

export default CustomerDashboard;
