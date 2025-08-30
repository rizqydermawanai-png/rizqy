// KAZUMI Cart System

// Function to get the cart from localStorage
function getCart() {
    return JSON.parse(localStorage.getItem('kazumiCart')) || [];
}

// Function to save the cart to localStorage
function saveCart(cart) {
    localStorage.setItem('kazumiCart', JSON.stringify(cart));
    updateCartIcon();
}

// Function to add an item to the cart
function addToCart(productId, name, price, image, size) {
    const cart = getCart();

    // Check if the item with the same ID and size already exists
    const existingItem = cart.find(item => item.productId === productId && item.size === size);

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ productId, name, price, image, size, quantity: 1 });
    }

    saveCart(cart);
    alert(`"${name} (${size})" has been added to your cart.`);
}

// Function to update the cart icon with the number of items
function updateCartIcon() {
    const cart = getCart();
    const cartIcon = document.getElementById('cart-icon-badge');
    if (cartIcon) {
        const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
        if (totalItems > 0) {
            cartIcon.textContent = totalItems;
            cartIcon.classList.remove('hidden');
        } else {
            cartIcon.classList.add('hidden');
        }
    }
}

// Initial call to set the cart icon state when a page loads
document.addEventListener('DOMContentLoaded', () => {
    updateCartIcon();
});
