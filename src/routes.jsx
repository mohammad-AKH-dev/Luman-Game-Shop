import Index from "./pages"
import Account from "./pages/Account"
import Favourite from "./pages/Favourite"
import MainProduct from './pages/MainProduct'
import UserIndex from "./pages/userPanel/UserIndex";
import Dashboard from "./pages/userPanel/Dashboard";
import Orders from "./pages/userPanel/Orders";
import Downloads from "./pages/userPanel/Downloads";
import Address from "./pages/userPanel/Address";
import Details from "./pages/userPanel/Details";
import ShoppingBasket from "./pages/ShoppingBasket";
import Checkout from "./pages/Checkout";
import AdminIndex from "./pages/adminPanel/AdminIndex";
import AdminDashboard from "./pages/adminPanel/AdminDashboard";
import AdminUsers from "./pages/adminPanel/AdminUsers";
import AdminProducts from "./pages/adminPanel/AdminProducts";
import AdminDiscounts from "./pages/adminPanel/AdminDiscounts";
import AdminCategories from "./pages/adminPanel/AdminCategories";
import AdminDetailes from "./pages/adminPanel/AdminDetailes";
import Articles from "./pages/Articles";
import Products from "./pages/Products";

const routes = [
    {path:'/',element:<Index />},
    {path:'/products/:page', element:<Products />},
    {path:'/favourites',element:<Favourite/>},
    {path:'/account',element:<Account/>},
    {path:'/products/product/:id',element: <MainProduct/> },
    {path:'/cart',element:<ShoppingBasket/>},
    {path:'/checkout',element:<Checkout/>},
    {path:'/articles',element:<Articles/>},
    {path:'/panel',element: <UserIndex/>, children:[
        {path:'dashboard',element:<Dashboard/>},
        {path:'orders',element:<Orders/>},
        {path:'downloads',element:<Downloads/>},
        {path:'address',element:<Address/>},
        {path:'my-account',element:<Details/>}
    ]},
    {path:'/a-panel/',element:<AdminIndex/>,children:[
       {path:'dashboard',element:<AdminDashboard/>},
       {path:'users',element:<AdminUsers/>},
       {path:'products',element:<AdminProducts/>},
       {path:'discounts',element:<AdminDiscounts/>},
       {path:'categories',element:<AdminCategories/>},
       {path:'detailes',element:<AdminDetailes/>}
    ]}
]



export default routes