import FormInput from "../../components/Forminput";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import UploadIcon from "@mui/icons-material/Upload";

export default function AdminProducts() {
  return (
    <>
      {/* add new product */}
      <div className="add-new-product__wrapper mt-12">
        <h2 className="add-new-product__title text-[26px] font-bold">
          اضافه کردن محصول جدید
        </h2>
        <div className="inputs-wrapper grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 mt-12">
          <div className="name-input__wrapper">
            <FormInput type={"text"} title={"اسم محصول"} required={true} />
          </div>
          <div className="category-input__wrapper">
            <FormInput
              type={"text"}
              title={"دسته بندی محصول"}
              required={true}
            />
          </div>
          <div className="price-input__wrapper">
            <FormInput type={"text"} title={"قیمت محصول"} required={true} />
          </div>
          <div className="email-input__wrapper">
            <FormInput
              type={"file"}
              accept={"image/png, image/jpg, image/jpeg"}
              style={"relative flex justify-between text-[14px] w-full"}
              inputStyle={"opacity-0 z-50 absolute inset-0"}
              title={"انتخاب تصویر"}
              required={true}
            >
              لطفا تصویر مورد نظر را انتخاب کنید (JPEG,JPG,PNG)
              <UploadIcon />
            </FormInput>
          </div>
        </div>
        <button
          type="button"
          className="bg-purple mt-2 px-6 py-2 text-[14px] shadow-box hover:shadow-boxHover rounded-3xl"
        >
          اضافه کردن
        </button>
        {/* products */}

        <div className="table-wrapper mt-8 mr-2">
          <h3 className="table-title text-[26px] font-bold text-right">
            کاربران
          </h3>
          <div className="table-div">
            <table className="hidden sm:table w-full border-collapse mx-auto bg-secondary rounded-xl mt-8">
              <thead>
                <tr>
                  <th className="py-4">عکس محصول</th>
                  <th className="py-4">اسم محصول</th>
                  <th className="py-4">قیمت محصول</th>
                  <th className="py-4">دسته بندی</th>
                  <th className="py-4">درصد تخفیف</th>
                  <th className="py-4">اکشن ها</th>
                </tr>
              </thead>
              <tbody>
                <tr className="text-center">
                  <td className="py-4 flex items-center justify-center">
                    <img src="/images/games/Forza.webp" className="w-[50px] rounded-md" alt="" />
                  </td>
                  <td className="py-4">فورزا هورایزن 5</td>
                  <td className="py-4">70,000 تومان</td>
                  <td className="py-4">بازی های استیم</td>
                  <td className="py-4">50%</td>
                  <td className="flex items-center gap-x-4 justify-center py-4 -translate-y-[15px]">
                    <EditIcon
                      titleAccess="ویرایش"
                      className="hover:text-purple transition-all cursor-pointer"
                    />
                    <DeleteIcon
                      titleAccess="حذف محصول"
                      className="hover:text-purple transition-all cursor-pointer"
                    />
                  </td>
                </tr>
                
              </tbody>
            </table>
            {/* products (mobile and tablet size) */}
            <div className="mobile-table__wrapper mt-8 flex sm:hidden justify-between">
              <div className="mobile-table__right-section">
                <ul className="mobile-table__list flex flex-col gap-y-8">
                
                  <li className="mobile-table__list-item">عکس محصول</li>
                  <li className="mobile-table__list-item">اسم محصول</li>
                  <li className="mobile-table__list-item">قیمت محصول</li>
                  <li className="mobile-table__list-item">دسته بندی</li>
                  <li className="mobile-table__list-item">درصد تخفیف</li>
                  <li className="mobile-table__list-item">اکشن ها</li>
                </ul>
              </div>
              <div className="mobile-table__left-section text-center text-[#ffffff99]">
                <ul className="mobile-table__list flex flex-col gap-y-8">
                  <li className="mobile-table__list-item mx-auto">
                  <img src="/images/games/Forza.webp" className="w-[50px] rounded-md -mt-[1.5rem]" alt="" />
                  </li>
                  <li className="mobile-table__list-item ">فورزا هورایزن 5</li>
                  <li className="mobile-table__list-item ">70,000 تومان</li>
                  <li className="mobile-table__list-item ">بازی های استیم</li>
                  <li className="mobile-table__list-item ">50%</li>
                  <li className="mobile-table__list-item flex items-center justify-center gap-x-2  flex-wrap">
                    <EditIcon
                      titleAccess="ویرایش"
                      className="cursor-pointer hover:text-purple transition-all"
                    />
                    
                    <DeleteIcon
                      titleAccess="حذف محصول"
                      className="cursor-pointer hover:text-purple transition-all"
                    />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
