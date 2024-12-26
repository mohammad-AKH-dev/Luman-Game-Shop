import SearchIcon from "@mui/icons-material/Search";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PersonIcon from "@mui/icons-material/Person";
import MenuIcon from "@mui/icons-material/Menu";
import Menu from "../Menu/Menu";
import WorkOffIcon from "@mui/icons-material/WorkOff";
import { digitsEnToFa } from "@persian-tools/persian-tools";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import ShoppingCartItem from "../Box/ShoppingCartItem";
import MyContext from "../../contexts/context";


export default function Topbar() {
  const [shoppingBasket, setShoppingBasket] = useState([2]);
  const context = useContext(MyContext)
 

  return (
    <div className="Topbar bg-primary lg:p-5">
      <div className="Topbar-wrapper container flex items-center justify-between">
        <div className="block lg:hidden">
          <MenuIcon className="cursor-pointer" />
        </div>
        <div className="topbar-right__section flex items-center gap-5 lg:w-[50%]">
          <Link to={"/"} className="inline-block	max-w-[150px] lg:min-w-[160px]">
            <img src="/images/logo.png" className="w-full" />
          </Link>
          <form className="topbar-search__wrapper hidden lg:flex relative h-10 rounded-xl bg-secondary min-w-[75%]  items-center justify-center">
            <input
              type="text"
              className="search-input w-[80%]
                bg-inherit border 
                ml-8
               border-solid border-secondary outline-none
                focus:border-secondary
                 text-white
                   text-sm
                "
              placeholder="جستجو برای محصولات"
            />
            <SearchIcon className="w-1/6 text-[#777] absolute -left-4 cursor-pointer" />
          </form>
        </div>
        <div className="topbar-left__section flex lg:w-[50%] justify-end">
          <div className="menus hidden lg:flex items-center justify-center gap-4 ml-10">
            <Menu title={"محصولات"} href={"/products"}>
              <WorkOutlineIcon className="text-purple cursor-pointer" />
            </Menu>
            <Menu title={"مورد علاقه ها"} href={"/favourites"}>
              <FavoriteBorderIcon className="text-pink cursor-pointer" />
            </Menu>
          </div>

          <div className="access-menus flex items-center justify-center gap-4">
            <div className="shopping-icon relative flex items-center gap-4 group">
              <Link to="/cart">
                <ShoppingCartIcon className="text-2xl cursor-pointer" />
              </Link>
              <div className="w-4 h-4 bg-purple rounded-lg absolute top-[-5px] right-[-10px] text-white text-center flex items-center justify-center">
                <span className="inline-block w-full text-[7px]">0</span>
              </div>

              {shoppingBasket.length ? (
                <>
                  <div
                    className="shop-basket group-hover:opacity-100 group-hover:z-50 group-hover:visible opacity-0 -z-50 invisible 
                  group-hover:pt-0 transition-all delay-100 duration-300  
                  overflow-y-auto  flex flex-col  absolute w-[300px] h-[225px] bg-secondary 
                  top-[3rem] rounded-md -right-[18rem] xs:-right-[17rem] left-0
                  [&::-webkit-scrollbar]:w-0
                [&::-webkit-scrollbar-track]:bg-secondary
                [&::-webkit-scrollbar-thumb]:bg-gray-300
                  "
                  >
                    <ShoppingCartItem />
                    
                    <div className="plusAllPrices-wrapper flex items-center justify-between mx-6 py-3 border-y border-[#77777733]">
                      <span className="allprices-title font-bold">جمع کل:</span>
                      <span className="allprices-count">
                        {digitsEnToFa(110000)}تومان
                      </span>
                    </div>
                    <div className="px-8 my-4 w-full flex flex-col gap-4">
                      <Link to={'/'} className="w-full block text-center outline outline-[#777] hover:outline-[#999] transition-all delay-100 px-3 py-2 rounded-3xl">
                         مشاهده سبد خرید                    
                      </Link>
                      <Link to={'/'} className="w-full block text-center bg-purple shadow-box hover:shadow-boxHover transition-all delay-100 px-3 py-2 rounded-3xl">
                         بازگشت به فروشگاه             
                      </Link>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className="shop-basket group-hover:opacity-100 group-hover:z-50 group-hover:visible opacity-0 -z-50 invisible group-hover:pt-0 transition-all delay-100 duration-300   flex flex-col items-center justify-center absolute w-[300px] overflow-y-auto min-h-[225px] bg-secondary top-[3rem] rounded-md -right-[18rem] xs:-right-[17rem] left-0">
                    <WorkOffIcon className="w-[75px] h-[75px] mb-4 text-[#77777733]" />
                    <span className="font-bold text-[18px] mb-6">
                      هیچ محصولی در سبد خرید نیست
                    </span>
                    <Link
                      to={"/"}
                      className="bg-purple px-4 py-2 shadow-box hover:shadow-boxHover font-bold text-[12px] rounded-3xl"
                    >
                      بازگشت به فروشگاه{" "}
                    </Link>
                  </div>
                </>
              )}

            </div>
              <div className="person-icon" onClick={() => context.handleShowSidebar()}>
                <PersonIcon className="text-2xl cursor-pointer" />
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}
