import React from 'react';
import { SectionTitle } from '../components/common';
import { IconShirt, IconUsers, IconGooglePlay, IconApple } from '../assets/icons';

const Hero = ({ setView }) => (
    <section id="home" className="relative h-[80vh] bg-cover bg-center text-white flex items-center justify-center text-center" style={{ backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('https://images.unsplash.com/photo-1617137968427-85924c800a22?ixlib=rb-4.0.3&auto=format&fit=crop&w=1770&q=80')" }}>
        <div className="container mx-auto px-5">
            <div className="max-w-3xl mx-auto">
                <h1 className="font-serif text-4xl md:text-5xl font-bold mb-5 shadow-text">ELEVATE YOUR STYLE</h1>
                <p className="text-lg mb-8 shadow-text">Discover the perfect blend of sophistication and modern fashion for the contemporary man</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a href="#" onClick={(e) => { e.preventDefault(); setView('special-collections'); }} className="btn bg-[#6D4C41] hover:bg-[#4E342E]">Explore Collection</a>
                    <a href="#" onClick={(e) => { e.preventDefault(); setView('custom-order'); }} className="btn border-2 border-white hover:bg-white hover:text-[#6D4C41]">Custom Order</a>
                </div>
            </div>
        </div>
    </section>
);

const PopularCategories = ({ products, setView }) => {
    return (
        <section id="categories" className="py-20 bg-[#F5F5F5]">
            <div className="container mx-auto px-5">
                <SectionTitle>Produk Terlaris</SectionTitle>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {products.slice(0, 4).map(prod => (
                        <div key={prod.id} onClick={() => setView('product', prod.id)} className="relative h-72 rounded-lg overflow-hidden shadow-lg group cursor-pointer">
                            <img src={prod.img} alt={prod.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                            <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            <div className="absolute bottom-0 left-0 right-0 bg-[rgba(109,76,65,0.85)] text-white p-4 text-center">
                                <p className="uppercase font-medium tracking-wider">{prod.name}</p>
                                <p className="text-sm">IDR {prod.price.toLocaleString()}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const SpecialCollectionsPreview = ({ setView, collections }) => {
    const collectionsArray = Object.values(collections);
    return (
        <section id="collections" className="py-20 bg-white">
            <div className="container mx-auto px-5">
                <SectionTitle>Koleksi Spesial</SectionTitle>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {collectionsArray.map(col => (
                        <div key={col.name} className="relative h-96 rounded-lg overflow-hidden shadow-lg group">
                            <img src={col.img} alt={col.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                            <div className="absolute inset-0 bg-gradient-to-t from-[rgba(78,52,46,0.8)] to-transparent flex flex-col justify-end p-5 text-white">
                                <span className="bg-[#C9B037] text-[#4E342E] text-xs font-bold uppercase px-2 py-1 rounded-sm self-start mb-2">{col.tag}</span>
                                <h3 className="text-2xl font-semibold">{col.name}</h3>
                            </div>
                        </div>
                    ))}
                </div>
                 <div className="text-center mt-12">
                    <button onClick={() => setView('special-collections')} className="btn bg-[#6D4C41] hover:bg-[#4E342E] text-white">Lihat Semua Koleksi</button>
                </div>
            </div>
        </section>
    );
};

const OrderPreviews = ({ setView }) => (
    <section className="py-20 bg-[#F5F5F5]">
        <div className="container mx-auto px-5 grid md:grid-cols-2 gap-10">
            <div className="text-center bg-white p-8 rounded-lg shadow-lg">
                 <IconShirt className="mx-auto text-[#6D4C41]" />
                 <h3 className="font-serif text-2xl font-bold my-3 text-[#4E342E]">Pesanan Kustom</h3>
                 <p className="text-gray-600 mb-6">Punya ide desain sendiri? Wujudkan pakaian impian Anda bersama desainer kami.</p>
                 <button onClick={() => setView('custom-order')} className="btn bg-[#6D4C41] hover:bg-[#4E342E] text-white">Buat Pesanan Kustom</button>
            </div>
             <div className="text-center bg-white p-8 rounded-lg shadow-lg">
                 <IconUsers className="mx-auto text-[#6D4C41] w-10 h-10" />
                 <h3 className="font-serif text-2xl font-bold my-3 text-[#4E342E]">Pembelian Jumlah Besar</h3>
                 <p className="text-gray-600 mb-6">Solusi pengadaan seragam atau merchandise untuk perusahaan dan komunitas Anda.</p>
                 <button onClick={() => setView('bulk-purchase')} className="btn bg-[#6D4C41] hover:bg-[#4E342E] text-white">Hubungi Tim Bisnis</button>
            </div>
        </div>
    </section>
);


const Promo = ({ promos }) => (
    <section id="promo" className="py-16 bg-[#4E342E] text-white text-center">
        <div className="container mx-auto px-5">
            {promos.length > 0 ? (
                <>
                    <h2 className="font-serif text-4xl font-bold mb-4">{promos[0].title}</h2>
                    <h3 className="text-2xl text-[#C9B037] mb-2">{promos[0].subtitle}</h3>
                    <h2 className="font-serif text-4xl font-bold mb-4">{promos[0].offer}</h2>
                    <p className="mb-6">{promos[0].terms}</p>
                </>
            ) : ( <h2 className="font-serif text-4xl font-bold mb-4">No Active Promos</h2> )}
            <a href="#categories" className="btn bg-[#6D4C41] hover:bg-[#8a6b5d]">Belanja Sekarang</a>
        </div>
    </section>
);

const DownloadApp = () => (
    <section id="download-app" className="py-20 bg-[#F5F5F5] text-center">
        <div className="container mx-auto px-5">
            <SectionTitle>DOWNLOAD APLIKASI</SectionTitle>
            <p className="max-w-2xl mx-auto mb-8">Dapatkan pengalaman berbelanja yang lebih baik dengan aplikasi kami</p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-5">
                <a href="#" className="flex items-center gap-3 bg-[#4E342E] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#6D4C41] transition-colors"><IconGooglePlay /><span>Google Play</span></a>
                <a href="#" className="flex items-center gap-3 bg-[#4E342E] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#6D4C41] transition-colors"><IconApple /><span>App Store</span></a>
            </div>
        </div>
    </section>
);

const HomePage = ({ products, promos, setView, collections }) => {
    return (
        <>
            <Hero setView={setView} />
            <PopularCategories products={products} setView={setView} />
            <SpecialCollectionsPreview setView={setView} collections={collections} />
            <OrderPreviews setView={setView} />
            <Promo promos={promos} />
            <DownloadApp />
        </>
    );
};

export default HomePage;
