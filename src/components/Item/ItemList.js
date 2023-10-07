import { Link } from "react-router-dom";

const ProductList = ({ productListData }) => {
  return (
    <div>
      <h3>Productos</h3>
      <div className='product-grid'>
        {productListData.map((product) => (
          <div className='product-card' key={product.id}>
            <div className='product-image'>
              <img src={product.image} alt={product.name} />
            </div>
            <div className='product-details'>
              <h1 className='product-title'>{product.name}</h1>
              <p className='product-category'>{product.category}</p>
              <p className='product-price'>{product.price}</p>
              <Link to={`/product/${product.id}`}>Ver detalles</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
