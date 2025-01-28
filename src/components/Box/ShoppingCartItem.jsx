import CloseIcon from '@mui/icons-material/Close';
import { digitsEnToFa } from "@persian-tools/persian-tools";
import myGameImage from "/images/games/Forza.webp"
export default function ShoppingCartItem() {
  return (
    <div className="cart-item flex items-start py-[1.5rem] px-[1.5rem] justify-between">
      <div className="cart-item__right-section flex">
        <img
          className="w-[65px] h-[75px] object-cover"
          src={myGameImage}
        />
        <div className="cart-item__details pr-4 flex flex-col gap-3">
          <h4 className="cart-item__title font-bold">اسپایدرمن</h4>
          <div className="cart-counter__controller flex items-center gap-2 text-center">
            <span className="outline w-[15px] outline-[#77777733] rounded-lg hover:bg-purple transition-all delay-100 cursor-pointer">
              -
            </span>
            <span className="outline w-[15px] outline-[#77777733] rounded-lg hover:bg-purple transition-all delay-100 cursor-pointer">
              {digitsEnToFa(1)}
            </span>
            <span className="outline w-[15px] outline-[#77777733] rounded-lg hover:bg-purple transition-all delay-100 cursor-pointer">
              +
            </span>
          </div>
          <div className="price-x-count flex flex-row-reverse gap-2">
            <span className="price text-[12px] ">
              {digitsEnToFa(110000)}تومان
            </span>
            <span className="text-[12px] ">x</span>
            <span className="count text-[#777] text-[12px] ">
              {digitsEnToFa(1)}
            </span>
          </div>
        </div>
      </div>
      <div className="cart-item__left-section">
        <CloseIcon className="text-[#777777] w-[20px]" />
      </div>
    </div>
  );
}
