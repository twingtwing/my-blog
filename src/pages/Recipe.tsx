import React from 'react'

import './Recipe.css'
import { recipes, recipeTypes } from "../data/recipe";

/*
    next

- [ ] 레시피 상세 화면 만들기
- [ ] 카드 클릭 시 상세 화면 보여주기
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
        )
    }

    render() {
        const root = {
            id : 'all',
            name : '전체',
        }

        return (
            <div className='inner-left'>
                <div className='tree'>
                    <details open>
                        <summary>{this.renderNode(root)}</summary>
                        <ul>
                            {recipeTypes.map(type => (
                                type.children.length > 0 ?
                                <details open key={type.id}>
                                    <summary>{this.renderNode(type)}</summary>
                                    <ul>
                                        {type.children.map(child => (
                                            <li key={child.id}>{this.renderNode(child)}</li>
                                        ))}
                                    </ul>
                                </details> :
                                <li key={type.id}>{this.renderNode(type)}</li>
                            ))}
                        </ul>
                    </details>
                </div>
            </div>
        )
    }
}

class Card extends React.Component {
    findTargetNode(id) {
        for (const types of recipeTypes) {
            if(types.id === id) return types.name ;
            for (const type of types.children) {
                if(type.id === id) return type.name ;
            }
        }
        return 'all';
    }

    render() {
        const name = this.findTargetNode(this.props.nowId) ;
        
        return (
            <div className='inner-right'>
                <div>
                    <span>{name}</span>
                </div>
                <div className='inner-card'>
                    {
                        recipes
                            .filter(recipe => name === 'all' || recipe.category === name || recipe.subCategory === name)
                            .map(recipe => (
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
                            ))
                    }
                </div>
            </div>
        )
    }
}

export default class Recipe extends React.Component {
    constructor(props){
        super(props);
        this.state = {nowId: 'all'}
    }

    handleClick(id) {
        this.setState({nowId: id});
    }

    render() {
        return (
            <div className='recipe-container'>
                <Tree onClick = {(id) => this.handleClick(id)} />
                <Card nowId={this.state.nowId} />
            </div>
        )
    }
}