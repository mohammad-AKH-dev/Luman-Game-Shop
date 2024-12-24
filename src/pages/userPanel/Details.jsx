import { useState } from "react";
import FormInput from "../../components/Forminput";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

export default function Details() {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <>
      <form action="#" className="my-account__details-form mt-4">
        <div className="name-inputs__wrapper flex flex-wrap xs2:flex-nowrap">
          <FormInput
            title={"نام"}
            type={"text"}
            style={"w-full bg-secondary mr-[.3rem]"}
            inputStyle={"w-full bg-secondary"}
            labelMargin={'-mt-[1.5rem]'}
            required={true}
          />
          <FormInput
            title={"نام خانوادگی"}
            type={"text"}
            style={"w-full bg-secondary"}
            inputStyle={"w-full bg-secondary"}
            labelMargin={'mt-[.5rem] xs2:-mt-[1.5rem] whitespace-nowrap'}
            required={true}
          />
        </div>
        <div className="shown-name__input-wrapper mt-8 mb-12">
          <FormInput
            title={"نام نمایشی"}
            style={"w-full bg-secondary"}
            inputStyle={"w-full bg-secondary"}
            labelMargin={'-mt-[1.5rem]'}
            type={"text"}
            required={true}
          />
          <p className="-mt-4 italic text-[#ffffff99]">
            اسم شما به این صورت در حساب کاربری و نظرات دیده خواهد شد.
          </p>
        </div>
        <FormInput
          title={"آدرس ایمیل"}
          style={"w-full bg-secondary"}
          inputStyle={"w-full bg-secondary"}
          type={"email"}
          required={true}
        />
        <div className="my-account__password-details mt-12 w-full border p-12 relative border-[#7773] rounded-sm">
          <h3 className="my-account__password-details__title font-bold bg-primary absolute -top-5 rounded-3xl px-4 pt-2 pb-3 w-fit">
            تغییر گذرواژه
          </h3>
          <FormInput
            type={!showPassword ? "password" : "text"}
            title={"گذرواژه پیشین (در صورتی که قصد تغییر ندارید خالی بگذارید)"}
            style={" bg-secondary"}
            inputStyle={"w-[95%] bg-secondary"}
          >
            {!showPassword ? (
              <>
                <VisibilityIcon
                  className="absolute left-2 top-2 text-[#ffffff3b] text-[18px] cursor-pointer
              transition-all delay-100 hover:text-[#ffffff59]"
                  onClick={() => setShowPassword(true)}
                />
              </>
            ) : (
              <>
                <VisibilityOffIcon
                  className="absolute left-2 top-2 text-[#ffffff3b] text-[18px] cursor-pointer 
              transition-all delay-100 hover:text-[#ffffff59]"
                  onClick={() => setShowPassword(false)}
                />
              </>
            )}
          </FormInput>
          <FormInput
            type={!showPassword ? "password" : "text"}
            style={" bg-secondary"}
            title={"گذرواژه جدید (در صورتی که قصد تغییر ندارید خالی بگذارید)"}
            inputStyle={"w-[95%] bg-secondary"}
          >
            {!showPassword ? (
              <>
                <VisibilityIcon
                  className="absolute left-2 top-2 text-[#ffffff3b] text-[18px] cursor-pointer
              transition-all delay-100 hover:text-[#ffffff59]"
                  onClick={() => setShowPassword(true)}
                />
              </>
            ) : (
              <>
                <VisibilityOffIcon
                  className="absolute left-2 top-2 text-[#ffffff3b] text-[18px] cursor-pointer 
              transition-all delay-100 hover:text-[#ffffff59]"
                  onClick={() => setShowPassword(false)}
                />
              </>
            )}
          </FormInput>
          <FormInput
            type={!showPassword ? "password" : "text"}
            title={"تکرار گذرواژه جدید"}
            style={" bg-secondary"}
            inputStyle={"w-[95%] bg-secondary"}
          >
            {!showPassword ? (
              <>
                <VisibilityIcon
                  className="absolute left-2 top-2 text-[#ffffff3b] text-[18px] cursor-pointer
              transition-all delay-100 hover:text-[#ffffff59]"
                  onClick={() => setShowPassword(true)}
                />
              </>
            ) : (
              <>
                <VisibilityOffIcon
                  className="absolute left-2 top-2 text-[#ffffff3b] text-[18px] cursor-pointer 
              transition-all delay-100 hover:text-[#ffffff59]"
                  onClick={() => setShowPassword(false)}
                />
              </>
            )}
          </FormInput>
        </div>
        <button type="submit" className="px-4 pt-2 pb-3 bg-purple rounded-3xl mt-8 shadow-box hover:shadow-boxHover">ذخیره تغییرات</button>
      </form>
    </>
  );
}
