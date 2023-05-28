import { useState, useEffect } from 'react';
import axios from 'axios';
import ProductCard from '../components/ProductCard';

const Home = () => {
  const [activeShop, setActiveShop] = useState(null);
  const [shops, setShops] = useState([]);

  useEffect(() => {
    const getShops = async () => {
      try {
        const response = await axios.get(
          'https://et-delivery-sever.onrender.com/shops'
        );
        setShops(response.data);
        setActiveShop(response.data[0]);
      } catch (error) {
        console.log('Something went wrong while getting the shops');
      }
    };

    getShops();
  }, []);

  const handleShopClick = (shop) => {
    setActiveShop(shop);
  };

  return (
    <div className='flex gap-10 m-3 text-center h-[85vh]'>
      <div className='w-1/4 border rounded-md pt-10'>
        <h2 className='text-xl font-bold'>Shops:</h2>
        {shops &&
          shops.map((shop) => (
            <div
              onClick={() => handleShopClick(shop)}
              className={`${
                activeShop &&
                activeShop.name === shop.name &&
                'bg-gray-300 font-bold'
              } p-3 m-5 border rounded-md cursor-pointer hover:font-bold`}
              key={shop._id}
            >
              {shop.name}
            </div>
          ))}
      </div>
      <div className='w-3/4 pt-5 border rounded-md flex flex-wrap justify-around items-center overflow-y-scroll'>
        {activeShop &&
          activeShop.products.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
      </div>
    </div>
  );
};

export default Home;
