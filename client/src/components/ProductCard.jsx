import { useContext } from 'react';
import { CartContext } from '../context/cart.context';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ProductCard = ({ product }) => {
  const { addItemToCart } = useContext(CartContext);

  const notify = () => toast(`${product.productName} added to the Cart!`);

  const addToCart = () => {
    addItemToCart(product);
    notify();
  };

  return (
    <div className='border rounded-md flex flex-col w-2/5 mx-5 my-5'>
      <img
        className=' w-full h-[200px] object-cover'
        src={product.img}
        alt='Product image'
      />
      <p className='self-start pl-5 text-xl'>{product.productName}</p>
      <button
        onClick={addToCart}
        className='rounded-xl border bg-slate-100 border-gray-300 text-xl m-2 px-3 py-1 self-end w-1/2 hover:font-bold'
      >
        add To Cart
      </button>
      <ToastContainer />
    </div>
  );
};

export default ProductCard;
