import { useEffect, useState, useRef } from 'react';

import styles from './Home.module.css'
import banner from '../../assets/banner.jpg'

import { recipeData } from "../../data/recipe";
/* 
    - 반응형 헤더 만들기
    - 움직이는 텍스트 카드
        - 카드 형태 컴포넌트화 
*/

function Home() {

    const CARD_HEIGHT = 86;
    const CARD_COUNT = 4;

    const recipes = recipeData.filter((value, index)  => index < 3 * CARD_COUNT)
    // 굳이 양쪽 끝에 처음과 끝 배열을 추가한 이유
    // 카드 끝에서 다음으로 넘어갈때, 거꾸로 빠르게 되감겨 가는 현상이 발생한다.
    // 이를 멈추기 위해서 애니메이션 효과를 잠시 끄고 위치를 바꾼 후에 다시 애니메이션을 시작해야한다.

    const extendRecipes = [
        ...recipes.slice(-CARD_COUNT),
        ...recipes,
        ...recipes.slice(0, CARD_COUNT),
    ]

    const [currentIndex, setCurrentIndex] = useState(1);
    const [isAnimated, setIsAnimated] = useState(true); 
    const timerRef = useRef<ReturnType<typeof setInterval> | null>(null); // timier id 유지 가능

    // 리셋 후 재시작
    const startTimer = () => {
        stopTimer();
        timerRef.current = setInterval(() => {
            handleNext();
        }, 3000);
    }

    const stopTimer = () => {
        if(timerRef.current) clearInterval(timerRef.current)
    }

    const handlePrev = () => {
        setIsAnimated(true);
        setCurrentIndex((prev) => prev - 1);
    }

    const handleNext = () => {
        setIsAnimated(true);
        setCurrentIndex((prev) => prev + 1);
    }

    // 위치 이동 후 타이머를 즉시 리셋해야지 연타 가능하다
    const onClickPrev = () => {
        handlePrev();
        startTimer();
    }

    const onClickNext = () => {
        handleNext();
        startTimer();
    }

    // 애니메이션이 끝날때 효과를 잠시 멈추고 위치를 변경한다.
    const handleTransitionEnd = () => {
        const total = extendRecipes.length / CARD_COUNT
        if (currentIndex === 0) {
            setIsAnimated(false);
            setCurrentIndex(recipes.length / CARD_COUNT); // 실제 마지막 카드로 순간이동
        } else if (currentIndex === total - 1) {
            setIsAnimated(false);
            setCurrentIndex(1); // 실제 첫 번째 카드로 순간이동
        }
    }

    useEffect(() => {
        startTimer();
        return () => stopTimer();
    }, []);

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
                            <button type='button' className={styles.prev} onClick={onClickPrev}>
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
                                        <path d="M297.4 470.6C309.9 483.1 330.2 483.1 342.7 470.6L534.7 278.6C547.2 266.1 547.2 245.8 534.7 233.3C522.2 220.8 501.9 220.8 489.4 233.3L320 402.7L150.6 233.4C138.1 220.9 117.8 220.9 105.3 233.4C92.8 245.9 92.8 266.2 105.3 278.7L297.3 470.7z"/>
                                    </svg>
                                </span>
                            </button>
                            <div className={styles.viewport} style={{height:`${CARD_HEIGHT * CARD_COUNT}px`}}>
                                <div 
                                    className={styles.slides} 
                                    onTransitionEnd={handleTransitionEnd}
                                    style={{
                                        transform: `translateY(-${currentIndex * CARD_HEIGHT * CARD_COUNT}px)`,
                                        transition: isAnimated ? 'transform 0.4s ease-in-out': 'none',
                                    }}
                                    >
                                    {/* 페이지 단위로 바꾸기 */}
                                    {extendRecipes.map((recipe, index) => (
                                        <div key={`${recipe.id} - ${index}`} className={styles.slide}>
                                            <div className={styles.header}>
                                                <div className={styles.title}>
                                                    <span>{recipe.title}</span>
                                                </div>
                                                <div className={styles.desc}>
                                                    <span>{recipe.description}</span>
                                                </div>
                                            </div>
                                            <div className={styles.footer}> 
                                                <span>{recipe.id} kcal</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <button type='button' className={styles.next} onClick={onClickNext}>
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
                                        <path d="M297.4 169.4C309.9 156.9 330.2 156.9 342.7 169.4L534.7 361.4C547.2 373.9 547.2 394.2 534.7 406.7C522.2 419.2 501.9 419.2 489.4 406.7L320 237.3L150.6 406.6C138.1 419.1 117.8 419.1 105.3 406.6C92.8 394.1 92.8 373.8 105.3 361.3L297.3 169.3z"/>
                                    </svg>
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Home