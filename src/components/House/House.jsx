import classes from './House.module.scss'
import { FaAngleDown, FaCheck, FaXmark } from "react-icons/fa6";

const House = () => {
    return (
        <div className={classes.house}>
            <div className={classes.houseInfo}>
                <h3>Casa</h3>
                <p><strong>Mar del Plata </strong>Nº 73-121590 - Familiar</p>
                <div className={classes.houseChecks}>
                    <button>Medidor conectado</button>
                    <button>Segmentación nivel 1</button>
                    <button><FaCheck /> Factura digital</button>
                    <button className={classes.redButton}><FaXmark /> Débito automático</button>
                </div>
            </div>
            <button className={classes.dropDown} ><FaAngleDown className={classes.dropDownIcon} /></button>
        </div>
    )
}

export default House