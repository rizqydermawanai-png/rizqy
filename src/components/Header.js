import React, { useState } from 'react';
import { IconChevronDown, IconSearch, IconShoppingBag, IconUser, IconCog, IconLogout } from '../assets/icons';

const Header = ({ setView, setModalView, cart, currentUser, handleLogout, categories }) => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const cartItemCount = cart.reduce((sum, item) => sum + item.quantity, 0);

    const handleNav = (e, view, param) => {
        e.preventDefault();
        setView(view, param);
    };

    return (
        <header className="bg-white shadow-md sticky top-0 z-50">
            <div className="container mx-auto px-5">
                <div className="flex justify-between items-center py-4">
                    <a href="#" onClick={(e) => handleNav(e, 'home')} className="font-serif text-3xl font-bold text-[#6D4C41]">KAZUMI</a>
                    <nav className="hidden md:flex">
                        <ul className="flex items-center space-x-6">
                            <li><a href="#" onClick={(e) => handleNav(e, 'home')} className="nav-link">Home</a></li>
                            <li className="relative" onMouseEnter={() => setDropdownOpen(true)} onMouseLeave={() => setDropdownOpen(false)}>
                                <a href="#" onClick={(e) => e.preventDefault()} className="nav-link flex items-center gap-2">
                                    Shop <IconChevronDown />
                                </a>
                                {dropdownOpen && (
                                    <ul className="absolute left-0 top-full mt-2 w-48 bg-white shadow-lg rounded-md py-2">
                                        {categories.map(cat => (
                                            <li key={cat}><a href="#" onClick={(e) => handleNav(e, 'category', cat)} className="dropdown-link">{cat}</a></li>
                                        ))}
                                    </ul>
                                )}
                            </li>
                            <li><a href="#" onClick={(e) => handleNav(e, 'special-collections')} className="nav-link">Collections</a></li>
                            <li><a href="#" onClick={(e) => handleNav(e, 'custom-order')} className="nav-link">Custom Order</a></li>
                        </ul>
                    </nav>
                    <div className="flex items-center space-x-4">
                        <button onClick={() => setModalView('search')} className="text-[#6D4C41] hover:text-[#4E342E] transition-colors"><IconSearch /></button>
                        <a href="#" onClick={(e) => handleNav(e, 'cart')} className="relative text-[#6D4C41] hover:text-[#4E342E] transition-colors">
                            <IconShoppingBag />
                            {cartItemCount > 0 && <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">{cartItemCount}</span>}
                        </a>
                        {currentUser ? (
                             <div className="relative group">
                                <span className="text-[#6D4C41] cursor-pointer font-semibold">{currentUser.name.split(' ')[0]}</span>
                                <div className="absolute top-full right-0 mt-2 w-48 bg-white shadow-lg rounded-md py-2 opacity-0 group-hover:opacity-100 transition-opacity invisible group-hover:visible">
                                     <a href="#" className="dropdown-link">Profil Saya</a>
                                     <a href="#" className="dropdown-link">Pesanan Saya</a>
                                     <button onClick={handleLogout} className="w-full text-left dropdown-link flex items-center gap-2 text-red-600"><IconLogout /> Keluar</button>
                                </div>
                            </div>
                        ) : (
                           <a href="#" onClick={(e) => handleNav(e, 'login')} className="text-[#6D4C41] hover:text-[#4E342E] transition-colors"><IconUser /></a>
                        )}
                        <a href="#" onClick={(e) => handleNav(e, 'admin')} className="admin-btn-header hidden md:flex items-center gap-2 bg-[#6D4C41] text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-[#4E342E] transition-colors">
                            <IconCog /> Admin
                        </a>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
