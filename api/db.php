<?php
// Database configuration for a typical XAMPP setup
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "kazumi_db";

// Create connection
$conn = new mysqli($servername, $username, $password);

// Check connection
if ($conn->connect_error) {
    // In a real production environment, you would log this error and show a generic message.
    // For this local setup, we can die and show the error.
    die("Connection failed: " . $conn->connect_error);
}

// The script can proceed if the connection is successful.
// We will select the database in the scripts that include this file.
// This allows the install script to create the database first.
?>
