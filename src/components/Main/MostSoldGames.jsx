import MostSoledGameBox from "../Box/MostSoledGameBox";
import SectionHeader from "../sectionHeader/SectionHeader";

export default function MostSoldGames() {
  return (
    <>
    <SectionHeader title={'پرفروش ترین ها'}/>
    <div className="most-sold__games grid grid-cols-1 xs2:grid-cols-2 lg:grid-cols-3 pt-10 gap-8">
      <MostSoledGameBox price={110000}/>
      <MostSoledGameBox price={110000}/>
      <MostSoledGameBox price={90000} discount={110000}/>
      <MostSoledGameBox price={110000}/>
      <MostSoledGameBox price={110000}/>
      <MostSoledGameBox price={110000}/>
    </div>
    </>
  )
}
