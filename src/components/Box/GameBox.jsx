import { digitsEnToFa } from "@persian-tools/persian-tools";
export default function GameBox({ title, price, discount }) {
  return (
    <div className="playstation-game__box rounded-2xl overflow-hidden relative w-full">
      <img
        src="/images/slider-games/spider-man.webp"
        className="w-full h-full object-cover playstation-game__img"
      />
      <div className="playstation-game__infos text-center absolute pt-[28px] pr-[10px] pb-[15px] pl-[10px] bg-[#151b2d85] backdrop-blur-md bottom-0 right-0 left-0">
        <h3 className="playstation-game__title font-bold pb-[2px]">{title}</h3>
        <div className="playstation-game__price-wrapper flex flex-row justify-center items-center gap-1">
          {discount && (
            <span className="line-through text-[#bbb] playstation-game__discount text-[17px]">
              {digitsEnToFa(discount.toLocaleString())}تومان
            </span>
          )}
          <span className="text-purple playstation-game__price text-[17px]">
            {digitsEnToFa(price.toLocaleString())}تومان
          </span>
        </div>
      </div>
    </div>
  );
}
