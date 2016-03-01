<?php
session_start();
$servername = "localhost";
$username = "lab3";
$password = "Aniket123321";
// Create connection
$con = mysqli_connect($servername, $username, $password,'chrome_extension');

define("SITEURL","http://esolz.co.in/lab3/chrome/");
// Check connection
if (!$con) {
    echo "PROBLEM";
    die;
}

?>