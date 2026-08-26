import { Outlet } from 'react-router';

import Tree from '../components/Tree'
import styles from './RecipeLayout.module.css'

import { recipeCategories } from "../data/recipe";

const RecipeLayout = () => {

    const handleClick = (id: string) => {
        
    }

    return (
        <div className={styles.container}>
            <div className={styles.contents}>
                <div className={styles.left}>
                    <div className={styles.title}>
                        <span>Recipe</span>
                    </div>
                    <Tree tree={recipeCategories} onClick={(id) => handleClick(id)} />
                </div>
                <div className={styles.right}>
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default RecipeLayout;