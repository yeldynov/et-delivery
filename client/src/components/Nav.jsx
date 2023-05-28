import { NavLink, Outlet } from 'react-router-dom';

const Nav = () => {
  const activeLinkStyles = 'underline font-bold text-blue-900';

  return (
    <>
      <nav className='flex mx-20 my-5 items-center text-xl '>
        <NavLink
          to='/'
          className={({ isActive }) =>
            `${isActive && activeLinkStyles} mr-10 text-blue-600`
          }
        >
          Shop
        </NavLink>
        <div className='text-4xl '>|</div>
        <NavLink
          to='/cart'
          className={({ isActive }) =>
            `${isActive && activeLinkStyles} ml-10 text-blue-600`
          }
        >
          Shopping Cart
        </NavLink>
      </nav>

      <Outlet />
    </>
  );
};

export default Nav;
