import { Link, useLocation, useParams } from "react-router-dom";
import { useContext, useEffect, useMemo } from "react";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Header/Navbar";
import Topbar from "../components/Header/Topbar";
import ShopHeader from "../components/ShopHeader";
import ProductLinks from "../components/Box/ProductLinks";
import { useState } from "react";
import ShopGameBox from "../components/Box/ShopGameBox";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Sidebar from "../components/Menu/Sidebar";
import ProductModal from "../components/Box/ProductModal";
import MenusSidebar from "../components/Menu/MenusSidebar";
import { MyContext } from "../contexts/context";
import Pagination from "../components/Pagination";

const filterSwitchCase = (state, action) => {
  switch (action) {
    case "all": {
      return state;
    }
    case "Xbox": {
      return [...state].filter((product) => product.category === "Xbox");
    }
    case "PlayStation": {
      return [...state].filter((product) => product.category === "PlayStation");
    }
    case "Steam": {
      return [...state].filter((product) => product.category === "Steam");
    }

    default:
      return state;
  }
};

export default function Products() {
  const [showingItemsFilter, setShowingItemsFilter] = useState("-1");
  const [showProductModal, setShowProductModal] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const context = useContext(MyContext);
  const [products, setProducts] = useState(context.products);
  const [selectedGame, setSelectedGame] = useState({});
  const params = useParams();
  const location = useLocation();
  const rows = 8
  const endIndex = currentPage * rows
  const startIndex = endIndex - rows
  const queryParams = new URLSearchParams(location.search);
  const category = queryParams.get("category");

  const fillteredProducts = useMemo(
    () => filterSwitchCase(products, category),
    [category]
  );

  useEffect(() => {
    document.title = "محصولات";
  }, [params]);

  return (
    <>
      <Topbar />
      <Navbar />
      <Sidebar />
      <MenusSidebar />
      {showProductModal && (
        <ProductModal
          data={selectedGame}
          onClose={() => setShowProductModal(false)}
        />
      )}
      <ShopHeader title={"فروشگاه"}>
        <ProductLinks
          title={"همه"}
          href={"/products/1/?category=all"}
          count={products.length}
          param={"all"}
        />
        <ProductLinks
          title={"اکانت قانونی پلی استیشن"}
          href={"/products/1/?category=PlayStation"}
          count={
            [...products].filter(
              (product) => product.category === "PlayStation"
            ).length
          }
          param={"PlayStation"}
        />
        <ProductLinks
          title={"ایکس باکس وان"}
          href={"/products/1/?category=Xbox"}
          count={
            [...products].filter((product) => product.category === "Xbox")
              .length
          }
          param={"Xbox"}
        />
        <ProductLinks
          title={"بازیهای استیم و اوریجین"}
          href={"/products/1/?category=Steam"}
          count={
            [...products].filter((product) => product.category === "Steam")
              .length
          }
          param={"Steam"}
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
              {category === "all" && "همه"}
              {category === "Xbox" && "ایکس باکس"}
              {category === "PlayStation" && "پلی استیشن"}
              {category === "Steam" && "استیم و اوریجین"}
            </div>
            <select
              className="showing-items__selectbox w-full sm1:w-fit bg-secondary py-2 px-4 rounded-2xl"
              value={showingItemsFilter}
              onChange={(event) => setShowingItemsFilter(event.target.value)}
            >
              <option value="-1">مرتب سازی بر اساس پیشفرض</option>
              <option value="cheap">مرتب سازی بر اساس ارزانترین</option>
              <option value="expensive">مرتب سازی بر اساس گرانترین</option>
            </select>
          </div>
        </div>
        <div className="container">
          <div
            className="ShopGameBoxes-wrapper grid grid-cols-1 sm1:grid-cols-2 xs2:grid-cols-3 lg:grid-cols-4
           xl:gap-2 place-items-center"
          >
            {showingItemsFilter === "-1"
              ? fillteredProducts.slice(startIndex,endIndex).map((product) => (
                  <ShopGameBox
                    key={product.id}
                    {...product}
                    onShow={() => setShowProductModal(true)}
                    onClick={() => setSelectedGame(product)}
                  />
                ))
              : null}
            {showingItemsFilter === "cheap"
              ? [...fillteredProducts]
                  .slice(startIndex,endIndex)
                  .sort((a, b) => a.price - b.price)
                  .map((product) => (
                    <ShopGameBox
                      key={product.id}
                      {...product}
                      onShow={() => setShowProductModal(true)}
                      onClick={() => setSelectedGame(product)}
                    />
                  ))
              : null}
            {showingItemsFilter === "expensive"
              ? [...fillteredProducts]
                  .slice(startIndex,endIndex)
                  .sort((a, b) => b.price - a.price)
                  .map((product) => (
                    <ShopGameBox
                      key={product.id}
                      {...product}
                      onShow={() => setShowProductModal(true)}
                      onClick={() => setSelectedGame(product)}
                    />
                  ))
              : null}
          </div>

          <Pagination
            category={category}
            postsPerPage={8}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            totalPosts={fillteredProducts.length}
          />
        </div>
      </div>
      <Footer />
    </>
  );
}
