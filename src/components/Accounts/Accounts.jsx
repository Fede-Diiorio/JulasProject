import classes from './Accounts.module.scss'
import Taxes from '../Taxes/Taxes';
import House from '../House/House'
import AccountState from '../AccountState/AccountState';
import ServiceManger from '../ServiceManager/ServiceManager';
import Frame from '../Frame/Frame';

const Accounts = ({ title }) => {
    return (
        <div className={classes.itemContainer}>
            <h2 className={classes.title}>{title}</h2>
            <House />
            <ServiceManger />
            <div className={classes.gridContainer}>
                <Taxes title={'Facturas'} state={'Cobrada'} date={'22 de Diciembre'} price={'$ 6.850,45'} />
                <AccountState />
            </div>
            <Frame>
                <h1>Testeando el Frame</h1>
                <p>Por lo que viene</p>
            </Frame>
        </div>
    )
};

export default Accounts;