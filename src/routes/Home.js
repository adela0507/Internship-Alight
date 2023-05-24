import React from 'react'
import { useNavigate } from "react-router-dom";
import Navbar from '../components/Navbar';
import '../components/Navbar.css'; 
import '../components/Home.css'; 
import Footer from '../components/Footer';
import { Link } from 'react-router-dom'

const Home = () => {
    const navigate=useNavigate();
  return (
    <div >
        <Navbar/> <br /> <br />
    <h1 className='content'>Restaurante disponibile</h1> <br /> <br />
    <div className='centru'>      
      <Link to='/mc' className='link-no-underline'><img src="data:image/png;base64,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" alt="McDonalds" /> <br /></Link> <br /> <br /> <br />
      <h4>Program</h4>
      <p>Luni 10:00 - 22:00</p>
      <p>Marti 10:00 - 22:00</p>
      <p>Miercuri 10:00 - 22:00</p>
      <p>Joi 10:00 - 22:00</p>
      <p>Vineri 10:00 - 22:00</p>
      <p>Sambata 10:00 - 22:00</p>
      <p>Duminica 10:00 - 22:00</p> 
      <h4>Comanda minima:</h4><p>30 lei</p>
      <h4>Distanta maxima de parcurs fara costuri suplimentare:</h4><p>20 km</p>
      <h4>Cotizatie pe km inafara ariei:</h4><p>4 lei/km </p>

      <br />
      <Link to='/toskana' className='link-no-underline'>      <img src="https://www.pizzeriatoskana.ro/wp-content/uploads/2014/08/logo-toskana1.jpg" alt="Toskana" /><br /> <br /></Link> <br />
      <h4>Program</h4>
      <p>Luni 08:00 - 24:00</p>
      <p>Marti 08:00 - 24:00</p>
      <p>Miercuri 08:00 - 24:00</p>
      <p>Joi 08:00 - 24:00</p>
      <p>Vineri 08:00 - 24:00</p>
      <p>Sambata 08:00 - 24:00</p>
      <p>Duminica 09:00 - 24:00</p> 
      <h4>Comanda minima:</h4><p>50 lei</p>
      <h4>Distanta maxima de parcurs fara costuri suplimentare:</h4><p>15 km</p>
      <h4>Cotizatie pe km inafara ariei:</h4><p>5 lei/km </p>


 <br />
      <Link to='/nutri' className='link-no-underline'><img src="https://i0.wp.com/shop.nutriento.ro/wp-content/uploads/2021/06/nutrientologo-deep-green@4x.png?w=360&ssl=1" alt="Nutriento" /> <br /></Link> <br />
      <h4>Program</h4>
      <p>Luni 10:00 - 18:00</p>
      <p>Marti 10:00 - 18:00</p>
      <p>Miercuri 10:00 - 18:00</p>
      <p>Joi 10:00 - 18:00</p>
      <p>Vineri 10:00 - 18:00</p>
      <p>Sambata ~ Inchis</p>
      <p>Duminica ~ Inchis</p>
      <h4>Comanda minima:</h4><p>30 lei</p>
      <h4>Distanta maxima de parcurs fara costuri suplimentare:</h4><p>25 km</p>
      <h4>Cotizatie pe km inafara ariei:</h4><p>3 lei/km </p>

      </div>

    <Footer></Footer>
    </div>
  )
}

export default Home
