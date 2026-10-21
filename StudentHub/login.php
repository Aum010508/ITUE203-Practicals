<?php
require 'db.php';
header('Content-Type: application/json');

$data = json_decode(file_get_contents("php://input"));

if(isset($data->username) && isset($data->password)) {
    // Find the user by their username
    $stmt = $pdo->prepare("SELECT * FROM students WHERE username = ?");
    $stmt->execute([$data->username]);
    $user = $stmt->fetch();

    // Check if user exists and if the provided password matches the hashed password
    if ($user && password_verify($data->password, $user['password'])) {
        echo json_encode(["status" => "success", "name" => $user['first_name']]);
    } else {
        echo json_encode(["status" => "error", "message" => "Incorrect username or password!"]);
    }
} else {
    echo json_encode(["status" => "error", "message" => "Invalid data sent."]);
}
?>