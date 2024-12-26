import Footer from "../components/Footer/Footer";
import Navbar from "../components/Header/Navbar";
import Topbar from "../components/Header/Topbar";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { NavLink } from "react-router-dom";
import { Typography } from "@mui/material";
import Sidebar from "../components/Menu/Sidebar";



export default function Checkout() {
    const breadcrumbs = [
        <NavLink to={'/cart'} key={1} className="text-[22px] text-[#ffffff99] font-primary transition-all hover:text-[#ffffff]">
          سبد خرید
        </NavLink>,
        <NavLink key={2} className="text-[22px] text-[#ffffff] font-primary "
          to={'/cart/checkout'}
        >
          تسویه حساب
        </NavLink>,
        <Typography key="3" fontFamily={'font-primary'} className="text-[22px] font-primary text-[#ffffff99]" sx={{ color: 'text.primary' }}>
          سفارش کامل شد
        </Typography>,
      ];

  return (
    <>
      <Topbar />
      <Navbar />
      <Sidebar/>
      <div className="shopping-basket__title bg-secondary p-8">
        <div className="shopping-basket__breadcrumb container">
          <Breadcrumbs
            className="flex items-center justify-center"
            separator={<NavigateNextIcon fontSize="medium" className="text-[#ffffff99] rotate-180"/>}
            aria-label="breadcrumb"
          >
            {breadcrumbs}
          </Breadcrumbs>
        </div>
      </div>
      <Footer />
    </>
  );
}
