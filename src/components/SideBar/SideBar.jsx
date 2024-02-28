import classes from './SideBar.module.scss';
import { getCategories } from '../../services/firebase/firestore/categories';
import { useAsync } from '../../hooks/useAsync';
import { Link } from 'react-router-dom';

const SideBar = () => {

    const asyncFunctiron = () => getCategories();
    const { data: categories } = useAsync(asyncFunctiron, []);
    console.log(categories);

    return (
        <aside className={classes.aside}>
            <h2 className={classes.title}>Edea</h2>
            <nav>
                <ul>
                    {
                        categories.map(cat => (
                            <li key={cat.id}><Link to={`category/${cat.slug}`}>{cat.name}</Link></li>
                        ))
                    }
                </ul>
            </nav>
        </aside>
    );
};

export default SideBar