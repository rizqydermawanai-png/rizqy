import React from 'react';
import { SectionTitle } from '../../components/common';
import { IconChartBar, IconBox, IconCollection, IconTags, IconUsers, IconCog, IconEdit } from '../../assets/icons';


const AdminLayout = ({ children, setView, adminView, setAdminView }) => {
    const adminLinks = [
        { id: 'dashboard', icon: <IconChartBar />, text: "Dashboard" },
        { id: 'products', icon: <IconBox />, text: "Kelola Produk" },
        { id: 'collections', icon: <IconCollection />, text: "Kelola Koleksi" },
        { id: 'promos', icon: <IconTags />, text: "Kelola Promo" },
        { id: 'menu', icon: <IconEdit />, text: "Kelola Menu" },
        { id: 'users', icon: <IconUsers />, text: "Kelola Pengguna" },
        { id: 'settings', icon: <IconCog />, text: "Pengaturan" },
    ];
    return(
        <div className="bg-gray-100 min-h-screen">
            <div className="container mx-auto px-5 py-10">
                <SectionTitle>Super Admin Panel</SectionTitle>
                <div className="flex flex-col md:flex-row gap-8">
                    <aside className="md:w-1/4">
                        <div className="bg-white p-4 rounded-lg shadow-md">
                           <ul className="space-y-2">
                            {adminLinks.map(link => (
                                <li key={link.id}>
                                    <button onClick={() => setAdminView(link.id)} className={`w-full flex items-center gap-3 p-3 rounded-md text-left transition-colors ${adminView === link.id ? 'bg-[#6D4C41] text-white' : 'hover:bg-gray-200'}`}>
                                        {link.icon}
                                        <span>{link.text}</span>
                                    </button>
                                </li>
                            ))}
                           </ul>
                        </div>
                    </aside>
                    <main className="md:w-3/4">
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            {children}
                        </div>
                    </main>
                </div>
            </div>
        </div>
    );
};

export default AdminLayout;
