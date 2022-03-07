import React, { useContext, useState, useEffect } from 'react';
import { BrowserRouter } from "react-router-dom";
import NavBar from './components/Navbar';
import AppRouter from './components/AppRouter';



function App(){
  

  return (
    <BrowserRouter>
      <NavBar />
      <AppRouter />
    </BrowserRouter>
  )
}


export default App;
