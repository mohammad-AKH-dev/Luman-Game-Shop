import { digitsEnToFa } from "@persian-tools/persian-tools";
import { Link } from "react-router-dom";
import myGameImage from "/images/games/Forza.webp"

export default function MostSoledGameBox({ price, discount }) {
  return (
    <div className="w-full max-h-[128px] flex items-center lg:bg-secondary rounded-r-md rounded-l-2xl overflow-hidden">
      <Link>
        <img className="h-full min-w-[128px] object-cover" src={myGameImage} />
      </Link>
      <Link to={"/"} className={`pr-2 flex flex-col relative ${discount ? 'top-[-23px]' : 'top-[-40px]'} lg:static`}>
        <h3 className="text-ffffff font-bold pb-1">فورزا هورایزن 4</h3>
        <div className={`flex flex-row flex-wrap xs:flex-nowrap xs2:flex-col sm:flex-row gap-3 ${discount ? 'lg:flex-col' : 'lg:flex-row'} xs2:gap-0`}>
        <span className="text-purple">
          {digitsEnToFa(price.toLocaleString())}تومان
        </span>
        {discount && (
          <span className="text-[#bbb] line-through sm:pr-2 lg:pr-0">
            {digitsEnToFa(discount.toLocaleString())}تومان
          </span>
        )}
        </div>
      </Link>
    </div>
  );
}
