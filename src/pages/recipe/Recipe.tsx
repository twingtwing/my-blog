import { useState } from 'react'
import Tree from '../../components/Tree'
import Card from '../../components/Card'
import styles from './Recipe.module.css'

import { recipeCategories, recipeData, type RecipeCategory } from "../../data/recipe";

// class Card extends React.Component {
//     searchCard(categories) {
//         const categoryId = this.props.categoryId;
//         if(categoryId === 'root') return [[{ id: "root", name: "전체"}], recipeData];

//         for(const category of categories){
//             if (category.id === categoryId) {
//                 return [[category], this.searchNode([category])];
//             } 
//             else if(category.children && category.children.length > 0) {
//                 const [childPath, recipes] = this.searchCard(category.children);
//                 if(childPath.length > 0) {
//                     return [[category, ...childPath], recipes];
//                 }
//             }
//         }
//         return [[], []];
//     }

//     searchNode(categories){
//         let recipes = [];
//         categories.forEach(category => {
//             const data = recipeData.filter(data => data.categoryId === category.id )
//             if (data.length > 0)
//                 recipes = [...recipes, ...data];

//             if(category.children && category.children.length > 0) {
//                 const child = this.searchNode(category.children);
//                 if (child.length > 0)
//                     recipes = [...recipes, ...child];
//             }
//         }); 
//         return recipes;
//     }

//     render () {
//         const [categories, recipes] = this.searchCard(recipeCategories);
//         return (
//             <div>
//                 <div className='contents-header'>
//                     <div className='header-title'>
//                         {categories.map(category => (
//                             <span key={category.id}>{category.name}</span>
//                         ))}
//                     </div>
//                     <div className='header-nav'></div>
//                 </div>
//                 <div className='inner-card'>
//                     {recipes.map(recipe => (
//                         <div 
//                             className='card'
//                             key={recipe.id} 
//                             onClick={() => this.props.onCardClick(recipe.id)}>
//                             <div className='card-title'>
//                                 <span>{recipe.title}</span>
//                                 <span>{recipe.description}</span>
//                             </div>
//                             <div className='card-footer'>
//                                 <div>
//                                     <span>{recipe.calories} kcal</span>
//                                 </div>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//                 <div className='inner-button'>
//                     <button onClick={() => this.props.onCreateClick(this.props.categoryId)}>레시피 작성</button>
//                 </div>
//             </div>
//         )
//     }
// }

// class Detail extends React.Component { 
    
//     searchPath(categoryId, categories) {
//         for(const category of categories){
//             if (category.id === categoryId) {
//                 return [category];
//             } 
//             else if(category.children && category.children.length > 0) {
//                 const childPath = this.searchPath(categoryId, category.children);
//                 if(childPath.length > 0) {
//                     return [category, ...childPath];
//                 }
//             }
//         }
//         return [];
//     }

//     /* 
//         제목 챔터 
//         상세 설명
//         ---
//         재료 카드
//         ---
    
//     */
//     render() {
//         const index = recipeData.findIndex(recipe => recipe.id === this.props.recipeId);
//         const recipe = recipeData[index];
//         const path = (
//             this.searchPath(recipe.categoryId, recipeCategories).map(category =>
//                     <span key={category.id}>{category.name}</span>
//                 )
//         );
//         return (
//             <div className='detail'>
//                 <div className='detail-recipe'>
//                     <div className='detail-header'>
//                         <span>{recipe.title}</span>
//                         <div>{path}</div>
//                     </div>
//                     <div className='detail-desc'>
//                         <span>{recipe.description}</span>
//                     </div>
//                     <div className='detail-ingredients'>
//                         {
//                             recipe.ingredients.map((value, index) => (
//                                 <div className='card' key={index}>
//                                     <span>{value}</span>
//                                 </div>
//                             ))
//                         }
//                     </div>
//                     <div className='detail-content'>
//                         {recipe.content}
//                     </div>
//                 </div>
//                 <div className='detail-footer'>
//                     <button type="button" onClick={() => this.props.onClick(this.props.recipeId)}>수정</button>
//                     <button type="button" onClick={() => this.props.onClick(this.props.recipeId)}>삭제</button>
//                 </div>
//                 <div className='card'>
//                     <div>
//                         <div>{path}</div>
//                         <span>카테고리의 다른 글</span>
//                     </div>
//                     <hr />
//                     <div>
//                         {recipeData
//                             .filter(data => data.categoryId === recipe.categoryId)
//                             .map(recipe => (
//                                 <span key={recipe.id}>{recipe.title}</span>
//                             ))}
//                     </div>
//                 </div>
//             </div>
//         )
//     }
// }

// /* 
//     레시피 입력 형태는

