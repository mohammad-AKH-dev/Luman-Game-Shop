import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-router-dom";
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import FormInput from "../Forminput";
import { useContext, useState } from "react";
import MyContext from "../../contexts/context";

export default function Sidebar() {
  const [showPassword,setShowPassword] = useState(false)
  const context = useContext(MyContext)

  return (
    <div className={`sidebar-wrapper transition-all delay-500 duration-150  ${context.showSidebar? 'fixed' : 'none'} w-full backdrop-blur-sm backdrop-brightness-50 top-0 right-0 left-0  h-full z-40`}>
      <div className={`form-sidebar h-full absolute top-0 transition-all duration-200 delay-0  ${context.showSidebar ? 'right-0' : '-right-[500px]'} bg-primary px-4 py-6`}>
        <div className="form-sidebar__title flex items-center justify-between">
          <h6 className="text-[20px] font-bold">ورود</h6>
          <CloseIcon className="text-[#777] cursor-pointer" onClick={() => context.handleHideSidebar()} />
        </div>
        <form action="#" className={`login-form ${context.showSidebar ? 'opacity-100 visible' : 'opacity-0 invisible'} border-y border-y-[#ffffff3b] py-4 my-6`}>
         <FormInput type={'text'} title={'نام کاربری یا ایمیل'}  required={true}/>
         <FormInput type={!showPassword ? 'password' : 'text'} title={'گذرواژه'} required={true}>
          {
            !showPassword ? (
              <>
             <VisibilityIcon className="absolute left-2 top-2 text-[#ffffff3b] text-[18px] cursor-pointer
              transition-all delay-100 hover:text-[#ffffff59]" onClick={() => setShowPassword(true)}/>
            </> 
            ) : (
               <>
              <VisibilityOffIcon className="absolute left-2 top-2 text-[#ffffff3b] text-[18px] cursor-pointer 
              transition-all delay-100 hover:text-[#ffffff59]" onClick={() => setShowPassword(false)}/>
              </>
            )
          }
         </FormInput>
          <div className="checkbox-btn__wrapper flex items-center gap-2">
            <input type="checkbox" />
            <span className="text-[14px]">مرا به خاطر بسپار</span>
          </div>
          <div className="form-Links flex flex-col mt-4 gap-4">
            <Link to={"/"} className="text-[14px]">گذرواژه خود را فراموش کرده اید؟</Link>
            <button type="submit" className="text-[14px] pt-2 pb-3 px-6 rounded-3xl shadow-box hover:shadow-boxHover bg-purple 
            w-fit flex items-center justify-center">ورود</button>
          </div>
        </form>
        <div className="register-user__wrapper flex items-center justify-center flex-col gap-6 border-b border-b-[#ffffff3b] pb-8">
          <div className="perscon__icon-wrapper max-w-[273px] h-[85px]">
          <PersonAddIcon className="w-full h-full text-[#ffffff80]"/>
          </div>
          <span className="text-[#ffffff] font-bold -mt-4">هنوز حسابی ندارید؟</span>
          <Link to={'/account'} className="px-4 py-2 text-[14px] rounded-3xl bg-purple shadow-box hover:shadow-boxHover max-w-[200]">یک حساب کاربری ایجاد کنید</Link>
        </div>
      </div>
    </div>
  );
}
