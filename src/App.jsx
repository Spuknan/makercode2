import { Main } from './components/Main/Main';
import Navbar from './components/Navbar/Navbar';
import CartProvider from './components/context/CartContext';

function App() {
   return (
      <CartProvider>
         <>
            <Navbar />
            <Main />
         </>
      </CartProvider>
   )
}

export default App;
