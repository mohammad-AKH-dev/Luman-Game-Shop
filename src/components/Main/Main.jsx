import Advertising from "./Advertising";
import Categories from "./Categories";
import Discount from "./Discount";
import MostSoldGames from "./MostSoldGames";
import PlayStationGamesSlider from "./PlayStationGamesSlider";
import PremiuemAccounts from "./PremiuemAccounts";

export default function Main() {
  return (
    <main className="bg-primary">
      
       <MostSoldGames/>
       <PlayStationGamesSlider/>
       <Categories/>
       <Discount/>
       <PremiuemAccounts/>
       <Advertising/>
    </main>
  )
}
