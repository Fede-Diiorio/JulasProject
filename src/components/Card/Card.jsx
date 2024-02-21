import classes from './Card.module.scss'
import { FaAngleRight } from "react-icons/fa6";

const Card = ({ title, state, date, price }) => {
    return (
        <div className={classes.cardContainer}>
            <h3>{title}</h3>
            <div className={classes.information}>
                <div className={classes.currentDocument}>
                    <p><strong>Factura Actual</strong></p>
                    <p className={classes.state}>{state}</p>
                </div>
                <div className={classes.expiration}>
                    <div className={classes.expirationDate}>
                        <p><strong>Vencimiento</strong></p>
                        <p>{date}</p>
                    </div>
                    <p className={classes.price}>{price}</p>
                </div>
            </div>
            <button className={classes.button}>Descargar</button>
            <button className={classes.buttonHistory}>
                <p>Historial de facturas</p>
                <FaAngleRight />
            </button>
        </div>
    )
};

export default Card;