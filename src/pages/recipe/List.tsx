import { useParams, useNavigate } from 'react-router';

import Card from '../../components/Card'
import styles from './List.module.css'

import { recipeCategories, recipeData, type RecipeCategory } from "../../data/recipe";

const getCategory = (id: string, categories: RecipeCategory[]):RecipeCategory => {
    if(id === 'root' || !categories) {
        return {
            id: 'root',
            name: '전체',
            order: 1,
            children: recipeCategories
        }
    }

    for(const category of categories){
        if(id === category.id)
            return category

        const children = getCategory(id, category.children)
        if(children.id !== 'error') return children;
    }

    return {
            id: 'error',
            name: '잘못된 경로입니다. 관리자에게 확인해주세요.',
            order: 0,
            children: []
        };

} 

const findCategories = (categories: RecipeCategory[]):string[] => {
    return categories.flatMap(category => 
        category.children && category.children.length > 0 ? [category.id, ...findCategories(category.children)] : [category.id]
    )
}

export const List = () => {
    const navigate = useNavigate();
    const {categoryId = 'root'} = useParams();
    const recipeCategory = getCategory(categoryId, recipeCategories);

    const renderCards = (category: RecipeCategory) => {
        if(category.id === 'error') return <div>{category.name}</div>
        const categories = findCategories([category]);

        return (
            recipeData
                .filter(recipe => categories.includes(recipe.categoryId))
                .map(recipe => (
                    <Card 
                        card={recipe} 
                        key={recipe.id} 
                        className={'recipe'} 
                        onClick={() => navigate(`/recipe/${categoryId}/detail/${recipe.id}`)}/>
            ))
        )
    }

    return (
        <>
            <div className={styles.title}>
                <span>
                    {recipeCategory.name} 레시피
                </span>
            </div>
            <hr />
            <div className={styles.option}>
                <div>
                    <span>
                        전체 10개
                    </span>
                </div>
                <div className={styles.filter}>
                    <span>
                        필터
                    </span>
                </div>
            </div>
            <div className={styles.cards}>
                {renderCards(recipeCategory)}
            </div>
        </>
    )
}