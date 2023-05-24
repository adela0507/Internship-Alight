import React from 'react'
import mc from './mcdata'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
const McDonalds = () => {
  return (
    <div>         
      <Navbar></Navbar>
      <h1>McDonald</h1> <br /> <br />
      <div className='grid'>
            {mc.map(mc=>{
                return(
                   <div key={mc.id} className='products-container'>
                    <strong>{mc.name}</strong>
                    <br />
                    <br />
                   <img src={mc.image} alt='' />
                   <p>{mc.descriprion}</p>
                    <br />
                     <button>Adauga in cos</button>
                   </div>
                );
            })}
               </div>
               <button className='link-btn '><Link to='/'>Home</Link></button>
              <Footer></Footer>
    </div>
  )
}

export default McDonalds
