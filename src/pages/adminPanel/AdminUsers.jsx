import FormInput from "../../components/Forminput";
import EditIcon from '@mui/icons-material/Edit';
import BlockIcon from '@mui/icons-material/Block';
import DeleteIcon from '@mui/icons-material/Delete';
import LockResetIcon from '@mui/icons-material/LockReset';

export default function AdminUsers() {
  return (
    <>
    {/* add new user section */}
      <div className="add-new-user__wrapper mt-12">
        <h2 className="add-new-user__title text-[26px] font-bold">اضافه کردن کاربر جدید</h2>
        <div className="inputs-wrapper grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 mt-12">
            <div className="name-input__wrapper">
                <FormInput type={'text'} title={'نام و نام خانوادگی'} required={true} placeholder={'رضا شکوهی...'}/>
            </div>
            <div className="username-input__wrapper">
                <FormInput type={'text'} title={'نام کاربری'} required={true}/>
            </div>
            <div className="phone-input__wrapper">
                <FormInput type={'text'} title={'شماره تلفن'} required={true}/>
            </div>
            <div className="email-input__wrapper">
                <FormInput type={'email'} title={'ایمیل'} required={true} placeholder={'shokuhi232@gmail.com...'}/>
            </div>
            <div className="password-input__wrapper">
                <FormInput type={'password'} title={'رمز عبور'} required={true}/>
            </div>
            <div className="user-role-input__wrapper">
                <FormInput inputStyle={'hidden'}  title={'نقش کاربر'} required={true}>
                    <select defaultValue={'-1'} className="bg-primary outline-none border-none appearance-none w-full text-center">
                      <option value="-1">لطفا یک گزینه را انتخاب کنید</option>
                      <option value="user">کاربر</option>
                      <option value="admin">مدیر</option>
                    </select>
                </FormInput>
            </div>
        </div>
            <button type="button" className="bg-purple mt-2 px-6 py-2 text-[14px] shadow-box hover:shadow-boxHover rounded-3xl">اضافه کردن</button>
            </div>
        {/* users desktop size*/}
        <div className="table-wrapper mt-8 mr-2">
            <h3 className="table-title text-[26px] font-bold text-right">کاربران</h3>
            <div className="table-div">
            <table className="hidden sm:table w-full border-collapse mx-auto bg-secondary rounded-xl mt-8">
               <thead>
                <tr>
                  <th className="py-4">نام و نام خانوادگی</th>
                  <th className="py-4">نام کاربری</th>
                  <th className="py-4">ایمیل</th>
                  <th className="py-4">تاریخ ورود</th>
                  <th className="py-4">اکشن ها</th>
                </tr>
               </thead>
               <tbody>
               
                <tr className="text-center">
                  <td className="py-4">محمد اصلانی</td>
                  <td className="py-4">aslani001</td>
                  <td className="py-4">aslani@gmail.com</td>
                  <td className="py-4">1401-02-23</td>
                  <td className="flex items-center gap-x-4 justify-center py-4">
                   <EditIcon titleAccess="ویرایش" className="hover:text-purple transition-all cursor-pointer"/>
                   <LockResetIcon titleAccess="بازیابی رمز عبور" className="cursor-pointer hover:text-purple transition-all"/>
                   <BlockIcon titleAccess="مسدود کردن کاربر" className="hover:text-purple transition-all cursor-pointer"/>
                   <DeleteIcon titleAccess="حذف کاربر" className="hover:text-purple transition-all cursor-pointer"/>
                  </td>
                </tr>

               </tbody>
            </table>
            {/* users (mobile and tablet size) */}
            <div className="mobile-table__wrapper mt-8 flex sm:hidden justify-between">
              <div className="mobile-table__right-section">
                <ul className="mobile-table__list flex flex-col gap-y-8">
                  <li className="mobile-table__list-item">نام و نام خانوادگی:</li>
                  <li className="mobile-table__list-item">نام کاربری:</li>
                  <li className="mobile-table__list-item">ایمیل:</li>
                  <li className="mobile-table__list-item">تاریخ ورود:</li>
                  <li className="mobile-table__list-item">بلک لیست</li>
                  <li className="mobile-table__list-item">اکشن ها:</li>
                </ul>
              </div>
              <div className="mobile-table__left-section text-center text-[#ffffff99]">
                <ul className="mobile-table__list flex flex-col gap-y-8">
                  <li className="mobile-table__list-item">محمد اصلانی</li>
                  <li className="mobile-table__list-item">aslani001</li>
                  <li className="mobile-table__list-item">aslani@gmail.com</li>
                  <li className="mobile-table__list-item">1401-02-23</li>
                  <li className="mobile-table__list-item">خیر</li>
                  <li className="mobile-table__list-item flex items-center justify-center gap-x-2 flex-wrap">
                    <EditIcon titleAccess="ویرایش" className="cursor-pointer hover:text-purple transition-all"/>
                    <LockResetIcon titleAccess="بازیابی رمز عبور" className="cursor-pointer hover:text-purple transition-all"/>
                    <BlockIcon titleAccess="مسدود کردن کاربر" className="cursor-pointer hover:text-purple transition-all"/>
                    <DeleteIcon  titleAccess="حذف کاربر" className="cursor-pointer hover:text-purple transition-all"/>
                  </li>
                </ul>
              </div>
            </div>
            </div>
          </div>
      
    </>
  )
}
