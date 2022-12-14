import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import AddServices from "../pages/AddServices/AddServices";
import AllServices from "../pages/AllServices/AllServices";
import Blog from "../pages/Blog/Blog";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import ServiceDetails from "../pages/ServiceDetails/ServiceDetails";
import PrivateRoute from "./PrivateRoute";

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
                loader: () => fetch('https://click-with-jack-server.vercel.app/services')
            },
            {
                path: '/service/:id',
                element: <ServiceDetails></ServiceDetails>,
                loader: ({ params }) => fetch(`https://click-with-jack-server.vercel.app/service/${params.id}`)
            },
            {
                path: '/services/add',
                element: <PrivateRoute><AddServices></AddServices></PrivateRoute>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '*',
                element: <h1 className="text-center my-5">Nothing found on this route(404)</h1>
            }
        ]
    }
])