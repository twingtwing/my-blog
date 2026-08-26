import { createBrowserRouter, RouterProvider } from 'react-router'

import AppLayout from './layouts/AppLayout'
import RecipeLayout from './layouts/RecipeLayout'
import Home from './pages/home/Home'
import { List as RecipeList} from './pages/recipe/List'
import { Detail as RecipeDetail} from './pages/recipe/Detail'
import { Form as RecipeForm} from './pages/recipe/Form'
import './Style.css'
 
const router = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout/>,
        // errorElement 추가
        children: [
            { path: "/", element: <Home />, index: true },
            { path: "/wiki", element: <Home/> },
            { path: "/recipe", element: <RecipeLayout/>,
                children: [
                    { path: ":id", element: <RecipeList />, index: true },
                    { path: ":id/detail", element: <RecipeDetail /> },
                    { path: ":id/edit", element: <RecipeForm /> },
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
