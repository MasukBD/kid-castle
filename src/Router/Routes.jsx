import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import ErrorPage from "../Pages/ErrorPage";
import Home from "../Pages/HomePage/Home";
import Blogs from "../Pages/Blogs";
import Login from "../Pages/Login";
import AllToys from "../Pages/AllToys";
import AddAToy from "../Pages/AddAToy";
import MyToys from "../Pages/MyToys";
import Register from "../Pages/Register";
import NewsDetails from "../Pages/NewsDetails";
import UpdateToyData from "../Pages/UpdateToyData";
import ProductDetailsPage from "../Pages/HomePage/Products/ProductDetailsPage";
import PrivateRoute from "./PrivateRoute";

const Routes = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/myToys",
                element: <PrivateRoute><MyToys></MyToys></PrivateRoute>
            },
            {
                path: "/addAToy",
                element: <PrivateRoute><AddAToy></AddAToy></PrivateRoute>
            },
            {
                path: "/allToys",
                element: <AllToys></AllToys>
            },
            {
                path: "/blogs",
                element: <Blogs></Blogs>
            },
            {
                path: "/newsDetails/:id",
                element: <PrivateRoute><NewsDetails></NewsDetails></PrivateRoute>
            },
            {
                path: "/updateToy/:id",
                element: <UpdateToyData></UpdateToyData>,
                loader: ({ params }) => fetch(`https://kid-castle-server.vercel.app/products/${params.id}`)
            },
            {
                path: "/productDetails/:id",
                element: <PrivateRoute><ProductDetailsPage></ProductDetailsPage></PrivateRoute>,
                loader: ({ params }) => fetch(`https://kid-castle-server.vercel.app/products/${params.id}`)
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/register",
                element: <Register></Register>
            }
        ]
    },
]);

export default Routes;
