import React from 'react'
import ReactDOM from 'react-dom/client'

/* 
Recipe 화면 전체 구조 만들기
좌측 카테고리 영역 만들기
우측 레시피 목록 영역 만들기
전체를 좌우 2단으로 배치
카테고리 트리 모양 만들기
레시피 데이터를 그리드로 출력
카드 디자인 정리
카테고리 클릭 기능은 나중에 추가

Recipe.css에는:
레시피 좌우 레이아웃
카테고리 트리
레시피 그리드
레시피 카드 스타일
*/

function Tree() {
    return (
        <div>
            Tree 카테고리
        </div>
    )
}

function Card() {
    return (
        <div>
            Recipe Card
        </div>
    )
}

function Recipe() {
    return (
        <div className='recipe-container'>
            <Tree />
            <Card />
        </div>
    )
}

export default Recipe