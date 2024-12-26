import UserPanelBox from "../../components/Box/userPanelBox";
import IntegrationInstructionsIcon from "@mui/icons-material/IntegrationInstructions";
import DownloadForOfflineIcon from "@mui/icons-material/DownloadForOffline";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PersonPinIcon from "@mui/icons-material/PersonPin";
import LogoutIcon from "@mui/icons-material/Logout";


export default function Dashboard() {
  return (
    <>
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
        از طریق پیشخوان حساب کاربری‌تان، می‌توانید سفارش‌های اخیرتان را مشاهده،
        آدرس‌های حمل و نقل و صورتحساب‌تان را مدیریت و جزییات حساب کاربری و کلمه
        عبور خود را ویرایش کنید.
      </p>
      <div className="my-account__content-left-section__boxes-wrapper mt-6 grid grid-cols-2 md:grid-cols-3 place-items-center gap-4">
        <UserPanelBox title={"سفارش ها"} href={"orders"} type={'link'}>
          <IntegrationInstructionsIcon className="text-[2rem] group-hover:text-[#a04cff]" />
        </UserPanelBox>
        <UserPanelBox title={"دانلودها"} href={"downloads"} type={'link'}>
          <DownloadForOfflineIcon className="text-[2rem] group-hover:text-[#a04cff]" />
        </UserPanelBox>
        <UserPanelBox title={"آدرس"} href={"address"} type={'link'}>
          <LocationOnIcon className="text-[2rem] group-hover:text-[#a04cff]" />
        </UserPanelBox>
        <UserPanelBox title={"جزئیات حساب"} href={"my-account"} type={'link'}>
          <PersonPinIcon className="text-[2rem] group-hover:text-[#a04cff]" />
        </UserPanelBox>
        <UserPanelBox title={"خروج"} href={'#'} type={'div'}>
          <LogoutIcon className="text-[2rem] group-hover:text-[#a04cff]" />
        </UserPanelBox>
      </div>
    </>
  );
}
