import { Link } from "react-router-dom";
import categoryImage from '/images/category.png'

export default function CategoryBox({ title, subtitle }) {
  return (
    <Link to={'/'}>
      <div className="category-box w-full flex justify-center items-center flex-col">
        <img
          src={categoryImage}
          className="category-box__img max-w-[133px] max-h-[133px]"
        />
        <div className="category-box__infos mt-4 text-center">
          <h3 className="category-box__title text-xl font-bold mb-4 text-[#ffffff]">
            {title}
          </h3>
          <h6 className="category-box__sub-title text-[#777777]">{subtitle}</h6>
        </div>
      </div>
    </Link>
  );
}
