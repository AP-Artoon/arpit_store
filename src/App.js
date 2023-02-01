import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Api from './component/Api';
import Cart from './component/Cart';
import Dashbord from './component/Dashbord';
import Home from './component/Home';
import Login from './component/Login';
import Product from './component/Product';
import Protected from './component/Protected';
import Public from './component/Public';
import Singup from './component/Singup';

function App() {
  return (
    <>
      <Api />
      <Routes>

        <Route element={<Public />}>

          <Route element={<Singup />} path="/" />
          <Route element={<Login />} path="/login" />

        </Route>


        <Route element={<Protected />} >
          <Route element={<Home />} path="/home" exact />
          <Route element={<Dashbord />} path="/dashbord" exact />
          <Route element={<Cart />} path="/cart" exact />
          <Route element={<Product />} path="/product/:id" exact />
        </Route>


      </Routes>
    </>
  );
}

export default App;
