import { Link } from "react-router-dom";
import { digitsEnToFa } from "@persian-tools/persian-tools";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import CompareArrowsIcon from "@mui/icons-material/CompareArrows";
import EmailIcon from "@mui/icons-material/Email";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import TelegramIcon from "@mui/icons-material/Telegram";
import XIcon from "@mui/icons-material/X";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import ClearIcon from "@mui/icons-material/Clear";
export default function ProductModal(props) {
  const { discount, title, price, onClose } = props;

  return (
    <div className="product-modal__wrapper fixed backdrop-brightness-50 left-0 right-0 z-[9999] w-full h-screen top-0 backdrop-blur-sm">
      <div
        className="product-modal grid grid-cols-1 max-h-[500px] overflow-y-scroll md:overflow-auto 
         [&::-webkit-scrollbar]:w-2
                [&::-webkit-scrollbar-track]:bg-primary
                [&::-webkit-scrollbar-thumb]:bg-secondary  md:grid-cols-2 bg-primary
       rounded-xl min-w-[300px] md:w-[900px] absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]"
      >
        <div
          className="close-modal__icon absolute text-[#777] top-1 left-0 sm1:top-3 sm1:left-3 cursor-pointer hover:text-[#999] transition-all"
          onClick={() => onClose()}
        >
          <ClearIcon className="text-[20px] md:text-[29px]" />
        </div>
        <Link to={'/products/product/spider-man'} className="product-modal__right-section p-6">
          <img
            src="/images/games/red dead2.webp"
            alt="product"
            className="product-img object-cover rounded-md"
          />
        </Link>
        <div className="product-modal__left-section p-6">
          <Link to={"/products/product/spider-man"} className="w-fit">
            <h3 className="product-title text-[20px]  sm1:text-[28px] font-bold">
              Red Dead Redemption 2
            </h3>
          </Link>
          <div className="product-price__wrapper mt-5 flex flex-wrap">
            {discount ? (
              <>
                <span className="shop-game__price line-through text-[#bbbbbb] text-[20px]">
                  {digitsEnToFa(price?.toLocaleString())}تومان
                </span>
                <span className="shop-game__discount text-purple text-[20px] mr-4">
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
          <div className="product-add-delete__count-wrapper flex  flex-wrap xs2:flex-nowrap items-center gap-4 mt-6">
            <div className="cart-counter__controller flex items-center gap-2 text-center">
              <span
                className="outline w-[25px] h-[40px] flex items-center justify-center
                   outline-[#77777733] rounded-lg hover:bg-purple transition-all delay-100 cursor-pointer"
              >
                -
              </span>
              <span
                className="outline w-[35px] h-[40px] flex items-center justify-center
                   outline-[#77777733] rounded-lg hover:bg-purple transition-all delay-100 cursor-pointer"
              >
                {digitsEnToFa(1)}
              </span>
              <span
                className="outline w-[25px] h-[40px] flex items-center justify-center
                   outline-[#77777733] rounded-lg hover:bg-purple transition-all delay-100 cursor-pointer"
              >
                +
              </span>
            </div>
            <button
              type="button"
              className="outline-none border-none pb-3 pt-2 px-4 bg-purple shadow-box 
                hover:shadow-boxHover rounded-3xl"
            >
              افزودن به سبد خرید
            </button>
          </div>
          <div className="add-to-favourites__wrapper flex flex-wrap xs2:flex-nowrap items-center gap-x-4 mt-6">
            <div className="flex items-center gap-x-1 group">
              <FavoriteBorderIcon
                className="w-[18px] text-[#ffffff99] transition-all cursor-pointer
                         group-hover:text-[#fff]"
              />
              <span
                className="text-[16px] text-[#ffffff99] transition-all cursor-pointer
                         group-hover:text-[#fff]"
              >
                افزودن به علاقه مندی
              </span>
            </div>
            <div className="flex items-center gap-x-1 group">
              <CompareArrowsIcon
                className="w-[18px] text-[#ffffff99] transition-all cursor-pointer
                          group-hover:text-[#fff]"
              />
              <span
                className="text-[16px] text-[#ffffff99] transition-all cursor-pointer
                          group-hover:text-[#fff]"
              >
                مقایسه
              </span>
            </div>
          </div>
          <div className="product-category mt-6 border-t border-t-[#333] pt-6">
            <span className="text-[#ffffff99] font-bold">دسته:</span>
            <span className="text-[#777777]"> اکانت قانونی پلی استیشن</span>
          </div>
          <div className="socials-share mt-6 flex items-center gap-x-2">
            <span className="font-bold text-[#ffffff99]">اشتراک گذاری:</span>
            <div className="social-icons__wrapper flex items-center flex-wrap gap-x-3">
              <EmailIcon className="text-[18px] text-[#ff6bbb] cursor-pointer hover:opacity-70 transition-all" />
              <FacebookOutlinedIcon className="text-[18px] text-[#ff6bbb] cursor-pointer hover:opacity-70 transition-all" />
              <TelegramIcon className="text-[18px] text-[#ff6bbb] cursor-pointer hover:opacity-70 transition-all" />
              <XIcon className="text-[18px] text-[#ff6bbb] cursor-pointer hover:opacity-70 transition-all" />
              <WhatsAppIcon className="text-[18px] text-[#ff6bbb] cursor-pointer hover:opacity-70 transition-all" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
