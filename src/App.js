import './App.scss';
import Home from './pages/Home';
import Servizi from './pages/Servizi';
import Header from './components/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';



function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Servizi" element={<Servizi />} />
          <Route path="/Contatti" element={<Servizi />} />
          <Route path="/Blog" element={<Servizi />} />
          <Route path="/Abbonamenti" element={<Servizi />} />
          <Route path="/Account" element={<Servizi />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
