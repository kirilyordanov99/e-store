<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

// Include the Composer autoloader for PHPMailer
require 'vendor/autoload.php';

// Check if the request is a POST request
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Read the raw POST data
    $postdata = file_get_contents("php://input");
    $request = json_decode($postdata);

    if ($request === null) {
        echo "Invalid request data.";
        exit;
    }

    $name = htmlspecialchars($request->name);
    $subject = htmlspecialchars($request->subject);
    $message = htmlspecialchars($request->message);
    $userEmail = htmlspecialchars($request->email);

    // Basic email validation
    if (!filter_var($userEmail, FILTER_VALIDATE_EMAIL)) {
        echo "Invalid email format. Please enter a valid email address.";
    } else {
        $mail = new PHPMailer(true);

        try {
            $mail->isSMTP();
            $mail->Host = 'smtp.gmail.com';
            $mail->SMTPAuth = true; // Enable SMTP authentication
            $mail->SMTPSecure = 'tls'; // Use TLS encryption
            $mail->Port = 587; // SMTP port for TLS

            // Disable certificate verification
            $mail->SMTPOptions = [
                'ssl' => [
                    'verify_peer' => false,
                    'verify_peer_name' => false,
                    'allow_self_signed' => true,
                ],
            ];

            // Set your Gmail email address and password
            $mail->Username = 'kirylvt@gmail.com'; // Your Gmail email address
            $mail->Password = 'yayulugdniweujkv'; // Your Gmail password

            $mail->setFrom($userEmail, $name);
            $mail->addAddress('kirylvt@gmail.com'); // Change this to your recipient's email address

            $mail->isHTML(true);
            $mail->Subject = $subject;
            $mail->Body = "Name: $name<br>Subject: $subject<br>Message: $message";

            // Send the email
            if ($mail->send()) {
                // Email sent successfully
                http_response_code(200); // Set HTTP response code to 200
                echo 'Email sent successfully!';
                exit;
            } else {
                echo 'Message could not be sent. Mailer Error: ' . $mail->ErrorInfo;
            }
        } catch (Exception $e) {
            echo 'An error occurred: ' . $e->getMessage();
        }
    }
} else {
    echo "Invalid request.";
}
?>
