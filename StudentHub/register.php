<?php
require 'db.php';
header('Content-Type: application/json');

$data = json_decode(file_get_contents("php://input"));

if(isset($data->username) && isset($data->password)) {
    // Hash the password for security
    $hash = password_hash($data->password, PASSWORD_DEFAULT);
    $stmt = $pdo->prepare("INSERT INTO students (first_name, middle_name, last_name, username, password) VALUES (?, ?, ?, ?, ?)");
    
    try {
        $stmt->execute([$data->firstName, $data->middleName, $data->lastName, $data->username, $hash]);
        echo json_encode(["status" => "success", "message" => "Registration successful!"]);
    } catch(PDOException $e) {
        // This will trigger if the username already exists (due to the UNIQUE constraint in the database)
        echo json_encode(["status" => "error", "message" => "Username already exists! Please choose another."]);
    }
} else {
    echo json_encode(["status" => "error", "message" => "Invalid data sent."]);
}
?>