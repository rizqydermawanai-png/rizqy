<?php
header('Content-Type: application/json');
require 'db.php';

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['status' => 'error', 'message' => 'Only POST method is accepted.']);
    exit();
}

$data = json_decode(file_get_contents('php://input'), true);

if (!isset($data['menu_items']) || !is_array($data['menu_items'])) {
    http_response_code(400);
    echo json_encode(['status' => 'error', 'message' => 'Invalid or missing "menu_items" array.']);
    exit();
}

// We store the entire menu order as a single JSON string in one row.
// This is simpler than managing individual items for this use case.
// We'll just overwrite the last entry.
$menu_json = json_encode($data['menu_items']);

$conn->select_db($dbname);

// For simplicity, we just insert a new row every time.
// The frontend will always fetch the latest one (ORDER BY id DESC LIMIT 1).
// An alternative would be to UPDATE the existing row.
$stmt = $conn->prepare("INSERT INTO menu_order (menu_items) VALUES (?)");
$stmt->bind_param("s", $menu_json);


if ($stmt->execute()) {
    echo json_encode(['status' => 'success', 'message' => 'Menu order updated successfully.']);
} else {
    http_response_code(500);
    echo json_encode(['status' => 'error', 'message' => 'Failed to update menu order.', 'db_error' => $stmt->error]);
}

$stmt->close();
$conn->close();
?>
