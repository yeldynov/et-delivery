import { createContext, useState, useEffect } from 'react';

const addItem = (items, productToAdd) => {
  const existingItem = items.find((item) => item._id === productToAdd._id);

  if (existingItem) {
    return items.map((item) =>
      item._id === productToAdd._id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    );
  }

  return [...items, { ...productToAdd, quantity: 1 }];
};

const removeItem = (items, itemToRemove) => {
  const existingItem = items.find((item) => item._id === itemToRemove._id);

  if (existingItem.quantity === 1)
    return items.filter((item) => item._id !== itemToRemove._id);

  return items.map((item) =>
    item._id === itemToRemove._id
      ? { ...item, quantity: item.quantity - 1 }
      : item
  );
};

const clearItem = (items, itemToClear) =>
  items.filter((item) => item._id !== itemToClear._id);

export const CartContext = createContext({
  cartItems: [],
  addItemToCart: () => {},
  removeItemFromCart: () => {},
  clearItemFromCart: () => {},
  clearCart: () => {},
  cartCount: 0,
  cartTotal: 0,
});

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);

  useEffect(() => {
    const newCartCount = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    );

    setCartCount(newCartCount);
  }, [cartItems]);

  useEffect(() => {
    const newCartTotal = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity * cartItem.price,
      0
    );

    setCartTotal(newCartTotal);
  }, [cartItems]);

  const addItemToCart = (productToAdd) => {
    setCartItems(addItem(cartItems, productToAdd));
  };

  const removeItemFromCart = (productToRemove) => {
    setCartItems(removeItem(cartItems, productToRemove));
  };

  const clearItemFromCart = (productToClear) => {
    setCartItems(clearItem(cartItems, productToClear));
  };

  const clearCart = () => {
    setCartItems([]);
    setCartCount(0);
    setCartTotal(0);
  };

  const value = {
    addItemToCart,
    removeItemFromCart,
    clearItemFromCart,
    clearCart,
    cartItems,
    cartCount,
    cartTotal,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
