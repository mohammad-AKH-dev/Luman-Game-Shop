import { styled } from "@mui/material/styles";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import CloseIcon from "@mui/icons-material/Close";
import { digitsEnToFa } from "@persian-tools/persian-tools";
import { Link } from "react-router-dom";

export default function ShoppingBasketCart({tableRow}) {
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    "&:last-child td, &:last-child th": {
      border: 0,
    },
  }));

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

  return (
    <>
      {tableRow ? (
        <StyledTableRow>
          <StyledTableCell component="td" scope="row" align="right">
            <div className="shopping-product__wrapper flex items-center gap-x-4">
              <CloseIcon className="text-[#ffffff99] ml-2 cursor-pointer" />
              <img
                src="images/games/Forza.webp"
                className="product-cart__img rounded-md object-cover max-w-[80px] h-[90px]"
              />
              <Link
                to={"/products/product/spider-man"}
                className="product-title font-bold text-[14px]"
              >
                مورتال کمبت 11 آلتیمیت
              </Link>
            </div>
          </StyledTableCell>
          <StyledTableCell align="center" className="text-[#777777]">
            <span className="product-price text-[#777777]">
              {digitsEnToFa(110000)}تومان
            </span>
          </StyledTableCell>
          <StyledTableCell align="center">
            <div className="product-cart-counter__controller flex items-center gap-2 text-center  pr-12">
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
          </StyledTableCell>
          <StyledTableCell align="center" className="text-purple">
            <span className="plus-allprices">{digitsEnToFa(110000)}تومان</span>
          </StyledTableCell>
        </StyledTableRow>
      ) : (
        <div className="product-cart__title-wrapper w-full flex gap-x-4">
          <Link to={"/products/product/spider-man"} className="mx-auto">
            <img
              src="images/games/Forza.webp"
              className="product-cart__img min-w-[100px] w-[100px] rounded-md object-cover h-110px"
            />
          </Link>
          <div className="product-details flex flex-col w-full gap-y-2">
            <div className="product-title__wrapper w-full flex justify-between">
              <Link
                to={"/products/product/spider-man"}
                className="product-title font-bold"
              >
                مورتال کمبت 11 آلتیمیت
              </Link>
              <div className="close-icon__wrapper">
                <CloseIcon className="text-[17px] cursor-pointer text-[#ffffff99] font-bold" />
              </div>
            </div>
            <div className="product-cart__price-wrapper flex flex-wrap items-center justify-between pb-2 border-b-[#7773] border-b border-dashed gap-x-4">
              <span className="product-cart-price__subtitle text-[12px] text-[#ffffff99]">
                قیمت
              </span>
              <span className="product-cart-price text-[#777]">
                {digitsEnToFa(110000)}تومان
              </span>
            </div>
            <div className="product-count-wrapper flex flex-wrap items-center justify-between pb-2 border-b-[#7773] border-b border-dashed gap-x-4">
              <span className="product-cart-count text-[12px] text-[#ffffff99]">
                تعداد
              </span>
              <div className="product-cart-counter__controller flex items-center gap-2 text-center  pr-12">
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
            </div>
            <div className="product-cart__allprices-wrapper flex flex-wrap items-center justify-between pb-2 border-b-[#7773] border-b border-dashed gap-x-4">
              <span className="product-cart-allprices__subtitle text-[12px] text-[#ffffff99]">
                جمع جز
              </span>
              <span className="product-cart-allprices text-purple">
                {digitsEnToFa(110000)}تومان
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
