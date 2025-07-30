import { useRoutes } from "react-router-dom";
import routes from "./routes";
import { useEffect, useState } from "react";
import ContextProvider from "./contexts/context";

export default function App() {
  const router = useRoutes(routes);
  const [showSidebar, setShowSidebar] = useState(false);

  useEffect(() => {
    handleHideSidebar();
    window.scrollTo(0, 0);
  }, [window.location.hash]);

  const handleHideSidebar = () => {
    setShowSidebar(false);
  };

  return <ContextProvider>{router}</ContextProvider>;
}
