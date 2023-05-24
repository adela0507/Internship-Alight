import React from 'react'
import { useNavigate } from "react-router-dom";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import toskana from '../Restaurante/toskanaa';
import nutri from '../Restaurante/nutri';
import mc from '../Restaurante/mcdata';
const Produse = () => {
    const navigate=useNavigate();
  return (
    <div>
        <Navbar></Navbar>
      <h1> Ce poti comanda?</h1>
      <h2 className='rosu'> Toskana</h2>
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
               <h2 className='rosu'> Nutriento</h2>
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
               <h2 className='rosu'>McDonald</h2>
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
    <button className="link-btn" onClick={()=>navigate('/')}>Inapoi la pagina principala</button>
    <Footer></Footer>
    </div>
  )
}

export default Produse
