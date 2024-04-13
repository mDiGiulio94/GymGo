//
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//Pagine e Componenti
import Contatti from "./pages/Contatti";
import Home from "./pages/Home";
import Servizi from "./pages/Servizi";
import Header from "./components/Header";

//Style
import "./App.scss";
import DettagliSeduta from "./pages/DettagliSeduta";
import Promozioni from "./pages/Promozioni";
import PromozioneScelta from "./components/PromozioneScelta";
import Promozione from "./pages/Promozione";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Servizi" element={<Servizi />} />
          <Route path="/Contatti" element={<Contatti />} />
          <Route path="/Blog" element={<Servizi />} />
          <Route path="/Abbonamenti" element={<Servizi />} />
          <Route path="/Promozioni" element={<Promozioni />} />
          <Route path="/Account" element={<Servizi />} />
          <Route path="/Informazioni/:nome/:id" element={<DettagliSeduta />} />
          <Route path="/PromozioneScelta/:periodo/:id" element={<Promozione /> }/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
