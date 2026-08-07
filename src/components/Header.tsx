import styles from './Header.module.css';

import logo from '../assets/logo.png'
import {menu} from '../data/menu'

interface HeaderProps {
    onClick: (menu: string) => void;
}

export default function Header(props: HeaderProps) {
    return (
        <div className={styles.header}>
            <div className={styles.top}>
                <h1 className={styles.logo}>
                    <a onClick={() => props.onClick('Home')}>
                        <img src={logo} alt='logo'></img>
                    </a>
                </h1>
            </div>
            <div className={styles.menu}>
                {menu.map(m => (
                    <div key={m}>
                        <button onClick={() => props.onClick(m)}>{m}</button>
                    </div>
                ))}
            </div>
        </div>
    );
}