import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
// import your route components too
import Home from "./pages/Home"
import Beranda from "./pages/Beranda"
import NotFound from "./pages/NotFound"
import Profil from "./pages/Profil"
import Login from "./pages/Login"
import Register from "./pages/Register";
import Navbars from "./components/Navbars";
import Webinar from "./pages/Webinar";
import Footer from "./components/Footer";
function App(){
  render(
    <BrowserRouter>
    <Navbars/>
      <Routes>
        
        <Route path="/" element={<Beranda />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Beranda" element={<Beranda />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Webinar" element={<Webinar />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/NotFound" element={<NotFound />} />
        <Route path="/Profil" element={<Profil />} />     
      </Routes>
      <Footer/>
    </BrowserRouter>,
    document.getElementById("root")
  );
}


export default App;