import React from 'react'
import toskana from './toskanaa'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
const Toskana = () => {
  return (
    <div>         
      <Navbar></Navbar>
      <h1>Toskana</h1> <br /> <br />
      <div className='grid'>
            {toskana.map(toskana=>{
                return(
                   <div key={toskana.id} className='products-container'>
                    <strong>{toskana.name}</strong>
                    <br />
                    <br />
                   <img src={toskana.image} alt=''  className='wow'/>
                   <p>{toskana.description}</p>
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

export default Toskana
