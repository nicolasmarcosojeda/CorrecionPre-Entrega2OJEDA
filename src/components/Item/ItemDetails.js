import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemCount from '../Itemcount/ItemCount';


const ProductDetailsData = {
  1: {
    id: 1,
    name: 'Nike Air Zoom Superfly SG Gold',
    category: 'Nike',
    price: '$94.875,00',
    image: '/botines/nike/mercurial/mercurial1.jpeg',
    sizes: ['39 ARG 7 US 40 EURO','40 ARG 8 US 41 EURO','41 ARG 8,5 US 42 EURO','42 ARG 9 US 43 EURO'],
    description: 'Estos botines de fútbol Nike Air Zoom Superfly SG Gold son una elección perfecta para los jugadores que buscan velocidad y comodidad en el campo. Con su diseño elegante y su tecnología de última generación, te ayudarán a dar lo mejor de ti en cada partido. La parte superior suave y resistente proporciona un ajuste ceñido y un toque preciso, mientras que la suela con tacos te brinda una tracción excepcional en terrenos suaves. ¡Eleva tu juego con estos increíbles botines Nike!',
    stock: '15',
  },
  2: {
    id: 2,
    name: 'Nike Zoom Mercurial Superfly 9',
    category: 'Nike',
    price: '$85.500,00',
    image: '/botines/nike/mercurial/mercurial2.jpeg',
    sizes: ['39 ARG 7 US 40 EURO','40 ARG 8 US 41 EURO','41 ARG 8,5 US 42 EURO','42 ARG 9 US 43 EURO'],
    description: 'Los botines de fútbol Nike Zoom Mercurial Superfly 9 son ideales para jugadores que buscan velocidad y agilidad en el campo. Su diseño aerodinámico y su tecnología de vanguardia te permiten moverte rápidamente y controlar el balón con precisión. La parte superior ligera y transpirable te brinda comodidad durante todo el partido, y la suela con tacos proporciona una excelente tracción en terrenos variados.',
    stock: '15',
  },
  3: {
    id: 3,
    name: 'Nike Mercurial Air Zoom Green',
    category: 'Nike',
    price: '$78.775,00',
    image: '/botines/nike/mercurial/mercurial3.jpeg',
    sizes: ['39 ARG 7 US 40 EURO','40 ARG 8 US 41 EURO','41 ARG 8,5 US 42 EURO','42 ARG 9 US 43 EURO'],
    description: 'Los botines de fútbol Nike Mercurial Air Zoom Green son perfectos para jugadores que desean velocidad y estilo en el campo. Su diseño llamativo en verde te destacará en el terreno de juego, mientras que la tecnología de amortiguación Air Zoom te proporciona una sensación de comodidad y respuesta. La suela con tacos proporciona tracción en terrenos firmes y suaves. ¡Domina el campo con estos botines de alto rendimiento!',
    stock: '15',
  },
  4: {
    id: 4,
    name: 'Adidas Copa Sense LL Black',
    category: 'Adidas',
    price: '$90.275,00',
    image: '/botines/adidas/adidascopa/adidascopa1.jpg',
    sizes: ['39 ARG 7 US 40 EURO','40 ARG 8 US 41 EURO','41 ARG 8,5 US 42 EURO','42 ARG 9 US 43 EURO'],
    description: 'Los botines de fútbol Adidas Copa Sense LL Black ofrecen un toque excepcional y un ajuste personalizado para jugadores de todos los niveles. La parte superior de cuero suave y la tecnología de control de balón te brindan precisión en cada pase y disparo. La suela con tacos proporciona tracción en terrenos firmes y naturales. ¡Eleva tu juego con la calidad y el estilo de Adidas!',
    stock: '15',
  },
  5: {
    id: 5,
    name: 'Adidas Copa Sense LL Al Rihla',
    category: 'Adidas',
    price: '$90.275,00',
    image: '/botines/adidas/adidascopa/adidascopa2.jpg',
    sizes: ['39 ARG 7 US 40 EURO','40 ARG 8 US 41 EURO','41 ARG 8,5 US 42 EURO','42 ARG 9 US 43 EURO'],
    description: 'Los botines de fútbol Adidas Copa Sense LL Al Rihla son la elección perfecta para jugadores que buscan comodidad y control en el campo. Con un diseño elegante y una parte superior de cuero suave, ofrecen un ajuste excepcional y un toque preciso. La suela con tacos te proporciona tracción en terrenos firmes y naturales. ¡Domina el juego con estos botines de calidad!',
    stock: '15',
  },
  6: {
    id: 6,
    name: 'Adidas Copa Sense LL White/Red',
    category: 'Adidas',
    price: '$90.275,00',
    image: '/botines/adidas/adidascopa/adidascopa3.jpg',
    sizes: ['39 ARG 7 US 40 EURO','40 ARG 8 US 41 EURO','41 ARG 8,5 US 42 EURO','42 ARG 9 US 43 EURO'],
    description: 'Los botines de fútbol Adidas Copa Sense LL White/Red son ideales para jugadores que buscan un toque de estilo y precisión en el campo. Su diseño elegante en blanco y rojo te destacará, mientras que la parte superior de cuero suave te brinda un ajuste ceñido y un control excepcional del balón. La suela con tacos proporciona tracción en terrenos firmes y naturales. ¡Juega con confianza con estos botines de calidad!',
    stock: '15',
  },
  7: {
    id: 7,
    name: 'Puma Future Ultra Grey/Orange',
    category: 'Puma',
    price: '$74.520,00',
    image: '/botines/puma/future/future1.jpg',
    sizes: ['39 ARG 7 US 40 EURO','40 ARG 8 US 41 EURO','41 ARG 8,5 US 42 EURO','42 ARG 9 US 43 EURO'],
    description: 'Los botines de fútbol Puma Future Ultra Grey/Orange están diseñados para jugadores que buscan velocidad y agilidad en el campo. Su diseño en gris y naranja es llamativo, y la tecnología de amortiguación te brinda comodidad durante todo el partido. La suela con tacos te proporciona tracción en terrenos variados. ¡Domina el campo con estos botines de alto rendimiento!',
    stock: '15',
  },
  8: {
    id: 8,
    name: 'Puma Future Ultra White/Golden',
    category: 'Puma',
    price: '$87.170,00',
    image: '/botines/puma/future/future2.jpg',
    sizes: ['39 ARG 7 US 40 EURO','40 ARG 8 US 41 EURO','41 ARG 8,5 US 42 EURO','42 ARG 9 US 43 EURO'],
    description: 'Los botines de fútbol Puma Future Ultra White/Golden ofrecen estilo y rendimiento en el campo. Su diseño en blanco y dorado es elegante, y la tecnología de amortiguación te brinda comodidad durante todo el partido. La suela con tacos proporciona tracción en terrenos variados. ¡Juega con confianza y estilo con estos botines Puma!',
    stock: '15',
  },
  9: {
    id: 9,
    name: 'Puma Future Ultra White/Golden',
    category: 'Puma',
    price: '$84.500,00',
    image: '/botines/puma/future/future3.jpg',
    sizes: ['39 ARG 7 US 40 EURO','40 ARG 8 US 41 EURO','41 ARG 8,5 US 42 EURO','42 ARG 9 US 43 EURO'],
    description: 'Los botines de fútbol Puma Future Ultra White/Golden son ideales para jugadores que buscan comodidad y estilo en el campo. Con su diseño elegante en blanco y dorado, destacarás en el terreno de juego. La tecnología de amortiguación te brinda comodidad durante todo el partido, y la suela con tacos proporciona tracción en terrenos variados. ¡Eleva tu juego con estos botines Puma de calidad!',
    stock: '15',
  },
};

