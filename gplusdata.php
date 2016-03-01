<?php
include("config/define.php");
$first_name=$_REQUEST['first_name'];
$last_name=$_REQUEST['last_name'];
$gplus_id=$_REQUEST['gplus_id'];

$email = $_REQUEST['email'];

$sql = mysql_query("insert into people (first_name,last_name,email,status,gplus_id) VALUES ('".$first_name."','".$last_name."','".$email."','1','".$gplus_id."')");
//$id=mysqli_insert_id($con);
$id=mysql_insert_id();
if ($sql) {
    echo $id;
}

?>