<?php

include("config.php");

function replaceThrash($var)
{
    return addslashes(stripslashes($var));
}
?>