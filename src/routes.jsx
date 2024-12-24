import Index from "./pages"
import Account from "./pages/Account"
import Favourite from "./pages/Favourite"
import Products from "./pages/Products";
import MainProduct from './pages/MainProduct'
import UserIndex from "./pages/userPanel/UserIndex";
import Dashboard from "./pages/userPanel/Dashboard";
import Orders from "./pages/userPanel/Orders";
import Downloads from "./pages/userPanel/Downloads";
import Address from "./pages/userPanel/Address";
import Details from "./pages/userPanel/Details";

const routes = [
    {path:'/',element:<Index />},
    {path:'/products', element:<Products />},
    {path:'/products/category/:categoryName',element:<Products/>},
    {path:'/favourites',element:<Favourite/>},
    {path:'/account',element:<Account/>},
    {path:'/products/product/:productName',element: <MainProduct/> },
    {path:'/panel',element: <UserIndex/>, children:[
        {path:'dashboard',element:<Dashboard/>},
        {path:'orders',element:<Orders/>},
        {path:'downloads',element:<Downloads/>},
        {path:'address',element:<Address/>},
        {path:'my-account',element:<Details/>}
    ]}
]



export default routes