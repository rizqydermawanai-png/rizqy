import React, { useState } from 'react';
import SectionTitle from '../components/SectionTitle';
import { IconSend } from '../icons';

const BulkPurchasePage = ({ onOrderSubmit }) => {
    const [formData, setFormData] = useState({ company: '', name: '', email: '', phone: '', productType: 'T-Shirt', quantity: '', customization: '', deliveryDate: '', notes: '' });
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Bulk Order Submitted:", formData);
        onOrderSubmit();
        // Reset form
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
                            <div><label className="form-label">Nama Perusahaan/Instansi</label><input type="text" name="company" onChange={e => setFormData({...formData, company: e.target.value})} className="form-input" required /></div>
                            <div><label className="form-label">Nama Anda (PIC)</label><input type="text" name="name" onChange={e => setFormData({...formData, name: e.target.value})} className="form-input" required /></div>
                            <div><label className="form-label">Email</label><input type="email" name="email" onChange={e => setFormData({...formData, email: e.target.value})} className="form-input" required /></div>
                            <div><label className="form-label">No. Telepon</label><input type="tel" name="phone" onChange={e => setFormData({...formData, phone: e.target.value})} className="form-input" required /></div>
                        </div>
                    </fieldset>
                    <fieldset className="border p-4 rounded-md">
                        <legend className="px-2 font-semibold">Detail Pesanan</legend>
                        <div className="grid md:grid-cols-3 gap-4">
                            <div><label className="form-label">Jenis Produk</label><select name="productType" onChange={e => setFormData({...formData, productType: e.target.value})} className="form-input"><option>T-Shirt</option><option>Polo Shirt</option><option>Kemeja</option><option>Jaket</option><option>Lainnya</option></select></div>
                            <div><label className="form-label">Jumlah (pcs)</label><input type="number" name="quantity" onChange={e => setFormData({...formData, quantity: e.target.value})} className="form-input" required /></div>
                            <div><label className="form-label">Tanggal Pengiriman</label><input type="date" name="deliveryDate" onChange={e => setFormData({...formData, deliveryDate: e.target.value})} className="form-input" /></div>
                        </div>
                        <div><label className="form-label">Kustomisasi</label><input type="text" name="customization" placeholder="cth: Bordir logo di dada kiri" onChange={e => setFormData({...formData, customization: e.target.value})} className="form-input" /></div>
                    </fieldset>
                    <div><label className="form-label">Catatan Tambahan (Rincian ukuran, warna, dll.)</label><textarea name="notes" rows="4" onChange={e => setFormData({...formData, notes: e.target.value})} className="form-input"></textarea></div>
                    <button type="submit" className="w-full btn bg-[#6D4C41] hover:bg-[#4E342E] text-white flex items-center justify-center gap-2">Minta Penawaran <IconSend /></button>
                </form>
            </div>
        </div>
    );
};

export default BulkPurchasePage;
