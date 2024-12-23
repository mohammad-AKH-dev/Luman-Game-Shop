import Index from "./pages"
import Account from "./pages/Account"
import Favourite from "./pages/Favourite"
import Products from "./pages/Products";
import MainProduct from './pages/MainProduct'
import UserIndex from "./pages/userPanel/UserIndex";

const routes = [
    {path:'/',element:<Index />},
    {path:'/products', element:<Products />},
    {path:'/products/category/:categoryName',element:<Products/>},
    {path:'/favourites',element:<Favourite/>},
    {path:'/account',element:<Account/>},
    {path:'/products/product/:productName',element: <MainProduct/> },
    {path:'/panel',element: <UserIndex/>, children:[
        {path:'dashboard'},
        {path:'orders'}
    ]}
]



export default routes