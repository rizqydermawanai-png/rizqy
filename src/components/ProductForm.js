import React, { useState } from 'react';

const ProductForm = ({ onSubmit, product, categories, collections }) => {
    const [formData, setFormData] = useState({
        name: product?.name || '',
        price: product?.price || '',
        img: product?.img || '',
        category: product?.category || categories[0],
        description: product?.description || '',
        sizes: product?.sizes.join(', ') || '',
        specialCollection: product?.specialCollection || 'None'
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({
            ...formData,
            price: parseFloat(formData.price),
            sizes: formData.sizes.split(',').map(s => s.trim()),
            specialCollection: formData.specialCollection === 'None' ? null : formData.specialCollection
        });
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4 max-h-[70vh] overflow-y-auto pr-2">
            <div><label className="form-label">Nama Produk</label><input type="text" name="name" value={formData.name} onChange={handleChange} className="form-input" required /></div>
            <div className="grid grid-cols-2 gap-4">
                <div><label className="form-label">Harga</label><input type="number" name="price" value={formData.price} onChange={handleChange} className="form-input" required /></div>
                <div><label className="form-label">Kategori</label><select name="category" value={formData.category} onChange={handleChange} className="form-input">{categories.map(c => <option key={c} value={c}>{c}</option>)}</select></div>
            </div>
            <div><label className="form-label">URL Gambar</label><input type="text" name="img" value={formData.img} onChange={handleChange} className="form-input" required /></div>
            <div><label className="form-label">Ukuran (pisahkan dengan koma)</label><input type="text" name="sizes" value={formData.sizes} onChange={handleChange} className="form-input" required /></div>
            <div>
                <label className="form-label">Koleksi Spesial</label>
                <select name="specialCollection" value={formData.specialCollection} onChange={handleChange} className="form-input">
                    <option value="None">None</option>
                    {Object.keys(collections).map(key => <option key={key} value={key}>{key}</option>)}
                </select>
            </div>
            <div><label className="form-label">Deskripsi</label><textarea name="description" value={formData.description} onChange={handleChange} rows="3" className="form-input" required></textarea></div>
            <button type="submit" className="w-full btn bg-[#6D4C41] hover:bg-[#4E342E] text-white">{product ? 'Simpan Perubahan' : 'Tambah Produk'}</button>
        </form>
    );
};

export default ProductForm;
