import React from 'react';
import { SectionTitle } from '../components/common.js';

const SpecialCollectionsPage = ({ products, collections }) => {
    return (
        <div className="py-20 bg-white">
            <div className="container mx-auto px-5">
                <SectionTitle>Koleksi Spesial Kami</SectionTitle>
                <div className="space-y-16">
                    {Object.entries(collections).map(([key, collection], index) => {
                        const collectionProducts = products.filter(p => p.specialCollection === key);
                        return (
                            <div key={key}>
                                <div className={`grid md:grid-cols-2 gap-10 items-center ${index % 2 !== 0 ? 'md:grid-flow-col-dense' : ''}`}>
                                    <div className={`relative rounded-lg overflow-hidden shadow-lg h-96 ${index % 2 !== 0 ? 'md:col-start-2' : ''}`}>
                                        <img src={collection.img} alt={collection.name} className="w-full h-full object-cover"/>
                                    </div>
                                    <div className="text-center md:text-left">
                                        <span className="bg-[#C9B037] text-[#4E342E] text-xs font-bold uppercase px-2 py-1 rounded-sm self-start mb-2">{collection.tag}</span>
                                        <h3 className="font-serif text-3xl font-bold my-2 text-[#4E342E]">{collection.name}</h3>
                                        <p className="text-gray-600">{collection.description}</p>
                                    </div>
                                </div>
                                <div className="mt-8">
                                    <h4 className="font-semibold text-xl mb-4">Produk di Koleksi Ini:</h4>
                                    {collectionProducts.length > 0 ? (
                                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                            {collectionProducts.map(p => (
                                                <div key={p.id} className="text-center text-sm">
                                                    <img src={p.img} alt={p.name} className="w-full h-48 object-cover rounded-md mb-2" />
                                                    <p className="font-semibold">{p.name}</p>
                                                </div>
                                            ))}
                                        </div>
                                    ) : <p className="text-gray-500">Belum ada produk untuk koleksi ini.</p>}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default SpecialCollectionsPage;
