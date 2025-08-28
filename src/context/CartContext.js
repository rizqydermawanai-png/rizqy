import React, { createContext, useState, useContext } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (product, size, quantity = 1) => {
        setCartItems(prevItems => {
            const existingItem = prevItems.find(item => item.id === product.id && item.size === size);
            if (existingItem) {
                return prevItems.map(item =>
                    item.id === product.id && item.size === size
                        ? { ...item, quantity: item.quantity + quantity }
                        : item
                );
            }
            return [...prevItems, { ...product, size, quantity }];
        });
        console.log(`${product.name} (Size: ${size}) added to cart.`);
    };

    const removeFromCart = (productId, size) => {
        setCartItems(prevItems => prevItems.filter(item => !(item.id === productId && item.size === size)));
    };

    const value = {
        cartItems,
        addToCart,
        removeFromCart
    };

    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    );
};
