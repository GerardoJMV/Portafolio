<?php
$name = $_POST['name'];
$mail = $_POST['mail'];
$phone = $_POST['phone'];
$message = $_POST['message'];

$header = 'From: ' . $mail . "\r\n"; 
$header .= "X-Mailer: PHP/" . phpversion() . "\r\n";
$header .= "Mine-Version: 1.0 \r\n";
$header .= "Content-type: text/plain";

$message = "Este mensaje fue enviado por: " . $name . "\r\n";
$message .= "Su e-mail es: " . $mail . "\r\n";
$message .= "Telefono de contacto: " . $phone . "\r\n";
$message .= "Mensaje: " . $_POST['Message'] . "\r\n"
$message .= "Enviado el: " . date('d/m/Y', time());

$para = 'gerardojmv6@gmail.com';
$asunto = 'Asunto del mensaje';

mail($para, $asunto, utf8_encode($message), $header);

header("Location:index.html");

?>