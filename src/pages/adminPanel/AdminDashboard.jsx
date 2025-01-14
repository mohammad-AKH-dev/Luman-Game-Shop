import { BarChart } from "@mui/x-charts/BarChart";
import { PieChart } from "@mui/x-charts/PieChart";
import EditIcon from '@mui/icons-material/Edit';
import BlockIcon from '@mui/icons-material/Block';
import DeleteIcon from '@mui/icons-material/Delete';

export default function AdminDashboard() {
  return (
    <>
        {/* charts */}
        <div className="charts-wrapper flex flex-col lg:flex-row items-center ">
            <BarChart
              xAxis={[
                { scaleType: "band", data: ["فروردین", "اردیبهشت", "خرداد"] },
              ]}
              series={[
                { data: [4, 3, 5] },
                { data: [1, 6, 3] },
                { data: [2, 5, 6] },
              ]}
              className="text-[#fff]"
              height={300}
            />
            <PieChart
              series={[
                {
                  data: [
                    { id: 0, value: 10, label: "فروردین" },
                    { id: 1, value: 15, label: "اردیبهشت" },
                    { id: 2, value: 20, label: "خرداد" },
                  ],
                },
              ]}
              height={200}
            />
          </div>
          <div className="table-wrapper mt-8 mr-2">
            <h3 className="table-title text-[26px] font-bold text-right">کاربران اخیر</h3>
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
                   <EditIcon className="hover:text-purple transition-all cursor-pointer"/>
                   <BlockIcon className="hover:text-purple transition-all cursor-pointer"/>
                   <DeleteIcon className="hover:text-purple transition-all cursor-pointer"/>
                  </td>
                </tr>

               </tbody>
            </table>
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
                    <EditIcon className="cursor-pointer hover:text-purple transition-all"/>
                    <BlockIcon className="cursor-pointer hover:text-purple transition-all"/>
                    <DeleteIcon className="cursor-pointer hover:text-purple transition-all"/>
                  </li>
                </ul>
              </div>
            </div>
            </div>
          </div>
    </>
  )
}
