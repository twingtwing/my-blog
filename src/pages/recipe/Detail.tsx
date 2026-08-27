import { useNavigate, useParams } from "react-router"

import styles from './Detail.module.css'
import { recipeCategories, recipeData, type RecipeCategory } from "../../data/recipe";

export const Detail = () => {
    const navigate = useNavigate();
    const { categoryId, recipeId } = useParams();

    const recipe = recipeData.find(recipe => recipe.id === Number(recipeId));

    // 에러 처리 필요 
    if (!recipe) {
        return <div>레시피를 찾을 수 없습니다.</div>;
    }

    const searchPath = (categories : RecipeCategory[]):RecipeCategory[] => {
        for(const category of categories){
            if (category.id === categoryId) {
                return [category];
            } 
            else if(category.children && category.children.length > 0) {
                const childPath = searchPath(category.children);
                if(childPath.length > 0) {
                    return [category, ...childPath];
                }
            }
        }
        return [];
    }

    const path = (
        searchPath(recipeCategories).map(category =>
                <span key={category.id}>{category.name}</span>
            )
    );

    return (
        <>
            <div className={styles.recipe}>
                <div className={styles.title}>
                    <span>{recipe.title}</span>
                    <div>{path}</div>
                </div>
                <div className={styles.desc}>
                    <span>{recipe.description}</span>
                </div>
                <div className={styles.ingredients}>
                    {
                        recipe.ingredients.map((value, index) => (
                            <div className={styles.card} key={index}>
                                <span>{value}</span>
                            </div>
                        ))
                    }
                </div>
                <div className={styles.content}>
                    {recipe.content}
                </div>
            </div>
            <div className={styles.action}>
                <button type="button" onClick={() => navigate(`/recipe/${categoryId}/edit/${recipeId}`)}>수정</button>
                <button type="button" onClick={() => navigate(`/recipe/${categoryId}/edit/${recipeId}`)}>삭제</button>
            </div>
            <div className={styles.navigate}>
                <div>
                    <div>{path}</div>
                    <span>카테고리의 다른 글</span>
                </div>
                <hr />
                <div>
                    {recipeData
                        .filter(data => data.categoryId === recipe.categoryId)
                        .map(recipe => (
                            <span key={recipe.id}>{recipe.title}</span>
                        ))}
                </div>
            </div>
        </>
    )
} 