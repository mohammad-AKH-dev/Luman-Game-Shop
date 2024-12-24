import { Link, useParams } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Header/Navbar";
import Topbar from "../components/Header/Topbar";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { useEffect, useState } from "react";
import FormInput from "../components/Forminput";
import Sidebar from "../components/Menu/Sidebar";


export default function Account() {
  const [showLoginPassword, setShowLoginPassword] = useState(false);
  const [isChechked, setIsChecked] = useState(false);
  let params = useParams()
  
  

  useEffect(() => {
    document.title = "ورود / ثبت نام";
    
  }, [params]);

  return (
    <>
      <Topbar />
      <Navbar />
      <Sidebar/>
      <div className="account-page__title-wrapper text-center bg-secondary p-8 mt-4 lg:mt-0">
        <h2 className="account-page__title text-[34px] font-bold mb-2">
          حساب کاربری
        </h2>
        <div className="account-page__links-wrapper text-[14px] flex items-center justify-center">
          <Link to={"/"} className="text-inherit text-[14px]">
            صفحه اصلی
          </Link>
          <span className="text-[#ffffffb3] text-[14px]">/</span>
          <span className="text-[#ffffffb3] text-[14px]">حساب کاربری</span>
        </div>
      </div>
      <div className="forms-wrapper overflow-x-hidden p-4 container mt-8 flex relative justify-center gap-12 flex-wrap xs:flex-nowrap">
        <form className="login-form w-full xs:w-[45%]">
          <h3 className="login-forn__title text-[26px] font-bold mb-8">ورود</h3>
          <FormInput
            style={"bg-secondary"}
            type={'text'}
            title={"نام کاربری یا آدرس ایمیل"}
            inputStyle={'bg-secondary'}
            required={true}
          />
          <FormInput
            style={"bg-secondary"}
            type={!showLoginPassword ? "password" : "text"}
            title={"گذرواژه"}
            inputStyle={'bg-secondary'}
            required={true}
          >
            {!showLoginPassword ? (
              <>
                <VisibilityIcon
                  className="absolute left-2 top-2 text-[#ffffff3b] text-[18px] cursor-pointer
              transition-all delay-100 hover:text-[#ffffff59]"
                  onClick={() => setShowLoginPassword(true)}
                />
              </>
            ) : (
              <>
                <VisibilityOffIcon
                  className="absolute left-2 top-2 text-[#ffffff3b] text-[18px] cursor-pointer 
              transition-all delay-100 hover:text-[#ffffff59]"
                  onClick={() => setShowLoginPassword(false)}
                />
              </>
            )}
          </FormInput>
          <div className="Forgot&&Checkbox-wrapper flex items-center justify-between flex-wrap sm:flex-nowrap gap-y-2 sm:gap-y-0">
            <div className="checkbox-btn__wrapaper flex items-center gap-2">
              <input
                type="checkbox"
                checked={isChechked}
                onClick={(event) => setIsChecked(event.target.checked)}
              />
              <span className="text-[14px] text-[#FFFFFF99]">
                مرا به خاطر بسپار
              </span>
            </div>
            <Link to={'/'} className="text-purple text-[16px]">گذرواژه خود را فراموش کرده اید؟</Link>
          </div>
          <button type="submit" className="mt-5 pt-2 pb-3 rounded-3xl px-5 shadow-box hover:shadow-boxHover bg-purple">ورود</button>
        </form>
        <span className="text-[#ffffff59] 
         after:w-[1px] after:mt-2 after:mx-auto after:h-[180px] before:w-[1px] before:mb-2 before:mx-auto
         before:h-[180px] relative before:bg-[#7773] before:block after:block 
         after:absolute xs:after:static before:absolute before:right-[7.7rem] after:left-[7.7rem] after:-bottom-[5rem]
          before:-bottom-[5.5rem] xs:before:static
         after:rotate-90 before:rotate-90 xs:after:rotate-0 xs:before:rotate-0  after:bg-[#7773]">یا</span>
        <form action="#" className="register-form w-full xs:w-[45%]">
          <h3 className="register-forn__title text-[26px] font-bold mb-8">عضویت</h3>
          <FormInput
            style={"bg-secondary"}
            title={"نام کاربری "}
            type={'text'}
            required={true}
            inputStyle={'bg-secondary'}
          />
          <FormInput
            style={"bg-secondary"}
            title={"آدرس ایمیل"}
            type={'email'}
            required={true}
            inputStyle={'bg-secondary'}
          />
          <FormInput
            style={"bg-secondary"}
            type={!showLoginPassword ? "password" : "text"}
            title={"گذرواژه"}
            required={true}
            inputStyle={'bg-secondary'}
          >
            {!showLoginPassword ? (
              <>
                <VisibilityIcon
                  className="absolute left-2 top-2 text-[#ffffff3b] text-[18px] cursor-pointer
              transition-all delay-100 hover:text-[#ffffff59]"
                  onClick={() => setShowLoginPassword(true)}
                />
              </>
            ) : (
              <>
                <VisibilityOffIcon
                  className="absolute left-2 top-2 text-[#ffffff3b] text-[18px] cursor-pointer 
              transition-all delay-100 hover:text-[#ffffff59]"
                  onClick={() => setShowLoginPassword(false)}
                />
              </>
            )}
          </FormInput>
          
          <button type="submit" className="mt-5 pt-2 pb-3 rounded-3xl px-5 shadow-box hover:shadow-boxHover bg-purple">عضویت</button>
        </form>
      </div>
       
      <Footer />
    </>
  );
}
