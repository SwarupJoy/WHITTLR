<?php
include("config.php");
function replaceThrash($var)
{
    return addslashes(stripslashes($var));
}
function navigation_message($link,$msg,$mtype)
{
    if($mtype==0)
    {
        $_SESSION["success_message"]= $msg;
    }
    else
    {
        $_SESSION["error_message"]= $msg;
    }
    header("Location:". $link);
}
?>