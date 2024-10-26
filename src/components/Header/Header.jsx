import Topbar from './Topbar'
import Navbar from './Navbar'
import Landing from './Landing'
export default function Header() {
  return (
    <header className='mb-[10rem]'>
      <Topbar/>
      <Navbar/>
      <Landing/>
    </header>
  )
}
