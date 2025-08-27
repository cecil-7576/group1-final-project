import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

function MainLayout({cart}) {
  return (
    <div>
        <Navbar cart={cart}/>
        <Outlet />
        <Footer />
    </div>
  )
}

export default MainLayout;