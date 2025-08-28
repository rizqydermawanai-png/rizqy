import React from 'react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';
import SectionTitle from '../components/SectionTitle';
import { IconTrash } from '../icons';

const CartPage = () => {
    const { cartItems, removeFromCart } = useCart();

    const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

    return (
        <div className="py-20 bg-white">
            <div className="container mx-auto px-5">
                <SectionTitle>Keranjang Belanja Anda</SectionTitle>
                {cartItems.length === 0 ? (
                    <div className="text-center">
                        <p className="text-gray-600 text-lg mb-4">Keranjang Anda masih kosong.</p>
                        <Link to="/" className="btn bg-[#6D4C41] hover:bg-[#4E342E] text-white">Mulai Belanja</Link>
                    </div>
                ) : (
                    <div className="max-w-4xl mx-auto">
                        <div className="bg-white shadow-md rounded-lg overflow-hidden">
                            <table className="w-full">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th className="p-4 text-left font-semibold text-gray-600 uppercase">Produk</th>
                                        <th className="p-4 text-left font-semibold text-gray-600 uppercase">Ukuran</th>
                                        <th className="p-4 text-left font-semibold text-gray-600 uppercase">Jumlah</th>
                                        <th className="p-4 text-right font-semibold text-gray-600 uppercase">Subtotal</th>
                                        <th className="p-4 text-right font-semibold text-gray-600 uppercase"></th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200">
                                    {cartItems.map(item => (
                                        <tr key={`${item.id}-${item.size}`}>
                                            <td className="p-4 flex items-center gap-4">
                                                <img src={item.img} alt={item.name} className="w-16 h-16 object-cover rounded-md" />
                                                <div>
                                                    <p className="font-semibold">{item.name}</p>
                                                    <p className="text-sm text-gray-500">IDR {item.price.toLocaleString()}</p>
                                                </div>
                                            </td>
                                            <td className="p-4">{item.size}</td>
                                            <td className="p-4">{item.quantity}</td>
                                            <td className="p-4 text-right">IDR {(item.price * item.quantity).toLocaleString()}</td>
                                            <td className="p-4 text-right">
                                                <button onClick={() => removeFromCart(item.id, item.size)} className="text-red-500 hover:text-red-700">
                                                    <IconTrash />
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <div className="mt-8 text-right">
                            <h3 className="text-2xl font-bold">Total: IDR {total.toLocaleString()}</h3>
                            <button className="mt-4 btn bg-[#4E342E] hover:bg-[#6D4C41] text-white">Lanjutkan ke Pembayaran</button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default CartPage;
