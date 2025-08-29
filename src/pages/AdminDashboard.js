import React from 'react';

const AdminDashboard = ({ products, promos }) => (
    <div>
        <h3 className="font-serif text-2xl font-bold mb-4">Dashboard</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-blue-100 p-4 rounded-lg"><h4 className="font-bold">Total Produk</h4><p className="text-2xl">{products.length}</p></div>
            <div className="bg-green-100 p-4 rounded-lg"><h4 className="font-bold">Promo Aktif</h4><p className="text-2xl">{promos.length}</p></div>
            <div className="bg-yellow-100 p-4 rounded-lg"><h4 className="font-bold">Total Pengguna</h4><p className="text-2xl">1 (Admin)</p></div>
        </div>
    </div>
);

export default AdminDashboard;
