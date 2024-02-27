import classes from './Accounts.module.scss'
import Taxes from '../Taxes/Taxes';
import House from '../House/House'

const Accounts = ({ title }) => {
    return (
        <div className={classes.itemContainer}>
            <h2 className={classes.title}>{title}</h2>
            <House />
            <Taxes title={'Facturas'} state={'Cobrada'} date={'22 de Diciembre'} price={'$ 6.850,45'} />
        </div>
    )
};

export default Accounts;