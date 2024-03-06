import classes from './ServiceManager.module.scss';
import ServiceItem from '../ServiceItem/ServiceItem';
import { getServices } from '../../services/firebase/firestore/services';
import { useAsync } from '../../hooks/useAsync';

const ServiceManger = () => {

    const asyncFunctiron = () => getServices();
    const { data: service, loading } = useAsync(asyncFunctiron, []);
    console.log(service);

    return (
        <section className={classes.serviceManager}>
            <div className={classes.info}>
                <h4>¡Gestioná tu servicio!</h4>
                <p>Seleccioná la actividad,</p>
                <p>trámite o consulta</p>
            </div>
            <ul className={classes.items}>
                {
                    service.map(cat => (
                        <li key={cat.id}><ServiceItem img={cat.img} title={cat.name} /></li>
                    ))
                }

            </ul>
        </section>
    )
}

export default ServiceManger