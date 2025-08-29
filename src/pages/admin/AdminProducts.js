import React, { useState } from 'react';
import ProductForm from '../../components/ProductForm';
import { IconEdit, IconTrash, IconX } from '../../assets/icons';

const AdminProducts = ({ products, setProducts, categories, collections }) => {
    const [modalOpen, setModalOpen] = useState(false);
    const [productToEdit, setProductToEdit] = useState(null);

    const openAddProductModal = () => { setProductToEdit(null); setModalOpen(true); };
    const openEditProductModal = (product) => { setProductToEdit(product); setModalOpen(true); };

    const handleProductSubmit = (productData) => {
        if (productToEdit) {
            setProducts(products.map(p => p.id === productToEdit.id ? { ...p, ...productData } : p));
        } else {
            setProducts([...products, { ...productData, id: Date.now() }]);
        }
        setModalOpen(false);
    };

    const deleteProduct = (productId) => { setProducts(products.filter(p => p.id !== productId)); };

    return(
        <div>
            <div className="flex justify-between items-center mb-4">
                <h3 className="font-serif text-2xl font-bold">Kelola Produk</h3>
                <button onClick={openAddProductModal} className="btn bg-[#6D4C41] hover:bg-[#4E342E] text-white !py-2 !px-4 !text-sm">Tambah Produk</button>
            </div>
            <div className="overflow-x-auto">
                <table className="w-full text-left">
                    <thead>
                        <tr className="bg-gray-100"><th className="p-2">Nama</th><th className="p-2">Kategori</th><th className="p-2">Harga</th><th className="p-2">Aksi</th></tr>
                    </thead>
                    <tbody>
                        {products.map(p => (
                            <tr key={p.id} className="border-b"><td className="p-2">{p.name}</td><td className="p-2">{p.category}</td><td className="p-2">IDR {p.price.toLocaleString()}</td><td className="p-2"><div className="flex gap-2"><button onClick={() => openEditProductModal(p)} className="text-blue-500"><IconEdit /></button><button onClick={() => deleteProduct(p.id)} className="text-red-500"><IconTrash /></button></div></td></tr>
                        ))}
                    </tbody>
                </table>
            </div>
             {modalOpen && (<div className="fixed inset-0 bg-black/50 z-[70] flex items-center justify-center"><div className="bg-white rounded-lg shadow-xl p-8 w-full max-w-md text-black"><div className="flex justify-between items-center mb-4"><h3 className="text-2xl font-bold font-serif">{productToEdit ? 'Edit Produk' : 'Tambah Produk Baru'}</h3><button onClick={() => setModalOpen(false)}><IconX /></button></div><ProductForm onSubmit={handleProductSubmit} product={productToEdit} categories={categories} collections={collections} /></div></div>)}
        </div>
    );
};

export default AdminProducts;
