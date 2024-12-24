import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Header/Navbar";
import Topbar from "../../components/Header/Topbar";
import { Link, NavLink, Outlet } from "react-router-dom";
import Sidebar from "../../components/Menu/Sidebar";


export default function UserIndex() {
  return (
    <>
      <Topbar />
      <Navbar />
      <Sidebar />
      <section className="my-account__header bg-secondary">
        <div className="container text-center p-10">
          <h2 className="my-account-page__title text-[34px] font-bold mb-2">
            حساب کاربری
          </h2>
          <div className="account-page__links-wrapper text-[14px] flex items-center gap-2 justify-center">
            <Link to={"/"} className="text-inherit text-[14px]">
              صفحه اصلی
            </Link>
            <span className="text-[#ffffffb3] text-[14px]"> / </span>
            <span className="text-[#ffffffb3] text-[14px]"> حساب کاربری</span>
          </div>
        </div>
      </section>
      <section className="my-account__content mt-8">
        <div className="container flex flex-wrap sm1:flex-nowrap justify-between gap-y-12 sm1:gap-y-0 gap-x-8">
          <div className="my-account__content-right-section w-full sm1:w-[30%]">
            <h4 className="my-account__content-right-section__title font-bold text-[20px] border-b border-b-[#7773] pb-4">
              حساب کاربری
            </h4>
            <ul className="my-account__links flex flex-col gap-y-4 pt-4">
              <li>
                <NavLink
                  to={"dashboard"}
                  className="my-account__link text-[#ffffff99] text-[14px]
                 hover:text-[#5667ff] transition-all"
                >
                  پیشخوان
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"orders"}
                  className="my-account__link text-[#ffffff99] text-[14px]
                 hover:text-[#5667ff] transition-all"
                >
                  سفارش ها
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"downloads"}
                  className="my-account__link text-[#ffffff99] text-[14px]
                 hover:text-[#5667ff] transition-all"
                >
                  دانلودها
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"address"}
                  className="my-account__link  text-[#ffffff99] text-[14px]
                 hover:text-[#5667ff] transition-all"
                >
                  آدرس
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"my-account"}
                  className="my-account__link  text-[#ffffff99] text-[14px]
                 hover:text-[#5667ff] transition-all"
                >
                  جزئیات
                </NavLink>
              </li>
              <li>
                <Link
                  className="my-account__link text-[#ffffff99] text-[14px]
                 hover:text-[#5667ff] transition-all"
                >
                  خروج
                </Link>
              </li>
            </ul>
          </div>
          <div className="my-account__content-left-section w-full sm1:w-[70%] pr-4 sm1:pr-8 border-r border-r-[#7773]">
            {
              <Outlet/>
            }
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
