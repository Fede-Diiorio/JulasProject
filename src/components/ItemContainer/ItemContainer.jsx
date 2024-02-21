import classes from './ItemContainer.module.scss'
import Card from '../Card/Card';

const ItemContainer = ({ title }) => {
    return (
        <div className={classes.itemContainer}>
            <h2 className={classes.title}>{title}</h2>
            <Card title={'Facturas'} state={'Cobrada'} date={'22 de Diciembre'} price={'$ 6.850,45'} />
        </div>
    )
};

export default ItemContainer;