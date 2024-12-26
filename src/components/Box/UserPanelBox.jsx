import { Link } from "react-router-dom";

export default function UserPanelBox({ children, title, href, type }) {
  return (
    <>
      {type === "link" ? (
        <Link
          to={`/panel/${href}`}
          className="my-account__box group text-[#ffffff99] 
      w-full sm1:max-w-[330px] h-[120px] hover:border border-secondary
      hover:border-[#a04cff] 
      transition-all bg-secondary 
      rounded-xl flex items-center 
      cursor-pointer
      justify-center flex-col gap-y-2"
        >
          {children}
          <Link
            className="text-[14px] group-hover:text-[#a04cff] text-[#ffffff99]"
            to={`/panel/${href}`}
          >
            {title}
          </Link>
        </Link>
      ) : (
        <div
          className="my-account__box group text-[#ffffff99] 
      w-full sm1:max-w-[330px] h-[120px] hover:border border-secondary
      hover:border-[#a04cff] 
      transition-all bg-secondary 
      rounded-xl flex items-center 
      cursor-pointer
      justify-center flex-col gap-y-2"
        >
          {children}
          <div className="text-[14px] group-hover:text-[#a04cff] text-[#ffffff99]">
            {title}
          </div>
        </div>
      )}
    </>
  );
}
