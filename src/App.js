import './App.css';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import NavbarAdmin from './Components/Admin/NavbarAdmin';
import CustomerNavbar from './Components/Customer/CustomerNavbar';


function App() {
  return (
    <div className="App">
      <Router>
        <NavbarAdmin />
        <CustomerNavbar />
      </Router>
      
    </div>
  );
}

export default App;
