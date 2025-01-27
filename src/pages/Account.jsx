import { Link, useParams } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Header/Navbar";
import Topbar from "../components/Header/Topbar";
import { useForm } from "react-hook-form";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { useEffect, useState } from "react";
import FormInput from "../components/Forminput";
import Sidebar from "../components/Menu/Sidebar";

export default function Account() {
  const [showLoginPassword, setShowLoginPassword] = useState(false);
  const {
    register: registerLogin,
    handleSubmit: handleSubmitLogin,
    formState: { errors: loginErrors ,},
  } = useForm();
  const {
    register: registerRegister,
    handleSubmit: handleSubmitRegister,
    formState: { errors: registerErrors },
    
  } = useForm();
  const [isRegisterButtonDisabled,setIsRegisterButtonDisabled] = useState(false)
  const [isLoginButtonDisabled,setIsLoginButtonDisabled] = useState(false)

  let params = useParams();

  const submitRegisterForm = (data) => {
    console.log(data,registerErrors);
    if(data && !registerErrors.length){
      setIsRegisterButtonDisabled(true)
      alert('با موفقیت ثبت نام شدید')
      setTimeout(() => {
        setIsRegisterButtonDisabled(false)
      },3000)
    }
  };

  const submitLoginForm = (data) => {
    console.log(data);
    if(data && !loginErrors.length){
      setIsLoginButtonDisabled(true)
      alert('با موفقیت لاگین شدید')
      setTimeout(() => {
        setIsLoginButtonDisabled(false)
      },3000)
    }
  };

  useEffect(() => {
    document.title = "ورود / ثبت نام";
  }, [params]);


  return (
    <>
      <Topbar />
      <Navbar />
      <Sidebar />
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
        <form
          className="login-form w-full xs:w-[45%]"
          onSubmit={handleSubmitLogin(submitLoginForm)}
        >
          <h3 className="login-forn__title text-[26px] font-bold mb-8">ورود</h3>
          <FormInput
            style={"bg-secondary"}
            type={"text"}
            title={"نام کاربری یا آدرس ایمیل"}
            inputStyle={"bg-secondary"}
            required={true}
            register={{
              ...registerLogin("username", {
                required: "وارد کردن نام کاربری یا ایمیل ضروری است.",
                minLength: {
                  value: 3,
                  message: "نام کاربری یا ایمیل باید حداقل 3 کاراکتر باشد.",
                },
                maxLength: {
                  value: 35,
                  message: "نام کاربری یا ایمیل باید حداکثر 30 کاراکتر باشد.",
                },
              }),
            }}
          />
          {loginErrors.username && (
            <p className="username-error text-[12px] text-red-500 mb-2 -mt-2">
              {loginErrors.username.message}
            </p>
          )}
          <FormInput
            style={"bg-secondary"}
            type={!showLoginPassword ? "password" : "text"}
            title={"گذرواژه"}
            inputStyle={"bg-secondary"}
            required={true}
            register={{
              ...registerLogin("password", {
                required: "وارد کردن پسوورد ضروری است. ",
                minLength: {
                  value: 8,
                  message: "پسوورد باید حداقل 8 کاراکتر باشد.",
                },
                maxLength: {
                  value: 15,
                  message: "پسوورد باید حداکثر 15 کاراکتر باشد.",
                },
              }),
            }}
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
          {loginErrors.password && (
            <p className="password-error text-[12px] text-red-500 mb-2 -mt-2">
              {loginErrors.password.message}
            </p>
          )}
          <div className="Forgot&&Checkbox-wrapper flex items-center justify-between flex-wrap sm:flex-nowrap gap-y-2 sm:gap-y-0">
            <div className="checkbox-btn__wrapaper flex items-center gap-2">
              <input
                type="checkbox"
                {...registerLogin("saveUser", {
                  required: false,
                })}
              />
              <span className="text-[14px] text-[#FFFFFF99]">
                مرا به خاطر بسپار
              </span>
            </div>
            <Link to={"/"} className="text-purple text-[16px]">
              گذرواژه خود را فراموش کرده اید؟
            </Link>
          </div>
          <button
            type="submit"
            className={`${isLoginButtonDisabled ? 'opacity-50' : 'opacity-100'} mt-5 pt-2 pb-3 rounded-3xl px-5 shadow-box hover:shadow-boxHover bg-purple`}
            disabled={isLoginButtonDisabled}
          >
            ورود
          </button>
        </form>
        <span
          className="text-[#ffffff59] 
         after:w-[1px] after:mt-2 after:mx-auto after:h-[180px] before:w-[1px] before:mb-2 before:mx-auto
         before:h-[180px] relative before:bg-[#7773] before:block after:block 
         after:absolute xs:after:static before:absolute before:right-[7.7rem] after:left-[7.7rem] after:-bottom-[5rem]
          before:-bottom-[5.5rem] xs:before:static
         after:rotate-90 before:rotate-90 xs:after:rotate-0 xs:before:rotate-0  after:bg-[#7773]"
        >
          یا
        </span>
        <form
          action="#"
          className="register-form w-full xs:w-[45%]"
          onSubmit={handleSubmitRegister(submitRegisterForm)}
        >
          <h3 className="register-forn__title text-[26px] font-bold mb-8">
            عضویت
          </h3>
          <FormInput
            style={"bg-secondary"}
            title={"نام کاربری "}
            type={"text"}
            required={true}
            inputStyle={"bg-secondary"}
            register={{
              ...registerRegister("username", {
                required: "وارد کردن نام کاربری ضروری است.",
                minLength: {
                  value: 3,
                  message: "نام کاربری باید حداقل 3 کاراکتر باشد.",
                },
                maxLength: {
                  value: 35,
                  message: "نام کاربری  باید حداکثر 30 کاراکتر باشد.",
                },
              }),
            }}
          />
          {registerErrors.username && (
            <p className="username-error text-[12px] text-red-500 mb-2 -mt-2">
              {registerErrors.username.message}
            </p>
          )}
          <FormInput
            style={"bg-secondary"}
            title={"آدرس ایمیل"}
            type={"email"}
            required={true}
            inputStyle={"bg-secondary"}
            register={{
              ...registerRegister("email", {
                required: "وارد کردن ایمیل ضروری است.",
                minLength: {
                  value: 3,
                  message: "ایمیل باید حداقل 3 کاراکتر باشد.",
                },
                maxLength: {
                  value: 35,
                  message: "ایمیل باید حداکثر 30 کاراکتر باشد.",
                },

                pattern: {
                  value: /[\w._\-*$]+@\w{5}.com/g,
                  message: "فرمت ایمیل :example@gmail.com",
                },
              }),
            }}
          />
          {registerErrors.email && (
            <p className="email-error text-[12px] text-red-500 mb-2 -mt-2">
              {registerErrors.email.message}
            </p>
          )}
          <FormInput
            style={"bg-secondary"}
            type={!showLoginPassword ? "password" : "text"}
            title={"گذرواژه"}
            required={true}
            inputStyle={"bg-secondary"}
            register={{
              ...registerRegister("password", {
                required: "وارد کردن پسوورد ضروری است.",
                minLength: {
                  value: 8,
                  message: "پسوورد باید حداقل 8 کاراکتر باشد.",
                },
                maxLength: {
                  value: 15,
                  message: "پسوورد باید حداکثر 15 کاراکتر باشد.",
                },
              }),
            }}
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
          {registerErrors.password && (
            <p className="password-error text-[12px] text-red-500 mb-2 -mt-2">
              {registerErrors.password.message}
            </p>
          )}

          <button
            type="submit"
            className={` ${isRegisterButtonDisabled ? 'opacity-50' : 'opacity-100'} mt-5 pt-2 pb-3 rounded-3xl px-5 shadow-box hover:shadow-boxHover bg-purple`}
            
            disabled={isRegisterButtonDisabled}
          >
            عضویت
          </button>
        </form>
      </div>

      <Footer />
    </>
  );
}
