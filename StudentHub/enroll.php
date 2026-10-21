<?php
// Check if the form was submitted via POST
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    
    // Retrieve and sanitize the form data
    $studentName = htmlspecialchars(trim($_POST['studentName']));
    $studentId = htmlspecialchars(trim($_POST['studentId']));
    $eventSelect = htmlspecialchars(trim($_POST['eventSelect']));

    // Verify that the fields are not empty
    if (!empty($studentName) && !empty($studentId) && !empty($eventSelect)) {
        
        $filename = 'enrolls.csv';
        $fileExists = file_exists($filename);
        
        // Open the CSV file in append mode ('a')
        $file = fopen($filename, 'a');
        
        if ($file) {
            // If the file is newly created, add column headers first
            if (!$fileExists) {
                fputcsv($file, ['Student Name', 'Student ID', 'Event Name', 'Enrollment Date']);
            }
            
            // Create the data array to be appended
            $timestamp = date("Y-m-d H:i:s");
            $formData = [$studentName, $studentId, $eventSelect, $timestamp];
            
            // Write the array to the CSV
            fputcsv($file, $formData);
            
            // Close the file
            fclose($file);
            
            // Show a success message and redirect back to the main page
            echo "<script>
                    alert('Success! $studentName has been enrolled in $eventSelect.');
                    window.location.href = 'mainpage.html';
                  </script>";
            exit();
        } else {
            echo "Error: Unable to open the file. Please check folder permissions.";
        }
    } else {
        echo "<script>
                alert('Error: All fields are required.');
                window.history.back();
              </script>";
    }
} else {
    // If someone tries to access enroll.php directly via URL, redirect them to the form
    header("Location: enroll.html");
    exit();
}
?>