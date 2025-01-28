import { useParams, useRoutes } from "react-router-dom";
import routes from "./routes";
import MyContext from "./contexts/context";
import { useEffect, useState } from "react";

export default function App() {
  const router = useRoutes(routes);
  const [showSidebar,setShowSidebar] = useState(false)
  const [showMobileMenus,setShowMobileMenus] = useState(false)
 

  useEffect(() => {
     handleHideSidebar()
     window.scrollTo(0,0)
  },[window.location.hash])

  const handleShowSidebar = () => {
    setShowSidebar(true)
  }

  const handleHideSidebar = () => {
    setShowSidebar(false)
  }

  return <MyContext.Provider value={{
    showSidebar,
    handleShowSidebar,
    handleHideSidebar,
    showMobileMenus,
    setShowMobileMenus
  }}>
       {router}
  </MyContext.Provider>;
}
