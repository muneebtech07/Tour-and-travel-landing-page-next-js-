<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed']);
    exit();
}

// Get POST data
$data = json_decode(file_get_contents('php://input'), true);

// Validate required fields
$required_fields = ['name', 'email', 'phone'];
foreach ($required_fields as $field) {
    if (empty($data[$field])) {
        http_response_code(400);
        echo json_encode(['error' => "Missing required field: $field"]);
        exit();
    }
}

// Email configuration
$to = 'example@gmail.com'; // Replace with your email
$subject = 'New Tour Booking Request';

// Prepare email content
$message = "
<html>
<head>
    <style>
        body { font-family: Arial, sans-serif; }
        .booking-details { margin: 20px 0; }
        .field { margin: 10px 0; }
        .label { font-weight: bold; }
    </style>
</head>
<body>
    <h2>New Booking Request</h2>
    <div class='booking-details'>
        <div class='field'>
            <span class='label'>Name:</span> {$data['name']}
        </div>
        <div class='field'>
            <span class='label'>Email:</span> {$data['email']}
        </div>
        <div class='field'>
            <span class='label'>Phone:</span> {$data['phone']}
        </div>
        <div class='field'>
            <span class='label'>Package:</span> {$data['package']}
        </div>
        <div class='field'>
            <span class='label'>Travel Date:</span> {$data['date']}
        </div>
        <div class='field'>
            <span class='label'>Adults:</span> {$data['adults']}
        </div>
        <div class='field'>
            <span class='label'>Children:</span> {$data['children']}
        </div>
        <div class='field'>
            <span class='label'>Message:</span><br>
            " . nl2br($data['message']) . "
        </div>
    </div>
</body>
</html>
";

// Email headers
$headers = [
    'MIME-Version: 1.0',
    'Content-type: text/html; charset=utf-8',
    'From: ' . $data['email'],
    'Reply-To: ' . $data['email'],
    'X-Mailer: PHP/' . phpversion()
];

// Send email
$mail_sent = mail($to, $subject, $message, implode("\r\n", $headers));

if ($mail_sent) {
    // Send auto-reply to customer
    $customer_subject = 'Thank you for your booking request - HimalayanMountainSports';
    $customer_message = "
    <html>
    <body>
        <h2>Thank you for your booking request!</h2>
        <p>Dear {$data['name']},</p>
        <p>We have received your booking request for our Kashmir tour package. Our team will review your request and get back to you within 24 hours.</p>
        <p>Your booking details:</p>
        <ul>
            <li>Package: {$data['package']}</li>
            <li>Travel Date: {$data['date']}</li>
            <li>Number of Travelers: {$data['adults']} adults, {$data['children']} children</li>
        </ul>
        <p>Best regards,<br>HimalayanMountainSports</p>
    </body>
    </html>
    ";
    
    $customer_headers = [
        'MIME-Version: 1.0',
        'Content-type: text/html; charset=utf-8',
        'From: HimalayanMoutainSports <booking@example.com>',
        'X-Mailer: PHP/' . phpversion()
    ];
    
    mail($data['email'], $customer_subject, $customer_message, implode("\r\n", $customer_headers));
    
    echo json_encode(['success' => true, 'message' => 'Booking request sent successfully']);
} else {
    http_response_code(500);
    echo json_encode(['error' => 'Failed to send email']);
}
?>