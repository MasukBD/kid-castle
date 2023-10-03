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
                element: <MyToys></MyToys>
            },
            {
                path: "/addAToy",
                element: <AddAToy></AddAToy>
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
