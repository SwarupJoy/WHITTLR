<?php
include("config/define.php");
$email = $_REQUEST['email'];
$password = $_REQUEST['password'];
$epassword = md5($password);
$query = mysql_query("select * from people where email='" . $email . "' and status=1");
$num_rows = mysql_num_rows($query);
if ($num_rows > 0) {
    $row = mysql_fetch_array($query);
    $p=$row['password'];
    if($p==$epassword)
    {
        $id=$row['id'];
       echo $id;
    }

}

?>