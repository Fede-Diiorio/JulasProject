import classes from './ServiceItem.module.scss';

const ServiceItem = ({ img, title }) => {
    return (
        <div className={classes.service}>
            <img src={img} alt={`icono de ${title}`} className={classes.img} />
            <p>{title}</p>
        </div>
    )
}

export default ServiceItem