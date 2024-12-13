import Topbar from './Topbar'
import Navbar from './Navbar'
import Landing from './Landing'
import Sidebar from '../Menu/Sidebar'
export default function Header() {
  return (
    <header className='header mb-[10rem]'>
      <Topbar/>
      <Navbar/>
      <Sidebar/>
      <Landing/>
    </header>
  )
}
