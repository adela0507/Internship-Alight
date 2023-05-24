import React from 'react'
import nutri from './nutri'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
const Nutrient = () => {
  return (
    <div>         
      <Navbar></Navbar>
      <h1>Nutrient</h1> <br /> <br />
      <div className='grid'>
            {nutri.map(nutri=>{
                return(
                   <div key={nutri.id} className='products-container'>
                    <strong>{nutri.name}</strong>
                    <br />
                    <br />
                   <img src={nutri.image} alt='' className='wow'/>
                   <p>{nutri.desc}</p>
                   <p>{nutri.price} lei</p>
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

export default Nutrient
