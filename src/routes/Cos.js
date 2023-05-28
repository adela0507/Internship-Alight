import React from 'react'
import { useNavigate } from "react-router-dom";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useAppContext } from '../context/appContext';

const Cos = () => {
    const navigate=useNavigate();
    const{name,username,price,mention,address,distance,carts,handleChange}=useAppContext()

    const handleSubmit=(e)=>{
        e.preventDefault();
        if(!name || !username|| !price || !address || !distance ){
            return
        }
        carts()
        }
        const handleCartInput=(e)=>{
    const name=e.target.name
    const value=e.target.value
    console.log(`${name}:${value}`);
    handleChange({name,value})
  }
  return (
    <div>
        <Navbar></Navbar>
      <h4>Aici se afiseaza produsele</h4>
    <button className="link-btn" onClick={()=>navigate('/')}>Inapoi la pagina principala</button>
    <form >
      <h1>Date personale</h1>
      <label htmlFor="name">Nume: </label>
        <input value={username}
        type="text" 
        placeholder="numele tau"
        name="name" 
        onChange={handleCartInput}/>

        <br /><label htmlFor="adresa">Adresa: </label>
        <input value={address}
        type="text" 
        placeholder="adresa completa"
        name="adresa" 
        onChange={handleCartInput}/>

        <br /><label htmlFor="distanta">Distanta: </label>
        <input value={distance}
        type="text" 
        placeholder="distanta in km pana la locuintata"
        name="distanta" 
        onChange={handleCartInput}/>

        <br /><label htmlFor="mentiuni">Mentiuni: </label>
        <input value={mention}
        type="mentiuni" 
        placeholder=""
        name="mentiuni" 
        onChange={handleCartInput}/>
<button type="submit"
             className="button-text" 
             onClick={handleSubmit}>Trimite comanda</button>
    </form>
    <Footer></Footer>
    </div>
  )
}

export default Cos
