import React, { useState } from 'react';
import { IconShoppingBag } from '../assets/icons.js';

const ProductDetailPage = ({ productId, products, setView, addToCart }) => {
    const product = products.find(p => p.id === productId);
    const [selectedSize, setSelectedSize] = useState(product?.sizes[0] || '');

    if (!product) {
        return <div className="py-20 text-center">Produk tidak ditemukan. <a href="#" onClick={(e) => {e.preventDefault(); setView('home')}} className="text-blue-600">Kembali ke beranda</a>.</div>;
    }

    return (
        <div className="py-20 bg-white">
            <div className="container mx-auto px-5">
                <div className="grid md:grid-cols-2 gap-10">
                    <img src={product.img} alt={product.name} className="w-full h-auto max-h-[500px] object-cover rounded-lg shadow-lg"/>
                    <div>
                        <a href="#" onClick={(e) => {e.preventDefault(); setView('category', product.category)}} className="text-sm uppercase text-gray-500 hover:text-black">{product.category}</a>
                        <h1 className="font-serif text-4xl font-bold my-3 text-[#4E342E]">{product.name}</h1>
                        <p className="text-2xl font-semibold text-[#6D4C41] mb-4">IDR {product.price.toLocaleString()}</p>
                        <p className="text-gray-600 mb-6">{product.description}</p>

                        <div className="mb-6">
                            <h3 className="font-semibold mb-2">Pilih Ukuran:</h3>
                            <div className="flex gap-2">
                                {product.sizes.map(size => (
                                    <button key={size} onClick={() => setSelectedSize(size)}
                                        className={`w-12 h-12 border rounded-md transition-colors ${selectedSize === size ? 'bg-[#4E342E] text-white' : 'bg-white hover:bg-gray-100'}`}>
                                        {size}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <button onClick={() => addToCart(product, selectedSize)} className="w-full btn bg-[#6D4C41] hover:bg-[#4E342E] text-white flex items-center justify-center gap-2">
                            <IconShoppingBag /> Tambah ke Keranjang
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetailPage;
