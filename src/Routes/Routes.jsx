import { createBrowserRouter } from "react-router-dom";
import LayOuts from "../LayOuts/LayOuts";
import Home from "../Components/Home/Home";
import About from "../Components/About/About";
import Blogs from "../Components/Blogs/Blogs";
import Shop from "../Components/Shop/Shop";
import ProductDetails from "../Components/ProductDetails/ProductDetails";
import PrivateRoutes from "./PrivateRoutes";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <LayOuts></LayOuts>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path:"/about",
                element:<About></About>
            },
            {
                path:"/blogs",
                element:<Blogs></Blogs>
            },
            {
                path:"/shop",
                element:<Shop></Shop>
            },
            {
                path:"/product-details/:id",
                loader:({params})=>fetch(`https://api-fresh-harvest.code-commando.com/api/v1/products/${params.id}`),
                element:<PrivateRoutes><ProductDetails></ProductDetails></PrivateRoutes>
            }



        ]
    }
])