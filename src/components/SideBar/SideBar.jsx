import classes from './SideBar.module.scss';
import { FaHouseChimney } from "react-icons/fa6";
import { IoDocumentText } from "react-icons/io5";
import { FaTruck } from "react-icons/fa";
import { BsQuestionCircleFill } from "react-icons/bs";
import { BsFillLightningChargeFill } from "react-icons/bs";

const SideBar = () => {
    return (
        <aside className={classes.aside}>
            <h2 className={classes.title}>Edea</h2>
            <nav>
                <ul>
                    <li className={classes.field}>
                        <FaHouseChimney className={classes.icon} />
                        <h4>Mis cuentas</h4>
                    </li>
                    <li className={classes.field}>
                        <IoDocumentText className={classes.icon} />
                        <h4>Trámites</h4>
                    </li>
                    <li className={classes.field}>
                        <FaTruck className={classes.icon} />
                        <h4>Servicio técnico</h4>
                    </li>
                    <li className={classes.field}>
                        <BsQuestionCircleFill className={classes.icon} />
                        <h4>Consultar segmentación tarifaria</h4>
                    </li>
                    <li className={classes.field}>
                        <BsFillLightningChargeFill className={classes.icon} />
                        <h4>Simulador</h4>
                    </li>
                </ul>
            </nav>
        </aside>
    );
};

export default SideBar