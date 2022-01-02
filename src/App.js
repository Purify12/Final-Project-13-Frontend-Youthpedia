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
function App(){
  render(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Beranda />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/NotFound" element={<NotFound />} />
        <Route path="/Profil" element={<Profil />} />     
      </Routes>
    </BrowserRouter>,
    document.getElementById("root")
  );
}


export default App;