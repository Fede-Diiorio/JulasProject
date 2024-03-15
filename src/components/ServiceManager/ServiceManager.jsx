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

            <ul className={classes.items}>
                <li><ServiceItem title={'Prueba'} img={'../vite.svg'} /></li>
                <li><ServiceItem title={'Prueba'} img={'../vite.svg'} /></li>
                <li><ServiceItem title={'Prueba'} img={'../vite.svg'} /></li>
                <li><ServiceItem title={'Prueba'} img={'../vite.svg'} /></li>
            </ul>
        </section>
    )
}

export default ServiceManger