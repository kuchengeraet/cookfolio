import styles from "./main.module.css"

const Main = ({
    backgroundColor,
    children,
}) => {
    return (
        <div className={styles.container} style={{ backgroundColor: backgroundColor }}>
            {children}
        </div>
    )
};

export default Main;