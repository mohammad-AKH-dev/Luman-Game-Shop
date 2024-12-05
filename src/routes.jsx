import Index from "./pages"
import Products from "./pages/Products"


const routes = [
    {path:'/',element:<Index />},
    {path:'/products', element:<Products />},
    {path:'/products/category/:categoryName',element:<Products/>}
]



export default routes