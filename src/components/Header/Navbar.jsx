import AppsIcon from "@mui/icons-material/Apps";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Menu from "../Menu/Menu";

export default function Navbar() {
  return (
    <div className="Navbar bg-primary hidden lg:block">
      <div className="container flex justify-start items-center">
        <div className="Navbar-category__wrapper flex items-center justify-center w-fit p-2 py-3 rounded-2xl gap-1 bg-box cursor-pointer">
          <AppsIcon />
          <span className="text-sm">دسته محصولات</span>
          <KeyboardArrowDownIcon />
        </div>

        <ul className="Navbar-menus__wrapper flex justify-center items-center gap-7 mr-5">
          <Menu title={"ایکس باکس"}>
            <img
              className="max-w-[20px] max-h-[20px]"
              src="https://theme.fullwp.ir/luman/game/wp-content/uploads/2023/06/Group-3.svg"
              alt="xbox"
            />
          </Menu>
          <Menu title={"استیم"}>
            <img
              className="max-w-[20px] max-h-[20px]"
              src="https://theme.fullwp.ir/luman/game/wp-content/uploads/2023/06/Group-4.svg"
              alt="xbox"
            />
          </Menu>
          <Menu title={"اوریجین"}>
            <img
              className="max-w-[20px] max-h-[20px]"
              src="https://theme.fullwp.ir/luman/game/wp-content/uploads/2023/06/Vector.svg"
              alt="xbox"
            />
          </Menu>
          <Menu title={"ماینکرفت"}>
            <img
              className="max-w-[20px] max-h-[20px]"
              src="https://theme.fullwp.ir/luman/game/wp-content/uploads/2023/06/minecraft-1.svg"
              alt="xbox"
            />
          </Menu>
          <Menu title={"CS-GO"}>
            <img
              className="max-w-[20px] max-h-[20px]"
              src="	https://theme.fullwp.ir/luman/game/wp-content/uploads/2023/06/csgo-1.svg"
              alt="xbox"
            />
          </Menu>
          <Menu title={"ویندوز"}>
            <img
              className="max-w-[20px] max-h-[20px]"
              src="	https://theme.fullwp.ir/luman/game/wp-content/uploads/2023/06/Group-1.svg"
              alt="xbox"
            />
          </Menu>
        </ul>
      </div>
    </div>
  );
}
