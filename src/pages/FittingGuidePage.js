import React, { useState } from 'react';
import { SectionTitle } from '../components/common';
import { IconRuler } from '../assets/icons';

const FittingGuidePage = () => {
    const [height, setHeight] = useState('');
    const [weight, setWeight] = useState('');
    const [recommendation, setRecommendation] = useState(null);

    const calculateSize = () => {
        const h = parseInt(height);
        const w = parseInt(weight);

        if (isNaN(h) || isNaN(w) || h <= 0 || w <= 0) {
            setRecommendation({ error: "Silakan masukkan tinggi dan berat badan yang valid." });
            return;
        }

        let tShirtSize, shirtSize, pantsSize, jacketSize;

        // T-Shirt & Shirt Size Logic
        if (h < 165) {
            tShirtSize = 'S';
            shirtSize = 'S';
        } else if (h >= 165 && h < 175) {
            if (w < 70) {
                tShirtSize = 'M';
                shirtSize = 'M';
            } else {
                tShirtSize = 'L';
                shirtSize = 'L';
            }
        } else if (h >= 175 && h < 185) {
            if (w < 80) {
                tShirtSize = 'L';
                shirtSize = 'L';
            } else {
                tShirtSize = 'XL';
                shirtSize = 'XL';
            }
        } else {
            tShirtSize = 'XL';
            shirtSize = 'XL';
        }

        // Pants Size Logic (in inches)
        if (w < 60) {
            pantsSize = '28-30';
        } else if (w >= 60 && w < 75) {
            pantsSize = '30-32';
        } else if (w >= 75 && w < 90) {
            pantsSize = '33-35';
        } else {
            pantsSize = '36+';
        }

        // Jacket Size Logic
        jacketSize = shirtSize; // Simple mapping for now

        setRecommendation({ tShirtSize, shirtSize, pantsSize, jacketSize, error: null });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        calculateSize();
    };

    return (
        <div className="py-20 bg-white">
            <div className="container mx-auto px-5">
                <SectionTitle>Panduan Ukuran</SectionTitle>
                <div className="max-w-2xl mx-auto">
                    <div className="bg-gray-50 p-8 rounded-lg shadow-md text-center">
                        <IconRuler className="mx-auto text-[#6D4C41]" />
                        <h3 className="font-serif text-2xl font-bold my-3 text-[#4E342E]">Temukan Ukuran Tepat Anda</h3>
                        <p className="text-gray-600 mb-6">Masukkan tinggi dan berat badan Anda untuk mendapatkan rekomendasi ukuran dari kami.</p>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div className="grid md:grid-cols-2 gap-4">
                                <div>
                                    <label className="form-label">Tinggi Badan (cm)</label>
                                    <input type="number" value={height} onChange={e => setHeight(e.target.value)} className="form-input text-center" placeholder="cth: 175" required />
                                </div>
                                <div>
                                    <label className="form-label">Berat Badan (kg)</label>
                                    <input type="number" value={weight} onChange={e => setWeight(e.target.value)} className="form-input text-center" placeholder="cth: 70" required />
                                </div>
                            </div>
                            <button type="submit" className="w-full btn bg-[#6D4C41] hover:bg-[#4E342E] text-white">Dapatkan Rekomendasi</button>
                        </form>
                    </div>

                    {recommendation && (
                        <div className="mt-8 bg-green-50 p-8 rounded-lg shadow-md">
                            {recommendation.error ? (
                                <p className="text-red-600 text-center font-semibold">{recommendation.error}</p>
                            ) : (
                                <div>
                                    <h3 className="font-serif text-2xl font-bold text-center mb-4 text-[#4E342E]">Ukuran yang Direkomendasikan</h3>
                                    <div className="grid grid-cols-2 gap-4 text-center">
                                        <div className="bg-white p-4 rounded-md shadow-sm">
                                            <p className="font-semibold">T-Shirt</p>
                                            <p className="text-2xl font-bold text-[#6D4C41]">{recommendation.tShirtSize}</p>
                                        </div>
                                        <div className="bg-white p-4 rounded-md shadow-sm">
                                            <p className="font-semibold">Kemeja</p>
                                            <p className="text-2xl font-bold text-[#6D4C41]">{recommendation.shirtSize}</p>
                                        </div>
                                        <div className="bg-white p-4 rounded-md shadow-sm">
                                            <p className="font-semibold">Celana</p>
                                            <p className="text-2xl font-bold text-[#6D4C41]">{recommendation.pantsSize}</p>
                                        </div>
                                        <div className="bg-white p-4 rounded-md shadow-sm">
                                            <p className="font-semibold">Jaket</p>
                                            <p className="text-2xl font-bold text-[#6D4C41]">{recommendation.jacketSize}</p>
                                        </div>
                                    </div>
                                    <p className="text-sm text-gray-500 mt-4 text-center">*Rekomendasi ini adalah perkiraan. Ukuran dapat bervariasi tergantung model produk.</p>
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default FittingGuidePage;
