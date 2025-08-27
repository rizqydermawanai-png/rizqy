<?php
header('Content-Type: application/json');
require 'db.php';

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['status' => 'error', 'message' => 'Only POST method is accepted.']);
    exit();
}

$data = json_decode(file_get_contents('php://input'), true);

if (!isset($data['category']) || !isset($data['percentage'])) {
    http_response_code(400);
    echo json_encode(['status' => 'error', 'message' => 'Missing "category" or "percentage".']);
    exit();
}

$category = $data['category'];
$percentage = (int)$data['percentage'];

$conn->select_db($dbname);

if ($percentage > 0) {
    // Insert or update the discount
    $stmt = $conn->prepare("INSERT INTO discounts (category, percentage) VALUES (?, ?) ON DUPLICATE KEY UPDATE percentage = ?");
    $stmt->bind_param("sii", $category, $percentage, $percentage);
} else {
    // Remove the discount if percentage is 0
    $stmt = $conn->prepare("DELETE FROM discounts WHERE category = ?");
    $stmt->bind_param("s", $category);
}

if ($stmt->execute()) {
    echo json_encode(['status' => 'success', 'message' => "Discount for category '$category' processed."]);
} else {
    http_response_code(500);
    echo json_encode(['status' => 'error', 'message' => 'Failed to process discount.', 'db_error' => $stmt->error]);
}

$stmt->close();
$conn->close();
?>
