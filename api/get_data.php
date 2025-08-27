<?php
header('Content-Type: application/json');
require 'db.php';

// Select the database
$conn->select_db($dbname);

$response = [
    'products' => [],
    'site_content' => [],
    'discounts' => [],
    'menu_order' => []
];

// Fetch Products
$product_result = $conn->query("SELECT * FROM products");
while ($row = $product_result->fetch_assoc()) {
    // Convert price to integer
    $row['price'] = (int)$row['price'];
    $response['products'][] = $row;
}

// Fetch Site Content
$content_result = $conn->query("SELECT * FROM site_content");
while ($row = $content_result->fetch_assoc()) {
    // JSON decode the content value since it's stored as a JSON string
    $response['site_content'][$row['content_key']] = json_decode($row['content_value']);
}

// Fetch Discounts
$discount_result = $conn->query("SELECT * FROM discounts");
$discounts = [];
while ($row = $discount_result->fetch_assoc()) {
    $discounts[$row['category']] = (int)$row['percentage'];
}
$response['discounts'] = $discounts;


// Fetch Menu Order
$menu_result = $conn->query("SELECT menu_items FROM menu_order ORDER BY id DESC LIMIT 1");
if ($menu_result->num_rows > 0) {
    $menu_row = $menu_result->fetch_assoc();
    $response['menu_order'] = json_decode($menu_row['menu_items']);
}

echo json_encode($response);

$conn->close();
?>
