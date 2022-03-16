import axios from "axios";
import { useEffect } from "react";
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
//redux
 
//Modificar para pedir datos al servidor
function App() {
  useEffect(()=>{
    axios.get('http://192.168.2.241:8080/taste-it/public/')//Aqui se piden todas las ofertas para luego modificarlas en redux
    .then(res => console.log(res))
    .catch(e => console.log("Error: "+e))
  },[])

  return (
    <div>
      <Appbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/chef" element={<Chef />} />
        <Route path="/menu" element={<MenuSection />} />
        <Route path="/reservation" element={<Reservation />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
