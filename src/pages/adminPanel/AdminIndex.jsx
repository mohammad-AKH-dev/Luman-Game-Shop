import { Link, NavLink, Outlet } from "react-router-dom";
import DashboardIcon from "@mui/icons-material/Dashboard";
import GroupIcon from "@mui/icons-material/Group";
import InventoryIcon from "@mui/icons-material/Inventory";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import DiscountIcon from "@mui/icons-material/Discount";
import CategoryIcon from "@mui/icons-material/Category";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";
import SearchIcon from "@mui/icons-material/Search";
import FormInput from "../../components/Forminput";

export default function AdminIndex() {
  return (
    <div className="admin-panel flex justify-between">
      {/* side bar */}
      <div className="admin-panel__sidebar bg-secondary p-6 max-w-[300px] min-w-[150px] sm1:min-w-[300px] sticky right-0 top-0 h-screen">
        <h3 className="admin-panel__title border-b border-b-[#333] pb-5">
          <Link to={"/"}>
            <img
              src="/images/logo.png"
              className="max-w-[120px] sm1:max-w-[160px]"
              alt="لومان"
            />
          </Link>
        </h3>
        <ul className="admin-panel__list mt-4 px-3 flex flex-col gap-y-8">
          <NavLink to={"/a-panel/dashboard"} className="admin-panel__item text-[#ffffff99] hover:text-[#5667ff] transition-all flex gap-x-3 cursor-pointer">
            <DashboardIcon className="max-w-[20px]" />
            <NavLink
              to={"/a-panel/dashboard"}
              className="text-inherit admin-panel__link text-[14px]"
            >
              داشبورد
            </NavLink>
          </NavLink>
          <NavLink to={"/a-panel/users"} className="admin-panel__item text-[#ffffff99] hover:text-[#5667ff] transition-all flex gap-x-3 cursor-pointer">
            <GroupIcon className="max-w-[20px]" />
            <NavLink
              to={"/a-panel/users"}
              className="text-inherit admin-panel__link text-[14px]"
            >
              کاربران
            </NavLink>
          </NavLink>
          <NavLink to={"/a-panel/products"} className="admin-panel__item text-[#ffffff99] hover:text-[#5667ff] transition-all flex gap-x-3 cursor-pointer">
            <InventoryIcon className="max-w-[20px]" />
            <NavLink
              to={"/a-panel/products"}
              className="text-inherit admin-panel__link text-[14px]"
            >
              محصولات
            </NavLink>
          </NavLink>
          <NavLink  to={"/a-panel/discounts"} className="admin-panel__item text-[#ffffff99] hover:text-[#5667ff] transition-all flex gap-x-3 cursor-pointer">
            <DiscountIcon className="max-w-[20px]" />
            <NavLink
              to={"/a-panel/discounts"}
              className="text-inherit admin-panel__link text-[14px]"
            >
              کد های تخفیف
            </NavLink>
          </NavLink>
          <NavLink to={"/a-panel/discounts"} className="admin-panel__item text-[#ffffff99] hover:text-[#5667ff] transition-all flex gap-x-3 cursor-pointer">
            <CategoryIcon className="max-w-[20px]" />
            <NavLink
              to={"/a-panel/discounts"}
              className="text-inherit admin-panel__link text-[14px]"
            >
              دسته بندی ها
            </NavLink>
          </NavLink>
          <NavLink to={"/a-panel/detailes"} className="admin-panel__item text-[#ffffff99] hover:text-[#5667ff] transition-all flex gap-x-3 cursor-pointer">
            <AccountCircleIcon className="max-w-[20px]" />
            <NavLink
              to={"/a-panel/detailes"}
              className="text-inherit admin-panel__link text-[14px]"
            >
              جزییات حساب
            </NavLink>
          </NavLink>
          <li className="admin-panel__item text-[#ffffff99] hover:text-[#5667ff] transition-all flex gap-x-3 cursor-pointer">
            <PowerSettingsNewIcon className="max-w-[20px]" />
            <span
              to={"/a-panel/details"}
              className="text-inherit admin-panel__link text-[14px]"
            >
              خروج
            </span>
          </li>
        </ul>
      </div>
      {/* panel content */}
      <div className="admin-panel__content p-6 w-[80%]">
        <div className="admin-panel__header w-full flex flex-col-reverse xs:flex-row justify-between">
          <div className="admin-search__input-wrapper">
            <FormInput
              type={"text"}
              inputStyle={
                "outline-none border-none sm:min-w-[300px] sm:w-[300px]"
              }
              labelMargin={"hidden"}
              style={"flex "}
              placeholder={"جستجو..."}
            >
              <SearchIcon className="max-w-[20px]" />
            </FormInput>
          </div>
          <div className="admin-details__wrapper flex flex-col gap-y-3 xs2:gap-y-0 items-center gap-x-3 xs2:flex-row-reverse text-[#ffffff99]">
            <img
              src="/images/person-circle.svg"
              className="bg-[#ffffff99] rounded-[10rem] object-cover max-w-[40px]"
            />
            <div className="admin-title text-center xs2:text-right">
              <h4 className="admin-name text-[14px]">رضا شکوهی</h4>
              <span className="admin-job text-[12px] text-[#555]">
                Frontend developer
              </span>
            </div>
          </div>
        </div>
        <div className="content">{<Outlet />}</div>
      </div>
    </div>
  );
}
