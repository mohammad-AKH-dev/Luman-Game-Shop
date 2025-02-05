import Footer from "../components/Footer/Footer";
import Navbar from "../components/Header/Navbar";
import Topbar from "../components/Header/Topbar";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { Link, NavLink } from "react-router-dom";
import { Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import CloseIcon from "@mui/icons-material/Close";
import { digitsEnToFa } from "@persian-tools/persian-tools";
import Sidebar from "../components/Menu/Sidebar";
import ShoppingBasketCart from "../components/ShoppingBasketCart";
import MenusSidebar from "../components/Menu/MenusSidebar";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

export default function ShoppingBasket() {

   const params = useParams()
  
    useEffect(() => {
      document.title = 'سبد خرید'
    },[params])
  

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: "text-primary",
      fontFamily: "Yekan-Regular",

      color: "#fff",
      borderBottom: "1px solid #7773",
    },

    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
      fontFamily: "Yekan-Regular",
      color: "#fff",
      paddingTop: 16,
      paddingBottom: 16,
      paddingRight: 0,
      paddingLeft: 0,
      maxWidth: 230,
      borderBottom: "1px solid #7773",
    },
  }));

  function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }

  const rows = [
    createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
    createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
    createData("Eclair", 262, 16.0, 24, 6.0),
    createData("Cupcake", 305, 3.7, 67, 4.3),
    createData("Gingerbread", 356, 16.0, 49, 3.9),
  ];

  const breadcrumbs = [
    <NavLink
      to={"/cart"}
      key={1}
      className="text-[22px] text-[#ffffff] font-primary"
    >
      سبد خرید
    </NavLink>,
    <NavLink
      key={2}
      className="text-[22px] text-[#ffffff99] font-primary transition-all hover:text-[#ffffff]"
      to={"/checkout"}
    >
      تسویه حساب
    </NavLink>,
    <Typography
      key="3"
      fontFamily={"font-primary"}
      className="text-[22px] font-primary text-[#ffffff99]"
      sx={{ color: "text.primary" }}
    >
      سفارش کامل شد
    </Typography>,
  ];

  return (
    <>
      <Topbar />
      <Navbar />
      <Sidebar />
      <MenusSidebar/>
      <div className="shopping-basket__title bg-secondary p-8">
        <div className="shopping-basket__breadcrumb container">
          <Breadcrumbs
            className="flex items-center justify-center"
            separator={
              <NavigateNextIcon
                fontSize="medium"
                className="text-[#ffffff99] rotate-180"
              />
            }
            aria-label="breadcrumb"
          >
            {breadcrumbs}
          </Breadcrumbs>
        </div>
      </div>
      <section className="shopping-basket__section mt-16">
        <div className="container shopping-basket flex flex-wrap md:flex-nowrap gap-x-8">
          <div className="shopping-basket__right-section w-full  md:w-[65%]">
            {/* product carts table (show after 950px)*/}

            <Table aria-label="customized table" className="hidden xs:table">
              <TableHead>
                <TableRow>
                  <StyledTableCell align="center" className="font-bold">
                    محصول
                  </StyledTableCell>
                  <StyledTableCell align="center" className="font-bold">
                    قیمت
                  </StyledTableCell>
                  <StyledTableCell align="center" className="font-bold">
                    تعداد
                  </StyledTableCell>
                  <StyledTableCell align="center" className="font-bold">
                    جمع جزء
                  </StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <ShoppingBasketCart key={row.name} tableRow={true}/>
                ))}
              </TableBody>
            </Table>

            {/* product carts div {show before 950px} */}
            <div className="products-wrapper flex w-full xs:hidden">
              <ShoppingBasketCart/>
            </div>

            <div className="shopping-basket__footer-wrapper xs:items-center flex xs:mb-8 flex-col-reverse xs:flex-row gap-y-8 xs:gap-y-0 justify-between mt-8">
              <div className="discount-code__wrapper flex gap-x-4 flex-col xs:flex-row gap-y-8 mb-12 xs:mb-0 xs:gap-y-0">
                <input
                  type="text"
                  placeholder="کد تخفیف"
                  className="py-2 text px-4 rounded-2xl border outline-none border-[#7773]
             focus-visible:border-[#ffffff99] bg-secondary"
                />
                <button
                  type="button"
                  className="px-4 py-2 text-[14px] rounded-3xl bg-purple shadow-box hover:shadow-boxHover apply-discount__btn"
                >
                  اعمال کد تخفیف
                </button>
              </div>
              <button
                type="button"
                className="text-[14px] rounded-3xl bg-[#ffffff] text-[#333] font-bold px-6 py-2 shopping-basket__update-btn"
              >
                بروزرسانی سبد خرید
              </button>
            </div>
          </div>
          <div className="shopping-basket__left-section w-full  md:w-[35%]">
            <div className="shopping-basket outline outline-purple rounded-sm p-6 flex flex-col gap-y-8">
              <h3 className="shopping-basket__title text-[20px] font-bold">
                جمع کل سبد خرید
              </h3>
              <div className="plus-all__prices-wrapper flex justify-between border-b border-b-[#7773] pb-4">
                <span className="plus-all__prices-label">جمع جزء:</span>
                <span className="plus-all__prices text-purple">
                  {digitsEnToFa(110000)}تومان
                </span>
              </div>
              <div className="plus-all__prices-wrapper flex justify-between border-b border-b-[#7773] pb-4">
                <span className="plus-all__prices-label">جمع جزء:</span>
                <span className="plus-all__prices text-purple">
                  {digitsEnToFa(110000)}تومان
                </span>
              </div>
              <Link
                to={"/cart/checkout"}
                className="px-4 text-center text-[14px] py-3 w-full rounded-3xl bg-purple shadow-box hover:shadow-boxHover"
              >
                ادامه جهت تسویه حساب
              </Link>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
