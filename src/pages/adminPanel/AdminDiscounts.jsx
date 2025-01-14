import FormInput from "../../components/Forminput";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import EditIcon from "@mui/icons-material/Edit";

import DeleteIcon from "@mui/icons-material/Delete";

import { useState } from "react";

export default function AdminDiscounts() {
  const [isShowCategories, setIsShowCategories] = useState("all");
  return (
    <>
      {/* make new discount */}
      <div className="add-new-product__wrapper mt-12">
        <h2 className="add-new-product__title text-[26px] font-bold">
          اعمال کد تخفیف
        </h2>
        <div className="inputs-wrapper grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-8 mt-12">
          <FormControl>
            <FormLabel
              id="demo-row-radio-buttons-group-label"
              className="radio-group__title text-[#ffffff99] mb-4"
            >
              نوع تخفیف
            </FormLabel>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
            >
              <FormControlLabel
                value="all"
                control={
                  <Radio
                    sx={{ color: "#ffffff99" }}
                    onChange={(event) =>
                      setIsShowCategories(event.target.value)
                    }
                  />
                }
                label="همگانی"
              />
              <FormControlLabel
                value="special"
                control={
                  <Radio
                    sx={{ color: "#ffffff99" }}
                    onChange={(event) =>
                      setIsShowCategories(event.target.value)
                    }
                  />
                }
                label="محصول خاص"
              />
            </RadioGroup>
          </FormControl>
          <div className="discount-input__wrapper">
            <FormInput type={"text"} title={"درصد تخفیف"} required={true} />
          </div>
          <div className="discount-input__wrapper">
            <FormInput type={"text"} title={"اعتبار کد تخفیف"} required={true} />
          </div>
          {isShowCategories === "special" && (
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
                  <option value="-1">لطفا یک محصول را انتخاب کنید</option>
                  <option value="ّForza">فورزا هورایزن 5</option>
                  <option value="Red Dead 2">رد دد ردمپشن 2</option>
                  <option value="The Witcher 3">ویچر 3</option>
                </select>
              </FormInput>
            </div>
          )}
        </div>
        <button
          type="button"
          className="bg-purple mt-12 px-6 py-2 text-[14px] shadow-box hover:shadow-boxHover rounded-3xl"
        >
          اعمال کد تخفیف
        </button>
      </div>
      {/* discounts */}
      <div className="table-wrapper mt-8 mr-2">
        <h3 className="table-title text-[26px] font-bold text-right">
          کد های تخفیف
        </h3>
        <div className="table-div">
          <table className="hidden sm:table w-full border-collapse mx-auto bg-secondary rounded-xl mt-8">
            <thead>
              <tr>
                <th className="py-4">کد تخفیف</th>
                <th className="py-4">درصد کد تخفیف</th>
                <th className="py-4">اعتبار کد تخفیف</th>
                <th className="py-4">محصول تخفیف خورده (در صورت وجود)</th>
                <th className="py-4">اکشن ها</th>
              </tr>
            </thead>
            <tbody>
              <tr className="text-center">
                <td className="py-4">Forza-50</td>
                <td className="py-4">50%</td>
                <td className="py-4">2025-02-23</td>
                <td className="py-4">فورزا هورایزن 5</td>
                <td className="flex items-center gap-x-4 justify-center py-4">
                  <EditIcon
                    titleAccess="ویرایش کد تخفیف"
                    className="hover:text-purple transition-all cursor-pointer"
                  />
                  <DeleteIcon
                    titleAccess="حذف کد تخفیف"
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
                <li className="mobile-table__list-item">کد تخفیف</li>
                <li className="mobile-table__list-item">درصد کد تخفیف</li>
                <li className="mobile-table__list-item">اعتبار کد تخفیف</li>
                <li className="mobile-table__list-item">محصول تخفیف خورده (در صورت وجود)</li>
                <li className="mobile-table__list-item">اکشن ها:</li>
              </ul>
            </div>
            <div className="mobile-table__left-section text-center text-[#ffffff99]">
              <ul className="mobile-table__list flex flex-col gap-y-8">
                <li className="mobile-table__list-item">forza-50</li>
                <li className="mobile-table__list-item">50%</li>
                <li className="mobile-table__list-item">2025-02-23</li>
                <li className="mobile-table__list-item">فورزا هواریزن 5</li>
                <li className="mobile-table__list-item flex items-center justify-center gap-x-2 flex-wrap">
                  <EditIcon
                    titleAccess="ویرایش کد تخفیف"
                    className="hover:text-purple transition-all cursor-pointer"
                  />
                  <DeleteIcon
                    titleAccess="حذف کد تخفیف"
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
