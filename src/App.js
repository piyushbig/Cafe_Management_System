// import logo from './logo.svg';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AllCategories from './Components/categories/AllCategories';
import Login from './Components/login/login';
import Registration from './Components/registration/Registration';
import UpdateDetails from './Components/updateDetails/UpdateDetails';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<Login />}></Route>  
          <Route path='/allCategories' element={<AllCategories />}></Route>  
          <Route path='/registration' element={<Registration />}></Route>  
          <Route path='/updateDetails' element={<UpdateDetails />}></Route>  
        </Routes>
      </BrowserRouter>
    
      
      </>
  );
}

export default App;
