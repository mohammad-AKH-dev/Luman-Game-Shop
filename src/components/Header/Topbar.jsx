import SearchIcon from "@mui/icons-material/Search";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PersonIcon from "@mui/icons-material/Person";
import MenuIcon from '@mui/icons-material/Menu';
import Menu from "../Menu/Menu";
import { Link } from "react-router-dom";

export default function Topbar() {
  return (
    <div className="Topbar bg-primary lg:p-5">
      <div className="Topbar-wrapper container flex items-center justify-between">
        <div className="block lg:hidden">
         <MenuIcon className="cursor-pointer"/>
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
            <Menu title={"محصولات"}>
              <WorkOutlineIcon  className="text-purple cursor-pointer"/>
            </Menu>
            <Menu title={"مورد علاقه ها"}>
              <FavoriteBorderIcon className="text-pink cursor-pointer" />
            </Menu>
          </div>

          <div className="access-menus flex items-center justify-center gap-4">
            <div className="shopping-icon relative">
              <ShoppingCartIcon className='text-2xl cursor-pointer'/>
              <div className='w-4 h-4 bg-purple rounded-lg absolute top-[-5px] right-[-10px] text-white text-center flex items-center justify-center'>
                <span className='inline-block w-full text-[7px]'>0</span>
              </div>
            </div>

            <div className="person-icon hidden lg:block">
              <PersonIcon className='text-2xl cursor-pointer'/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
