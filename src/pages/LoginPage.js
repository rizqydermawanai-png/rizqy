import React, { useState } from 'react';

const LoginPage = ({ setView, handleLogin }) => {
    const [isRegister, setIsRegister] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const name = e.target.name?.value || "Pelanggan Baru";
        handleLogin({ email, name });
        setView('home');
    };

    return (
        <div className="flex items-center justify-center py-20 bg-gray-50">
            <div className="bg-white rounded-lg shadow-xl p-8 w-full max-w-md text-black">
                <h3 className="text-2xl font-bold font-serif text-center mb-6">{isRegister ? 'Daftar Akun Baru' : 'Masuk ke Akun Anda'}</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                    {isRegister && <div><label className="form-label">Nama Lengkap</label><input type="text" name="name" className="form-input" required /></div>}
                    <div><label className="form-label">Alamat Email</label><input type="email" name="email" className="form-input" required /></div>
                    <div><label className="form-label">Kata Sandi</label><input type="password" name="password" className="form-input" required /></div>
                    <button type="submit" className="w-full btn bg-[#6D4C41] hover:bg-[#4E342E] text-white">{isRegister ? 'Daftar' : 'Masuk'}</button>
                </form>
                <p className="text-center text-sm mt-4">
                    {isRegister ? 'Sudah punya akun?' : 'Belum punya akun?'}
                    <button onClick={() => setIsRegister(!isRegister)} className="font-semibold text-[#6D4C41] ml-1">{isRegister ? 'Masuk' : 'Daftar di sini'}</button>
                </p>
            </div>
        </div>
    )
}

export default LoginPage;
