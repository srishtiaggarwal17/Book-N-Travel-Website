import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";
import Popup from "../components/Popup";

const Layout=()=>{
    const [orderPopup,setOrderPopup]=useState(false)
        const handleOrderPopup=()=>{
            setOrderPopup(!orderPopup)
        }
    return(
        <div>
            <Navbar handleOrderPopup={handleOrderPopup} />
            <Outlet/>
            <Footer/>
            <Popup orderPopup={orderPopup} setOrderPopup={setOrderPopup}/>
        </div>
    )
}

export default Layout

