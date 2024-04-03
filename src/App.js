import './App.scss';
import styled from "styled-components";
import Header from './components/Header';
import CarouselSlide from './components/CarouselSlider';
import Servizi from './pages/Servizi';


function App() {
  return (
    <>
      <Header/>
      <CarouselSlide />
      <Servizi/>
    </>
  );
}

export default App;
