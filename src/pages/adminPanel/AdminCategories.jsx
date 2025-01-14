import FormInput from "../../components/Forminput";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useState } from "react";

export default function AdminCategories() {
  const [showMainCategories, setIsShowMainCategories] = useState("child");
  return (
    <>
      <div className="add-new-category__wrapper mt-12">
        <h2 className="add-new-category__title text-[26px] font-bold">
          اضافه کردن دسته بندی جدید
        </h2>
        <div className="inputs-wrapper grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 mt-12">
          <FormControl>
            <FormLabel
              id="demo-row-radio-buttons-group-label"
              className="radio-group__title text-[#ffffff99] mb-4"
            >
              نوع دسته بندی
            </FormLabel>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
            >
              <FormControlLabel
                value="parent"
                control={
                  <Radio
                    sx={{ color: "#ffffff99" }}
                    onChange={(event) =>
                      setIsShowMainCategories(event.target.value)
                    }
                  />
                }
                label="پرنت(والد)"
              />
              <FormControlLabel
                value="child"
                control={
                  <Radio
                    sx={{ color: "#ffffff99" }}
                    onChange={(event) =>
                      setIsShowMainCategories(event.target.value)
                    }
                  />
                }
                label="فرزند"
                checked={showMainCategories === 'child' && true}
              />
            </RadioGroup>
          </FormControl>
          <div className="name-input__wrapper">
            <FormInput type={"text"} title={"دسته بندی جدید"} required={true} />
          </div>
          {showMainCategories === "child" && (
            <div className="product-input__wrapper">
              <FormInput
                inputStyle={"hidden"}
                title={"محصولات"}
                required={true}
              >
                <select
                  defaultValue={"-1"}
                  className="bg-primary outline-none border-none appearance-none w-full text-center"
                >
                  <option value="-1">لطفا یک پرنت را انتخاب کنید</option>
                  <option value="Frontend">فرانت اند</option>
                  <option value="Game">گیم</option>
                  <option value="Movies">فیلم و سریال</option>
                </select>
              </FormInput>
            </div>
          )}
        </div>
        <button
          type="button"
          className="bg-purple mt-2 px-6 py-2 text-[14px] shadow-box hover:shadow-boxHover rounded-3xl"
        >
          اضافه کردن
        </button>
      </div>
      <div className="table-wrapper mt-8 mr-2">
        <h3 className="table-title text-[26px] font-bold text-right">
          دسته بندی ها
        </h3>
        <div className="table-div">
          <table className="hidden sm:table w-full border-collapse mx-auto bg-secondary rounded-xl mt-8">
            <thead>
              <tr>
                <th className="py-4">دسته بندی</th>
                <th className="py-4">دسته بندی اصلی (پرنت)</th>
                <th className="py-4">تاریخ ساخت دسته بندی</th>
                <th className="py-4">اکشن ها</th>
              </tr>
            </thead>
            <tbody>
              <tr className="text-center">
                <td className="py-4">بازی های پلی استیشن</td>
                <td className="py-4">گیم</td>
                <td className="py-4">2025-02-23</td>
                <td className="flex items-center gap-x-4 justify-center py-4">
                  <EditIcon
                    titleAccess="ویرایش دسته بندی "
                    className="hover:text-purple transition-all cursor-pointer"
                  />
                  <DeleteIcon
                    titleAccess="حذف دسته بندی"
                    className="hover:text-purple transition-all cursor-pointer"
                  />
                </td>
              </tr>
            </tbody>
          </table>
          {/* users (mobile and tablet size) */}
          <div className="mobile-table__wrapper mt-8 flex sm:hidden justify-between">
            <div className="mobile-table__right-section">
              <ul className="mobile-table__list flex flex-col gap-y-8">
                <li className="mobile-table__list-item">دسته بندی</li>
                <li className="mobile-table__list-item">
                  دسته بندی اصلی (پرنت)
                </li>
                <li className="mobile-table__list-item">
                  تاریخ ساخت دسته بندی
                </li>
                <li className="mobile-table__list-item">اکشن ها</li>
              </ul>
            </div>
            <div className="mobile-table__left-section text-center text-[#ffffff99]">
              <ul className="mobile-table__list flex flex-col gap-y-8">
                <li className="mobile-table__list-item">بازی های پلی استیشن</li>
                <li className="mobile-table__list-item">گیم</li>
                <li className="mobile-table__list-item">2025-02-23</li>
                <li className="mobile-table__list-item flex items-center justify-center gap-x-2 flex-wrap">
                  <EditIcon
                    titleAccess="ویرایش دسته بندی"
                    className="hover:text-purple transition-all cursor-pointer"
                  />
                  <DeleteIcon
                    titleAccess="حذف دسته بندی"
                    className="hover:text-purple transition-all cursor-pointer"
                  />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
