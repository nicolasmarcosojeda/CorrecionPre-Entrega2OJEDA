import React from 'react';
import { BrowserRouter as Router, Route, Routes, } from 'react-router-dom';
import NavBar from './components/Header/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Product from './components/Product/ProductList';
import ProductDetails from './components/Product/ProductDetails';
import Body from './components/Body';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer greeting={'Bienvenido'} />} />
          <Route path="/productos" element={<Product />} />
          <Route path="/products/:id" element={<ProductDetails />} />
          {/* Agrega más rutas según sea necesario */}
        </Routes>
        <Body />
        <Product />
        <div className="welcome-section">
          <p>Explora nuestra amplia selección de botines de fútbol y encuentra el par perfecto para ti.</p>
        </div>
      </div>
    </Router>
  );
}

export default App;
