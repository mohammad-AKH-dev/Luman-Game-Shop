import Index from "./pages"
import Account from "./pages/Account"
import Favourite from "./pages/Favourite"
import Products from "./pages/Products"


const routes = [
    {path:'/',element:<Index />},
    {path:'/products', element:<Products />},
    {path:'/products/category/:categoryName',element:<Products/>},
    {path:'/favourites',element:<Favourite/>},
    {path:'/account',element:<Account/>}
]



export default routes