import styles from './Home.module.css'
import banner from '../../assets/banner.jpg'

import { recipeData } from "../../data/recipe";

function Home() {
    /* 
        나중에 자동스크롤되어서 무한 반복되는 텍스트 카드 형태로 교체해야함
    */
    return (
        <div className={styles.container}>
            <div className={styles.banner}>
                <img src={banner} />
                {/* 반응형 헤더 만들기 */}
                {/* 일반 웹사이트 상단/중단 배너: 1200 x 400px (비율 3:1) */}
            </div>
            <div className={styles.contents}>
                <div className={styles['content-left']}>
                    <span>content-left</span>
                </div>
                <div className={styles['content-right']}>
                    <div className={styles['card-right']}>
                        {recipeData.map(recipe => (
                            <div key={recipe.id} className={styles.card}>
                                <div className={styles['card-title']}>
                                    <span>{recipe.title}</span>
                                </div>
                                <div className={styles['card-footer']}>
                                    <div>
                                        <span>{recipe.category} • {recipe.subCategory}</span>
                                    </div>
                                    <div>
                                        <span>{recipe.calories} kcal</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home