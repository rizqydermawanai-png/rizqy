import React, { useState, useEffect, useRef } from 'react';
import ProductForm from './ProductForm';
import { useProducts } from '../../context/ProductContext';
import {
    IconChartBar, IconPlus, IconEdit, IconImage, IconTags,
    IconUsers, IconCog, IconX, IconTrash
} from '../../icons';

const AdminPanel = ({ isOpen, onToggle }) => {
    const { products, setProducts, promos } = useProducts();
    const panelRef = useRef();
    const [currentView, setCurrentView] = useState('stats');
    const [modalOpen, setModalOpen] = useState(false);
    const [productToEdit, setProductToEdit] = useState(null);

    const openAddProductModal = () => { setProductToEdit(null); setModalOpen(true); };
    const openEditProductModal = (product) => { setProductToEdit(product); setModalOpen(true); };

    const handleProductSubmit = (productData) => {
        if (productToEdit) {
            setProducts(products.map(p => p.id === productToEdit.id ? { ...p, ...productData, sizes: productData.sizes.split(',').map(s=>s.trim()) } : p));
        } else {
            setProducts([...products, { ...productData, id: Date.now(), sizes: productData.sizes.split(',').map(s=>s.trim()) }]);
        }
        setModalOpen(false);
    };

    const deleteProduct = (productId) => { setProducts(products.filter(p => p.id !== productId)); };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (isOpen && panelRef.current && !panelRef.current.contains(event.target) && !event.target.closest('.admin-btn-header')) {
                onToggle();
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [isOpen, onToggle]);

    const adminLinks = [
        { id: 'stats', icon: <IconChartBar />, text: "Lihat Statistik" },
        { id: 'add', icon: <IconPlus />, text: "Tambah Produk" },
        { id: 'edit', icon: <IconEdit />, text: "Edit Produk" },
        { id: 'images', icon: <IconImage />, text: "Kelola Gambar" },
        { id: 'promos', icon: <IconTags />, text: "Kelola Promo" },
        { id: 'users', icon: <IconUsers />, text: "Kelola Pengguna" },
        { id: 'settings', icon: <IconCog />, text: "Pengaturan Website" },
    ];

    const renderView = () => {
        switch (currentView) {
            case 'stats': return <div><h4 className="text-lg font-semibold mb-2">Statistik Website</h4><div className="bg-gray-700/50 p-4 rounded-md"><p>Total Produk: <span className="font-bold">{products.length}</span></p><p>Total Promo Aktif: <span className="font-bold">{promos.length}</span></p></div></div>;
            case 'add': return <button onClick={openAddProductModal} className="w-full bg-[#6D4C41] hover:bg-[#8a6b5d] text-white font-bold py-2 px-4 rounded">Tambah Produk Baru</button>;
            case 'edit': return <div><h4 className="text-lg font-semibold mb-2">Edit Produk</h4><div className="space-y-2 max-h-96 overflow-y-auto">{products.map(p => (<div key={p.id} className="flex items-center justify-between bg-gray-700/50 p-2 rounded-md"><span className="truncate">{p.name}</span><div className="flex gap-2"><button onClick={() => openEditProductModal(p)} className="text-blue-400 hover:text-blue-300"><IconEdit /></button><button onClick={() => deleteProduct(p.id)} className="text-red-400 hover:text-red-300"><IconTrash /></button></div></div>))}</div></div>;
            case 'images': return <div><h4 className="text-lg font-semibold mb-2">Galeri Gambar Produk</h4><div className="grid grid-cols-3 gap-2 max-h-96 overflow-y-auto">{products.map(p => <img key={p.id} src={p.img} alt={p.name} className="w-full h-20 object-cover rounded-md"/>)}</div></div>;
            default: return <div><h4 className="text-lg font-semibold mb-2">{adminLinks.find(l=>l.id===currentView)?.text}</h4><p className="text-sm text-gray-400">Fitur ini sedang dalam pengembangan.</p></div>;
        }
    };

    return (
        <>
            <div ref={panelRef} className={`fixed top-0 h-full w-96 bg-[#4E342E] text-white shadow-2xl transition-all duration-300 ease-in-out z-[60] ${isOpen ? 'right-0' : '-right-96'}`}>
                <div className="flex h-full">
                    <div className="w-24 bg-[#442d28] p-2 flex flex-col items-center gap-2"><button onClick={onToggle} className="w-12 h-12 flex items-center justify-center text-xl mb-4"><IconX /></button>{adminLinks.map(link => (<button key={link.id} onClick={() => setCurrentView(link.id)} title={link.text} className={`w-16 h-16 flex items-center justify-center rounded-lg transition-colors ${currentView === link.id ? 'bg-[#6D4C41]' : 'hover:bg-[#6D4C41]/50'}`}>{React.cloneElement(link.icon, { width: 24, height: 24 })}</button>))}</div>
                    <div className="flex-1 p-6"><h3 className="font-serif text-2xl mb-6 pb-2 border-b border-gray-600">Super Admin Panel</h3>{renderView()}</div>
                </div>
            </div>
            {modalOpen && (<div className="fixed inset-0 bg-black/50 z-[70] flex items-center justify-center"><div className="bg-white rounded-lg shadow-xl p-8 w-full max-w-md text-black"><div className="flex justify-between items-center mb-4"><h3 className="text-2xl font-bold font-serif">{productToEdit ? 'Edit Produk' : 'Tambah Produk Baru'}</h3><button onClick={() => setModalOpen(false)}><IconX /></button></div><ProductForm onSubmit={handleProductSubmit} product={productToEdit} /></div></div>)}
        </>
    );
};

export default AdminPanel;
