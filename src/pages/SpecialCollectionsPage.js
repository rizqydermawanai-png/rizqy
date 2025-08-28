import React from 'react';
import SectionTitle from '../components/SectionTitle';

const SpecialCollectionsPage = () => {
     const collections = [
        { name: 'Executive Collection', tag: 'New', img: 'https://images.unsplash.com/photo-1593030103066-0093718efeb9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', description: 'Didesain untuk para profesional modern, koleksi ini menampilkan potongan tajam, kain premium, dan siluet yang tak lekang oleh waktu. Sempurna untuk rapat penting atau acara bisnis.' },
        { name: 'Limited Edition', tag: 'Limited', img: 'https://images.unsplash.com/photo-1505022610485-0249ba5b3675?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', description: 'Sebuah koleksi eksklusif dengan jumlah terbatas. Setiap item dibuat dengan detail unik dan bahan langka, menjadikannya barang kolektor yang istimewa bagi para pencinta fashion.' },
        { name: 'Weekend Wear', tag: 'Casual', img: 'https://images.unsplash.com/photo-1618932260643-eee4a2f652a6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', description: 'Kenyamanan bertemu gaya. Koleksi ini menawarkan pakaian kasual yang santai namun tetap stylish, cocok untuk menemani akhir pekan Anda, dari bersantai di kafe hingga jalan-jalan.' },
    ];
    return (
        <div className="py-20 bg-white">
            <div className="container mx-auto px-5">
                <SectionTitle>Koleksi Spesial Kami</SectionTitle>
                <div className="space-y-16">
                    {collections.map((col, index) => (
                        <div key={col.name} className={`grid md:grid-cols-2 gap-10 items-center ${index % 2 !== 0 ? 'md:grid-flow-col-dense' : ''}`}>
                            <div className={`relative rounded-lg overflow-hidden shadow-lg h-96 ${index % 2 !== 0 ? 'md:col-start-2' : ''}`}>
                                <img src={col.img} alt={col.name} className="w-full h-full object-cover"/>
                            </div>
                            <div className="text-center md:text-left">
                                <span className="bg-[#C9B037] text-[#4E342E] text-xs font-bold uppercase px-2 py-1 rounded-sm self-start mb-2">{col.tag}</span>
                                <h3 className="font-serif text-3xl font-bold my-2 text-[#4E342E]">{col.name}</h3>
                                <p className="text-gray-600">{col.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default SpecialCollectionsPage;
