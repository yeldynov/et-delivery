import { Route, Routes } from 'react-router-dom';
import Nav from './components/Nav';
import Home from './pages/Home';
import ShoppingCart from './pages/ShoppingCart';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Nav />}>
        <Route index element={<Home />} />
        <Route path='cart' element={<ShoppingCart />} />
      </Route>
    </Routes>
  );
};

export default App;
