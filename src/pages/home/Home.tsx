import useEmblaCarousel from 'embla-carousel-react';
import styles from './Home.module.css'
import banner from '../../assets/banner.jpg'

import { recipeData } from "../../data/recipe";
/* 
    - 반응형 헤더 만들기
    - 움직이는 텍스트 카드
        - 카드 형태 컴포넌트화 
*/
function Home() {
    const [emblaRef] = useEmblaCarousel();

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
                        <div className={styles.carousel}>

                        </div>
                        <div className={styles['card-slide']}>
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
                        <button className='embla__prev'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
                                <path d="M320 64C178.6 64 64 178.6 64 320C64 461.4 178.6 576 320 576C461.4 576 576 461.4 576 320C576 178.6 461.4 64 320 64zM199 305C189.6 295.6 189.6 280.4 199 271.1C208.4 261.8 223.6 261.7 232.9 271.1L319.9 358.1L406.9 271.1C416.3 261.7 431.5 261.7 440.8 271.1C450.1 280.5 450.2 295.7 440.8 305L337 409C327.6 418.4 312.4 418.4 303.1 409L199 305z"/>
                            </svg>
                        </button>
                        <button className='embla__next'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
                                <path d="M320 576C461.4 576 576 461.4 576 320C576 178.6 461.4 64 320 64C178.6 64 64 178.6 64 320C64 461.4 178.6 576 320 576zM441 335C450.4 344.4 450.4 359.6 441 368.9C431.6 378.2 416.4 378.3 407.1 368.9L320.1 281.9L233.1 368.9C223.7 378.3 208.5 378.3 199.2 368.9C189.9 359.5 189.8 344.3 199.2 335L303 231C312.4 221.6 327.6 221.6 336.9 231L441 335z"/>
                            </svg>
                        </button>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Home