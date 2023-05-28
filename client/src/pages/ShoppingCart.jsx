import { useContext, useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import { CartContext } from '../context/cart.context';
import Form from '../components/Form';
import Checkout from '../components/Checkout';
import Modal from '../components/Modal';

const defaultFormFields = {
  name: '',
  email: '',
  phone: '',
  address: '',
};

const ShoppingCart = () => {
  const { cartItems, cartTotal, clearCart } = useContext(CartContext);
  const [formFields, setFormFields] = useState(defaultFormFields);
  const [showModal, setShowModal] = useState(false);

  const notify = () => toast(`Please, fill all the fields in form!`);

  const reset = () => {
    setFormFields(defaultFormFields);
    clearCart();
  };

  const handleSave = () => {
    if (
      formFields.name === '' ||
      formFields.email === '' ||
      formFields.phone === '' ||
      formFields.address === ''
    ) {
      notify();
      return;
    }

    try {
      axios.post('http://localhost:3000/orders', {
        cartItems,
        cartTotal,
        userInfo: formFields,
      });
      setShowModal(true);
      reset();
    } catch (error) {
      console.log('Something went wrong while saving order');
    }
  };

  return (
    <div className='flex flex-col'>
      <div className='flex gap-5 m-10 h-[60vh]'>
        <div className='w-1/2 border rounded-md '>
          <Form formFields={formFields} setFormFields={setFormFields} />
        </div>
        <div className='w-1/2 border rounded-md overflow-y-scroll'>
          <Checkout cartItems={cartItems} />
        </div>
      </div>
      <div className='flex justify-end items-center mr-10'>
        <p className='text-2xl mr-20'>Total price: {cartTotal.toFixed(2)} </p>
        <button
          onClick={handleSave}
          className='border font-bold text-2xl px-16 py-3 rounded-xl disabled:bg-gray-300 hover:bg-green-900 hover:text-white '
        >
          Submit
        </button>
      </div>
      <Modal showModal={showModal} setShowModal={setShowModal} />
      <ToastContainer />
    </div>
  );
};

export default ShoppingCart;
