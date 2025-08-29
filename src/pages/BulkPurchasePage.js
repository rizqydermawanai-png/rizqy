import React, { useState } from 'react';
import { SectionTitle } from '../components/common';
import { IconSend } from '../assets/icons';

const BulkPurchasePage = ({ onOrderSubmit }) => {
     const [formData, setFormData] = useState({
        company: '', name: '', email: '', phone: '', deliveryDate: '',
        items: [{ productType: 'T-Shirt', quantity: '', customization: '', color: '' }]
    });

    const handleInfoChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    };

    const handleItemChange = (index, e) => {
        const newItems = [...formData.items];
        newItems[index][e.target.name] = e.target.value;
        setFormData({...formData, items: newItems});
    };

    const addItem = () => {
        setFormData({
            ...formData,
            items: [...formData.items, { productType: 'T-Shirt', quantity: '', customization: '', color: '' }]
        });
    };

    const removeItem = (index) => {
        const newItems = [...formData.items];
        newItems.splice(index, 1);
        setFormData({...formData, items: newItems});
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Bulk Order Submitted:", formData);
        onOrderSubmit();
        setFormData({ company: '', name: '', email: '', phone: '', deliveryDate: '', items: [{ productType: 'T-Shirt', quantity: '', customization: '', color: '' }] });
    };

    return (
        <div className="py-20 bg-white">
            <div className="container mx-auto px-5">
                <SectionTitle>Pemesanan Jumlah Besar & Bisnis</SectionTitle>
                <p className="text-center max-w-3xl mx-auto text-gray-600 -mt-8 mb-12">Kami adalah mitra terpercaya untuk kebutuhan pakaian perusahaan, acara, atau komunitas Anda. Isi formulir di bawah untuk mendapatkan penawaran harga terbaik.</p>
                <form onSubmit={handleSubmit} className="max-w-4xl mx-auto bg-gray-50 p-8 rounded-lg shadow-lg space-y-6 border">
                     <fieldset className="border p-4 rounded-md">
                        <legend className="px-2 font-semibold">Informasi Perusahaan & PIC</legend>
                        <div className="grid md:grid-cols-2 gap-4">
                            <div><label className="form-label">Nama Perusahaan/Instansi</label><input type="text" name="company" value={formData.company} onChange={handleInfoChange} className="form-input" required /></div>
                            <div><label className="form-label">Nama Anda (PIC)</label><input type="text" name="name" value={formData.name} onChange={handleInfoChange} className="form-input" required /></div>
                            <div><label className="form-label">Email</label><input type="email" name="email" value={formData.email} onChange={handleInfoChange} className="form-input" required /></div>
                            <div><label className="form-label">No. Telepon</label><input type="tel" name="phone" value={formData.phone} onChange={handleInfoChange} className="form-input" required /></div>
                        </div>
                    </fieldset>
                    <fieldset className="border p-4 rounded-md">
                        <legend className="px-2 font-semibold">Detail Pesanan</legend>
                         {formData.items.map((item, index) => (
                            <div key={index} className="space-y-4 border-b pb-4 mb-4 last:border-b-0 last:pb-0 last:mb-0">
                                <div className="flex justify-between items-center">
                                    <h4 className="font-semibold">Item #{index + 1}</h4>
                                    {formData.items.length > 1 && (
                                        <button type="button" onClick={() => removeItem(index)} className="text-red-500 hover:text-red-700 font-bold text-sm">HAPUS</button>
                                    )}
                                </div>
                                <div className="grid md:grid-cols-3 gap-4">
                                    <div><label className="form-label">Jenis Produk</label><select name="productType" value={item.productType} onChange={(e) => handleItemChange(index, e)} className="form-input"><option>T-Shirt</option><option>Polo Shirt</option><option>Kemeja</option><option>Jaket</option><option>Lainnya</option></select></div>
                                    <div><label className="form-label">Jumlah (pcs)</label><input type="number" name="quantity" value={item.quantity} onChange={(e) => handleItemChange(index, e)} className="form-input" required /></div>
                                     <div><label className="form-label">Warna</label><input type="text" name="color" value={item.color} onChange={(e) => handleItemChange(index, e)} className="form-input" /></div>
                                </div>
                                <div><label className="form-label">Kustomisasi</label><input type="text" name="customization" value={item.customization} onChange={(e) => handleItemChange(index, e)} placeholder="cth: Bordir logo di dada kiri" className="form-input" /></div>
                            </div>
                        ))}
                         <button type="button" onClick={addItem} className="btn bg-gray-200 hover:bg-gray-300 text-black !py-2 !px-4 !text-sm mt-4">
                            + Tambah Item Lain
                        </button>
                        <div className="mt-4"><label className="form-label">Target Tanggal Pengiriman</label><input type="date" name="deliveryDate" value={formData.deliveryDate} onChange={handleInfoChange} className="form-input" /></div>
                    </fieldset>
                    <button type="submit" className="w-full btn bg-[#6D4C41] hover:bg-[#4E342E] text-white flex items-center justify-center gap-2">Minta Penawaran <IconSend /></button>
                </form>
            </div>
        </div>
    );
};

export default BulkPurchasePage;
