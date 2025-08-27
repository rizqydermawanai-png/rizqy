<?php
// This script sets up the database and tables for the KAZUMI web application.
// Run this script once from your browser after setting up XAMPP.
// e.g., http://localhost/your_project_folder/install.php

header('Content-Type: text/plain');

// Include the database connection configuration
// Note: We are in the root, so the path is 'api/db.php'
require 'api/db.php';

echo "--- KAZUMI Database Installation --- \n\n";

// --- Step 1: Create Database ---
$db_sql = "CREATE DATABASE IF NOT EXISTS $dbname";
if ($conn->query($db_sql) === TRUE) {
    echo "[SUCCESS] Database '$dbname' created or already exists.\n";
} else {
    die("[ERROR] Creating database: " . $conn->error . "\n");
}

// Select the database
$conn->select_db($dbname);
echo "[INFO] Selected database '$dbname'.\n";

// --- Step 2: Create Tables ---

// Products Table
$products_table_sql = "
CREATE TABLE IF NOT EXISTS products (
    id VARCHAR(255) PRIMARY KEY,
    category VARCHAR(50) NOT NULL,
    name VARCHAR(255) NOT NULL,
    price INT NOT NULL,
    imageUrl TEXT NOT NULL,
    description TEXT NOT NULL
)";
if ($conn->query($products_table_sql) === TRUE) {
    echo "[SUCCESS] Table 'products' created or already exists.\n";
} else {
    die("[ERROR] Creating 'products' table: " . $conn->error . "\n");
}

// Site Content Table (Key-Value Store)
$content_table_sql = "
CREATE TABLE IF NOT EXISTS site_content (
    content_key VARCHAR(255) PRIMARY KEY,
    content_value TEXT NOT NULL
)";
if ($conn->query($content_table_sql) === TRUE) {
    echo "[SUCCESS] Table 'site_content' created or already exists.\n";
} else {
    die("[ERROR] Creating 'site_content' table: " . $conn->error . "\n");
}

// Menu Order Table
$menu_table_sql = "
CREATE TABLE IF NOT EXISTS menu_order (
    id INT AUTO_INCREMENT PRIMARY KEY,
    menu_items TEXT NOT NULL
)";
if ($conn->query($menu_table_sql) === TRUE) {
    echo "[SUCCESS] Table 'menu_order' created or already exists.\n";
} else {
    die("[ERROR] Creating 'menu_order' table: " . $conn->error . "\n");
}

// Discounts Table
$discounts_table_sql = "
CREATE TABLE IF NOT EXISTS discounts (
    category VARCHAR(255) PRIMARY KEY,
    percentage INT NOT NULL
)";
if ($conn->query($discounts_table_sql) === TRUE) {
    echo "[SUCCESS] Table 'discounts' created or already exists.\n";
} else {
    die("[ERROR] Creating 'discounts' table: " . $conn->error . "\n");
}

// Custom Orders Table
$custom_orders_sql = "
CREATE TABLE IF NOT EXISTS custom_orders (
    id INT AUTO_INCREMENT PRIMARY KEY,
    order_data TEXT NOT NULL,
    submitted_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)";
if ($conn->query($custom_orders_sql) === TRUE) {
    echo "[SUCCESS] Table 'custom_orders' created or already exists.\n";
} else {
    die("[ERROR] Creating 'custom_orders' table: " . $conn->error . "\n");
}

// Bulk Orders Table
$bulk_orders_sql = "
CREATE TABLE IF NOT EXISTS bulk_orders (
    id INT AUTO_INCREMENT PRIMARY KEY,
    order_data TEXT NOT NULL,
    submitted_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)";
if ($conn->query($bulk_orders_sql) === TRUE) {
    echo "[SUCCESS] Table 'bulk_orders' created or already exists.\n";
} else {
    die("[ERROR] Creating 'bulk_orders' table: " . $conn->error . "\n");
}


// --- Step 3: Populate Tables with Default Data ---

// Clear existing data to prevent duplicates on re-run
$conn->query("TRUNCATE TABLE products");
$conn->query("TRUNCATE TABLE site_content");
$conn->query("TRUNCATE TABLE menu_order");
echo "[INFO] Cleared existing data from tables.\n";

