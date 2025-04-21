import React from 'react'
import Navbar from './components/Navbar'
import { Navigate, Route, Routes } from 'react-router-dom';
import AllProduct from './pages/AllProduct';
import MyOrder from './pages/MyOrder';
import Home from './pages/Home';
import Profile from './pages/Profile';
import SigninPage from './pages/SigninPage';
import LoginPage from './pages/LoginPage';
import { useAuthStore } from './store/UseAuthStore';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import { Toaster } from 'react-hot-toast';

const App = () => {
  const {authUser, isCheckingAuth} = useAuthStore()

  console.log(authUser);

  if(isCheckingAuth && !authUser) return (
    <div className='flex justify-center items-center h-screen'>
      <LoaderCircle className='size-20 animate-spin' />
    </div>
  )
  return (
    <div className='bg-secondary min-h-screen'>
      <Navbar/>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<AllProduct/>} />
      <Route path="/myorder" element={<MyOrder />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/profile" element={authUser? <Profile /> :<Navigate to="/login" />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signin" element={<SigninPage />} />
      </Routes>
      <Footer/>
      <Toaster/>

    </div>
  )
}

export default App
