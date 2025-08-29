import React from 'react';
import { SectionTitle } from '../components/common.js';
import { IconTrash } from '../assets/icons.js';

const CartPage = ({ cart, setCart, setView }) => {
    const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

    const updateQuantity = (productId, newQuantity) => {
        if (newQuantity < 1) {
            setCart(cart.filter(item => item.id !== productId));
        } else {
            setCart(cart.map(item => item.id === productId ? { ...item, quantity: newQuantity } : item));
        }
    };

    return(
        <div className="py-20 bg-gray-50 min-h-[60vh]">
            <div className="container mx-auto px-5">
                <SectionTitle>Keranjang Belanja</SectionTitle>
                {cart.length > 0 ? (
                    <div className="grid lg:grid-cols-3 gap-8">
                        <div className="lg:col-span-2 bg-white p-6 rounded-lg shadow-md space-y-4">
                           {cart.map(item => (
                                <div key={item.id} className="flex gap-4 items-center border-b pb-4">
                                    <img src={item.img} alt={item.name} className="w-24 h-24 object-cover rounded-md"/>
                                    <div className="flex-1">
                                        <p className="font-semibold">{item.name}</p>
                                        <p className="text-sm text-gray-500">Ukuran: {item.selectedSize}</p>
                                        <p className="text-sm text-[#6D4C41]">IDR {item.price.toLocaleString()}</p>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="border w-8 h-8 rounded">-</button>
                                        <span className="w-8 text-center">{item.quantity}</span>
                                        <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="border w-8 h-8 rounded">+</button>
                                    </div>
                                    <p className="font-semibold w-24 text-right">IDR {(item.price * item.quantity).toLocaleString()}</p>
                                    <button onClick={() => updateQuantity(item.id, 0)} className="text-gray-400 hover:text-red-500"><IconTrash /></button>
                                </div>
                            ))}
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md h-fit">
                            <h3 className="font-serif text-xl font-bold mb-4 border-b pb-2">Ringkasan Pesanan</h3>
                            <div className="space-y-2 text-gray-600">
                                <div className="flex justify-between"><span>Subtotal</span><span>IDR {totalPrice.toLocaleString()}</span></div>
                                <div className="flex justify-between"><span>Pengiriman</span><span>Akan dihitung</span></div>
                            </div>
                            <div className="flex justify-between font-bold text-lg my-4 pt-4 border-t">
                                <span>Total</span>
                                <span>IDR {totalPrice.toLocaleString()}</span>
                            </div>
                            <button className="w-full btn bg-[#6D4C41] hover:bg-[#4E342E] text-white">Lanjut ke Checkout</button>
                        </div>
                    </div>
                ) : (
                    <div className="text-center py-10 bg-white rounded-lg shadow-md">
                        <p className="text-gray-500 mb-4">Keranjang Anda masih kosong.</p>
                        <button onClick={() => setView('home')} className="btn bg-[#6D4C41] hover:bg-[#4E342E] text-white">Mulai Belanja</button>
                    </div>
                )}
            </div>
        </div>
    )
}

export default CartPage;
