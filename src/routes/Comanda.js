import React from 'react'
import { useNavigate } from "react-router-dom";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Comanda = () => {
    const navigate=useNavigate();
  return (
    <div>
        <Navbar></Navbar>
      <h4>Comanda</h4>
    <button className="link-btn" onClick={()=>navigate('/')}>Inapoi la pagina principala</button>
    <Footer></Footer>
    </div>
  )
}

export default Comanda
