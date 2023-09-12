import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
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

const ProductDetailsData = {
  1: {
    id: 1,
    name: 'Nike Air Zoom Superfly SG Gold',
    category: 'Superfly',
    price: '$94.875,00',
    image: img1,
    description: 'Estos botines de fútbol Nike Air Zoom Superfly SG Gold son una elección perfecta para los jugadores que buscan velocidad y comodidad en el campo. Con su diseño elegante y su tecnología de última generación, te ayudarán a dar lo mejor de ti en cada partido. La parte superior suave y resistente proporciona un ajuste ceñido y un toque preciso, mientras que la suela con tacos te brinda una tracción excepcional en terrenos suaves. ¡Eleva tu juego con estos increíbles botines Nike!',
  },
  2: {
    id: 2,
    name: 'Nike Zoom Mercurial Superfly 9',
    category: 'Superfly',
    price: '$85.500,00',
    image: img2,
    description: 'Los botines de fútbol Nike Zoom Mercurial Superfly 9 son ideales para jugadores que buscan velocidad y agilidad en el campo. Su diseño aerodinámico y su tecnología de vanguardia te permiten moverte rápidamente y controlar el balón con precisión. La parte superior ligera y transpirable te brinda comodidad durante todo el partido, y la suela con tacos proporciona una excelente tracción en terrenos variados.',
  },
  3: {
    id: 3,
    name: 'Nike Mercurial Air Zoom Green',
    category: 'Superfly',
    price: '$78.775,00',
    image: img3,
    description: 'Los botines de fútbol Nike Mercurial Air Zoom Green son perfectos para jugadores que desean velocidad y estilo en el campo. Su diseño llamativo en verde te destacará en el terreno de juego, mientras que la tecnología de amortiguación Air Zoom te proporciona una sensación de comodidad y respuesta. La suela con tacos proporciona tracción en terrenos firmes y suaves. ¡Domina el campo con estos botines de alto rendimiento!',
  },
  4: {
    id: 4,
    name: 'Adidas Copa Sense LL Black',
    category: 'Copa',
    price: '$90.275,00',
    image: img4,
    description: 'Los botines de fútbol Adidas Copa Sense LL Black ofrecen un toque excepcional y un ajuste personalizado para jugadores de todos los niveles. La parte superior de cuero suave y la tecnología de control de balón te brindan precisión en cada pase y disparo. La suela con tacos proporciona tracción en terrenos firmes y naturales. ¡Eleva tu juego con la calidad y el estilo de Adidas!',
  },
  5: {
    id: 5,
    name: 'Adidas Copa Sense LL Al Rihla',
    category: 'Copa',
    price: '$90.275,00',
    image: img5,
    description: 'Los botines de fútbol Adidas Copa Sense LL Al Rihla son la elección perfecta para jugadores que buscan comodidad y control en el campo. Con un diseño elegante y una parte superior de cuero suave, ofrecen un ajuste excepcional y un toque preciso. La suela con tacos te proporciona tracción en terrenos firmes y naturales. ¡Domina el juego con estos botines de calidad!',
  },
  6: {
    id: 6,
    name: 'Adidas Copa Sense LL White/Red',
    category: 'Copa',
    price: '$90.275,00',
    image: img6,
    description: 'Los botines de fútbol Adidas Copa Sense LL White/Red son ideales para jugadores que buscan un toque de estilo y precisión en el campo. Su diseño elegante en blanco y rojo te destacará, mientras que la parte superior de cuero suave te brinda un ajuste ceñido y un control excepcional del balón. La suela con tacos proporciona tracción en terrenos firmes y naturales. ¡Juega con confianza con estos botines de calidad!',
  },
  7: {
    id: 7,
    name: 'Puma Future Ultra Grey/Orange',
    category: 'Future',
    price: '$74.520,00',
    image: img7,
    description: 'Los botines de fútbol Puma Future Ultra Grey/Orange están diseñados para jugadores que buscan velocidad y agilidad en el campo. Su diseño en gris y naranja es llamativo, y la tecnología de amortiguación te brinda comodidad durante todo el partido. La suela con tacos te proporciona tracción en terrenos variados. ¡Domina el campo con estos botines de alto rendimiento!',
  },
  8: {
    id: 8,
    name: 'Puma Future Ultra White/Golden',
    category: 'Future',
    price: '$87.170,00',
    image: img8,
    description: 'Los botines de fútbol Puma Future Ultra White/Golden ofrecen estilo y rendimiento en el campo. Su diseño en blanco y dorado es elegante, y la tecnología de amortiguación te brinda comodidad durante todo el partido. La suela con tacos proporciona tracción en terrenos variados. ¡Juega con confianza y estilo con estos botines Puma!',
  },
  9: {
    id: 9,
    name: 'Puma Future Ultra White/Golden',
    category: 'Future',
    price: '$84.500,00',
    image: img9,
    description: 'Los botines de fútbol Puma Future Ultra White/Golden son ideales para jugadores que buscan comodidad y estilo en el campo. Con su diseño elegante en blanco y dorado, destacarás en el terreno de juego. La tecnología de amortiguación te brinda comodidad durante todo el partido, y la suela con tacos proporciona tracción en terrenos variados. ¡Eleva tu juego con estos botines Puma de calidad!',
  },
};

const ProductDetails = () => {
  const { id } = useParams();
  const productId = parseInt(id);
  const product = ProductDetailsData[productId];

  const [selectedQuantity, setSelectedQuantity] = useState(1);

  const handleAddToCart = () => {
    console.log(`Añadir al carrito: ${selectedQuantity} productos de ${product.name}`);
  };

  return (
    <div className='product-details'>
      <h1 className='product-title'>{product.name}</h1>
      <p className='product-category'>{product.category}</p>
      <p className='product-price'>{product.price}</p>
      <img src={product.image} alt={product.name} />
      <p className='product-description'>{product.description}</p>
      <ItemCount stock={10} initial={1} onAdd={(quantity) => setSelectedQuantity(quantity)} />
      <button onClick={handleAddToCart}>Agregar al carrito</button>
    </div>
  );
};

export default ProductDetails;
