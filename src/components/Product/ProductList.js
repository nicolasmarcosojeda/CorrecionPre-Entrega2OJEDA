import React, { useState } from 'react';
import ItemCount from '../Itemcount/ItemCount';
import img1 from '../../components/Public/botines/nike/mercurial/mercurial1.JPEG';
import img2 from '../../components/Public/botines/nike/mercurial/mercurial2.JPEG';
import img3 from '../../components/Public/botines/nike/mercurial/mercurial3.JPEG';
import img4 from '../../components/Public/botines/adidas/adidascopa/adidascopa1.jpg';
import img5 from '../../components/Public/botines/adidas/adidascopa/adidascopa2.jpg';
import img6 from '../../components/Public/botines/adidas/adidascopa/adidascopa3.jpg';
import img7 from '../../components/Public/botines/puma/future/future1.jpg';
import img8 from '../../components/Public/botines/puma/future/future2.jpg';
import img9 from '../../components/Public/botines/puma/future/future3.jpg';

const productListData = [
  {
    id: 1,
    name: 'Nike Air Zoom Superfly SG Gold',
    category: 'Superfly',
    price: '$94.875,00',
    image: img1,
  },
  {
    id: 2,
    name: 'Nike Zoom Mercurial Superfly 9',
    category: 'Superfly',
    price: '$85.500,00',
    image: img2,
  },
  {
    id: 3,
    name: 'Nike Mercurial Air Zoom Green',
    category: 'Superfly',
    price: '$78.775,00',
    image: img3,
  },
  {
    id: 4,
    name: 'Adidas Copa Sense LL Black',
    category: 'Copa',
    price: '$90.275,00',
    image: img4,
  },
  {
    id: 5,
    name: 'Adidas Copa Sense LL Al Rihla',
    category: 'Copa',
    price: '$90.275,00',
    image: img5,
  },
  {
    id: 6,
    name: 'Adidas Copa Sense LL White/Red',
    category: 'Copa',
    price: '$90.275,00',
    image: img6,
  },
  {
    id: 7,
    name: 'Puma Future Ultra Grey/Orange',
    category: 'Future',
    price: '$74.520,00',
    image: img7,
  },
  {
    id: 8,
    name: 'Puma Future Ultra White/Golden',
    category: 'Future',
    price: '$87.170,00',
    image: img8,
  },
  {
    id: 9,
    name: 'Puma Future Ultra White/Golden',
    category: 'Future',
    price: '$84.500,00',
    image: img9,
  },
];

const ProductList = () => {
  const [cart, setCart] = useState([]);

  const handleAddToCart = (product, quantity) => {
    const updatedCart = [...cart];
    const existingProduct = updatedCart.find((item) => item.product.id === product.id);

    if (existingProduct) {
      existingProduct.quantity += quantity;
    } else {
      updatedCart.push({ product, quantity });
    }

    setCart(updatedCart);
    console.log(updatedCart);
  };

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
              <ItemCount stock={10} initial={1} onAdd={(quantity) => handleAddToCart(product, quantity)} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
