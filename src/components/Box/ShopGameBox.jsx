import { digitsEnToFa } from "@persian-tools/persian-tools";
import { Link } from "react-router-dom";
import BoxAction from "../BoxAction";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import CompareArrowsIcon from "@mui/icons-material/CompareArrows";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Skeleton from '@mui/material/Skeleton';
import { useState } from "react";

export default function ShopGameBox(props) {
  const [isShowSkeleton,setIsShowSkeleton] = useState(true)
  const {path , discount , price , percent , children , name , onShow , onClick} = props
  return (
    <div className="Shop-Game-box relative mt-8 max-w-[400px] group">
        <img
          src={path}
          className={`${!isShowSkeleton ? 'block ' : 'none w-0'} rounded-md object-fill 
          2xl:min-w-[320px] 2xl:max-w-[320px] 2xl:min-h-[320px] 2xl:max-h-[320px]
           xl:min-w-[260px] xl:max-w-[260px] xl:min-h-[260px] xl:max-h-[260px] 
           lg:min-w-[230px] lg:max-w-[230px] lg:min-h-[230px] lg:max-h-[230px]
           md:min-w-[290px] md:max-w-[290px] md:min-h-[290px] md:max-h-[290px]
           sm:min-w-[260px] sm:max-w-[260px] sm:min-h-[260px] sm:max-h-[260px]
           xs2:min-w-[220px] xs2:max-w-[220px] xs2:min-h-[220px] xs2:max-h-[220px]
           xs:min-w-[300px] xs:max-w-[300px] xs:min-h-[300px] xs:max-h-[300px]
           sm1:min-w-[240px] sm1:max-w-[240px] sm1:min-h-[240px] sm1:max-h-[240px]
           min-w-[280px] max-w-[280px] min-h-[280px] max-h-[280px]
           m-auto pb-4`}
          onLoad={() => setIsShowSkeleton(false)}
        />
        {
         isShowSkeleton && <Skeleton variant="rectangular" className="w-[274px] mb-2 rounded-xl h-[250px] bg-[#caa9a91c]" />
        }
        
      
      {discount ? (
        <div
          className={`discount-badge absolute text-[13px] bg-purple px-2 rounded-sm py-1 ${
            children ? "top-14" : "top-4"
          } right-4`}
        >
          {digitsEnToFa(discount)}%-
        </div>
      ) : (
        ""
      )}
      <div className="game-actions__wrapper flex gap-x-4  justify-center left-0 right-0 bottom-24 items-center absolute">
        <BoxAction title={"افزودن به مورد علاقه ها"}>
          <FavoriteBorderIcon className="w-[20px] fill-white" />
        </BoxAction>
        <BoxAction title={"مقایسه"}>
          <CompareArrowsIcon className="w-[20px] fill-white" />
        </BoxAction>
        <BoxAction title={"مشاهده سریع"} onShow={onShow} onClick={onClick} >
          <SearchIcon className="w-[20px] fill-white "/>
        </BoxAction>
        <BoxAction title={"افزودن به سبد خرید"}>
          <ShoppingCartIcon className="w-[20px] fill-white " />
        </BoxAction>
      </div>
      <Link
        to={"/products/product/spider-man"}
        className="shop-game__detailes text-center mt-4"
      >
        <h3 className="shop-game__detailes-title font-bold">
          بازی {name}
        </h3>
        <div className="shop-game__detailes-price__wrapper flex flex-row gap-3 items-center justify-center">
          {discount ? (
            <>
              <span className="shop-game__price line-through text-[#bbbbbb]">
                {digitsEnToFa(price?.toLocaleString())}تومان
              </span>
              <span className="shop-game__discount text-purple">
                {digitsEnToFa((price - (price * discount / 100)).toLocaleString())}تومان
              </span>
            </>
          ) : (
            <>
              <span className="shop-game__price text-purple">
                {digitsEnToFa(price?.toLocaleString())}تومان
              </span>
            </>
          )}
        </div>
      </Link>
    </div>
  );
}