// Default Product Data
$defaultProducts = [
    ['tshirt-01', 't-shirts', 'Classic Black T-Shirt', 150000, 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=500&q=60', 'Kaos hitam klasik yang terbuat dari katun berkualitas tinggi, nyaman dipakai sehari-hari.'],
    ['tshirt-02', 't-shirts', 'Plain White T-Shirt', 150000, 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&w=500&q=60', 'Kaos putih polos yang esensial untuk setiap lemari pakaian, terbuat dari bahan yang lembut dan adem.'],
    ['tshirt-03', 't-shirts', 'Olive Green T-Shirt', 175000, 'https://images.unsplash.com/photo-1622470953794-34505b3db690?auto=format&fit=crop&w=500&q=60', 'Kaos berwarna hijau olive yang stylish, cocok untuk tampilan kasual.'],
    ['tshirt-04', 't-shirts', 'Graphic Print T-Shirt', 200000, 'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&w=500&q=60', 'Kaos dengan desain grafis unik, menambah sentuhan modern pada gaya Anda.'],
    ['shirt-01', 'shirts', 'White Formal Shirt', 350000, 'https://images.unsplash.com/photo-1598032895397-b9472444bf93?auto=format&fit=crop&w=500&q=60', 'Kemeja formal putih klasik yang terbuat dari bahan katun premium. Sempurna untuk acara bisnis dan formal.'],
    ['shirt-02', 'shirts', 'Blue Oxford Shirt', 375000, 'https://images.unsplash.com/photo-1601422407622-2cc4e5b2b3cb?auto=format&fit=crop&w=500&q=60', 'Kemeja Oxford biru yang nyaman dan serbaguna, cocok untuk gaya kasual maupun semi-formal.'],
    ['pants-01', 'pants', 'Slim-Fit Chinos', 450000, 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=500&q=60', 'Celana chinos slim-fit yang nyaman dan stylish, cocok untuk berbagai kesempatan.'],
    ['pants-02', 'pants', 'Classic Denim Jeans', 550000, 'https://images.unsplash.com/photo-1602233158242-3ba0ac4d2167?auto=format&fit=crop&w=500&q=60', 'Celana jeans denim klasik yang tahan lama dan serbaguna.'],
    ['jacket-01', 'jackets', 'Denim Jacket', 750000, 'https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?auto=format&fit=crop&w=500&q=60', 'Jaket denim klasik yang tak lekang oleh waktu, cocok untuk gaya kasual.'],
    ['jacket-02', 'jackets', 'Leather Biker Jacket', 1250000, 'https://images.unsplash.com/photo-1591942523329-87e433a1796b?auto=format&fit=crop&w=500&q=60', 'Jaket biker kulit yang stylish dan tangguh, memberikan kesan edgy.'],
];

$stmt = $conn->prepare("INSERT INTO products (id, category, name, price, imageUrl, description) VALUES (?, ?, ?, ?, ?, ?)");
foreach ($defaultProducts as $p) {
    $stmt->bind_param("sssisss", $p[0], $p[1], $p[2], $p[3], $p[4], $p[5]);
    $stmt->execute();
}
echo "[SUCCESS] Inserted " . count($defaultProducts) . " default products.\n";


// Default Site Content
$defaultContent = [
    'hero' => json_encode([
        'heading' => 'ELEVATE YOUR STYLE',
        'paragraph' => 'Discover the perfect blend of sophistication and modern fashion for the contemporary man',
        'image' => 'https://images.unsplash.com/photo-1617137968427-85924c800a22?ixlib=rb-4.0.3&auto=format&fit=crop&w=1770&q=80'
    ]),
    'promo' => json_encode([
        'title' => 'Penawaran Spesial Minggu Ini!',
        'description' => 'Dalam rangka kolaborasi eksklusif kami dengan BUSINESSWEEK, nikmati promo terbatas untuk gaya Anda!',
        'image' => 'https://images.unsplash.com/photo-1523878288860-fd508837778e?auto=format&fit=crop&w=200&q=80',
        'item1' => ['title' => 'Monday Special', 'desc' => 'Diskon 30% untuk pembelian 2 item'],
        'item2' => ['title' => 'Cashback', 'desc' => 'IDR 8.000 dengan min. pembelian IDR 300.000']
    ]),
    'specialCollections' => json_encode([
        ['img' => 'https://images.unsplash.com/photo-1593030103066-0093718efeb9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', 'tag' => 'New', 'title' => 'Executive Collection', 'link' => 'shirts'],
        ['img' => 'https://images.unsplash.com/photo-1505022610485-0249ba5b3675?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', 'tag' => 'Limited', 'title' => 'Limited Edition', 'link' => 'jackets'],
        ['img' => 'https://images.unsplash.com/photo-1618932260643-eee4a2f652a6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', 'tag' => 'Casual', 'title' => 'Weekend Wear', 'link' => 't-shirts']
    ])
];

$stmt_content = $conn->prepare("INSERT INTO site_content (content_key, content_value) VALUES (?, ?)");
foreach ($defaultContent as $key => $value) {
    $stmt_content->bind_param("ss", $key, $value);
    $stmt_content->execute();
}
echo "[SUCCESS] Inserted default site content (hero, promo, collections).\n";

// Default Menu Order
$defaultMenu = json_encode(['home', 'shop', 'special-collection', 'custom-order-section', 'bulk-purchase-section', 'fitting']);
$stmt_menu = $conn->prepare("INSERT INTO menu_order (menu_items) VALUES (?)");
$stmt_menu->bind_param("s", $defaultMenu);
$stmt_menu->execute();
echo "[SUCCESS] Inserted default menu order.\n";

echo "\n--- Installation Complete! --- \n";
echo "You can now delete this 'install.php' file and access the main 'index.html' page.\n";

$stmt->close();
$stmt_content->close();
$stmt_menu->close();
$conn->close();
?>
