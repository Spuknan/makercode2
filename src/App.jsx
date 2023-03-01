import { BrowserRouter, Routes, Route} from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Carrito from './components/Carrito/Carrito';
import Nosotros from './components/Nosotros/Nosotros';
import MakerPlace from './components/MakerPlace/MakerPlace';
import Tienda from './components/Tienda/Tienda';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import './main.css';

function App() {
   return (
      <BrowserRouter>
         <Navbar />
         <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/Nosotros" element={<Nosotros />} />
            <Route exact path="/Tienda" element={<Tienda />} />
            <Route exact path="/MakerPlace" element={<MakerPlace />} />
            <Route exact path="/Carrito" element={<Carrito />} />
         </Routes>
      </BrowserRouter>
   );
}

export default App;