const ProductDetails = () => {
  const { id } = useParams();
  const productId = parseInt(id);
  const product = ProductDetailsData[productId];

  
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
  const [sizeOptionsVisible, setSizeOptionsVisible] = useState(false);

  

  const toggleSizeOptions = () => {
    setSizeOptionsVisible(!sizeOptionsVisible);
  };

  return (
    <div className='product-details'>
      <h1 className='product-title'>{product.name}</h1>
      <p className='product-category'>{product.category}</p>
      <p className='product-price'>{product.price}</p>
      <img
        src={product.image}
        alt={product.name}
        style={{ maxWidth: '350px', maxHeight: '350px' }} 
      />
      <p className='product-description'>{product.description}</p>

      {/* Pestaña de selección de tallas */}
      <div className='size-selection'>
        <h2>Talle:</h2>
        <div className={`size-options ${sizeOptionsVisible ? 'visible' : ''}`}>
          {product.sizes.map((size) => (
            <button
              key={size}
              onClick={() => {
                setSelectedSize(size); // Asegúrate de actualizar el tamaño seleccionado aquí
              }}
              className={`size-button ${selectedSize === size ? 'selected' : ''}`}
            >
              {size}
            </button>
          ))}
        </div>
        <div className={`size-toggle ${sizeOptionsVisible ? 'rotate' : ''}`} onClick={toggleSizeOptions}>
          {sizeOptionsVisible ? '▲' : '▼'}
        </div>
        <ItemCount initial={1} stock={10} onAdd={(quantity) => console.log('cantidad agregada',quantity)}/>
      </div>
    </div>
  );
};

export default ProductDetails;
