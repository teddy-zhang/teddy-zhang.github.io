<?php

  if (isset($_POST['submit'])){
    $firstName = $_POST['firstName'];
    $lastName = $_POST['lastName'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    $mailTo = "teddyaolinezhang@gmail.com";
    $header = "From: ".$email;
    $text = "Message from your website from: ".$firstName." ".$lastName.".
    \nBegin message:
    \n".$message;

    mail($mailTo, "Message from Website", $text, $header);
    header("Location: contact.html?mailsend"); 
  }



?>
