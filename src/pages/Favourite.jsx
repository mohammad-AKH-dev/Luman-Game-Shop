import { useEffect, useState } from "react";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Header/Navbar";
import Topbar from "../components/Header/Topbar";
import ShopHeader from "../components/ShopHeader";
import { Link, useParams } from "react-router-dom";
import HeartBrokenIcon from "@mui/icons-material/HeartBroken";
import ClearIcon from "@mui/icons-material/Clear";
import ShopGameBox from "../components/Box/ShopGameBox";
import Sidebar from "../components/Menu/Sidebar";

export default function Favourite() {
  const [favoriteGames, setFavoriteGames] = useState([]);
  const params = useParams();

  useEffect(() => {
    document.title = "فروشگاه بازی لومان / موردعلاقه ها";
  }, [params]);
  return (
    <>
      <Topbar />
      <Navbar />
      <Sidebar/>
      <ShopHeader title={"مورد علاقه ها"}>
        <div className="shop-sorting-title__wrapper flex items-center gap-2">
          <Link to={"/"}>صفحه اصلی</Link>
          <span className="text-[#777]">/</span>
          <span className="text-[#777]">مورد علاقه ها</span>
        </div>
      </ShopHeader>
      {favoriteGames.length ? (
        <div className="container favourite-games__list mt-16">
          <h4 className="favourite-games-list__title text-[20px] font-bold pb-4 border-b border-[#77777733]">
            لیست علاقه مندی های محصولات شما
          </h4>
          <div className="favorite-games__wrapper grid grid-cols-1 place-items-center sm1:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
            <ShopGameBox percent={10} discount={90000} price={110000}>
              <div className="delete-game__wrapper flex pb-4 justify-center items-center text-[#777777] hover:text-[#888888] transition-all delay-100">
                <ClearIcon />
                <span>حذف</span>
              </div>
            </ShopGameBox>
            <ShopGameBox percent={10} discount={90000} price={110000}>
              <div className="delete-game__wrapper flex pb-4 justify-center items-center text-[#777777] hover:text-[#888888] transition-all delay-100">
                <ClearIcon />
                <span>حذف</span>
              </div>
            </ShopGameBox>
            <ShopGameBox percent={10} discount={90000} price={110000}>
              <div className="delete-game__wrapper flex pb-4 justify-center items-center text-[#777777] hover:text-[#888888] transition-all delay-100">
                <ClearIcon />
                <span>حذف</span>
              </div>
            </ShopGameBox>
            <ShopGameBox percent={10} discount={90000} price={110000}>
              <div className="delete-game__wrapper flex pb-4 justify-center items-center text-[#777777] hover:text-[#888888] transition-all delay-100">
                <ClearIcon />
                <span>حذف</span>
              </div>
            </ShopGameBox>
            <ShopGameBox percent={10} discount={90000} price={110000}>
              <div className="delete-game__wrapper flex pb-4 justify-center items-center text-[#777777] hover:text-[#888888] transition-all delay-100">
                <ClearIcon />
                <span>حذف</span>
              </div>
            </ShopGameBox>
            <ShopGameBox percent={10} discount={90000} price={110000}>
              <div className="delete-game__wrapper flex pb-4 justify-center items-center text-[#777777] hover:text-[#888888] transition-all delay-100">
                <ClearIcon />
                <span>حذف</span>
              </div>
            </ShopGameBox>
          </div>
        </div>
      ) : (
        <div className="empty-favoutire__items-wrapper container flex flex-col items-center justify-center mt-12 text-center">
          <HeartBrokenIcon className="text-[28px] text-[#7777771a] w-[200px] h-[200px]" />
          <h2 className="text-[#ffffff] text-[36px] font-bold mb-4">
            هیچ محصولی به لیست علاقه مندی شما اضافه نشده است.
          </h2>
          <span className="text-[16px] text-[#777]">
            No products added to the wishlist list. You must add some products
            to wishlist them
          </span>
          <span className="text-[16px] text-[#777]">
            You will find a lot of interesting products on our {"Shop"} page.
          </span>
          <Link
            to={"/"}
            className="text-[14px] mt-8 px-5 shadow-box hover:shadow-boxHover py-3 bg-purple rounded-3xl"
          >
            بازگشت به فروشگاه
          </Link>
        </div>
      )}

      <Footer />
    </>
  );
}
