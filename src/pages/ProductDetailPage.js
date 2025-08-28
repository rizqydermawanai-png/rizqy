import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useProducts } from '../context/ProductContext';
import { useCart } from '../context/CartContext';
import { IconShoppingBag } from '../icons';

const ProductDetailPage = () => {
    const { productId } = useParams();
    const { products } = useProducts();
    const { addToCart } = useCart();

    const product = products.find(p => p.id === parseInt(productId));
    const [selectedSize, setSelectedSize] = useState('');

    useEffect(() => {
        if (product && product.sizes.length > 0) {
            setSelectedSize(product.sizes[0]);
        }
    }, [product]);

    if (!product) {
        return <div className="py-20 text-center">Produk tidak ditemukan. <Link to="/" className="text-blue-600">Kembali ke beranda</Link>.</div>;
    }

    const handleAddToCart = () => {
        if (selectedSize) {
            addToCart(product, selectedSize);
        } else {
            alert('Silakan pilih ukuran terlebih dahulu.');
        }
    };

    return (
        <div className="py-20 bg-white">
            <div className="container mx-auto px-5">
                <div className="grid md:grid-cols-2 gap-10">
                    <img src={product.img} alt={product.name} className="w-full h-auto max-h-[500px] object-cover rounded-lg shadow-lg"/>
                    <div>
                        <Link to={`/category/${product.category}`} className="text-sm uppercase text-gray-500 hover:text-black">{product.category}</Link>
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

                        <button onClick={handleAddToCart} className="w-full btn bg-[#6D4C41] hover:bg-[#4E342E] text-white flex items-center justify-center gap-2">
                            <IconShoppingBag /> Tambah ke Keranjang
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetailPage;
