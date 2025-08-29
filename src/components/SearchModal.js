import React, { useState } from 'react';
import { IconSearch } from '../assets/icons.js';

const SearchModal = ({ products, setView, setModalView }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const filteredProducts = searchTerm ? products.filter(p => p.name.toLowerCase().includes(searchTerm.toLowerCase())) : [];

    const handleProductClick = (productId) => {
        setView('product', productId);
        setModalView(null);
    };

    return (
        <div className="fixed inset-0 bg-black/50 z-[70] flex items-start justify-center pt-20" onClick={() => setModalView(null)}>
             <div className="bg-white rounded-lg shadow-xl p-6 w-full max-w-2xl text-black" onClick={e => e.stopPropagation()}>
                <div className="relative">
                    <input type="text" autoFocus value={searchTerm} onChange={e => setSearchTerm(e.target.value)} placeholder="Cari produk..." className="form-input w-full !py-3 !pl-10" />
                    <IconSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                </div>
                <div className="mt-4 max-h-96 overflow-y-auto">
                    {searchTerm && filteredProducts.map(p => (
                        <div key={p.id} onClick={() => handleProductClick(p.id)} className="flex items-center gap-4 p-2 rounded-md hover:bg-gray-100 cursor-pointer">
                            <img src={p.img} alt={p.name} className="w-16 h-16 object-cover rounded"/>
                            <div>
                                <p className="font-semibold">{p.name}</p>
                                <p className="text-sm text-gray-600">IDR {p.price.toLocaleString()}</p>
                            </div>
                        </div>
                    ))}
                    {searchTerm && filteredProducts.length === 0 && <p className="text-center text-gray-500 py-4">Produk tidak ditemukan.</p>}
                </div>
            </div>
        </div>
    )
}

export default SearchModal;
