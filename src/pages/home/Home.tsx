import styles from './Home.module.css'
import banner from '../../assets/banner.jpg'

import { recipeData } from "../../data/recipe";
/* 
    - 반응형 헤더 만들기
    - 움직이는 텍스트 카드
        - 카드 형태 컴포넌트화 
*/
function Home() {
    /* 
        나중에 자동스크롤되어서 무한 반복되는 텍스트 카드 형태로 교체해야함
    */
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
                        <div className={styles.slide}>
                            {recipeData.map(recipe => (
                                <div key={recipe.id} className={styles.card}>
                                    <div className={styles['card-title']}>
                                        <span>{recipe.title}</span>
                                    </div>
                                    <div className={styles['card-desc']}>
                                        <span>{recipe.description}</span>
                                    </div> 
                                    <div className={styles['card-footer']}> 
                                        <span>{recipe.calories} kcal</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className={styles.next}>
                            버튼 
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Home