import React from 'react'

import './Recipe.css'
import { recipeData, recipeCategories } from "../data/recipe";

/* 
- [ ] 레시피 상세 화면 기본 구조 만들기
- [ ] 레시피 작성 화면 기본 구조 만들기
- [ ] little 리팩토링

- [ ] Lexical 최소 기능 연결
  - [ ] 일반 텍스트 입력
  - [ ] 제목
  - [ ] 굵게
  - [ ] 순서 있는 목록 / 순서 없는 목록
  - [ ] 입력 내용 변경 확인

*/

/* 
    추후에 tree도 커스텀 되도록 변경
    계층형 자료로 변경
*/
class Tree extends React.Component {
    
    renderNode(node){
        return (
            <div className='node'>
                {/* 
                    icon 트리 형태는 나중에
                */}
                <span className="icon">▶ </span>
                <span onClick={(e) => {
                    this.props.onClick(node.id)
                    e.preventDefault();
                }}>{node.name}</span>
            </div>
        );
    }

    renderTree(categories) {
        return (
            categories.map(category => (
                (category.children && category.children.length > 0) ? (
                    <details open key={category.id}>
                        <summary>{this.renderNode(category)}</summary>
                        <ul>{this.renderTree(category.children)}</ul>
                    </details>
                ) : (
                    <li key={category.id}>{this.renderNode(category)}</li>
                )
            ))
        );
    }

    render() {  
        return (
            <div className='inner-left'>
                <div className='tree'>
                    {this.renderTree([{
                        id: "root",
                        name: "전체",
                        order: 1,
                        children: recipeCategories
                    }])}
                </div>
            </div>
        )
    }
}

class Card extends React.Component {
    
    searchCard(categories) {
        const categoryId = this.props.categoryId;
        if(categoryId === 'root') return [[{ id: "root", name: "전체"}], recipeData];

        for(const category of categories){
            if (category.id === categoryId) {
                return [[category], this.searchNode([category])];
            } 
            else if(category.children && category.children.length > 0) {
                const [childPath, recipes] = this.searchCard(category.children);
                if(childPath.length > 0) {
                    return [[category, ...childPath], recipes];
                }
            }
        }
        return [[], []];
    }

    searchNode(categories){
        let recipes = [];
        categories.forEach(category => {
            recipes.push(recipeData.filter(data => data.categoryId === category.id ))

            if(category.children && category.children.length > 0) {
                recipes.push(this.searchNode(category.children))
            }
        }); 
        return recipes;
    }

    render () {
        const [categories, recipes] = this.searchCard(recipeCategories);
        return (
            <div>
                <div className='contents-header'>
                    <div className='header-title'>
                        {categories.map(category => (
                            <span key={category.id}>{category.name}</span>
                        ))}
                    </div>
                    <div className='header-nav'></div>
                </div>
                <div className='inner-card'>
                    {recipes.map(recipe => (
                        <div 
                            className='card'
                            key={recipe.id} 
                            onClick={() => this.props.onClick(recipe.id)}>
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
        )
    }
}

// class Detail extends React.Component {
//     findRecipe(id) {
//         const index = recipes.findIndex(recipe => recipe.id === id);
        
//         return index < 0 ? null : recipes[index]; 
//     }
//     /* 
//         제목 챔터 
//         상세 설명
//         ---
//         재료 카드
//         ---
    
//     */
//     makeDetail(recipe) {
//         return (
//             <div className='detail-recipe'>
//                 <div className='detail-header'>
//                     <span>{recipe.title}</span>
//                     <span>{recipe.description}</span>
//                 </div>
//                 <div className='detail-ingredients'>
//                     {
//                         recipe.ingredients.map((value, index) => (
//                             <div 
//                                 className='card-ingredients'
//                                 key={index}>
//                                 {value}</div>
//                         ))
//                     }
//                 </div>
//                 <div className='detail-content'>
//                     {recipe.content}
//                 </div>
//             </div>
//         )
//     }

//     render() {
//         const recipe = this.findRecipe(this.props.id);

//         return (
//             <div className='detail'>
//                 {
//                     recipe === null ? 
//                     <div className='detail-error'>
//                         <span>존재하지 않는 자료입니다.</span>
//                     </div> :
//                     this.makeDetail(recipe)
//                 }
//             </div>
//         )
//     }
// }

export default class Recipe extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            categoryId : 'root',
            recipeId : null
        }
    }

    handleTreeClick(categoryId) {
        this.setState({
            categoryId: categoryId,
            recipeId : null // 초기화
        });
    }

    handleCardClick(id) {
        this.setState({nowRecipe : id});
    }

    render() {
        const nowRecipe = this.state.nowRecipe;
        return (
            <div className='recipe-container'>
                <Tree onClick = {(id) => this.handleTreeClick(id)} />
                <div className='inner-right'>
                    {
                        // nowRecipe >= 0 ?
                        // <Detail id={nowRecipe}/> :
                        <Card 
                            onClick = {(id) => this.handleCardClick(id)} 
                            categoryId={this.state.categoryId} />
                    }
                </div>
            </div>
        )
    }
}