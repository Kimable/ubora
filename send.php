<?php 
if(isset($_POST['action'])){
    $name = htmlspecialchars($_POST["name"]);
    $email = htmlspecialchars($_POST["email"]);
    $msg = htmlspecialchars($_POST["message"]);
 

    $to = "info@kkimani.co.ke";
    $body = "";
    

    $body .= "From: ".$name. "\r\n";
    $body .= "Email: ".$email. "\r\n";
    $body .= "Message: ".$msg. "\r\n";

    $headers = "From: Ubora Servives Form <contact@uboraservices.co.ke>". "\r\n";
    $headers .= "Reply-To: ".$name. "<" .$email. ">". "\r\n";

    if(mail($to, $subject, $body, $headers)) {
        header("Location: thanks.html");
    } else{
        header("Location: error.html");
    }
}

?>