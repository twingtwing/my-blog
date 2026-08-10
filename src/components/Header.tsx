import styles from './Header.module.css';

import logo from '../assets/logo.png'
import {menu} from '../data/menu'

interface HeaderProps {
    onClick: (menu: string) => void;
}

export default function Header(props: HeaderProps) {
    return (
        <header className={styles.header}>
            <div className={styles['header-in']}>
                <div className={styles.top}>
                    <h1 className={styles.logo}>
                        <a onClick={() => props.onClick('Home')}>
                            <img src={logo} alt='logo'></img>
                        </a>
                    </h1>
                </div>
                <nav className={styles.middle}>
                    <ul className={styles.menu}>
                        {menu.map(m => (
                            <li key={m}>
                                <button onClick={() => props.onClick(m)}>{m}</button>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </header>
    );
}