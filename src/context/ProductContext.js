import React, { createContext, useState, useContext } from 'react';
import { INITIAL_PRODUCTS } from '../data/products';

const ProductContext = createContext();

export const useProducts = () => useContext(ProductContext);

export const ProductProvider = ({ children }) => {
    const [products, setProducts] = useState(INITIAL_PRODUCTS);
    const [promos, setPromos] = useState([{ id: 1, title: "KAZUMI x BUSINESSWEEK", subtitle: "MONDAY SPECIAL", offer: "BUY 2 GET 30% OFF", terms: "Groups IDR 8.000 dengan min. pembelian IDR 300.000" }]);

    const value = {
        products,
        setProducts,
        promos,
        setPromos
    };

    return (
        <ProductContext.Provider value={value}>
            {children}
        </ProductContext.Provider>
    );
};
