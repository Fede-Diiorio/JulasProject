import { Link } from "react-router-dom"
import classes from './SideBarItem.module.scss'

const SideBarItem = ({ img, title, to }) => {
    return (
        <li>
            <Link to={to} className={classes.link}>
                <img src={img} alt={`nombre de ${title}`} className={classes.img} />
                <p>{title}</p>
            </Link>
        </li>
    )
}

export default SideBarItem