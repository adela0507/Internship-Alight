import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'
const Navbar = () => {
  return (
    <div className='navbar'>
      <Link to="/" className="link-btn">Restaurante</Link>
      <Link to="/conectare" className="link-btn">Conectare</Link>
      {/* <Link to="/inregistrare" className="link-btn">Aici te înregistrezi</Link> */}
      <Link to="/produse" className="link-btn">Vezi Produse</Link>
      <Link to="/cos" className="link-btn">Coș</Link>
      {/* <Link to="/comanda" className="link-btn">Vezi Comanda</Link> */}
      {/* <Link to="/stare" className="link-btn">Vezi Starea Comenzii</Link> */}
    </div>
  );
};

export default Navbar;
