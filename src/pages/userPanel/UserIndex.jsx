import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Header/Navbar";
import Topbar from "../../components/Header/Topbar";
import { Link, NavLink } from "react-router-dom";
import Sidebar from "../../components/Menu/Sidebar";
import UserPanelBox from "../../components/Box/userPanelBox";
import IntegrationInstructionsIcon from '@mui/icons-material/IntegrationInstructions';
import DownloadForOfflineIcon from '@mui/icons-material/DownloadForOffline';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PersonPinIcon from '@mui/icons-material/PersonPin';
import LogoutIcon from '@mui/icons-material/Logout';

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
            <h4 className="my-account__content-left-section__subtitle text-[16px] text-[#ffffff99]">
              سلام mohmmad (mohmmad نیستید؟{" "}
              <span
                className="cursor-pointer text-[#a04cff] transition-all
             hover:text-[#5667ff]"
              >
                خارج شوید
              </span>
              )
            </h4>
            <p className="my-account__content-left-section__paragraph mt-6 text-[#ffffff99] leading-8">
              از طریق پیشخوان حساب کاربری‌تان، می‌توانید سفارش‌های اخیرتان را
              مشاهده، آدرس‌های حمل و نقل و صورتحساب‌تان را مدیریت و جزییات حساب
              کاربری و کلمه عبور خود را ویرایش کنید.
            </p>
            <div className="my-account__content-left-section__boxes-wrapper mt-6 grid grid-cols-2 md:grid-cols-3 place-items-center gap-4">
               <UserPanelBox title={'سفارش ها'} href={'orders'}>
                  <IntegrationInstructionsIcon className="text-[2rem] group-hover:text-[#a04cff]"/>
               </UserPanelBox>
               <UserPanelBox title={'دانلودها'} href={'downloads'}>
                  <DownloadForOfflineIcon className="text-[2rem] group-hover:text-[#a04cff]"/>
               </UserPanelBox>
               <UserPanelBox title={'آدرس'} href={'address'}>
                  <LocationOnIcon className="text-[2rem] group-hover:text-[#a04cff]"/>
               </UserPanelBox>
               <UserPanelBox title={'جزئیات حساب'} href={'my-account'}>
                  <PersonPinIcon className="text-[2rem] group-hover:text-[#a04cff]"/>
               </UserPanelBox>
               <UserPanelBox title={'خروج'}>
                  <LogoutIcon className="text-[2rem] group-hover:text-[#a04cff]"/>
               </UserPanelBox>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
