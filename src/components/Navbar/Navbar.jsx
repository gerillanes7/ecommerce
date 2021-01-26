import "./Navbar.css";
import logo from "../../assets/images/logo.png";
import { IoCart } from "react-icons/io5";

const Navbar = () => {
  return (
    <div>
      <nav className="container">
        <div className="logo">
          <img className="imagenLogo" src={logo} />
        </div>
        <div>
          <ul className="opciones">
            <li><a>Inicio</a></li>
            <li><a>Nosotros</a></li>
            <li><a>Productos</a></li>
            <li><IoCart /></li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
