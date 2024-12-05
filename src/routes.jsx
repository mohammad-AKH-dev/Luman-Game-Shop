import Index from "./pages"
import Favourite from "./pages/Favourite"
import Products from "./pages/Products"


const routes = [
    {path:'/',element:<Index />},
    {path:'/products', element:<Products />},
    {path:'/products/category/:categoryName',element:<Products/>},
    {path:'/favourites',element:<Favourite/>}
]



export default routes