import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import SectionTitle from '../components/SectionTitle';
import { useProducts } from '../context/ProductContext';

const CategoryPage = () => {
    const { categoryName } = useParams();
    const navigate = useNavigate();
    const { products } = useProducts();
    const filteredProducts = products.filter(p => p.category === categoryName);

    return (
        <div className="py-20 bg-white">
            <div className="container mx-auto px-5">
                <SectionTitle>{categoryName}</SectionTitle>
                {filteredProducts.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {filteredProducts.map(prod => (
                            <div key={prod.id} onClick={() => navigate(`/product/${prod.id}`)} className="relative h-72 rounded-lg overflow-hidden shadow-lg group cursor-pointer">
                                <img src={prod.img} alt={prod.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                <div className="absolute bottom-0 left-0 right-0 bg-[rgba(109,76,65,0.85)] text-white p-4 text-center">
                                    <p className="uppercase font-medium tracking-wider">{prod.name}</p>
                                    <p className="text-sm">IDR {prod.price.toLocaleString()}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p className="text-center text-gray-500">Produk dalam kategori ini belum tersedia.</p>
                )}
            </div>
        </div>
    );
};

export default CategoryPage;
