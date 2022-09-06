// import { createContext, useEffect, useState, useReducer } from "react";

// export const CartContext = createContext({});

// export const CartProvider = ({ children }) => {
//   //const [isCartOpen, setIsCartOpen] = useState(false);

//   const cartReducer = (state, action) => {
//     const { type, payload } = action;

//     switch (type) {
//       case "SET_CART_ITEMS":
//         return {
//           ...state,
//           ...payload,
//         };

//       case "Toggle_Cart":
//         return {
//           ...state,
//           ...payload,
//         };

//       default:
//         throw new Error(`unhandled error in ${type} in cartReducer`);
//     }
//   };

//   const INITIAL_STATE = {
//     isCartOpen: false,
//     cartItems: [],
//     cartCount: 0,
//     cartTotal: 0,
//   };

//   const [{ cartItems, isCartOpen, cartCount, cartTotal }, dispatch] =
//     useReducer(cartReducer, INITIAL_STATE);

//   const updateCartItemsReducer = (newCartItems) => {
//     const newCartCount = newCartItems.reduce(
//       (total, cartItem) => total + cartItem.quantity,
//       0
//     );

//     const newCartTotal = newCartItems.reduce(
//       (total, cartItem) => total + cartItem.quantity * cartItem.price,
//       0
//     );
//     dispatch({
//       type: "SET_CART_ITEMS",
//       payload: {
//         cartItems: newCartItems,
//         cartCount: newCartCount,
//         cartTotal: newCartTotal,
//       },
//     });
//   };

//   const setIsCartOpen = (newIsCartOpen) => {
//     dispatch({ type: "Toggle_Cart", payload: { isCartOpen: newIsCartOpen } });
//   };

//   const addToCart = (product) => {
//     const newCartItems = add(product);
//     updateCartItemsReducer(newCartItems);
//   };

//   const removeFromCart = (product) => {
//     const newCartItems = removeCartItem(product);
//     updateCartItemsReducer(newCartItems);
//   };

//   const clearCart = (product) => {
//     const newCartItems = clearCartItem(product);
//     updateCartItemsReducer(newCartItems);
//   };

//   const add = (product) => {
//     const existingItem = cartItems.find(
//       (cartItem) => cartItem.id === product.id
//     );

//     if (existingItem) {
//       return cartItems.map((item) =>
//         item.id === existingItem.id
//           ? { ...item, quantity: item.quantity + 1 }
//           : item
//       );
//     } else {
//       return [...cartItems, { ...product, quantity: 1 }];
//     }
//   };

//   const removeCartItem = (product) => {
//     const existingItem = cartItems.find(
//       (cartItem) => cartItem.id === product.id
//     );

//     if (existingItem.quantity === 1) {
//       return cartItems.filter((item) => item.id !== product.id);
//     } else {
//       return cartItems.map((item) =>
//         item.id === existingItem.id
//           ? { ...item, quantity: item.quantity - 1 }
//           : item
//       );
//     }
//   };

//   const clearCartItem = (product) => {
//     return cartItems.filter((item) => item.id !== product.id);
//   };

//   const value = {
//     isCartOpen,
//     setIsCartOpen,
//     cartItems,
//     addToCart,
//     cartCount,
//     removeFromCart,
//     clearCart,
//     cartTotal,
//   };

//   return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
// };
