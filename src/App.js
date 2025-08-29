import React, { useState } from 'react';

// Data
import { INITIAL_PRODUCTS, CATEGORIES, SPECIAL_COLLECTIONS } from 'data/mockData';

// Components
import Header from 'components/Header';
import Footer from 'components/Footer';
import { FormSuccessMessage } from 'components/common';
import SearchModal from 'components/SearchModal';

// Pages
import HomePage from 'pages/HomePage';
import CategoryPage from 'pages/CategoryPage';
import ProductDetailPage from 'pages/ProductDetailPage';
import SpecialCollectionsPage from 'pages/SpecialCollectionsPage';
import CustomOrderPage from 'pages/CustomOrderPage';
import BulkPurchasePage from 'pages/BulkPurchasePage';
import LoginPage from 'pages/LoginPage';
import CartPage from 'pages/CartPage';
import FittingGuidePage from 'pages/FittingGuidePage';

// Admin Pages
import AdminLayout from 'pages/admin/AdminLayout';
import AdminDashboard from 'pages/admin/AdminDashboard';
import AdminProducts from 'pages/admin/AdminProducts';
import AdminCollections from 'pages/admin/AdminCollections';
import AdminMenu from 'pages/admin/AdminMenu';


export default function App() {
    const [view, setView] = useState({ page: 'home', param: null });
    const [adminView, setAdminView] = useState('dashboard');
    const [modalView, setModalView] = useState(null); // 'search'
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const [products, setProducts] = useState(INITIAL_PRODUCTS);
    // eslint-disable-next-line no-unused-vars
    const [promos, setPromos] = useState([{ id: 1, title: "KAZUMI x BUSINESSWEEK", subtitle: "MONDAY SPECIAL", offer: "BUY 2 GET 30% OFF", terms: "Groups IDR 8.000 dengan min. pembelian IDR 300.000" }]);
    const [cart, setCart] = useState([]);
    const [currentUser, setCurrentUser] = useState(null);
    const [navLinks, setNavLinks] = useState([
        { id: 'home', text: 'Home', view: 'home' },
        { id: 'shop', text: 'Shop', view: 'category', param: 'T-Shirt', dropdown: true },
        { id: 'special-collections', text: 'Collections', view: 'special-collections' },
        { id: 'custom-order', text: 'Custom Order', view: 'custom-order' },
        { id: 'fitting-guide', text: 'Fitting Guide', view: 'fitting-guide' },
    ]);

    const handleSetView = (page, param = null) => {
        setView({ page, param });
        window.scrollTo(0, 0);
    };

    const handleSetAdminView = (page) => {
        setAdminView(page);
    };

    const handleOrderSubmit = () => { setShowSuccessMessage(true); };

    const handleLogin = (user) => { setCurrentUser(user); };
    const handleLogout = () => { setCurrentUser(null); };

    const addToCart = (product, selectedSize) => {
        setCart(prevCart => {
            const existingItem = prevCart.find(item => item.id === product.id && item.selectedSize === selectedSize);
            if (existingItem) {
                return prevCart.map(item =>
                    item.id === product.id && item.selectedSize === selectedSize
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            }
            return [...prevCart, { ...product, selectedSize, quantity: 1 }];
        });
        handleSetView('cart');
    };

    const renderPage = () => {
        const page = view.page;
        if (page.startsWith('admin')) {
             const renderAdminContent = () => {
                switch(adminView) {
                    case 'products': return <AdminProducts products={products} setProducts={setProducts} categories={CATEGORIES} collections={SPECIAL_COLLECTIONS} />;
                    case 'collections': return <AdminCollections products={products} setProducts={setProducts} collections={SPECIAL_COLLECTIONS} />;
                    case 'menu': return <AdminMenu navLinks={navLinks} setNavLinks={setNavLinks} />;
                    case 'dashboard':
                    default:
                        return <AdminDashboard products={products} promos={promos} />;
                }
            };
            return (
                <AdminLayout setView={handleSetView} adminView={adminView} setAdminView={handleSetAdminView}>
                    {renderAdminContent()}
                </AdminLayout>
            );
        }

        switch (page) {
            case 'category': return <CategoryPage category={view.param} products={products} setView={handleSetView} />;
            case 'product': return <ProductDetailPage productId={view.param} products={products} setView={handleSetView} addToCart={addToCart} />;
            case 'special-collections': return <SpecialCollectionsPage products={products} collections={SPECIAL_COLLECTIONS} />;
            case 'custom-order': return <CustomOrderPage onOrderSubmit={handleOrderSubmit} />;
            case 'bulk-purchase': return <BulkPurchasePage onOrderSubmit={handleOrderSubmit} />;
            case 'login': return <LoginPage setView={handleSetView} handleLogin={handleLogin} />;
            case 'cart': return <CartPage cart={cart} setCart={setCart} setView={handleSetView} />;
            case 'fitting-guide': return <FittingGuidePage />;
            case 'home':
            default:
                return (
                    <HomePage products={products} promos={promos} setView={handleSetView} collections={SPECIAL_COLLECTIONS} />
                );
        }
    };

    return (
        <div className="font-sans text-[#333] bg-white">
            <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Montserrat:wght@300;400;500;600;700&display=swap" rel="stylesheet" />

            <Header setView={handleSetView} setModalView={setModalView} cart={cart} currentUser={currentUser} handleLogout={handleLogout} categories={CATEGORIES} navLinks={navLinks} />
            <main>{renderPage()}</main>
            <Footer />
            {showSuccessMessage && <FormSuccessMessage onClose={() => setShowSuccessMessage(false)} />}
            {modalView === 'search' && <SearchModal products={products} setView={handleSetView} setModalView={setModalView} />}
        </div>
    );
}
