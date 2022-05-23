import axios from "axios";
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router";
//components
import Appbar from "./Components/Appbar";
import Footer from "./Components/Footer";
import About from "./Routes/About";
import Chef from "./Routes/Chef";
import Contact from "./Routes/Contact";
import Home from "./Routes/Home";
import MenuSection from "./Routes/MenuSection";
import Reservation from "./Routes/Reservation";
import { useDispatch } from "react-redux";
import { SET_OFFERS } from "./Redux/OffersSlice";
import Error404 from "./Components/Error404";

window.urlServer = '/'
 
function App() {
  const dispatch = useDispatch();
  const [loadingInfo, setLoadingInfo] = useState(false)

  useEffect(()=>{
    axios.get(window.urlServer+'offer')
    .then(res => {
      setLoadingInfo(false)
      dispatch(SET_OFFERS(res.data))
    })
    .catch(e => console.log("Error: "+e))
  },[])

  return (
    <div>
      <Appbar />
      {
        loadingInfo?
          <div id="ftco-loader" className="show fullscreen">
            <svg className="circular" width="48px" height="48px">
              <circle className="path-bg" cx="24" cy="24" r="22" fill="none" strokeWidth="4" stroke="#eeeeee"/><circle className="path" cx="24" cy="24" r="22" fill="none" strokeWidth="4" strokeMiterlimit="10" stroke="#F96D00"/>
            </svg>
          </div>
        :
        null
      }
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/chef" element={<Chef />} />
        <Route path="/menu" element={<MenuSection />} />
        <Route path="/reservation" element={<Reservation />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
