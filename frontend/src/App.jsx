import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider } from 'react-router-dom';
import MainLayout from "./Layout/MainLayout";
import HomePage from "./Pages/HomePage";
import Checkout from "./Pages/Checkout";
import PaymentPay from "./Pages/PaymentPay";
import Success from "./Pages/Success";
import Navbar from "./Components/Navbar";
import Landing from "./Components/Landing";
import ProductList from "./Components/ProductList";
import LoginPage from './Pages/LoginPage';
import SignupPage from './Pages/SignupPage';
import HomeCarts from './Pages/HomeCarts';
import ProductDetails from './Pages/ProductDetails';
import { useState } from 'react';



function App() {

const [cart, setCart] = useState([]); 

const addToCart = (product, qty, size) => {
   setCart((prev) => {
    const existing = prev.find(
      (item) => item.id === product.id && item.size === size
    );

    if (existing) {
      return prev.map((item) =>
        item.id === product.id && item.size === size
          ? { ...item, qty: item.qty + qty }
          : item
      );
    }

    return [...prev, { ...product, qty, size }];
  });
};

const handleAdd = (id) => {
  setCart((prev) =>
    prev.map((item) =>
      item.id === id ? { ...item, qty: item.qty + 1 } : item
    )
  );
};

const handleSubtract = (id) => {
  setCart((prev) =>
    prev.map((item) =>
      item.id === id && item.qty > 1
        ? { ...item, qty: item.qty - 1 }
        : item
    )
  );
};

const handleRemove = (id) => {
  setCart((prev) => prev.filter((item) => item.id !== id));
};

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<MainLayout cart={cart}/>}>
    <Route index element={<HomePage />}/>
    <Route path='products' element={<ProductList onAddToCart={addToCart}/>} />
    <Route path='login' element={<LoginPage />} />
    <Route path='signup' element={<SignupPage />} />
    <Route path='carts' element={<HomeCarts cart={cart} isHome={false}
      onAdd={handleAdd}
      onSubtract={handleSubtract}
      onRemove={handleRemove}/>} /> 

    <Route path='product/:id' element={<ProductDetails addToCart={addToCart} />} />
    <Route path='/Checkout' element={<Checkout />} />
    {/* <Route path='/' element={<ProductList onAddToCart={handleAddToCart} />} /> */}
  
    </Route>
    
  )
)
  return (
    
     <RouterProvider router={router}/>
      
  )
}

export default App
