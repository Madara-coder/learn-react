import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Route, Routes, Link } from "react-router-dom";
import { Products, Debrath } from "./pages/products";
import AddProduct from "./pages/products/addProduct";
import NavBar from "./components/NavBar";
import About from "./pages/about-us";
import Contacts from "./pages/contacts/contacts";
import SignOut from "./pages/sign-out";
import Banner from "./components/Banner";
import Home from "./pages/home";

// Dummy compotent
// const Test = () => {
//   return <div>Helo World</div>;
// };

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/sign-out" element={<SignOut />} />
      </Routes>
    </div>
  );
};

export default App;
