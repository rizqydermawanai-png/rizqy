<?php
header('Content-Type: application/json');
require 'db.php';

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['status' => 'error', 'message' => 'Only POST method is accepted.']);
    exit();
}

$data = json_decode(file_get_contents('php://input'), true);

if (!isset($data['type']) || !isset($data['formData'])) {
    http_response_code(400);
    echo json_encode(['status' => 'error', 'message' => 'Missing "type" or "formData".']);
    exit();
}

$order_type = $data['type'];
$order_data_json = json_encode($data['formData']);

$conn->select_db($dbname);

if ($order_type === 'custom') {
    $stmt = $conn->prepare("INSERT INTO custom_orders (order_data) VALUES (?)");
} elseif ($order_type === 'bulk') {
    $stmt = $conn->prepare("INSERT INTO bulk_orders (order_data) VALUES (?)");
} else {
    http_response_code(400);
    echo json_encode(['status' => 'error', 'message' => 'Invalid order type specified.']);
    exit();
}

$stmt->bind_param("s", $order_data_json);

if ($stmt->execute()) {
    echo json_encode(['status' => 'success', 'message' => 'Order submitted successfully.']);
} else {
    http_response_code(500);
    echo json_encode(['status' => 'error', 'message' => 'Failed to submit order.', 'db_error' => $stmt->error]);
}

$stmt->close();
$conn->close();
?>
