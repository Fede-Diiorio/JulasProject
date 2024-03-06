import classes from './ServiceManager.module.scss';
import ServiceItem from '../ServiceItem/ServiceItem';

const ServiceManger = () => {
    return (
        <section className={classes.serviceManager}>
            <div className={classes.info}>
                <h4>¡Gestioná tu servicio!</h4>
                <p>Seleccioná la actividad,</p>
                <p>trámite o consulta</p>
            </div>
            <div className={classes.items}>
                <ServiceItem img={'../vite.svg'} title={'Ejemplo'} />
                <ServiceItem img={'../vite.svg'} title={'Ejemplo 2'} />
                <ServiceItem img={'../vite.svg'} title={'Ejemplo 3'} />
            </div>
        </section>
    )
}

export default ServiceManger