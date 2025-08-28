import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Context
import { ProductProvider } from './context/ProductContext';
import { CartProvider } from './context/CartContext';

// Styles
import './styles/App.css';

// Components
import Header from './components/Header';
import Footer from './components/Footer';
import AdminPanel from './components/admin/AdminPanel';
import FormSuccessMessage from './components/FormSuccessMessage';

// Pages
import HomePage from './pages/HomePage';
import CategoryPage from './pages/CategoryPage';
import ProductDetailPage from './pages/ProductDetailPage';
import SpecialCollectionsPage from './pages/SpecialCollectionsPage';
import CustomOrderPage from './pages/CustomOrderPage';
import BulkPurchasePage from './pages/BulkPurchasePage';
import CartPage from './pages/CartPage';

// --- MAIN APP COMPONENT ---
function AppContent() {
    const [isAdminPanelOpen, setIsAdminPanelOpen] = useState(false);
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);

    const handleOrderSubmit = () => {
        setShowSuccessMessage(true);
    };

    return (
        <Router>
            <div className="font-sans text-[#333] bg-white">
                <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Montserrat:wght@300;400;500;600;700&display=swap" rel="stylesheet" />

                <Header onAdminToggle={() => setIsAdminPanelOpen(!isAdminPanelOpen)} />
                <main>
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/category/:categoryName" element={<CategoryPage />} />
                        <Route path="/product/:productId" element={<ProductDetailPage />} />
                        <Route path="/special-collections" element={<SpecialCollectionsPage />} />
                        <Route path="/custom-order" element={<CustomOrderPage onOrderSubmit={handleOrderSubmit} />} />
                        <Route path="/bulk-purchase" element={<BulkPurchasePage onOrderSubmit={handleOrderSubmit} />} />
                        <Route path="/cart" element={<CartPage />} />
                    </Routes>
                </main>
                <Footer />
                <AdminPanel isOpen={isAdminPanelOpen} onToggle={() => setIsAdminPanelOpen(!isAdminPanelOpen)} />
                {showSuccessMessage && <FormSuccessMessage onClose={() => setShowSuccessMessage(false)} />}
            </div>
        </Router>
    );
}

export default function App() {
    return (
        <ProductProvider>
            <CartProvider>
                <AppContent />
            </CartProvider>
        </ProductProvider>
    );
}
