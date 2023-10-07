import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h4>Categorías</h4>
            <ul className="list-unstyled">
              <li>
                <Link to="/products/category/nike" className="text-light">Nike</Link>
              </li>
              <li>
                <Link to="/products/category/adidas" className="text-light">Adidas</Link>
              </li>
              <li>
                <Link to="/products/category/puma" className="text-light">Puma</Link>
              </li>
              {/* Agrega más categorías según sea necesario */}
            </ul>
          </div>
          <div className="col-md-4">
            <h4>Enlaces útiles</h4>
            <ul className="list-unstyled">
              <li>
                <Link to="/informacion" className="text-light">Información</Link>
              </li>
              {/* Agrega más enlaces útiles según sea necesario */}
            </ul>
          </div>
          <div className="col-md-4">
            <h4>Redes Sociales</h4>
            <ul className="list-unstyled">
              <li>
                <a href="https://www.facebook.com/tu-facebook" className="text-light">Facebook</a>
              </li>
              <li>
                <a href="https://www.twitter.com/tu-twitter" className="text-light">Twitter</a>
              </li>
              {/* Agrega más enlaces a tus redes sociales */}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
