<?php
include("config/define.php");
$userid = $_REQUEST['userid'];
$add1 = $_REQUEST['add1'];
$add2 = $_REQUEST['add2'];
$city = $_REQUEST['city'];
$state = $_REQUEST['state'];
$zip = $_REQUEST['zip'];
$contact = $_REQUEST['contact'];
echo $add1;die;
$update = mysql_query("update address set(address1=$add1,address2=$add2,$city=city,$state=state,$zip=zip,$contact=phone) where userid=$userid");
if ($update) {
    echo 'success';
}else{
    echo 'failed';
}
?>