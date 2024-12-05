import {  NavLink  } from "react-router-dom"

export default function ProductLinks({href,title,count}) {

  return (
    <NavLink to={href} className="text-center lg:text-right block">
          <NavLink to={href} className={`shop-header__subtitle relative text-[#ffffff] text-[15px] tracking-tight after:absolute
           after:bg-purple 
           
           after:left-0 after:right-0 
           after:h-[2px] after:w-0 after:hover:w-full after:transition-all after:delay-150 after:-bottom-1 `}>
            {title}
          </NavLink>
          <h4 className="text-[#ffffff99] mt-2 text-[14px]">محصولات {count > 0 ? count : ''}</h4>
        </NavLink>
  )
}
