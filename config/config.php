<?php
session_start();
$servername = "localhost";
$username = "root";
$password = "AONDna1213AOD913";
// Create connection
$con = mysql_connect($servername, $username, $password);
$db_selected = mysql_select_db('chrome', $con);

define("SITEURL","https://aldenteapp.com/chrome/");
// Check connection
if (!$db_selected) {
    echo "PROBLEM";
    die;
}

?>