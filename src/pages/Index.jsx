import Header from "../components/Header/Header";
import Main from "../components/Main/Main";
import Footer from "../components/Footer/Footer";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
export default function Index() {
  const params = useParams()

  useEffect(() => {
    document.title = 'فروشگاه بازی لومان'
  },[params])

  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
}
