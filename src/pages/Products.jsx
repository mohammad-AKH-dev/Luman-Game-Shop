import { Link, useParams } from "react-router-dom";
import { useEffect } from "react";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Header/Navbar";
import Topbar from "../components/Header/Topbar";
import ShopHeader from "../components/ShopHeader";
import ProductLinks from "../components/Box/ProductLinks";
import { useState } from "react";
import ShopGameBox from "../components/Box/ShopGameBox";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Sidebar from "../components/Menu/Sidebar";

export default function Products() {
  const [showState, setShowState] = useState("all");
  const [showingItemsFilter, setShowingItemsFilter] = useState("-1");
  const params = useParams()

  useEffect(() => {
    document.title =  'محصولات'
  },[params])

  return (
    <>
      <Topbar />
      <Navbar />
      <Sidebar/>
      <ShopHeader title={"فروشگاه"}>
        <ProductLinks title={"همه"} href={"/products/category/all"} count={0} />
        <ProductLinks
          title={"اکانت قانونی پلی استیشن"}
          href={"/products/category/playstationGames"}
          count={6}
        />
        <ProductLinks
          title={"ایکس باکس وان"}
          href={"/products/category/xboxGames"}
          count={3}
        />
        <ProductLinks
          title={"بازیهای استیم و اوریجین"}
          href={"/products/category/steamAndOriginGames"}
          count={6}
        />
        <ProductLinks
          title={"خرید اکانت پرمیوم"}
          href={"/products/category/premuimAccounts"}
          count={6}
        />
      </ShopHeader>
      <div className="shop-sorting__wrapper mt-16">
        <div className="container flex justify-between items-center flex-col gap-4 sm1:flex-row sm1:gap-0">
          <div className="shop-sorting-title__wrapper flex items-center gap-2">
            <Link to={"/"}>خانه</Link>
            <span className="text-[#777]">/</span>
            <span className="text-[#777]">فروشگاه</span>
          </div>
          <div className="shop-showing-option__wrapper flex flex-col sm1:flex-row gap-4 items-center sm1:gap-8">
            <div className="showing-state">
              <span> نمایش : </span>
              {showState === "all" && "همه"}
            </div>
            <select
              className="showing-items__selectbox w-full sm1:w-fit bg-secondary py-2 px-4 rounded-2xl"
              value={showingItemsFilter}
              onChange={(event) => setShowingItemsFilter(event.target.value)}
            >
              <option value="-1">مرتب سازی بر اساس پیشفرض</option>
              <option value="popularity"> مرتب سازی بر اساس محبوبیت</option>
              <option value="score">مرتب سازی بر اساس امتیاز</option>
              <option value="latest">مرتب سازی بر اساس جدیدترین</option>
              <option value="cheap">مرتب سازی بر اساس ارزانترین</option>
              <option value="expensive">مرتب سازی بر اساس گرانترین</option>
            </select>
          </div>
        </div>
        <div className="container">
          <div className="ShopGameBoxes-wrapper grid grid-cols-1 sm1:grid-cols-2 xs2:grid-cols-3 lg:grid-cols-4 gap-6 place-items-center">
            <ShopGameBox discount={90000} price={110000} percent={10}/>
            <ShopGameBox discount={90000} price={110000} percent={10}/>
            <ShopGameBox price={110000}/>
            <ShopGameBox price={110000} percent={10}/>
            <ShopGameBox price={110000} percent={10}/>
            <ShopGameBox discount={90000} price={110000}/>
            <ShopGameBox discount={90000} price={110000} percent={10}/>
            <ShopGameBox discount={90000} price={110000}/>
            <ShopGameBox discount={90000} price={110000}/>
            <ShopGameBox discount={90000} price={110000}/>
            <ShopGameBox discount={90000} price={110000}/>
            <ShopGameBox discount={90000} price={110000}/>
          </div>
          <div className="pagination-wrapper mt-16 flex flex-wrap items-center justify-center gap-8">
             <ArrowForwardIcon className="cursor-pointer"/>
             <Link to={'/products'} className="px-4 py-2 rounded-md transition-all delay-100">
              <span>3</span>
             </Link>
             <Link to={'/products'} className="px-4 py-2 rounded-md transition-all delay-100">
              <span>2</span>
             </Link>
             <Link to={'/products'} className="px-4 py-2 rounded-md bg-purple hover:bg-violet-500 transition-all delay-100">
              <span>1</span>
             </Link>
             <ArrowBackIcon className="cursor-pointer"/>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
