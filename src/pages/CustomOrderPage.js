import React, { useState } from 'react';
import SectionTitle from '../components/SectionTitle';
import { IconSend } from '../icons';

const CustomOrderPage = ({ onOrderSubmit }) => {
    const [formData, setFormData] = useState({ name: '', email: '', phone: '', productType: 'Kemeja', material: '', color: '', chest: '', waist: '', length: '', notes: '' });
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Custom Order Submitted:", formData);
        onOrderSubmit();
        // Reset form if needed
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
                            <div><label className="form-label">Nama Lengkap</label><input type="text" name="name" onChange={e => setFormData({...formData, name: e.target.value})} className="form-input" required /></div>
                            <div><label className="form-label">Email</label><input type="email" name="email" onChange={e => setFormData({...formData, email: e.target.value})} className="form-input" required /></div>
                            <div><label className="form-label">No. Telepon</label><input type="tel" name="phone" onChange={e => setFormData({...formData, phone: e.target.value})} className="form-input" required /></div>
                        </div>
                    </fieldset>
                    <fieldset className="border p-4 rounded-md">
                        <legend className="px-2 font-semibold">Detail Pakaian</legend>
                        <div className="grid md:grid-cols-3 gap-4">
                            <div><label className="form-label">Jenis Produk</label><select name="productType" onChange={e => setFormData({...formData, productType: e.target.value})} className="form-input"><option>Kemeja</option><option>Celana</option><option>Jaket</option><option>Jas</option></select></div>
                            <div><label className="form-label">Preferensi Material</label><input type="text" name="material" placeholder="cth: Katun Jepang" onChange={e => setFormData({...formData, material: e.target.value})} className="form-input" /></div>
                            <div><label className="form-label">Warna</label><input type="text" name="color" placeholder="cth: Biru Navy" onChange={e => setFormData({...formData, color: e.target.value})} className="form-input" /></div>
                        </div>
                    </fieldset>
                     <fieldset className="border p-4 rounded-md">
                        <legend className="px-2 font-semibold">Ukuran (dalam cm)</legend>
                        <div className="grid md:grid-cols-3 gap-4">
                            <div><label className="form-label">Lingkar Dada</label><input type="number" name="chest" onChange={e => setFormData({...formData, chest: e.target.value})} className="form-input" /></div>
                            <div><label className="form-label">Lingkar Pinggang</label><input type="number" name="waist" onChange={e => setFormData({...formData, waist: e.target.value})} className="form-input" /></div>
                            <div><label className="form-label">Panjang Baju/Celana</label><input type="number" name="length" onChange={e => setFormData({...formData, length: e.target.value})} className="form-input" /></div>
                        </div>
                    </fieldset>
                    <div><label className="form-label">Catatan Tambahan (Detail kerah, kancing, potongan, dll.)</label><textarea name="notes" rows="4" onChange={e => setFormData({...formData, notes: e.target.value})} className="form-input"></textarea></div>
                    <button type="submit" className="w-full btn bg-[#6D4C41] hover:bg-[#4E342E] text-white flex items-center justify-center gap-2">Kirim Permintaan Kustom <IconSend /></button>
                </form>
            </div>
        </div>
    );
};

export default CustomOrderPage;
