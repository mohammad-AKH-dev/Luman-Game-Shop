import CloseIcon from "@mui/icons-material/Close";
import SearchIcon from "@mui/icons-material/Search";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { MyContext } from "../../contexts/context";
export default function MenusSidebar() {
  const [showWichDetails, setShowWichDetails] = useState("menu");
  const myContext = useContext(MyContext)

  return (
    <div className={`laptop-menu__wrapper transition-all fixed  ${myContext?.showMobileMenus ? 
      'backdrop-brightness-50 z-[99999] w-full h-full backdrop-blur-sm' : 'backdrop-brightness-100 -z-[9999] backdrop-blur-0'} 
      top-0 right-0`}>

      <div className={`laptop-menu w-[300px] transition-all h-screen fixed ${myContext?.showMobileMenus ? 'right-0' : '-right-[500px]'} top-0 bg-primary`}>
        <CloseIcon className="absolute left-3 top-3 cursor-pointer text-[#777] transition-all hover:text-[#999]" 
        onClick={() => myContext.setShowMobileMenus(false)} />
        <div
          className="laptop-menu__searchbar bg-secondary mt-12 px-4 py-3 flex 
        border-b border-b-[#333] flex-row-reverse items-center justify-between"
        >
          <SearchIcon className="cursor-pointer text-[#777]" />
          <input
            autoComplete="off"
            type="text"
            className="laptop-menu__input outline-none border-none bg-secondary w-[90%]"
            placeholder="جستجو برای پست ها"
          />
        </div>
        <div className="category-menu__wrapper grid grid-cols-2  border-b border-b-[#333]">
          <div className={`menu cursor-pointer relative text-center p-4
            ${showWichDetails === 'menu' && 'after:w-full after:h-[1px] after:bg-purple after:absolute after:bottom-0 after:left-0'} `}
            onClick={() => setShowWichDetails('menu')}>منو</div>
          <div className={`category cursor-pointer text-center relative p-4 
             ${showWichDetails === 'category' && 'after:w-full after:h-[1px] after:bg-purple after:absolute after:bottom-0 after:left-0'}`}
             onClick={() => setShowWichDetails('category')}>دسته بندی ها</div>
        </div>
        <ul className="menu-laptop__wrapper flex flex-col  font-bold ">
          {showWichDetails === "menu" ? (
            <>
              <li className="menu-item flex items-center gap-x-3 border-b border-b-[#333] p-4">
                <img
                  className="max-w-[20px] max-h-[20px]"
                  src="https://theme.fullwp.ir/luman/game/wp-content/uploads/2023/06/Group-3.svg"
                  alt="xbox"
                />
                <Link className="text-[13px]" to={"/"}>ایکس باکس</Link>
              </li>
              <li className="menu-item flex items-center gap-x-3 border-b border-b-[#333] p-4">
                <img
                  className="max-w-[20px] max-h-[20px]"
                  src="https://theme.fullwp.ir/luman/game/wp-content/uploads/2023/06/Group-4.svg"
                  alt="xbox"
                />
                <Link className="text-[13px]" to={"/"}>استیم</Link>
              </li>
              <li className="menu-item flex items-center gap-x-3 border-b border-b-[#333] p-4">
                <img
                  className="max-w-[20px] max-h-[20px]"
                  src="https://theme.fullwp.ir/luman/game/wp-content/uploads/2023/06/Vector.svg"
                  alt="xbox"
                />
                <Link className="text-[13px]" to={"/"}>اوریجین</Link>
              </li>
              <li className="menu-item flex items-center gap-x-3 border-b border-b-[#333] p-4">
                <img
                  className="max-w-[20px] max-h-[20px]"
                  src="https://theme.fullwp.ir/luman/game/wp-content/uploads/2023/06/minecraft-1.svg"
                  alt="xbox"
                />
                <Link className="text-[13px]" to={"/"}>ماینکرافت</Link>
              </li>
              <li className="menu-item flex items-center gap-x-3 border-b border-b-[#333] p-4">
                <img
                  className="max-w-[20px] max-h-[20px]"
                  src="	https://theme.fullwp.ir/luman/game/wp-content/uploads/2023/06/csgo-1.svg"
                  alt="xbox"
                />
                <Link className="text-[13px]" to={"/"}>CS-GO</Link>
              </li>
              <li className="menu-item flex items-center gap-x-3 border-b border-b-[#333] p-4">
                <img
                  className="max-w-[20px] max-h-[20px]"
                  src="	https://theme.fullwp.ir/luman/game/wp-content/uploads/2023/06/Group-1.svg"
                  alt="xbox"
                />
                <Link className="text-[13px]" to={"/"}>ویندوز</Link>
              </li>
            </>
          ) : (
            <>
              <li className="menu-item flex items-center gap-x-3 border-b border-b-[#333] p-4">
                <Link className="text-[13px]" to={"/"}>
                  بازیهای موبایلی
                </Link>
              </li>
              <li className="menu-item flex items-center gap-x-3 border-b border-b-[#333] p-4">
                <Link className="text-[13px]" to={"/"}>
                  ایکس باکس وان
                </Link>
              </li>
              <li className="menu-item flex items-center gap-x-3 border-b border-b-[#333] p-4">
                <Link className="text-[13px]" to={"/"}>
                  خرید اکانت پرمیوم
                </Link>
              </li>
              <li className="menu-item flex items-center gap-x-3 border-b border-b-[#333] p-4">
                <Link className="text-[13px]" to={"/"}>
                  بازیهای استیم و اوریجین
                </Link>
              </li>
              <li className="menu-item flex items-center gap-x-3 border-b border-b-[#333] p-4">
                <Link className="text-[13px]" to={"/"}>
                  اکانت قانونی پلی استیشن
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
}
