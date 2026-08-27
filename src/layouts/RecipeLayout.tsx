import { Outlet, useNavigate } from 'react-router';

import Tree from '../components/Tree'
import styles from './RecipeLayout.module.css'

import { recipeCategories } from "../data/recipe";

const RecipeLayout = () => {
    const navigate = useNavigate();

    return (
        <div className={styles.container}>
            <div className={styles.contents}>
                <div className={styles.left}>
                    <div className={styles.title}>
                        <span>Recipe</span>
                    </div>
                    <Tree tree={recipeCategories} onClick={(id) => navigate(`/recipe/${id}`)} />
                </div>
                <div className={styles.right}>
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default RecipeLayout;