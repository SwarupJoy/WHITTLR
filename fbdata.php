<?php
include("config/define.php");
$first_name=$_REQUEST['first_name'];
$last_name=$_REQUEST['last_name'];
$facebookid=$_REQUEST['fb_id'];

$email = $_REQUEST['fb_email'];

$sql = mysql_query("insert into people (first_name,last_name,email,status,facebook_id) VALUES ('".$first_name."','".$last_name."','".$email."','1','".$facebookid."')");
//$id=mysqli_insert_id($con);
$id=mysql_insert_id();
if ($sql) {
    echo $id;
}

?>