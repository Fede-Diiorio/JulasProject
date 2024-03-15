import classes from './SideBar.module.scss';
import SideBarItem from '../SideBarItem/SideBarItem';

const SideBar = () => {

    return (
        <aside className={classes.aside}>
            <h2 className={classes.title}>¡Bienvenido!</h2>
            <nav>
                <ul className={classes.ul}>
                    <SideBarItem title={'Probando'} to={'/category/probando'} img={'../vite.svg'} />
                    <SideBarItem title={'ProbandoII'} to={'/category/probandoII'} img={'../vite.svg'} />
                    <SideBarItem title={'ProbandoIII'} to={'/category/probandoIII'} img={'../vite.svg'} />
                </ul>
            </nav>
        </aside>
    );
};

export default SideBar