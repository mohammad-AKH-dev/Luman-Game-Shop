import MainArticleBox from "../components/Box/MainArticleBox";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Header/Navbar";
import Topbar from "../components/Header/Topbar";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link } from "react-router-dom";
import Sidebar from "../components/Menu/Sidebar";
import MenusSidebar from "../components/Menu/MenusSidebar";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

export default function Articles() {

   const params = useParams()
  
    useEffect(() => {
      document.title = 'مقالات'
    },[params])

  return (
    <>
      <Topbar/>
      <Navbar/>
      <Sidebar/>
      <MenusSidebar/>
      <section className="articles-section mt-16">
         <div className="container grid grid-cols-1 sm1:grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-6">
            <MainArticleBox/>
            <MainArticleBox/>
            <MainArticleBox/>
            <MainArticleBox/>
         </div>
         <div className="pagination-wrapper mt-16 flex flex-wrap items-center justify-center gap-8">
             <ArrowForwardIcon className="cursor-pointer"/>
             <Link to={'/articles'} className="px-4 py-2 rounded-md transition-all delay-100">
              <span>3</span>
             </Link>
             <Link to={'/articles'} className="px-4 py-2 rounded-md transition-all delay-100">
              <span>2</span>
             </Link>
             <Link to={'/articles'} className="px-4 py-2 rounded-md bg-purple hover:bg-violet-500 transition-all delay-100">
              <span>1</span>
             </Link>
             <ArrowBackIcon className="cursor-pointer"/>
          </div>
      </section>
      <Footer/>
    </>
  )
}
