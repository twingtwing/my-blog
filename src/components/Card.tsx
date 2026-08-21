import styles from './Card.module.css'

type CardPorps = {
    card: any;
    className?: string;
}

const Card = ({card, className} : CardPorps) => {
    return (
        <div className={`${styles.card} ${className ? styles[className] : ''}`}>
            <div className={styles.top}>
                <span>{card.title}</span>
            </div>
            <div className={styles.middle}>
                <span>{card.description}</span>
            </div>
            <div className={styles.footer}>
                <span>{card.calories}</span>
            </div>
        </div>
    )
}

export default Card;