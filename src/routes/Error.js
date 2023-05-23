import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
const Error = () => {
  return (
    <div>
    <section >
      <Navbar/>
      <h1>Error</h1>
      <h2>404</h2>
      <h3>Pagina pe care încerci să o accesezi nu exista!</h3>
      <button className="link-btn">
      <Link to='/' >Vezi restaurante</Link>
      </button> <br />
      
    </section>
    <Footer/>
    </div>
  );
};
export default Error;
