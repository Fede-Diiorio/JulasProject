import classes from './Accounts.module.scss'
import Taxes from '../Taxes/Taxes';
import House from '../House/House'
import AccountState from '../AccountState/AccountState';

const Accounts = ({ title }) => {
    return (
        <div className={classes.itemContainer}>
            <h2 className={classes.title}>{title}</h2>
            <House />
            <div className={classes.gridContainer}>
                <Taxes title={'Facturas'} state={'Cobrada'} date={'22 de Diciembre'} price={'$ 6.850,45'} />
                <AccountState />
            </div>
        </div>
    )
};

export default Accounts;