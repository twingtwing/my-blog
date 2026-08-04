function Home() {
    /* 
        나중에 자동스크롤되어서 무한 반복되는 텍스트 카드 형태로 교체해야함
    */
    const recipes = [
    {
        id: 1,
        category: "한식",
        subCategory: "찌개",
        title: "돼지고기 김치찌개",
        calories: 420,
    },
    {
        id: 2,
        category: "한식",
        subCategory: "볶음",
        title: "제육볶음",
        calories: 560,
    },
    {
        id: 3,
        category: "양식",
        subCategory: "파스타",
        title: "알리오 올리오",
        calories: 610,
    }];
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
                        {recipes.map(recipe => (
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