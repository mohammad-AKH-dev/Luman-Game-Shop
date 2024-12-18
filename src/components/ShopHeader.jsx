export default function ShopHeader({title,children}) {
  return (
    <div className="shop-header bg-secondary">
       <div className="container p-8 text-center max-w-[850px] ">
         <h2 className="shop-header__title text-[34px] text-[#ffffff] font-bold">{title}</h2>
          <div className="shop-Links__wrapper flex items-center flex-wrap gap-4 text-[14px] mt-4 justify-evenly w-full">
            {children}
          </div>
       </div>
    </div>
  )
}
