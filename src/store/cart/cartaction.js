const add = (cartItems, product) => {
  const existingItem = cartItems.find((cartItem) => cartItem.id === product.id);

  if (existingItem) {
    return cartItems.map((item) =>
      item.id === existingItem.id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    );
  } else {
    return [...cartItems, { ...product, quantity: 1 }];
  }
};

const removeCartItem = (cartItems, product) => {
  const existingItem = cartItems.find((cartItem) => cartItem.id === product.id);

  if (existingItem.quantity === 1) {
    return cartItems.filter((item) => item.id !== product.id);
  } else {
    return cartItems.map((item) =>
      item.id === existingItem.id
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );
  }
};

const clearCartItem = (cartItems, product) => {
  return cartItems.filter((item) => item.id !== product.id);
};

export const setIsCartOpen = (payload) => {
  return { type: "Toggle_Cart", payload: payload };
};

export const addToCart = (cartItems, product) => {
  const newCartItems = add(cartItems, product);
  return { type: "SET_CART_ITEMS", payload: newCartItems };
};

export const removeFromCart = (cartItems, product) => {
  const newCartItems = removeCartItem(cartItems, product);
  return { type: "SET_CART_ITEMS", payload: newCartItems };
};

export const clearCart = (cartItems, product) => {
  const newCartItems = clearCartItem(cartItems, product);
  return { type: "SET_CART_ITEMS", payload: newCartItems };
};
