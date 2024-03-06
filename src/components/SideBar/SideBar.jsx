import classes from './SideBar.module.scss';
import { getCategories } from '../../services/firebase/firestore/categories';
import { useAsync } from '../../hooks/useAsync';
import { Link } from 'react-router-dom';

const SideBar = () => {

    const asyncFunctiron = () => getCategories();
    const { data: categories } = useAsync(asyncFunctiron, []);

    return (
        <aside className={classes.aside}>
            <h2 className={classes.title}>Edea</h2>
            <nav>
                <ul className={classes.ul}>
                    {
                        categories.map(cat => (
                            <li key={cat.id}><img src={cat.img} alt={`Icono de ${cat.name}`} /><Link className={classes.link} to={`category/${cat.slug}`}>{cat.name}</Link></li>
                        ))
                    }
                </ul>
            </nav>
        </aside>
    );
};

export default SideBar