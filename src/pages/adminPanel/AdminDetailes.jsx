import FormInput from "../../components/Forminput";
import UploadIcon from "@mui/icons-material/Upload";

export default function AdminDetailes() {
  return (
    <div className="admin-informations mt-12">
      <h2 className="admin-informations__title text-[26px] font-bold">
        اطلاعات حساب ادمین
      </h2>
      <div className="admin-informations__inputs grid grid-cols-1 xs2:grid-cols-2 gap-x-8 mt-6">
        <div className="name-input__wrapper">
          <FormInput
            type={"text"}
            title={"نام و نام خانوادگی"}
            required={true}
            
          />
        </div>
        <div className="username-input__wrapper">
          <FormInput
            type={"text"}
            title={"نام کاربری"}
            required={true}
           
          />
        </div>
        <div className="name-input__wrapper">
          <FormInput
            type={"email"}
            title={"ایمیل"}
            required={true}
           
          />
        </div>
        <div className="name-input__wrapper">
          <FormInput
            type={"text"}
            title={"شماره تلفن"}
            required={true}
            
          />
        </div>
        <div className="name-input__wrapper">
          <FormInput
            type={"text"}
            title={"رمز عبور"}
            required={true}
            
          />
        </div>
        <div className="name-input__wrapper">
          <FormInput
            type={"text"}
            title={"سمت شغلی"}
            required={true}
            placeholder={'... Frontend Developer for example'}
          />
        </div>
        <div className="file-input__wrapper">
            <FormInput
              type={"file"}
              accept={"image/png, image/jpg, image/jpeg"}
              style={"relative flex justify-between text-[14px] w-full"}
              inputStyle={"opacity-0 z-50 absolute inset-0 cursor-pointer"}
              title={"انتخاب پروفایل"}
              required={true}
            >
              لطفا تصویر مورد نظر را انتخاب کنید (JPEG,JPG,PNG)
              <UploadIcon />
            </FormInput>
          </div>
        
      </div>
      <button type="button" className="px-4 py-3 mt-6 bg-purple shadow-box hover:shadow-boxHover rounded-3xl">ویرایش اطلاعات</button>
    </div>
  );
}
