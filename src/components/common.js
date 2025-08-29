import React from 'react';
import { IconCheckCircle } from '../assets/icons.js';

export const SectionTitle = ({ children }) => (
    <div className="text-center mb-12">
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#4E342E] relative inline-block">
            {children}
            <span className="block w-16 h-1 bg-[#6D4C41] mx-auto mt-4"></span>
        </h2>
    </div>
);

export const FormSuccessMessage = ({ onClose }) => (
    <div className="fixed inset-0 bg-black/50 z-[80] flex items-center justify-center">
        <div className="bg-white rounded-lg shadow-xl p-8 w-full max-w-md text-center">
            <IconCheckCircle className="text-green-500 mx-auto mb-4" />
            <h3 className="text-2xl font-bold font-serif text-gray-800 mb-2">Pemesanan Terkirim!</h3>
            <p className="text-gray-600 mb-6">Terima kasih! Tim kami akan segera menghubungi Anda untuk konfirmasi lebih lanjut.</p>
            <button onClick={onClose} className="btn bg-[#6D4C41] hover:bg-[#4E342E] text-white">Tutup</button>
        </div>
    </div>
);
