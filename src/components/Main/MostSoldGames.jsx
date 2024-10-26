import MostSoledGameBox from "../Box/MostSoledGameBox";

export default function MostSoldGames() {
  return (
    <div className="grid grid-cols-1 xs2:grid-cols-2 lg:grid-cols-3 pt-10 gap-8">
      <MostSoledGameBox price={110000}/>
      <MostSoledGameBox price={110000}/>
      <MostSoledGameBox price={90000} discount={110000}/>
      <MostSoledGameBox price={110000}/>
      <MostSoledGameBox price={110000}/>
      <MostSoledGameBox price={110000}/>
    </div>
  )
}
