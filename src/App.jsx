import React, { useState } from "react";
import { useEffect } from 'react';
import { BrowserRouter,Route,Routes} from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Blogs from "./pages/Blogs";
import BlogsDetails from "./pages/BlogsDetails";
import PlacesRoute from "./pages/PlacesRoute";
import NoPage from "./pages/NoPage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const  App=() =>{

  useEffect(() => {
  AOS.init({
    duration: 1000, // animation duration
    once: true,     // only animate once
  });
}, []);

  return (
    <>
      <ToastContainer
  position="bottom-center"
  autoClose={2000}
  hideProgressBar={false}
  newestOnTop={false}
  closeOnClick
  rtl={false}
  pauseOnFocusLoss
  draggable
  pauseOnHover
/>
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Layout/> }  >
          <Route index element={<Home />}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/blogs" element={<Blogs/>}/>
          <Route path="/blogs/:id" element={<BlogsDetails/>}/>
          <Route path="/places" element={<PlacesRoute/>}/>
          <Route path="*" element={<NoPage/>}/>
        </Route>
        </Routes>
      </BrowserRouter>
    </>
    
  )
}

export default App
