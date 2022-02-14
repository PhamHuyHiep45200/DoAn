import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './navbar/Navbar'
import Footter from './footer/Footter'

function NavFot() {
  return (
      <>
        <Navbar/>
          <Outlet/>
        <Footter/>
      </>
  )
}

export default NavFot;
