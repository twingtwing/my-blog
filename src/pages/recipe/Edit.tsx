
import type { FormEvent } from 'react'
import { useNavigate, useParams } from 'react-router'

import styles from './Edit.module.css'
import { recipeData } from "../../data/recipe";

// /* 
//     레시피 입력 형태는

//     제목
//     짧은 설명
//     재료 (칼로리 자동계산...? api 필요할듯)  // 일단 일반폼 추후에 자동계싼을 위해 변경
//     (총 칼로리 자동계산)
//     레시피 순서
//     참고사항
// */
export const Edit = () => {
    const navigate = useNavigate();
    const {categoryId, recipeId} = useParams();

    const recipe = recipeData.find(data => data.id === Number(recipeId))

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        alert('저장');
        e.preventDefault();
    }

    return (
        /* 이거 왜 제출 누르면 새고가 되지..? */
        <form onSubmit={handleSubmit}> 
            <div className={styles.title}>
                {
                    <input type="text" placeholder="제목"/> 
                    // <span>{recipe?.title}</span>
                }
            </div>
            <div className={styles.desc}>
                <input type="text" value={recipe?.description} placeholder="설명"/>
            </div>
            <hr />
            <div className={styles.ingredients}>
                {
                    <input type="text" placeholder="재료"/>  
                    // : recipe?.ingredients.map((value, index) => (
                    //     <div key={index}>{value}</div>
                    // ))
                }
                {/* 태그 처럼 추가 일단은 */}
            </div>
            <hr />
            <div className={styles.content}>
                {/* <button>단계별로 되도록 데이터 수정필요</button>  */}
                <label>
                    1번 
                    <input type="text" placeholder="레시피" value={recipe?.content}/>
                </label>
                {/* <button>삭제</button>  */}
                <button>추가</button>
            </div>
            <div className={styles.action}>
                <button type="submit">저장</button>
                <button type="button" onClick={() => navigate(`/recipe/${categoryId}/detail/${recipeId}`)}>취소</button>
            </div>
        </form>
    )
}