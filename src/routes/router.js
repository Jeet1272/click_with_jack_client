import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import AddServices from "../pages/AddServices/AddServices";
import AllServices from "../pages/AllServices/AllServices";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/services',
                element: <AllServices></AllServices>,
                loader: () => fetch('http://localhost:5000/services')
            },
            {
                path: '/services/add',
                element: <AddServices></AddServices>
            }
        ]
    }
])