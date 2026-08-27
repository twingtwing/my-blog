import { createBrowserRouter, RouterProvider } from 'react-router'

import AppLayout from './layouts/AppLayout'
import RecipeLayout from './layouts/RecipeLayout'
import Home from './pages/home/Home'
import { List as RecipeList} from './pages/recipe/List'
import { Detail as RecipeDetail} from './pages/recipe/Detail'
import { Edit as RecipeEdit} from './pages/recipe/Edit'
import './Style.css'
 
const router = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout/>,
        // errorElement 추가
        children: [
            { path: "/", element: <Home />, index: true },
            { path: "/wiki", element: <Home/> },
            { path: "/recipe", element: <RecipeLayout/>, // errorElement 추가
                children: [
                    { index: true, element: <RecipeList /> },
                    { path: ":categoryId", element: <RecipeList /> },
                    {
                        path: ":categoryId/detail/:recipeId",
                        element: <RecipeDetail />
                    },
                    {
                        path: ":categoryId/edit/:recipeId",
                        element: <RecipeEdit />
                    }
                ]
             },
            { path: "/photowalk", element: <Home/> },
        ]
    }
])

export default function App() {
    return (
        <div className='wrapper'>
            <RouterProvider router={router} />
        </div>
    )
}
