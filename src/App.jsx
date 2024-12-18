import { useRoutes } from "react-router-dom";
import routes from "./routes";
import MyContext from "./contexts/context";
import { useEffect, useState } from "react";

export default function App() {
  const router = useRoutes(routes);
  const [showSidebar,setShowSidebar] = useState(false)

  useEffect(() => {
     handleHideSidebar()
  },[window.location.pathname])

  const handleShowSidebar = () => {
    setShowSidebar(true)
  }

  const handleHideSidebar = () => {
    setShowSidebar(false)
  }

  return <MyContext.Provider value={{
    showSidebar,
    handleShowSidebar,
    handleHideSidebar
  }}>
       {router}
  </MyContext.Provider>;
}
