import React,{useState} from 'react'
import { useNavigate } from "react-router-dom";

const Inregistrare = () => {
    const navigate=useNavigate();
    const [password,setPassword]=useState('');
    const [email,setEmail]=useState('');
    const [name,setName]=useState('');
    const handleSubmit = (e) => {
    e.preventDefault();
    setEmail('');
    setPassword('');
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handleNameChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  return(
  <div>
    <div className='auth-form-container'>
      <h2>Inregistrare</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Nume:</label> <br />
          <input
            type="text"
            id="name"
            value={name}
            onChange={handleNameChange}
          /> <br />
        </div> 
        <div>
          <label htmlFor="email">Email:</label> <br />
          <input
            type="text"
            id="email"
            value={email}
            onChange={handleEmailChange}
          /> <br />
        </div>
        <div>
          <label htmlFor="password">Parolă:</label> <br />
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
          /> <br />
        </div>
        <button type="submit">Autentificare</button> <br />
        <button className="link-btn" onClick={()=>navigate('/conectare')}>Ai deja cont? Inregistreaza-te!</button>
      </form>
      </div>
    </div>
  );
}

export default Inregistrare
