import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListConstainer from './components/ItemListContainer/ItemListContainer';
import ProductCard from './components/ProductCard/Carts';

function App() {
  const products = [
    {
      imageUrl: "./CartWitged/asset/botines/nike/1.jpeg",
      productName: "Botines Modelo MERCURIAL",
      price: "$109.99",
      description: "Descripción del producto",
    },
    {
      imageUrl: "./CartWitged/asset/botines/nike/2.jpeg",
      productName: "Botines Modelo MERCURIAL",
      price: "$109.99",
      description: "Descripción del producto",
    },
    {
      imageUrl: "./CartWitged/asset/botines/nike/3.jpeg",
      productName: "Botines Modelo MERCURIAL",
      price: "$109.99",
      description: "Descripción del producto",
    },
    // Agregar más objetos de productos
  ];

  return (
    <div className="App">
      <NavBar />
      <ItemListConstainer greating={'Bienvenidos'}/>

      <div className="welcome-section">
        <p>Explora nuestra amplia selección de botines de fútbol y encuentra el par perfecto para ti.</p>
      </div>
      <ProductCard products={products} />
    </div>
  );
}

export default App;

