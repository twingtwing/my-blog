import { Link } from 'react-router';
import styles from './Header.module.css';

import logo from '../assets/logo.png'
import {menu} from '../data/menu'

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles['header-in']}>
                <div className={styles.top}>
                    <h1 className={styles.logo}>
                        <Link to="/">
                            <img src={logo} alt='logo'></img>
                        </Link>
                    </h1>
                </div>
                <nav className={styles.middle}>
                    <ul className={styles.menu}>
                        {menu.map(menu => (
                            <li key={menu}>
                                <Link to={`/${menu.toLocaleLowerCase()}`}>{menu}</Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;
