import GameBox from "./Box/GameBox";


export default function RelatedProducts() {
  return (
    <>
    <section className="related-products__section mt-12 ">
      <h4 className="related-products__title font-bold text-[26px]">محصولات مرتبط</h4>
       <div className="related-products__wrapper grid grid-cols-1 sm1:grid-cols-2 xs2:grid-cols-3 
       mt-10 gap-y-10 lg:grid-cols-4 place-items-center sm1:gap-x-6">
      <GameBox title={'اسپایدرمن'} price={90000} discount={80000}/>
      <GameBox title={'اسپایدرمن'} price={70000}/>
      <GameBox title={'اسپایدرمن'} price={40000} discount={70000}/>
      <GameBox title={'اسپایدرمن'} price={20000}/>
       </div>
    </section>
    </>
  )
}
