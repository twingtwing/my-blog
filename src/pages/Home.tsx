import { recipeData } from "../data/recipe";

function Home() {
    /* 
        나중에 자동스크롤되어서 무한 반복되는 텍스트 카드 형태로 교체해야함
    */
    return (
        <div className='container'>
            <div className='banner'>
                <span>banner</span>
            </div>
            <div className='contents'>
                <div className='content-left'>
                    <span>content-left</span>
                </div>
                <div className='content-right'>
                    <div className='card-right'>
                        {recipeData.map(recipe => (
                            <div key={recipe.id} className='card'>
                                <div className='card-title'>
                                    <span>{recipe.title}</span>
                                </div>
                                <div className='card-footer'>
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