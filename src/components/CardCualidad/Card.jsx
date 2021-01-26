import "./card.css"
import { BiSupport } from "react-icons/bi";
import { MdSecurity } from "react-icons/md";
import { BsHeartFill } from "react-icons/bs";



const Card = ({titulo, descripcion}) => {
    const renderCard = (tituloCard) => {
        if(tituloCard === 'Calidad') {
            return (
                <div className="card">
                    <BsHeartFill style={{color: '#E67E22'}}/>
                    <h3>{titulo}</h3>
                    <p>{descripcion}</p>
                </div>
            )
        } else if(tituloCard === 'Pago Seguro') {
            return (
                <div className="card">
                    <MdSecurity style={{color: '#E67E22'}}/>
                    <h3>{titulo}</h3>
                    <p>{descripcion}</p>
                </div>
            )
        } else {
            return (
                <div className="card">
                    <BiSupport style={{color: '#E67E22'}}/>
                    <h3>{titulo}</h3>
                    <p>{descripcion}</p>
                </div>
            )
        }
    }
    return (
        <div>
            {renderCard(titulo)}
        </div>
    )
}

export default Card