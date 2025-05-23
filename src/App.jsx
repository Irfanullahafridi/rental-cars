import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css';
import Header from './Components/Header';
import Home from './Components/Home'
import About from "./Components/About"
import Cars from './Components/Cars';
import Contact from "./Components/Contact"
import CarDetails from './Components/carDetails';
// import Login from './Components/LogIn';
// import Register from './Components/Register';
import Checkout from './Components/Checkout';


function App() {

  return (
    <>
     

    <Header/>

      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Cars" element={<Cars/>} />
        <Route path="/About" element={<About/>} />
        <Route path="/Contact" element={<Contact/>} />
        <Route path="/Child" element={<Contact  />} />
        <Route path="/cars/:id" element={<CarDetails />} />
        {/* <Route path="/Login" element={<Login/>} /> */}
        {/* <Route path="/Register" element={<Register/>} /> */}
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </>
  );
}

export default App;
