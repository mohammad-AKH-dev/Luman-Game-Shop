import GameBox from "./Box/GameBox";
import ShopGameBox from "./Box/ShopGameBox";

export default function RelatedProducts() {
  return (
    <>
    <section className="related-products__section mt-12 ">
      <h4 className="related-products__title font-bold text-[26px]">محصولات مرتبط</h4>
       <div className="related-products__wrapper grid grid-cols-1 sm1:grid-cols-2 xs2:grid-cols-3 lg:grid-cols-4 place-items-center gap-x-6">
      <ShopGameBox title={'اسپایدرمن'} price={90000} discount={80000} percent={10}/>
      <ShopGameBox title={'اسپایدرمن'} price={70000}/>
      <ShopGameBox title={'اسپایدرمن'} price={40000} discount={70000} percent={20}/>
      <ShopGameBox title={'اسپایدرمن'} price={20000}/>
       </div>
    </section>
    </>
  )
}
