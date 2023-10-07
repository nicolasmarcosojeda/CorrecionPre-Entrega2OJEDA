import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Body from './components/Body';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Informacion from './components/Body/Informacion';
import { CartProvider } from './components/Context/CartContext';
import Cart from './components/Cart/Cart';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <div className="App">
          <NavBar />
          <Body />
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/products/category/:category" element={<ItemListContainer />} />
            <Route path="/product/:id" element={<ItemDetailContainer />} />
            <Route path="/informacion" element={<Informacion />} />
            <Route path='/cart' element={<Cart/>} />
          
            {/* Agrega más rutas según sea necesario */}
          </Routes>
          <Footer />
        </div>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
