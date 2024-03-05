import { FaAngleRight } from "react-icons/fa6";
import classes from './AccountState.module.scss'

const AccountState = () => {
    return (
        <section className={classes.section}>
            <div className={classes.balanceContainer}>
                <h3>Estado de cuenta</h3>
                <div className={classes.balance}>
                    <p>Saldo</p>
                    <h2>$ 0<span>00</span></h2>
                </div>
            </div>

            <div className={classes.pay}>
                <p>Ir a pagar</p>
                <FaAngleRight className={classes.icon} />
            </div>
        </section>
    )
}

export default AccountState