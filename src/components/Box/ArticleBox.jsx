import { digitsEnToFa } from "@persian-tools/persian-tools";
import { Link } from "react-router-dom";

export default function ArticleBox(href) {
  return (
    <Link to={href}>
      <div className="Article-box max-w-[375px] sm1:max-w-[300px] overflow-hidden">
        <img
          src="https://theme.fullwp.ir/luman/game/wp-content/uploads/2023/06/b4.jpg"
          className="w-full rounded-md"
        />
        <div className="Article-box__infos mt-4 text-center">
          <h3 className="Article-box__title text-right">
            <Link to={href} className="text-[#ffffff] font-bold text-[22px]">اخبار تولد 6 سالگی فری فایر</Link>
          </h3>
          <div className="Article-Diffusion-date-infos flex justify-between mt-4">
            <span className="Article-Diffusion-date text-[#bdbbbb] text-[14px]">{`${digitsEnToFa(1402)}-${digitsEnToFa(0o3)}-${digitsEnToFa(29)}`}</span>
            <Link to={href} className="text-purple text-[14px]">گیم</Link>
          </div>
        </div>
      </div>
    </Link>
  );
}
