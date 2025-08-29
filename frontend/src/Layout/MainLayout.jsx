import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

function MainLayout({cart}) {
  return (
    <div className="flex flex-col min-h-screen">
        <Navbar cart={cart}/>
        <main className="flex-grow">
          <Outlet />
      </main>
        
        
    </div>
  )
}

export default MainLayout;