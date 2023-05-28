import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
// import toskana from '../Restaurante/toskanaa';
// import nutri from '../Restaurante/nutri';
// import mc from '../Restaurante/mcdata';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Produse = () => {
    const navigate=useNavigate();
    const [productsMc,setProductsMc]=useState([]);
    const [productsToskana,setProductsToskana]=useState([]);
    const [productsNutri,setProductsNutri]=useState([]);
    useEffect(()=>{
      const fetchMcDataMc=async()=>{
         const result= await axios.get('/api/v1/mc');
         setProductsMc(result.data)
      }
      fetchMcDataMc();
    },[])
    useEffect(()=>{
      const fetchToskanaData=async()=>{
         const resultToskana= await axios.get('/api/v1/toskana');
         setProductsToskana(resultToskana.data)
      }
      fetchToskanaData();
    },[])
    useEffect(()=>{
      const fetchNutriData=async()=>{
         const resultNutri= await axios.get('/api/v1/nutri');
         setProductsNutri(resultNutri.data)
      }
      fetchNutriData();
    },[])
  return (
    <div>
        <Navbar></Navbar>
      <h1> Ce poti comanda?</h1>
      <h2 className='rosu'> Toskana</h2>
      <div className='grid'>
            {productsToskana&&productsToskana.map(toskana=>{
                return(
                   <div key={toskana.id} className='products-container'>
                    <strong>{toskana.name}</strong>
                    <br />
                    <br />
                    <Link to='/toskana'><img src={toskana.image} alt=''  className='wow'/></Link>
                   <p>{toskana.description}</p>
                    <br />
                     <button >Adauga in cos</button>
                   </div>
                );
            })}
               </div>
               <h2 className='rosu'> Nutriento</h2>
               <div className='grid'>
            {productsNutri&&productsNutri.map(nutri=>{
                return(
                   <div key={nutri.id} className='products-container'>
                    <strong>{nutri.name}</strong>
                    <br />
                    <br />
                    <Link to='/nutri'><img src={nutri.image} alt='' className='wow'/></Link>
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
            {productsMc&& productsMc.map(mc=>{
                return(
                   <div key={mc.id} className='products-container'>
                    <strong>{mc.name}</strong>
                    <br />
                    <br />
                    <Link to='/mc'><img src={mc.image} alt='' /></Link>                   <p>{mc.descriprion}</p>
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
