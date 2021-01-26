import Navbar from "../../components/Navbar/Navbar"
import imagen from "../../assets/images/imagen3.jpg"
import "./home.css"
import Card from "../../components/CardCualidad/Card"
import { BiSupport } from "react-icons/bi";


const Home = () => {
    return (
        <div>
            <Navbar/>
            <div className="home-container">
                <img src={imagen} className="foto"/>
            </div>
            <div className="cualidades-container">
                <Card titulo="Calidad" descripcion="La mejor calidad del mercado." icono={<BiSupport />}/>
                <Card titulo="Pago Seguro" descripcion="El metodo mas seguro de pago."/>
                <Card titulo="Soporte 24hs" descripcion="Atencion 24 hs al cliente."/>
            </div>
        </div>
    )
}

export default Home