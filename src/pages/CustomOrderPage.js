import React, { useState } from 'react';
import { SectionTitle } from '../components/common';
import { IconSend } from '../assets/icons';

const CustomOrderPage = ({ onOrderSubmit }) => {
    const [formData, setFormData] = useState({
        name: '', email: '', phone: '',
        items: [{ productType: 'Kemeja', material: '', color: '', quantity: 1, notes: '' }]
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
            items: [...formData.items, { productType: 'Kemeja', material: '', color: '', quantity: 1, notes: '' }]
        });
    };

    const removeItem = (index) => {
        const newItems = [...formData.items];
        newItems.splice(index, 1);
        setFormData({...formData, items: newItems});
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Custom Order Submitted:", formData);
        onOrderSubmit();
        setFormData({ name: '', email: '', phone: '', items: [{ productType: 'Kemeja', material: '', color: '', quantity: 1, notes: '' }] });
    };

    return (
        <div className="py-20 bg-[#F5F5F5]">
            <div className="container mx-auto px-5">
                <SectionTitle>Buat Pesanan Kustom Anda</SectionTitle>
                <p className="text-center max-w-3xl mx-auto text-gray-600 -mt-8 mb-12">Isi formulir di bawah ini dengan detail selengkap mungkin. Tim kami akan meninjau dan menghubungi Anda untuk konsultasi lebih lanjut.</p>
                <form onSubmit={handleSubmit} className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg space-y-6">
                    <fieldset className="border p-4 rounded-md">
                        <legend className="px-2 font-semibold">Informasi Kontak</legend>
                        <div className="grid md:grid-cols-2 gap-4">
                            <div><label className="form-label">Nama Lengkap</label><input type="text" name="name" value={formData.name} onChange={handleInfoChange} className="form-input" required /></div>
                            <div><label className="form-label">Email</label><input type="email" name="email" value={formData.email} onChange={handleInfoChange} className="form-input" required /></div>
                            <div><label className="form-label">No. Telepon</label><input type="tel" name="phone" value={formData.phone} onChange={handleInfoChange} className="form-input" required /></div>
                        </div>
                    </fieldset>

                    <fieldset className="border p-4 rounded-md">
                        <legend className="px-2 font-semibold">Detail Kebutuhan</legend>
                        {formData.items.map((item, index) => (
                            <div key={index} className="space-y-4 border-b pb-4 mb-4 last:border-b-0 last:pb-0 last:mb-0">
                                <div className="flex justify-between items-center">
                                    <h4 className="font-semibold">Kebutuhan #{index + 1}</h4>
                                    {formData.items.length > 1 && (
                                        <button type="button" onClick={() => removeItem(index)} className="text-red-500 hover:text-red-700 font-bold text-sm">HAPUS</button>
                                    )}
                                </div>
                                <div className="grid md:grid-cols-3 gap-4">
                                    <div><label className="form-label">Jenis Produk</label><select name="productType" value={item.productType} onChange={(e) => handleItemChange(index, e)} className="form-input"><option>Kemeja</option><option>Celana</option><option>Jaket</option><option>Jas</option></select></div>
                                    <div><label className="form-label">Preferensi Material</label><input type="text" name="material" value={item.material} onChange={(e) => handleItemChange(index, e)} placeholder="cth: Katun Jepang" className="form-input" /></div>
                                    <div><label className="form-label">Warna</label><input type="text" name="color" value={item.color} onChange={(e) => handleItemChange(index, e)} placeholder="cth: Biru Navy" className="form-input" /></div>
                                </div>
                                <div><label className="form-label">Jumlah</label><input type="number" name="quantity" value={item.quantity} onChange={(e) => handleItemChange(index, e)} className="form-input" min="1" /></div>
                                <div><label className="form-label">Catatan Tambahan (Ukuran, detail kerah, dll.)</label><textarea name="notes" value={item.notes} onChange={(e) => handleItemChange(index, e)} rows="2" className="form-input"></textarea></div>
                            </div>
                        ))}
                        <button type="button" onClick={addItem} className="btn bg-gray-200 hover:bg-gray-300 text-black !py-2 !px-4 !text-sm mt-4">
                            + Tambah Kebutuhan Lain
                        </button>
                    </fieldset>

                    <button type="submit" className="w-full btn bg-[#6D4C41] hover:bg-[#4E342E] text-white flex items-center justify-center gap-2">Kirim Permintaan Kustom <IconSend /></button>
                </form>
            </div>
        </div>
    );
};

export default CustomOrderPage;
