import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './routes/Home.js';
import Conectare from './Conectare.jsx';
import Inregistrare from './Inregistrare.jsx';
import Produse from './routes/Produse.js';
import Cos from './routes/Cos.js';
import Comanda from './routes/Comanda.js';
import Stare from './routes/Stare.js';
import Error from './routes/Error.js';
import McDonalds from './Restaurante/McDonalds.js';
import Toskana from './Restaurante/Toskana.js';
import Nutrient from './Restaurante/Nutrient.js';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/conectare" element={<Conectare />} />
          <Route path="/inregistrare" element={<Inregistrare />} />
          <Route path="/produse" element={<Produse />} />
          <Route path="/cos" element={<Cos />} />
          <Route path="/comanda" element={<Comanda/>} />
          <Route path="/stare" element={<Stare/>} />
          <Route path="/*" element={<Error/>}/>
          <Route path="/mc" element={<McDonalds/>}/>
          <Route path="/toskana" element={<Toskana/>}/>
          <Route path="/nutri" element={<Nutrient/>}/>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
