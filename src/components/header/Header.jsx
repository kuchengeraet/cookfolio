import styles from "./header.module.css"
import { Link } from 'react-router';

const Header = ({
    children,
}) => {
    return (
        <div className={styles.container}>
            <Link className={styles.link} to={`/cookfolio`}>
                <img src="/cookfolio/logo.png" alt="logo" width={50} height={50}></img>
                <span className={styles.logoText}>Mein Kochbuch</span>
            </Link>
            {children}
        </div >

    )
};

export default Header;