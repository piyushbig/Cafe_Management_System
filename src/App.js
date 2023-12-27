// import logo from './logo.svg';
import './App.css';
import { MyOrder } from './Components/MyOrders/MyOrder';
import { AllCafe } from './Components/login/AllCafes/AllCafe';
import Login from './Components/login/login';
import { MyCart } from './Components/myCart/MyCart';

function App() {
  return (
    
    <>
    <Login/>
    <AllCafe/>
    <MyCart/>
    <MyOrder/>
    </>
  );
}

export default App;
