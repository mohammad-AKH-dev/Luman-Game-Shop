export default function Address() {
  return (
    <div className="my-account__address-wrapper">
      <p className="text-[#ffffff99] mt-4">
        آدرس‌های زیر به طور پیش‌فرض در صفحه پرداخت مورد استفاده قرار می‌گیرد.
      </p>
      <div className="adresses-wrapper flex items-center justify-center gap-y-12 xs2:gap-y-0 xs2:justify-between mt-8 flex-wrap ">
        <div className="bill-address flex  flex-col gap-y-4">
          <h2 className="bill-address__title text-[26px] font-bold">آدرس صورتحساب</h2>
          <h4 className="add-bill__address-title font-bold cursor-pointer hover:text-[#777] 
          transition-all">افزودن آدرس صورتحساب</h4>
          <span className="text-[#ffffff99] font-secondaryBold">
            شما هنوز این آدرس را ثبت نکرده‌اید.
          </span>
        </div>
        <div className="transportation-address flex  flex-col gap-y-4">
          <h2 className="transportation-address__title text-[26px] font-bold">آدرس حمل و نقل</h2>
          <h4 className="add-transportation__address-title font-bold cursor-pointer hover:text-[#777] 
          transition-all">افزودن آدرس حمل و نقل</h4>
          <span className="text-[#ffffff99] font-secondaryBold">
            شما هنوز این آدرس را ثبت نکرده‌اید.
          </span>
        </div>
      </div>
    </div>
  );
}
