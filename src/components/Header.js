import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CATEGORIES } from '../data/categories';
import { IconChevronDown, IconSearch, IconShoppingBag, IconUser, IconCog } from '../icons';

const Header = ({ onAdminToggle }) => {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    return (
        <header className="bg-white shadow-md sticky top-0 z-50">
            <div className="container mx-auto px-5">
                <div className="flex justify-between items-center py-4">
                    <Link to="/" className="font-serif text-3xl font-bold text-[#6D4C41]">KAZUMI</Link>
                    <nav className="hidden md:flex">
                        <ul className="flex items-center space-x-6">
                            <li><Link to="/" className="nav-link">Home</Link></li>
                            <li className="relative" onMouseEnter={() => setDropdownOpen(true)} onMouseLeave={() => setDropdownOpen(false)}>
                                <span className="nav-link flex items-center gap-2 cursor-pointer">
                                    Shop <IconChevronDown />
                                </span>
                                {dropdownOpen && (
                                    <ul className="absolute left-0 top-full mt-2 w-48 bg-white shadow-lg rounded-md py-2">
                                        {CATEGORIES.map(cat => (
                                            <li key={cat}><Link to={`/category/${cat}`} className="dropdown-link">{cat}</Link></li>
                                        ))}
                                    </ul>
                                )}
                            </li>
                            <li><Link to="/special-collections" className="nav-link">Collections</Link></li>
                            <li><Link to="/custom-order" className="nav-link">Custom Order</Link></li>
                        </ul>
                    </nav>
                    <div className="flex items-center space-x-4">
                        <Link to="/search" className="text-[#6D4C41] hover:text-[#4E342E] transition-colors"><IconSearch /></Link>
                        <Link to="/cart" className="text-[#6D4C41] hover:text-[#4E342E] transition-colors"><IconShoppingBag /></Link>
                        <Link to="/profile" className="text-[#6D4C41] hover:text-[#4E342E] transition-colors"><IconUser /></Link>
                        <button onClick={onAdminToggle} className="admin-btn-header hidden md:flex items-center gap-2 bg-[#6D4C41] text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-[#4E342E] transition-colors">
                            <IconCog /> Admin
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
