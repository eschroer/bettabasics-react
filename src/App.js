
import Navbar from './components/Navbar'
import './App.css';
import './components/Style.css'
import AccordionComponent from './components/Accordion';
import CarouselComponent from './components/Carousel'
import Instructions from './components/Instructions';
import PlantCards from './components/Cards';
import Footer from './components/Footer';

function App() {
  return (
    <>
        <Navbar/>
        <AccordionComponent/>
        <CarouselComponent/>
        <Instructions />
        <PlantCards/>
        <Footer/>
    </>
  );
}

export default App;
