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
import Favorite from "./pages/Favorite";
import NothingFav from "./pages/NothingFav";
import Contribute from "./pages/Contribute";
import Thanks from "./pages/Thanks";
import Detail from "./pages/Detail";
import DetailTicket from "./pages/DetailTicket";
function App(){
  render(
    <BrowserRouter>
    <Navbars/>
      <Routes>
        
        <Route path="/" element={<Beranda />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Beranda" element={<Beranda />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Contribute" element={<Contribute />} />
        <Route path="/Webinar" element={<Webinar />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/NotFound" element={<NotFound />} />
        <Route path="/Profile" element={<Profil />} />     
        <Route path="/Favorite" element={<Favorite />} />     
        <Route path="/Nofav" element={<NothingFav />} />     
        <Route path="/Thanks" element={<Thanks />} />     
        <Route path="/Detail" element={<Detail />} />
        <Route path="/DetailTicket" element={<DetailTicket/>} />     
      </Routes>
      <Footer/>
    </BrowserRouter>,
    document.getElementById("root")
  );
}


export default App;