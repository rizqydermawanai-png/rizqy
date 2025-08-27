<?php
header('Content-Type: application/json');
require 'db.php';

// Check if it's a POST request
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405); // Method Not Allowed
    echo json_encode(['status' => 'error', 'message' => 'Only POST method is accepted.']);
    exit();
}

// Get the raw POST data
$json_data = file_get_contents('php://input');
$data = json_decode($json_data, true);

// Basic validation
if (!isset($data['key']) || !isset($data['content'])) {
    http_response_code(400); // Bad Request
    echo json_encode(['status' => 'error', 'message' => 'Missing "key" or "content" in request.']);
    exit();
}

$content_key = $data['key'];
// We need to re-encode the content part to store it as a JSON string in the database
$content_value = json_encode($data['content']);

// Select the database
$conn->select_db($dbname);

// Use prepared statements to prevent SQL injection
// UPDATE...ON DUPLICATE KEY UPDATE is perfect for this key-value table
$stmt = $conn->prepare("INSERT INTO site_content (content_key, content_value) VALUES (?, ?) ON DUPLICATE KEY UPDATE content_value = ?");
$stmt->bind_param("sss", $content_key, $content_value, $content_value);

if ($stmt->execute()) {
    echo json_encode(['status' => 'success', 'message' => "Content '$content_key' updated successfully."]);
} else {
    http_response_code(500); // Internal Server Error
    echo json_encode(['status' => 'error', 'message' => 'Failed to update content.', 'db_error' => $stmt->error]);
}

$stmt->close();
$conn->close();
?>
