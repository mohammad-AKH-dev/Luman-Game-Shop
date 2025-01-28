import { digitsEnToFa } from "@persian-tools/persian-tools";
import { Link } from "react-router-dom";
import BoxAction from "../BoxAction";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import CompareArrowsIcon from "@mui/icons-material/CompareArrows";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import myGameImage from "/images/games/red dead2.webp"
import Skeleton from '@mui/material/Skeleton';
import { useState } from "react";

export default function ShopGameBox({ discount, price, percent, children , onShow}) {
  const [isShowSkeleton,setIsShowSkeleton] = useState(true)
  return (
    <div className="Shop-Game-box relative mt-8 max-w-[400px] group">
      {children}
      
        <img
          src={myGameImage}
          className={`${!isShowSkeleton ? 'block max-w-full' : 'none w-0'} rounded-md`}
          onLoad={() => setIsShowSkeleton(false)}
        />
        {
         isShowSkeleton && <Skeleton variant="rectangular" className="w-[274px] mb-2 rounded-xl h-[250px] bg-[#caa9a91c]" />
        }
        
      
      {percent ? (
        <div
          className={`discount-badge absolute text-[13px] bg-purple px-4 rounded-sm py-1 ${
            children ? "top-14" : "top-4"
          } right-4`}
        >
          {digitsEnToFa(percent)}%-
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
        <BoxAction title={"مشاهده سریع"} onShow={onShow}>
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
          بازی Red Dead Redemption 2
        </h3>
        <div className="shop-game__detailes-price__wrapper flex flex-row gap-3 items-center justify-center">
          {discount ? (
            <>
              <span className="shop-game__price line-through text-[#bbbbbb]">
                {digitsEnToFa(price?.toLocaleString())}تومان
              </span>
              <span className="shop-game__discount text-purple">
                {digitsEnToFa(discount?.toLocaleString())}تومان
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
