import SectionHeader from "../sectionHeader/SectionHeader";
import MostSoldGames from "./MostSoldGames";

export default function Main() {
  return (
    <main className="bg-primary">
       <div className="container">
       <SectionHeader title={'پر فروش ترین ها'}/>
       <MostSoldGames/>
       </div>
    </main>
  )
}
