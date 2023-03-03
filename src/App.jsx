import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Carrito from './components/Carrito/Carrito';
import Nosotros from './components/Nosotros/Nosotros';
import MakerPlace from './components/MakerPlace/MakerPlace';
import { ItemDetail } from './components/Item/ItemDetail'
import { ItemListContainer } from './components/Item/ItemListContainer'
import './main.css';

function App() {
   return (
      <BrowserRouter>
         <Navbar />
         <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/Nosotros" element={<Nosotros />} />
            <Route exact path="/MakerPlace" element={<MakerPlace />} />
            <Route exact path="/Carrito" element={<Carrito />} />
            <Route exact path='/producto/:productoId' element={<ItemDetail />} />
            <Route exact path='/productos' element={<ItemListContainer />} />
            <Route exact path='/productos/:categoria' element={<ItemListContainer />} />
         </Routes>
      </BrowserRouter>
   );
}

export default App;