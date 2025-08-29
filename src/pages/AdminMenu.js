import React, { useState } from 'react';
import { IconEdit, IconTrash } from '../assets/icons';

const AdminMenu = ({ navLinks, setNavLinks }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [currentLink, setCurrentLink] = useState({ id: '', text: '', view: '', param: '' });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setCurrentLink(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isEditing) {
            setNavLinks(navLinks.map(link => link.id === currentLink.id ? currentLink : link));
        } else {
            setNavLinks([...navLinks, { ...currentLink, id: Date.now().toString() }]);
        }
        resetForm();
    };

    const editLink = (link) => {
        setIsEditing(true);
        setCurrentLink(link);
    };

    const deleteLink = (id) => {
        setNavLinks(navLinks.filter(link => link.id !== id));
    };

    const resetForm = () => {
        setIsEditing(false);
        setCurrentLink({ id: '', text: '', view: '', param: '' });
    };

    return (
        <div>
            <h3 className="font-serif text-2xl font-bold mb-4">Kelola Menu Navigasi</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                    <h4 className="font-semibold mb-2">{isEditing ? 'Edit Link' : 'Tambah Link Baru'}</h4>
                    <form onSubmit={handleSubmit} className="space-y-3 bg-gray-50 p-4 rounded-md">
                        <div><label className="form-label">Teks Link</label><input type="text" name="text" value={currentLink.text} onChange={handleInputChange} className="form-input" required /></div>
                        <div><label className="form-label">View Tujuan</label><input type="text" name="view" value={currentLink.view} onChange={handleInputChange} className="form-input" placeholder="cth: category" required /></div>
                        <div><label className="form-label">Parameter (Opsional)</label><input type="text" name="param" value={currentLink.param} onChange={handleInputChange} className="form-input" placeholder="cth: T-Shirt" /></div>
                        <div className="flex gap-2">
                            <button type="submit" className="btn bg-[#6D4C41] hover:bg-[#4E342E] text-white !py-2">{isEditing ? 'Simpan Perubahan' : 'Tambah Link'}</button>
                            {isEditing && <button type="button" onClick={resetForm} className="btn bg-gray-300 hover:bg-gray-400 text-black !py-2">Batal</button>}
                        </div>
                    </form>
                </div>
                <div>
                    <h4 className="font-semibold mb-2">Urutan Menu Saat Ini</h4>
                    <ul className="space-y-2">
                        {navLinks.map(link => (
                            <li key={link.id} className="flex items-center justify-between bg-white p-2 rounded-md shadow-sm">
                                <span>{link.text} <span className="text-xs text-gray-500">({link.view})</span></span>
                                <div className="flex gap-2">
                                    <button onClick={() => editLink(link)} className="text-blue-600 hover:text-blue-800 p-1"><IconEdit /></button>
                                    <button onClick={() => deleteLink(link.id)} className="text-red-600 hover:text-red-800 p-1"><IconTrash /></button>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default AdminMenu;
