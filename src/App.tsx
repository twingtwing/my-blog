import React from 'react'
import './App.css'
import logo from './assets/logo.png'

import Home from './pages/Home'
import Recipe from './pages/Recipe'

function Header(props) {
    const categories = ['Wiki', 'Recipe', 'Photowalk']
    return (
        <div className='header'>
            <div className='header-top'>
                <h1 className='logo'>
                    <a onClick={() => props.onClick('Home')}>
                        <img src={logo} alt='logo'></img>
                    </a>
                </h1>
            </div>
            <div className='header-box'>
                <div className='categories'>
                    {categories.map(category => (
                        <div key={category}>
                            <button onClick={() => props.onClick(category)}>
                                {category}
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

function App() {
    const [currentPage, setPage] = React.useState('Home');

    const handlerCategory = (category) => {
        setPage(category)
    }
    
    return (
        <div className='wrapper'>
            <Header onClick={handlerCategory}/>
            {
                currentPage !== 'Recipe' ? <Home /> : <Recipe />
            }
        </div>
    )
}

export default App
