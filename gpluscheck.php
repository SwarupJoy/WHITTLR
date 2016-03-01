<?php
include("config/define.php");
$email=urldecode($_REQUEST['email']);
$gplusid=$_REQUEST['gplus_id'];

$peoplequery=mysql_query("select * from people where email='".$email."'");
$peoplenum=mysql_num_rows($peoplequery);
if($peoplenum>0)
{
//    echo "1";
    $query=mysql_fetch_array($peoplequery);
//    $return=print_r($query);
 $id=$query['id'];
    if(!empty($id) || $id!=""){
        $update=mysql_query("update people set gplus_id='".$gplusid."' where id='".$id."'");
    }
    echo $id;
}

?>