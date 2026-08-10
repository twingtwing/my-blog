import React from 'react'
import Header from './components/Header'
import Home from './pages/home/Home'
import Recipe from './pages/recipe/Recipe'
import './Style.css'

function App() {
    const [currentPage, setPage] = React.useState('Home');

    const handlerManu= (menu: string) => {
        setPage(menu)
    }
    
    return (
        <div className='wrapper'>
            <Header onClick={handlerManu}/>
            {
                currentPage !== 'Recipe' ? <Home /> : <Recipe />
            }
        </div>
    )
}

export default App
