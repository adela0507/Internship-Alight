import React from 'react'
import { useNavigate } from "react-router-dom";
import Navbar from '../components/Navbar';
import '../components/Navbar.css'; 
import Footer from '../components/Footer';
const Home = () => {
    const navigate=useNavigate();
  return (
    <div >
        <Navbar/>
    <h1 className='content'>astea sunt restaurantele</h1>
    <Footer></Footer>
    </div>
  )
}

export default Home
