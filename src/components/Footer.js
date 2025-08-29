import React from 'react';
import { IconPhone, IconEnvelope, IconMapMarker, IconInstagram, IconFacebook, IconTwitter, IconYoutube } from '../assets/icons.js';

const Footer = () => {
    const footerLinks = {
        "INFORMASI KAMI": ["Tentang KAZUMI", "Sejarah Perusahaan", "Karir", "Ketentuan Kebijakan", "Lokasi Store", "Blog"],
        "BANTUAN": ["FAQ", "Kebijakan Pengembalian", "Click & Collect", "Pengiriman", "Pembayaran"],
        "KATEGORI PRODUK": ["T-Shirt", "Shirt", "Pants", "Jacket", "Accessories", "Sale"],
    };

    return (
        <footer id="contact" className="bg-[#4E342E] text-white pt-16 pb-8">
            <div className="container mx-auto px-5">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
                    {Object.entries(footerLinks).map(([title, links]) => (
                        <div key={title}>
                            <h3 className="font-serif text-lg font-semibold mb-4 relative pb-2 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-8 after:h-0.5 after:bg-[#C9B037]">{title}</h3>
                            <ul className="space-y-2">{links.map(link => <li key={link}><a href="#" className="text-[#D7CCC8] hover:text-white transition-colors">{link}</a></li>)}</ul>
                        </div>
                    ))}
                    <div>
                        <h3 className="font-serif text-lg font-semibold mb-4 relative pb-2 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-8 after:h-0.5 after:bg-[#C9B037]">HUBUNGI KAMI</h3>
                        <ul className="space-y-3 text-[#D7CCC8]">
                            <li className="flex items-center gap-3"><IconPhone /> +62 21 1234 5678</li>
                            <li className="flex items-center gap-3"><IconEnvelope /> info@kazumi.com</li>
                            <li className="flex items-center gap-3"><IconMapMarker /> Jl. Fashion No. 123, Jakarta</li>
                        </ul>
                        <div className="flex gap-4 mt-6">
                            <a href="#" className="social-icon"><IconInstagram /></a><a href="#" className="social-icon"><IconFacebook /></a><a href="#" className="social-icon"><IconTwitter /></a><a href="#" className="social-icon"><IconYoutube /></a>
                        </div>
                    </div>
                </div>
                <div className="text-center pt-8 border-t border-white/10 text-sm text-[#D7CCC8]"><p>&copy; {new Date().getFullYear()} KAZUMI. All Rights Reserved.</p></div>
            </div>
        </footer>
    );
};

export default Footer;
