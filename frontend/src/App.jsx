import React from 'react'
import Navbar from './components/Navbar'
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import AllProduct from './pages/AllProduct';
import MyOrder from './pages/MyOrder';
import Home from './pages/Home';
import Profile from './pages/Profile';
import LoginPage from './pages/LoginPage';
import { useAuthStore } from './store/UseAuthStore';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import { Toaster } from 'react-hot-toast';
import ProductDetails from './pages/ProductDetails';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';

const App = () => {
  const {authUser, isCheckingAuth} = useAuthStore()

  console.log(authUser);

  if(isCheckingAuth && !authUser) return (
    <div className='flex justify-center items-center h-screen'>
      <LoaderCircle className='size-20 animate-spin' />
    </div>
  )

  
  
  const hideFooterRoutes = ['/login'];
  const location = useLocation();
  const hideFooter = hideFooterRoutes.includes(location.pathname);
  return (
    <div className='bg-secondary min-h-screen'>
      <Navbar/>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<AllProduct/>} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/checkout" element={<CheckoutPage />} />
      <Route path="/myorder" element={<MyOrder />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/profile" element={authUser ? <Profile /> : <Navigate to="/login" />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/product-category/:id" element={<ProductDetails />} />
      </Routes>

      {!hideFooter &&  <Footer/>}

      <Toaster/>

    </div>
  )
}

export default App
