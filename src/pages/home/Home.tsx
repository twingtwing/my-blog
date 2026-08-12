import Carousel from "../../components/Carousel"

import styles from './Home.module.css'
import banner from '../../assets/banner.jpg'

import { recipeData, type Recipe } from "../../data/recipe";
/* 
    - 반응형 헤더 및 카드 만들기
    - 카드에 라우터 링크 달기
*/

// 나중에 card 끼리 분리 할 예정
const TextCard = ({card}: {card: Recipe}) => {
    return (
        <div key={card.id} className={styles.card}>
            <div className={styles.header}>
                <div className={styles.title}>
                    <span>{card.title}</span>
                </div>
                <div className={styles.desc}>
                    <span>{card.description}</span>
                </div>
            </div>
            <div className={styles.footer}> 
                <span>{card.id} kcal</span>
            </div>
        </div>
    )
}

const Home = () => {
    return (
        <div className={styles.container}>
            <section className={styles.banner}>
                <div>
                    <img src={banner} />
                </div>
                {/* 반응형 헤더 만들기 */}
                {/* 일반 웹사이트 상단/중단 배너: 1200 x 400px (비율 3:1) */}
            </section>
            <section className={styles.contents}>
                <div>
                    <div className={styles['content-left']}>
                        <span>content-left</span>
                    </div>
                    <div className={styles['content-right']}>
                        <Carousel 
                            list={recipeData} // data
                            height={380} // Carousel 사이즈
                            count={4} // 카드갯수
                            renderCard={card => <TextCard card={card} />} />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Home