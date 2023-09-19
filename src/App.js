import React from 'react';
import { BrowserRouter as Router, Route, Routes, } from 'react-router-dom';
import NavBar from './components/Header/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Body from './components/Body';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Informacion from './components/Body/Informacion';


function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Body />
        <Routes>
          <Route path="/" element={<ItemListContainer/>} />
          <Route path="/productos" element={<ItemListContainer />} />
          <Route path="/product/:id" element={<ItemDetailContainer />} />
          <Route path="/informacion" element={<Informacion />} />
          {/* Agrega más rutas según sea necesario */}
        </Routes>
        <div className="welcome-section">
          <p>Explora nuestra amplia selección de botines de fútbol y encuentra el par perfecto para ti.</p>
        </div>
      </div>
    </Router>
  );
}

export default App;
