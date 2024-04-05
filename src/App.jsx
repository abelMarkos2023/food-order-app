import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";
import Order from "./pages/Order/Order";
import Footer from "./components/Footer/Footer";
import { useState } from "react";
import LoginPopup from "./components/LoginPopup/LoginPopup";


const App = () =>{

  const [login,setLogin] = useState(false);

  return (
    <>
    {login && <LoginPopup setLogin={setLogin}/>}
      <div className="app">
      <Navbar showLogin = {setLogin}/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/order' element={<Order />} />
      </Routes>
    </div>
    <Footer />
    </>
  )
}

export default App;