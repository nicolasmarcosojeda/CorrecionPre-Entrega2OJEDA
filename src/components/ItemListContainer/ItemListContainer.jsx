import React, { useEffect, useState } from 'react';
import { getall } from '../../mocks/servicesData';
import ProductList from '../Item/ItemList';
import { useParams } from 'react-router-dom';


const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const { category } = useParams();

  useEffect(() => {
    setLoading(true);
    getall()
      .then((res) => {
        if (category) {
          setProducts(res.filter((item) => item.category === category));
        } else {
          setProducts(res);
        }
      })
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }, [category]);

  return (
    <div>
      <h2>{category ? category : 'Todos'}</h2>
      {loading ? (
        <p>Cargando productos...</p>
      ) : (
        <ProductList productListData={products} />
      )}
    </div>
  );
};

export default ItemListContainer;
