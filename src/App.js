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
          <Route path="/Account" element={<Servizi />} />
          <Route path="/Informazioni/:nome/:id" element={<DettagliSeduta />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
