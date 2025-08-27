<?php
header('Content-Type: application/json');
require 'db.php';

$conn->select_db($dbname);

$method = $_SERVER['REQUEST_METHOD'];

if ($method === 'POST') {
    $data = json_decode(file_get_contents('php://input'), true);
    $action = $data['action'] ?? 'create'; // Default to 'create' if no action is specified

    if ($action === 'create') {
        // --- CREATE a new product ---
        $stmt = $conn->prepare("INSERT INTO products (id, category, name, price, imageUrl, description) VALUES (?, ?, ?, ?, ?, ?)");
        $stmt->bind_param("sssisss", $data['id'], $data['category'], $data['name'], $data['price'], $data['imageUrl'], $data['description']);
        if ($stmt->execute()) {
            echo json_encode(['status' => 'success', 'message' => 'Product created successfully.', 'product' => $data]);
        } else {
            http_response_code(500);
            echo json_encode(['status' => 'error', 'message' => 'Failed to create product.', 'db_error' => $stmt->error]);
        }
        $stmt->close();
    } elseif ($action === 'update') {
        // --- UPDATE an existing product ---
        $stmt = $conn->prepare("UPDATE products SET category = ?, name = ?, price = ?, imageUrl = ?, description = ? WHERE id = ?");
        $stmt->bind_param("ssisss", $data['category'], $data['name'], $data['price'], $data['imageUrl'], $data['description'], $data['id']);
        if ($stmt->execute()) {
            echo json_encode(['status' => 'success', 'message' => 'Product updated successfully.']);
        } else {
            http_response_code(500);
            echo json_encode(['status' => 'error', 'message' => 'Failed to update product.', 'db_error' => $stmt->error]);
        }
        $stmt->close();
    } elseif ($action === 'delete') {
        // --- DELETE a product ---
        $stmt = $conn->prepare("DELETE FROM products WHERE id = ?");
        $stmt->bind_param("s", $data['id']);
        if ($stmt->execute()) {
            echo json_encode(['status' => 'success', 'message' => 'Product deleted successfully.']);
        } else {
            http_response_code(500);
            echo json_encode(['status' => 'error', 'message' => 'Failed to delete product.', 'db_error' => $stmt->error]);
        }
        $stmt->close();
    } else {
        http_response_code(400);
        echo json_encode(['status' => 'error', 'message' => 'Invalid action specified.']);
    }
} elseif ($method === 'GET') {
    // --- READ all products ---
    // Note: get_data.php is the primary way to get products, but this is here for completeness.
    $result = $conn->query("SELECT * FROM products");
    $products = [];
    while ($row = $result->fetch_assoc()) {
        $row['price'] = (int)$row['price'];
        $products[] = $row;
    }
    echo json_encode(['status' => 'success', 'products' => $products]);
} else {
    http_response_code(405); // Method Not Allowed
    echo json_encode(['status' => 'error', 'message' => 'Method not allowed.']);
}

$conn->close();
?>
