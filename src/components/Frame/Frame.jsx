import classes from './Frame.module.scss';

const Frame = ({ children }) => {
    return (
        <div className={classes.frame}>
            {children}
        </div>
    )
}

export default Frame