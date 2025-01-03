import { digitsEnToFa } from "@persian-tools/persian-tools";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Skeleton from '@mui/material/Skeleton';


export default function ShopGameBox({discount,price,percent,children}) {

  return (
    <Link to={'/products/product/spider-man'}>
     <div className='Shop-Game-box relative mt-8 max-w-[400px]'>
      {children}
         <img src="/images/games/red dead2.webp" className="max-w-full rounded-md" /> 
       {
        percent ? <div className={`discount-badge absolute text-[13px] bg-purple px-4 rounded-sm py-1 ${children ? 'top-14' : 'top-4'} right-4`}>{digitsEnToFa(percent)}%-</div>
        : ''
       }
       <div className="shop-game__detailes text-center mt-4">
        <h3 className="shop-game__detailes-title font-bold">بازی Red Dead Redemption 2</h3>
        <div className="shop-game__detailes-price__wrapper flex flex-row gap-3 items-center justify-center">
         {
          discount ? <>
            <span className="shop-game__price line-through text-[#bbbbbb]">{digitsEnToFa(price?.toLocaleString())}تومان</span>
            <span className="shop-game__discount text-purple">{digitsEnToFa(discount?.toLocaleString())}تومان</span>
          </> :
          <>
           <span className="shop-game__price text-purple">{digitsEnToFa(price?.toLocaleString())}تومان</span>
           
          </>
         }
        </div>
       </div>
    </div>
    </Link>
  )
}
