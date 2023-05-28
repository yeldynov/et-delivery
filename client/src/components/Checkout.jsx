import { useContext } from 'react';
import { CartContext } from '../context/cart.context';
import { useNavigate } from 'react-router-dom';

const Checkout = ({ cartItems }) => {
  const { removeItemFromCart, addItemToCart } = useContext(CartContext);
  const navigate = useNavigate();

  return (
    <>
      {cartItems.length < 1 ? (
        <div className='flex flex-col items-center justify-center'>
          <div className='text-gray-500 text-2xl items-center justify-center flex mt-10'>
            No items in cart. Maybe add one?
          </div>
          <button
            onClick={() => navigate('/')}
            className='mt-5 border rounded-md p-2 bg-blue-500 text-md text-white font-bold'
          >
            Start Shoping
          </button>
        </div>
      ) : (
        cartItems.map((item) => (
          <div
            className='flex justify-around gap-5 items-center border m-3 rounded-md'
            key={item._id}
          >
            <img
              src={item.img}
              className='w-1/2 m-2 h-[150px] object-cover'
              alt='Product image'
            />
            <div>
              <div className='mb-5 text-center'>
                <p>{item.productName}</p>
                <p>Price: {item.price}</p>
              </div>
              <div className='flex items-center justify-center gap-3'>
                <div
                  className='cursor-pointer'
                  onClick={() => removeItemFromCart(item)}
                >
                  &#10094;
                </div>
                <div>{item.quantity}</div>
                <div
                  className='cursor-pointer'
                  onClick={() => addItemToCart(item)}
                >
                  &#10095;
                </div>
              </div>
            </div>
          </div>
        ))
      )}
    </>
  );
};

export default Checkout;