//     제목
//     짧은 설명
//     재료 (칼로리 자동계산...? api 필요할듯)  // 일단 일반폼 추후에 자동계싼을 위해 변경
//     (총 칼로리 자동계산)
//     레시피 순서
//     참고사항
// */
// class RecipeCreate extends React.Component {
//     render() {
//         const isEdit = this.props.isEdit
//         const recipe = recipeData.find(data => data.id === this.props.recipeId)
//         return (
//             <div>
//                 {/* 이거 왜 제출 누르면 새고가 되지..? */}
//                 <form onSubmit={this.props.onSubmit}> 
//                     <div className='create-header'>
//                         {
//                             !isEdit ?
//                             <input type="text" placeholder="제목"/> : 
//                             <span>{recipe?.title}</span>
//                         }
//                     </div>
//                     <div className='create-desc'>
//                         <input type="text" value={isEdit && recipe?.description} placeholder="설명"/>
//                     </div>
//                     <hr />
//                     <div className='create-ingre'>
//                         {
//                             !isEdit ?
//                             <input type="text" placeholder="재료"/> : 
//                             recipe?.ingredients.map((value, index) => (
//                                 <div key={index}>{value}</div>
//                             ))
//                         }
//                         {/* 태그 처럼 추가 일단은 */}
//                     </div>
//                     <hr />
//                     <div className='create-content'>
//                         {/* <button>단계별로 되도록 데이터 수정필요</button>  */}
//                         <label>
//                             1번 
//                             <input type="text" placeholder="레시피" value={isEdit && recipe?.content}/>
//                         </label>
//                         {/* <button>삭제</button>  */}
//                         <button>추가</button>
//                     </div>
//                     <div className='create-plus'>
//                         <label>
//                             참고사항 
//                             <textarea value='데이터에 추가해야함'/>
//                         </label>
//                     </div>
//                     <div className='create-footer'>
//                         <button type="submit">저장</button>
//                         <button type="button" onClick={() => this.props.onClick(!isEdit ? this.props.categoryId : this.props.recipeId)}>취소</button>
//                     </div>
//                 </form>
//             </div>
//         );
//     }
// }
 /* 
    backend할때 데이터 처리하는 방법 바꾸기
 */


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

const Recipe = () => {

    const [recipeCartegroy, setRecipeCartegroy] = useState(getCategory('root', recipeCategories));

    const handleClick = (id: string) => {
        const category = getCategory(id, recipeCategories);
        setRecipeCartegroy(category);
    }

    const renderCards = (category: RecipeCategory) => {
        if(category.id === 'error') return <div>{category.name}</div>
        const categories = findCategories([category]);

        return (
            recipeData
                .filter(recipe => categories.includes(recipe.categoryId))
                .map(recipe => (
                    <Card key={recipe.id} card={recipe} className={'recipe'}/>
            ))
        )
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
                    <div className={styles.title}>
                        <span>
                            {recipeCartegroy.name} 레시피
                        </span>
                    </div>
                    <hr />
                    <div className={styles.filter}>
                        <div>
                            <span>
                                전체 갯수
                            </span>
                            <span>
                                필터
                            </span>
                        </div>
                    </div>
                    <div className={styles.cards}>
                        {renderCards(recipeCartegroy)}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Recipe;

// export default class Recipe extends React.Component {
//     constructor(props){
//         super(props);
//         this.state = {
//             view: 'tree',
//             categoryId : 'root',
//             recipeId : null,
//             isEdit: false,
//         }

//         this.handleSubmit = this.handleSubmit.bind(this);
//     }

//     handleTreeClick(categoryId) {
//         this.setState({
//             view: 'tree',
//             categoryId: categoryId,
//         });
//     }

//     handleCardClick(recipeId) {
//         this.setState({
//             view: 'card',
//             recipeId : recipeId,
//         });
//     }

//     handleCreateClick(categoryId) {
//         this.setState({
//             view: 'create',
//             categoryId: categoryId,
//             isEdit: false,
//         });
//     }

//     handleEditClick (recipeId) {
//         this.setState({
//             view: 'create',
//             recipeId : recipeId,
//             isEdit: true,
//         });
//     }

//     handleSubmit(e) {
//         alert('아직 미완')
//         e.preventDefault(); 
//     }

//     render() {
//         let content;
//         const view = this.state.view;

//         if(view === 'tree') {
//             content = (
//                 <Card 
//                     onCardClick = {(id) => this.handleCardClick(id)} 
//                     onCreateClick = {(id) => this.handleCreateClick(id)} 
//                     categoryId={this.state.categoryId} />
//             );
//         } else if (view === 'card') {
//             content = (
//                 <Detail 
//                     onClick = {(id) => this.handleEditClick(id)} 
//                     recipeId={this.state.recipeId}/>
//             );
//         } else if (view === 'create') {
//             content = (
//                 <RecipeCreate 
//                     onSubmit={this.handleSubmit}
//                     onClick= {(id) => this.state.isEdit ? this.handleCardClick(id) : this.handleTreeClick(id)}
//                     isEdit={this.state.isEdit}
//                     categoryId={this.state.categoryId}
//                     recipeId={this.state.recipeId} />
//             )
//         } else {
//             content = (<div>화면 로딩 중 에러가 발생하였습니다.</div>)
//         }
//         return (
//             <div className={styles.container}>
//                 <div className='inner-left'>
//                     <Tree tree={recipeCategories} onClick = {(id) => this.handleTreeClick(id)} />
//                 </div>
//                 <div className='inner-right'>{content}</div>
//             </div>
//         )
//     }
// }
