import styles from './Header.module.css';

import logo from '../assets/logo.png'
import {menu} from '../data/menu'

interface HeaderProps {
    onClick: (menu: string) => void;
}

const Header = ({ onClick }: HeaderProps) => {
    return (
        <header className={styles.header}>
            <div className={styles['header-in']}>
                <div className={styles.top}>
                    <h1 className={styles.logo}>
                        <a onClick={() => onClick('Home')}>
                            <img src={logo} alt='logo'></img>
                        </a>
                    </h1>
                </div>
                <nav className={styles.middle}>
                    <ul className={styles.menu}>
                        {menu.map(menu => (
                            <li key={menu}>
                                <button onClick={() => onClick(menu)}>{menu}</button>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;
