import React from 'react';

const AdminCollections = ({ products, setProducts, collections }) => {
    const handleCollectionChange = (productId, collection) => {
        setProducts(products.map(p => p.id === productId ? { ...p, specialCollection: collection === "None" ? null : collection } : p));
    };

    return(
         <div>
            <h3 className="font-serif text-2xl font-bold mb-4">Kelola Koleksi Spesial</h3>
            <div className="overflow-x-auto">
                <table className="w-full text-left">
                    <thead>
                        <tr className="bg-gray-100"><th className="p-2">Nama Produk</th><th className="p-2">Koleksi Saat Ini</th><th className="p-2">Ganti Koleksi</th></tr>
                    </thead>
                    <tbody>
                        {products.map(p => (
                            <tr key={p.id} className="border-b">
                                <td className="p-2">{p.name}</td>
                                <td className="p-2">{p.specialCollection || 'Tidak ada'}</td>
                                <td className="p-2">
                                     <select value={p.specialCollection || "None"} onChange={(e) => handleCollectionChange(p.id, e.target.value)} className="form-input !mt-0 !text-sm !py-1">
                                         <option>None</option>
                                         {Object.keys(collections).map(key => <option key={key} value={key}>{key}</option>)}
                                     </select>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AdminCollections;
