<?php

$message = $_POST['message'];
$lastName = $_POST['lastName'];
$firstName = $_POST['firstName'];
$birthDate = $_POST['birthDate'];
$gender = $_POST['gender'];
$mail = $_POST['mail'];
$myMessage = "Nom: ".$lastName."\nPrenom: ".$firstName."\nNe(e) le: ".$birthDate."\nDe sexe: ".$gender."\nEmail: ".$mail."\nMessage: ".$message;

echo "message envoye";
mail('dcl.thibauds@18pixel.fr', 'form de contact', $myMessage, "FROM : ".$mail);
?>